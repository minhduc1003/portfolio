import Image from "next/image";
import style from "../page.module.css";
import Category from "./Category";
const ProjectItem = () => {
  return (
    <div className={style.item}>
      <div className={style.itemLeft}>
        <Image
          src="https://hatrabbits.com/wp-content/uploads/2017/01/random-word-1.jpg"
          width={120}
          height={65}
          alt="Picture of the author"
          style={{ border: "2px solid #808da2", borderRadius: "5px" }}
        />
      </div>
      <div className={style.itemRight}>
        <div className={style.itemRightTitle}>
          <h3>sạhgdas</h3>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
        </div>
        <p>
          jasbdjasbdsajbdsjhasbdjhasbdjhsabdhjsbahjsdbahsadsadasdasdasghdasjsdbgajkdbshjbashjgbjsdbahjdbashjb
        </p>
        <div className={style.list}>
          <Category></Category>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
