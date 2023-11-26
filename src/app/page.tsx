import style from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
export default function Home() {
  return (
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
            <p className={style.active}>ABOUT</p>
            <p>EXPERIENCE</p>
            <p>PROJECT</p>
          </div>
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
        <div className={style.about}>
          <p>
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I&apos;ve had the privilege
            of building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation.
          </p>
          <p>
            My main focus these days is building products and leading projects
            for our clients at Upstatement. In my free time I&apos;ve also
            released an online video course that covers everything you need to
            know to build a web app with the Spotify API.
          </p>
          <p>
            When I&apos;m not at the computer, I&apos;m usually rock climbing,
            hanging out with my wife and two cats, or running around Hyrule
            searching for Korok seeds K o r o k s e e d s .
          </p>
        </div>
      </aside>
    </main>
  );
}
