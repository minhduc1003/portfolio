"use client"
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
export default function Home() {
  const [scroll, setScroll] = useState<any>(0)
  const [active, setActive] = useState({
    about: true,
    experience: false,
    project: false
  })
  const handleScroll = () => {
    setScroll(window.scrollY)
    if (scroll >= 0 && scroll < 330) {
      setActive({
        about: true,
        experience: false,
        project: false
      })
    } else {
      if (scroll >= 330 && scroll < 1160) {
        setActive({
          about: false,
          experience: true,
          project: false
        })
      } else {
        setActive({
          about: false,
          experience: false,
          project: true
        })
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    console.log(scroll);
    () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scroll])
  // 400 1400
  return (
    <>
      <main className={style.main}>
        <aside className={style.leftSide}>
          <div className={style.textWrapper}>
            <div className={style.textHeader}>
              <h1>Minh Duc</h1>
              <h3>Front-End and Back-End Engineer</h3>
              <p>
                I build exceptional and accessible digital experiences for the
                web.
              </p>
            </div>
            <div className={style.nav}>
              <a href="#about" className={active.about ? style.active : ""}>ABOUT</a>
              <a href="#experience" className={active.experience ? style.active : ""}>EXPERIENCE</a>
              <a href="#project" className={active.project ? style.active : ""}>PROJECT</a>
            </div>
            <a className="category btn-download " href="vuminhduc.pdf" download="Vũ Minh Đức.pdf">Download My CV</a>
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
              Hi there! Duc is my name, and I&apos;m currently 20 years old.
              I started learning the fundamentals of web two years ago since
              I always liked technology and I wanted to learn about web development.
              As of right moment, I have two years of FE and BE knowledge.
            </p>
            <p>
              These days, learning to construct mining set code and gaining experience
              from someone else are my key priorities.I work on projects every day to
              broaden my experience.
            </p>
            <p>
              I like to run around Dieu Hoa Lake or play football while I&apos;m not at the computer.
              I adore playing first-person shooter games with my friend in my free time.
            </p>
          </div>
          <div id="experience">
            {
              exp.map((exp, i) => (
                <ExperienceItem exp={exp} key={i} />
              ))
            }
          </div>
          <div id="project">
            {project
              .map((item, i) => (
                <ProjectItem item={item} key={i} />
              ))}
          </div>
        </aside>
      </main>
    </>
  );
}
