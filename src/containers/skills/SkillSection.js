// SkillSection.js

import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import artisanImage from "../../assests/images/artisan_ui.jpg";

function GetSkillMedia(props) {
  const { fileName, theme, videoLink } = props;

  if (videoLink) {
    // If a videoLink is provided, embed the video using iframe
    return (
      <div className="skills-video">
        <iframe
          src={videoLink}
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        ></iframe>
      </div>
    );
  } else if (fileName === "DataScienceImg") {
    return <DataScienceImg theme={theme} />;
  } else if (fileName === "FullStackImg") {
    return <FullStackImg theme={theme} />;
  } else if (fileName === "CloudInfraImg") {
    return <CloudInfraImg theme={theme} />;
  } else if (fileName === "DesignImg") {
    return <DesignImg theme={theme} />;
  } else if (fileName === "artisan_ui.jpg") {
    return (
      <img
        src={artisanImage}
        alt="Artisan UI"
        className="skills-image"
        style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
      />
    );
  } else {
    return null; // Handle any other cases if necessary
  }
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillMedia
                    fileName={skill.fileName}
                    theme={theme}
                    videoLink={skill.videoLink}
                  />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, index) => {
                      return (
                        <p
                          key={index}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;

