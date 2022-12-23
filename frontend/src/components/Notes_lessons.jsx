import React from "react";
import "../pages/Notes-lessons/Notes_lessons.css";
// import "../pages/Lessons-landing-page/lessons.css";
import image from "../images/Notes_p.png";
import { useState, useEffect } from "react";

// import note_image from "../images/lessons-landing-note.svg";

function Notes() {
  const [para, setPara] = useState([{}]);
  const [title, setTitle] = useState([{}]);

  const getBlog = async () => {
    // const user = await JSON.parse(localStorage.getItem("guitaraUser"));
    // if (!user) {
    //   alert("Please Login first !");
    //   navigate("/login");
    //   return;
    // }

    // Fetching all posts
    await fetch("http://localhost:8800/api/getblog", {
      // headers: {
      //   Authorization: user.access_token,
      // },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setPara(result.paras);
        // console.log(para)
        setTitle(result.headings);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBlog();
    // console.log(para)
  }, []);

  return (
    <div className="orange-body">
      <div className="white-body">
        <h1>5 Guitar scales that'll boost your guitar skills</h1>
        <div className="intro">
        {para.map((param) =>{
          // <h2> {paramas} </h2>
          console.log(param);
          return (
            <div className="web_top">
              <h3 className="web_shit" align = "justify">{param.body}</h3>
            </div>
          ) 
        }
      )}
          {/* <p>{para[0].body}</p> */}
          <br />
          {/* <p>{para[5].body}</p> */}

        </div>
      </div>
    </div>
  );
}

export default Notes;
