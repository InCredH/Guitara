import React from 'react'
import Header from "../../components/Header";
import Feature from "../../components/Feature";
import About from "../../components/About";
import exercises_vid from "../../video/exercises_vid.mp4";

const Home = () => {
  return (
	<div>
		<Header />
        <Feature />
        <About
              video={exercises_vid}
              title="Joyful Moments Together"
              button="Community"
            />
	</div>
  )
}

export default Home