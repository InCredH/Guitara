import React, { useEffect, useState } from "react";
import "./profile_landing.css";
import { useNavigate } from "react-router-dom";
import avatar from "../../images/avatar.svg";


const SERVER_URL = process.env.REACT_APP_API_URL;

export default function profile_landing () {
  const user = localStorage.getItem("guitaraUser");
  const obj = JSON.parse(user)
  var guitaraUser;
  var [likes, setLikes] = useState(1);
  // var [user, setUser] = useState(null);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const deleteItem = async () =>{
    fetch(`http://localhost:8800/api/community/postdelete`, {
      method: "DELETE",
    })
    .catch((err) => console.log(err))
  }
  
  function postId(id){
    console.log(id);
  } 
  function changecColor() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle"); 
    setLikes(++likes)
    // element.classList.toggle("fa fa-heart"); 
    // element.classList.toggle("far fa-heart"); 
  }

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  
  function editDetails(){

  }

  const likePost = (id) =>{
    fetch("http://localhost:8800/api/community/like", {
      method: "put",
      headers:{
        "Content-Type" : "application/json",
        "Authorization": "Bearer " + localStorage.getItem("guitaraUser")
      },
      body: JSON.stringify({
        postId: id
      })
    }).then(res => res.json())
      .then(result =>{
        const newData = data.map(item =>{
          if(item.id == result._id){
            return result
          }
          else{
              return item;
          }
        })
        setData(newData)
    }).catch(err =>{
      console.log(err)
    })
  }

  const unlikePost = (id) =>{
    fetch("http://localhost:8800/api/community/unlike", {
      method: "put",
      headers:{
        "Content-Type" : "application/json",
        "Authorization": "Bearer " + localStorage.getItem("guitaraUser")
      },
      body: JSON.stringify({
        postId: id
      })
    }).then(res => res.json())
      .then(result =>{
        // console.log(result)
        const newData = data.map(item =>{
          if(item.id == result._id){
            return result
          }
          else{
              return item;
          }
        })
        setData(newData)
    }).catch(err =>{
      console.log(err)
    })
  }

  const getPosts = async () => {
    const user = await JSON.parse(localStorage.getItem("guitaraUser"));
    guitaraUser = user.userName;
    
    if (!user) {
      alert("Please Login first !");
      navigate("/login");
      return;
    }
    
    // Fetching all posts
    fetch("http://localhost:8800/api/community/profileposts", {
      headers: {
        Authorization: user.access_token,
      },
    })
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));

    console.log(data)
  };

  useEffect(() => {
    getPosts();
  }, []);
  
  return (
    <div className="home">
      <div className="user">
        <div className="userImage">
          <img src={avatar} />
        </div>
        <div className="details">
          <h3>{obj.userName}</h3>
          <a onClick = {editDetails} href="#">edit profile</a>
        </div>
      </div>
      <h1>Posts : </h1>
      
      {data.map((posts) => {
        return (
          <div className="card">
            {/* card header */}
            <div className="card-header">
              <div className="card-pic">
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <h5>{capitalizeFirstLetter(posts.postedBy.userName)}</h5>
              <button id="post-btn" className = 'delete' onClick={deleteItem}>Delete post</button>
            </div>
            {/* card image */}
            <div className="card-image">
              <video src={posts.photo} onClick = {postId(posts._id)} alt="" controls/>
            </div>

            {/* card content */}
            <div className="card-content">
            {
              posts.likes.includes(obj.userId)
                ?<p><i class="fa fa-heart" onClick={() =>likePost(posts._id)}></i> {likes}</p>
                : <p><i class="fa fa-heart new" onClick={() => unlikePost(posts._id)}></i> {likes}</p>
            }
            
              <p>{posts.body} </p>
            </div>

            {/* add Comment */}
            <div className="add-comment">
              <span className="material-symbols-outlined">mood</span>
              <input type="text" placeholder="Add a comment" />
              <button className="comment">Post</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
