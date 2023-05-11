import React from "react";
import Reviews from "../../Components/Reviews/Reviews";
import Team from "../../Components/Team/Team";

const About = () => {
  return (
    <div>
      <Team />
      <div className="flex items-center justify-center h-60">
        <a
          target="_blank"
          href="https://loking.notion.site/DevHive-7ca1031b36ec4906af789c670f6cc454"
        >
          <button className="btn btn-xl btn-primary  mr-2">
            Visit The Documentation
          </button>
        </a>
        <a target="_blank" href="https://hasanshahriar32.github.io/devhive">
          <button className="btn btn-xl btn-secondary btn-outline">
            Proposal
          </button>
        </a>
      </div>
      <Reviews></Reviews>
    </div>
  );
};

export default About;
