import React from "react";
import Header from "../../components/Header";
import Feature from "../../components/Feature";
import CommunityCard from "../../components/community_card";
import exercises_vid from "../../video/exercises_vid.mp4";

const Home = () => {
  return (
    <div>
      <Header />
      <Feature />
      <CommunityCard
        video={exercises_vid}
        title="Joyful Moments Together"
        button="Community"
      />
    </div>
  );
};

export default Home;
