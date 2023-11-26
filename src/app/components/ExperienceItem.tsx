import Category from "./Category";
import style from "../page.module.css";
const ExperienceItem = () => {
  return (
    <div className={style.item}>
      <div className={style.itemLeft}>
        <p>2020-2022</p>
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

export default ExperienceItem;
