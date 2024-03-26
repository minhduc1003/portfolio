import { ICategories } from "./experience";

export interface IProject {
  id: number;
  image: string;
  title: string;
  descFE?: string;
  descBE?: string;
  subDesc: string;
  linkWeb: string;
  linkGit: string[];
  categories: ICategories[];
}
export const project: IProject[] = [
  {
    id: 1,
    image: "/social.png",
    title: "Social Projects",
    descFE:
      "Fe use redux for storing data when fetching data from backend and socketIo to communicate real time to backend, many custom hooks.",
    descBE:
      "Be use JWT to authenticate, CRUD posts share comment like posts, add friend and use socketIo to communicate. Deploying by docker in linux server.",
    subDesc:
      "Web to create for communication and post a posts to friend see it. ",
    linkWeb: "",
    linkGit: [
      "https://github.com/minhduc1003/social-app",
      "https://github.com/minhduc1003/social-app-backend",
    ],
    categories: [
      {
        id: 1,
        name: "NextJs",
      },
      {
        id: 2,
        name: "NodeJs",
      },
    ],
  },
  {
    id: 2,
    image: "/blog.png",
    title: "Blog Website",
    descFE: "Use angular http service to fetch data from backend.",
    descBE:
      "Be use JWT to authenticate, CRUD blog. Deploying by docker in linux server.",
    subDesc:
      "Web blogs are created for authors to share information, knowledge, opinions and experiences with readers.",
    linkWeb: "",
    linkGit: [
      "https://github.com/minhduc1003/blog-angular-fe",
      "https://github.com/minhduc1003/blog-.Net-be",
    ],
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
    image: "/cf.png",
    title: "CrowFunding",
    descFE: "Fe use redux for storing data when fetching data from backend.",
    descBE:
      "Be use JWT to authenticate, CRUD campaign. Deploying by docker in linux server.",
    subDesc: "Web to create donations campaigns. ",
    linkWeb: "",
    linkGit: ["https://github.com/minhduc1003/crowFunding"],
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
    image: "/movie.png",
    title: "Movie web",
    descFE: "Fetching data from themoviedb",
    subDesc: "Watch currently available movies. ",
    linkWeb: "",
    linkGit: ["https://github.com/minhduc1003/movie-app"],
    categories: [
      {
        id: 1,
        name: "ReactJs",
      },
    ],
  },
];
