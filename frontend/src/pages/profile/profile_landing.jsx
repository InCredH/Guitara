import React, { useEffect, useState } from "react";
import "./profile_landing.css";
import { useNavigate } from "react-router-dom";
import avatar from "../../images/avatar.svg";
// import Likes from "./Likes";

const SERVER_URL = process.env.REACT_APP_API_URL;

export default function profile_landing () {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const user = localStorage.getItem("guitaraUser");
  const obj = JSON.parse(user);
  console.log(obj);
  var guitaraUser;
  var [likes, setLikes] = useState(1);
  // var [user, setUser] = useState(null);

  
  // document.getElementById("hellobutton").addEventListener("click", likePost);

  const deleteItem = async (id) =>{
    console.log(id);
    const user = await JSON.parse(localStorage.getItem("guitaraUser"));
    fetch(`http://localhost:8800/api/community/postdelete/` + id, {
      method: "DELETE",
      headers: {
        Authorization: user.access_token,
        userId:user.userId
      },
    }).then(res=>res.json())
      .then(result=>{
        console.log(result)
        window.location.reload();
      })
      .catch((err) => console.log(err))

  }

  const likePost = (id) =>{
    try {
      fetch("http://localhost:8800/api/community/likes/" + id, {
        method: "put",
        headers:{
          "Content-Type" : "application/json",
          "Authorization": obj.access_token
        },
      }).then(res => res.json())
        .then(Result =>{
          const result = Result.posts;
          setData(result)
      }).catch(err =>{
        console.log(err)
      })
    }catch(e) {
      console.log(e);
    }
   
  }


  const getPosts = async () => {
    const user = await JSON.parse(localStorage.getItem("guitaraUser"));
    // console.log(user)
    // guitaraUser = user.userName;
    
    if (!user) {
      alert("Please Login first !");
      navigate("/login");
      return;
    }
    
    // Fetching all posts
    fetch("http://localhost:8800/api/community/profileposts", {
      headers: {
        Authorization: user.access_token,
        userId:user.userId
      },
    })
      .then((res) => res.json())
      .then((result) => {setData(result)})
      .catch((err) => console.log(err));

    // console.log(data)
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
          <button><a href="#">Edit Profile</a></button>
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
              <h5>{(posts.postedBy.userName)}</h5>
              <button id="post-btn" className = 'delete' onClick={() =>{deleteItem(posts._id)}}>Delete post</button>
            </div>
            {/* card image */}
            <div className="card-image">
              <video src={posts.photo} alt="" controls/>
            </div>

            {/* card content */}
            <div className="card-content">
              
              {
                <p><i class="fa fa-heart new" onClick={() => {likePost(posts._id)}}>  <span> {posts.likes.length}</span></i></p>
              }

              <p>{posts.body} </p>
            </div>

            
            <div className="add-comment">
              <span className="material-symbols-outlined">mood</span>
              <input type="text" placeholder="Add a comment" />
              <button className="comment">Comment</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
