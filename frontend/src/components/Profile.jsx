// import React, { useEffect, useState } from "react";
// import "../pages/Community/community_home.css";
// import { useNavigate } from "react-router-dom";

// const API_URL = process.env.REACT_APP_API_URL;

// export default function profile_landing () {
  
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
  
//   const getPosts = async () => {
//     const user = await JSON.parse(localStorage.getItem("guitaraUser"));
//     if (!user) {
//       alert("Please Login first !");
//       navigate("/login");
//       return;
//     }

//     // Fetching all posts
//     fetch("http://localhost:8800/api/community/profileposts", {
//       headers: {
//         Authorization: user.access_token,
//       },
//     })
//       .then((res) => res.json())
//       .then((result) => setData(result))
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     getPosts();
//   }, []);
  
//   return (
//     <div className="home">
//       {/* card */}
//       {data.map((posts) => {
//         return (
//           <div className="card">
//             {/* card header */}
//             <div className="card-header">
//               <div className="card-pic">
//                 <img
//                   src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//                   alt=""
//                 />
//               </div>
//               <h5>{posts.postedBy.userName}</h5>
//             </div>
//             {/* card image */}
//             <div className="card-image">
//               <img src={posts.photo} alt="" />
//             </div>

//             {/* card content */}
//             <div className="card-content">
//               <span className="material-symbols-outlined">favorite</span>
//               <p>1 Like</p>
//               <p>{posts.body} </p>
//             </div>

//             {/* add Comment */}
//             <div className="add-comment">
//               <span className="material-symbols-outlined">mood</span>
//               <input type="text" placeholder="Add a comment" />
//               <button className="comment">Post</button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
