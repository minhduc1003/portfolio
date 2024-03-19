"use client";
import style from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";
import { useEffect, useState } from "react";
import { exp } from "./experience";
import { project } from "./project";
import axios from "axios";
import DetailProject from "./components/DetailProject";
import { faL } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const [scroll, setScroll] = useState<number>(0);
  const [countClick, setCountClick] = useState<number>(0);
  const [receiveData, setReceiveData] = useState<any>();
  const [active, setActive] = useState({
    about: true,
    experience: false,
    project: false,
  });
  const handleScroll = () => {
    setScroll(window.scrollY);
    if (scroll >= 0 && scroll < 334) {
      setActive({
        about: true,
        experience: false,
        project: false,
      });
    }
    if (scroll >= 334 && scroll < 1149) {
      setActive({
        about: false,
        experience: true,
        project: false,
      });
    }
    if (scroll > 1149) {
      setActive({
        about: false,
        experience: false,
        project: true,
      });
    }
  };
  const receiveId = (item: number) => {
    setReceiveData(item);
    setCountClick(() => countClick + 1);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(scroll);
    console.log(active);
    () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  return (
    <>
      <main className={style.main}>
        <aside className={style.leftSide}>
          <div className={style.textWrapper}>
            <div className={style.textHeader}>
              <h1>Minh Duc</h1>
              <h3>Front-End and Back-End Engineer</h3>
              <p>I build exceptional and accessible experiences for the web.</p>
            </div>
            <div className={style.nav}>
              <a href="#about" className={active.about ? style.active : ""}>
                ABOUT
              </a>
              <a
                href="#experience"
                className={active.experience ? style.active : ""}
              >
                EXPERIENCE
              </a>
              <a href="#project" className={active.project ? style.active : ""}>
                PROJECT
              </a>
            </div>
            <a
              className="category btn-download "
              href="Vũ Minh Đức.pdf"
              download="Vũ Minh Đức.pdf"
            >
              Download My CV
            </a>
          </div>
          <div className={style.linkIcon}>
            <a href="">
              <FontAwesomeIcon icon={faGithub} color="#808da2" size="xl" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faEnvelope} color="#808da2" size="xl" />
            </a>
          </div>
        </aside>
        <aside className={style.rightSide}>
          <div id="about" className={style.about}>
            <p>
              Hi there! Duc is my name, and I&apos;m currently 20 years old. I
              started learning the fundamentals of the web two years ago because
              I liked technology. I wanted to learn about web development. At
              the moment, I have a lot of experience in both front-end and
              back-end knowledge
            </p>
            <p>
              These days, my key priorities are learning to construct mining set
              code and gaining experience from others. I work on projects every
              day to broaden my experience.
            </p>
          </div>
          <div id="experience">
            {exp.map((exp, i) => (
              <ExperienceItem exp={exp} key={i} />
            ))}
          </div>
          <div id="project">
            {project.map((item, i) => (
              <ProjectItem sentData={receiveId} item={item} key={i} />
            ))}
          </div>
        </aside>
        <DetailProject receiveData={receiveData} count={countClick} />
      </main>
    </>
  );
}
