import { ICategories } from "./experience";

export interface IProject {
  id: number;
  image: string;
  title: string;
  descFE?: string;
  descBE?: string;
  desc?: string;
  subDesc?: string;
  linkWeb: string;
  linkGit: string;
  categories: ICategories[];
}
export const project: IProject[] = [
  {
    id: 1,
    image: "https://i.ibb.co/4VbBTHT/image.png",
    title: "Social Projects",
    descFE: "",
    descBE: "",
    subDesc:"Web to create for communication and post a posts to friend see it. ",
    linkWeb: "",
    linkGit: "https://github.com/minhduc1003/crowFunding",
    categories: [
      {
        id: 1,
        name: "ReactJs",
      },
      {
        id: 2,
        name: "NodeJs",
      },
    ],
  },  
  {
    id: 2,
    image: "https://i.ibb.co/fHZ7gTS/blog.png",
    title: "Blog Website",
    desc: "",
    subDesc:"Web blogs are created for authors to share information, knowledge, opinions and experiences with readers. ",
    linkWeb: "",
    linkGit: "https://github.com/minhduc1003/Blogs",
    categories: [
      {
        id: 1,
        name: "Angular",
      },
      {
        id: 2,
        name: "ASP.NET",
      },
    ],
  },
  {
    id: 3,
    image: "https://i.ibb.co/4VbBTHT/image.png",
    title: "CrowFunding",
    descFE: "",
    descBE: "",
    subDesc:"Web to create donations campaigns. ",
    linkWeb: "",
    linkGit: "https://github.com/minhduc1003/crowFunding",
    categories: [
      {
        id: 1,
        name: "ReactJs",
      },
      {
        id: 2,
        name: "NodeJs",
      },
    ],
  },
  {
    id: 4,
    image: "https://i.ibb.co/xjK0JGW/image.png",
    title: "Movie web",
    desc: "",
    subDesc: "Watch currently available movies. ",
    linkWeb: "",
    linkGit: "https://github.com/minhduc1003/movie-app",
    categories: [
      {
        id: 1,
        name: "ReactJs",
      },
      {
        id: 2,
        name: "NodeJs",
      },
    ],
  },
];
