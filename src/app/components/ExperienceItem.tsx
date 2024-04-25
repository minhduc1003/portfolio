import Category from "./Category";
import style from "../page.module.css";
import { IExp } from "../experience";
const ExperienceItem = ({ exp }: { exp: IExp }) => {
  return (
    <div className={`${style.item} ${style.disable}`}>
      <div className={style.itemLeft}>
        <p>{exp.time}</p>
      </div>
      <div className={style.itemRight}>
        <div className={style.itemRightTitle}>
          <h3>{exp.title}</h3>
        </div>
        <p>{exp.desc}</p>
        <div className={style.list}>
          {exp.categories.map((cate) => (
            <Category key={cate.id} cate={cate}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
