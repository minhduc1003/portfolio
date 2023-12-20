import Image from "next/image";
import style from "../page.module.css";
import Category from "./Category";
import { IProject } from "../project";
const ProjectItem = ({ item }: { item: IProject }) => {
  return (
    <div className={style.item}>
      <div className={style.itemLeft}>
        <Image
          src={item.image || "https://i.ibb.co/fYYdYSG/server.jpg"}
          width={120}
          height={65}
          alt="Picture of the author"
          style={{ border: "2px solid #808da2", borderRadius: "5px" }}
        />
      </div>
      <div className={style.itemRight}>
        <div className={style.itemRightTitle}>
          <h3>{item.title}</h3>
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
          {item.desc}
        </p>
        <div className={style.list}>
          {
            item.categories.map(cate => (
              <Category key={cate.id} cate={cate} ></Category>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
