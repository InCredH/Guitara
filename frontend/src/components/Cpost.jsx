import React, { useState, useEffect } from "react";
import "../pages/Createpost/cpost.css";
import { useNavigate } from "react-router-dom";


const SERVER_URL = process.env.REACT_APP_API_URL;

export default function Createpost() {
  const [body, setBody] = useState("");
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")
  const navigate = useNavigate()
  
  // Toast functions

const createPost=async()=>{
  
console.log(url)
    if (url) {
      const guitaraUser= localStorage.getItem("guitaraUser");
      const User=await JSON.parse(guitaraUser);
      console.log(User.token)
      fetch('http://localhost:8800/api/community/createPost', {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization":  User.token,
        },
        body: JSON.stringify({
          body,
          pic: url
        })
      }).then(res => res.json())
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            alert("success!")
            navigate("/")
          }
        })
        .catch(err => console.log(err))
    }
}

  useEffect(() => {
     createPost()// saving post to mongodb
  }, [url])


  // posting image to cloudinary
//   const uploadImage = e => {
//     console.log(e);
//     // const files = e.target.files[0];
//     // const data = new FormData()
//     // data.append("file", image)
//     // data.append("upload_preset", "guitaradb")
//     // data.append("cloud_name", "guitara")
//   }


  const postDetails = async () => {

    console.log(body, image)
    const data = new FormData()
    data.append("upload_preset", "guitaradb")
    data.append("file", image)
    data.append("cloud_name", "guitara")
    
    // axios.post("https://api.cloudinary.com/v1_1/guitara/image/upload", data)
    // // .then(res => res.json())
    // .then(data => setUrl(data.URL))
    // .catch(err => console.log(err))

    fetch("https://api.cloudinary.com/v1_1/guitara/video/upload", {
      method: "post",
      body: data
    }).then(async (res) => {
      const response = await res.json();
      setUrl(response.url);
    })
      .catch(err => console.log(err))
    // for (var pair of data.entries()) {
    //     console.log(pair); 
    // }
  }

  useEffect(() =>{
    console.log(image)
  },[image])

  const loadfile = (event) => {
    var output = document.getElementById("output");
    console.log(output)
    console.log(event)
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };
  return (
    <div className="background-post">
        <div className="createPost">
        {/* //header */}
        <div className="post-header">
            <h4 style={{ margin: "3px auto" }}>Create New Post</h4>
            <button id="post-btn" onClick={() => { postDetails() }}>Share</button>
        </div>
        {/* image preview */}
        <div className="main-div">
            <img
            id="output"
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
            />
            <input
            type="file"
            name="file"
            accept="video/*"
            onChange={(event) => {
                loadfile(event);
                setImage(event.target.files[0])
            }}
            />
        </div>
        {/* details */}
        <div className="details">
            <div className="card-header">
            <div className="card-pic">
                <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                />
            </div>
            <h5>Ayush</h5>
            </div>
            <textarea value={body} onChange={(e) => {
            setBody(e.target.value)
            }} type="text" placeholder="Write a caption...."></textarea>
        </div>
        </div>
    </div>
    
  );
}
