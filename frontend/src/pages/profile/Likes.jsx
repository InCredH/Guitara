// import React, { useState } from "react";

// export default function Likes(props){
//     const {data, post, user} = props.body;
//     const [data1, setData] = useState(data)
//     const unlikePost = (postid) =>{
//         fetch("http://localhost:8800/api/community/unlike", {
//           method: "put",
//           headers:{
//             "Content-Type" : "application/json",
//             "Authorization": "Bearer " + localStorage.getItem("guitaraUser")
//           },
//           body: JSON.stringify({
//             postId: postid
//           })
//         }).then(res => res.json())
//           .then(result =>{
//             // console.log(result)
//             const newData = data1.map(item =>{
//               if(item.id == result._id){
//                 return result;
//               }
//               else{
//                   return item;
//               }
//             })
//             setData(newData)
//         }).catch(err =>{
//           console.log(err)
//         })
//       }

//       const likePost = (postid) =>{
//         fetch("http://localhost:8800/api/community/like", {
//           method: "put",
//           headers:{
//             "Content-Type" : "application/json",
//             "Authorization": "Bearer " + localStorage.getItem("guitaraUser")
//           },
//           body: JSON.stringify({
//             postId: postid
//           })
//         }).then(res => res.json())
//           .then(result =>{
//             const newData = data1.map(item =>{
//               if(item.id == result._id){
//                 return result
//               }
//               else{
//                   return item;
//               }
//             })
//             setData(newData)
//         }).catch(err =>{
//           console.log(err)
//         })
//       }
        
//     return (
//         <>
//         {
//             post.likes.includes(user.id)
//             ?<button><i class="fa fa-heart" onClick={() =>likePost(post._id)}></i> {post.likes.length}</button>
//             :<button><i class="fa fa-heart new" onClick={() => unlikePost(post._id)}></i> {post.likes.length}</button>
//         }
//         </>
//     );
// }