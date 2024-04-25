import { useEffect, useRef, useState } from "react";
import style from "../page.module.css";
import { IProject, project } from "../project";
import Category from "./Category";
import useClickOutside from "../hooks/useClickOutSide";
import Image from "next/image";

const DetailProject = ({
  receiveData,
  count,
}: {
  receiveData: any;
  count: number;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => {
    document
      .querySelector(`.${style.detailProject}`)
      ?.classList.add(style.inActive);
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 200);
  });
  useEffect(() => {
    if (receiveData) {
      setIsOpen(true);
    }
  }, [receiveData, count]);
  return (
    <>
      {isOpen && (
        <div ref={ref} className={style.detailProject}>
          <div className={style.close}>
            <svg
              onClick={() => {
                document
                  .querySelector(`.${style.detailProject}`)
                  ?.classList.add(style.inActive);
                setTimeout(() => {
                  setIsOpen(!isOpen);
                }, 200);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </svg>
          </div>
          <div className={style.imageWrapper}>
            <Image
              alt="image"
              src={receiveData?.image}
              width={100}
              height={100}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h2 className={style.title}>{receiveData?.title}</h2>
          <div className={style.list} style={{ marginTop: "15px" }}>
            {receiveData?.categories.map((cate: any) => (
              <Category key={cate.id} cate={cate}></Category>
            ))}
            <p>{receiveData?.descFE}</p>
            <p>{receiveData?.descBE}</p>
            {receiveData?.linkGit.map((item: any, i: number) => (
              <div className={style.link} key={i}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    id="github"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
                  </svg>
                </span>
                <div>
                  <h3>{item.name}</h3>
                  <a href={item.link} target="_blank">
                    {item.link}
                  </a>
                </div>
              </div>
            ))}
            {receiveData?.linkWeb.map((item: any, i: number) => (
              <div className={style.link} key={i}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={style.web}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                    />
                  </svg>
                </span>
                <div>
                  <h3>{item.name}</h3>
                  <a href={item.link} target="_blank">
                    {item.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailProject;
