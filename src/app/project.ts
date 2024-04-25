import { ICategories } from "./experience";

export interface IProject {
  id: number;
  image: string;
  title: string;
  descFE?: string;
  descBE?: string;
  subDesc: string;
  linkWeb: link[];
  linkGit: link[];
  categories: ICategories[];
}
interface link {
  name: string;
  link: string;
}
export const project: IProject[] = [
  {
    id: 1,
    image: "/social.png",
    title: "Social Projects",
    descFE:
      "Fe use redux for storing data when fetching data from backend and socketIo to communicate real time to backend, many custom hooks.",
    descBE:
      "Be use JWT to authenticate, CRUD posts share comment like posts, add friend and use socketIo to communicate.",
    subDesc:
      "Web to create for communication and post a posts to friend see it. ",
    linkWeb: [
      {
        name: "Frontend",
        link: "http://ducozil1003.io.vn:3000/",
      },
      {
        name: "Backend",
        link: "http://ducozil1003.io.vn:3009/",
      },
    ],
    linkGit: [
      {
        name: "Frontend",
        link: "https://github.com/minhduc1003/social-app",
      },
      {
        name: "Backend",
        link: "https://github.com/minhduc1003/social-app-backend",
      },
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
      {
        id: 3,
        name: "Docker",
      },
    ],
  },
  {
    id: 2,
    image: "/blog.png",
    title: "Blog Website",
    descFE: "Use angular http service to fetch data from backend.",
    descBE: "Be use JWT to authenticate, CRUD blog.",
    subDesc:
      "Web blogs are created for authors to share information, knowledge, opinions and experiences with readers.",
    linkWeb: [
      {
        name: "Frontend",
        link: "http://ducozil1003.io.vn:3003/",
      },
      {
        name: "Backend",
        link: "http://ducozil1003.io.vn:9001/swagger/index.html",
      },
    ],
    linkGit: [
      {
        name: "Frontend",
        link: "https://github.com/minhduc1003/blog-angular-fe",
      },
      {
        name: "Backend",
        link: "https://github.com/minhduc1003/blog-.Net-be",
      },
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
      {
        id: 3,
        name: "Docker",
      },
    ],
  },
  {
    id: 3,
    image: "/cf.png",
    title: "CrowFunding",
    descFE: "Fe use redux for storing data when fetching data from backend.",
    descBE: "Be use JWT to authenticate, CRUD campaign.",
    subDesc: "Web to create donations campaigns. ",
    linkWeb: [
      {
        name: "Frontend",
        link: "http://ducozil1003.io.vn:3002/",
      },
      {
        name: "Backend",
        link: "http://ducozil1003.io.vn:3001/",
      },
    ],
    linkGit: [
      {
        name: "Frontend",
        link: "https://github.com/minhduc1003/crowFunding",
      },
    ],
    categories: [
      {
        id: 1,
        name: "ReactJs",
      },
      {
        id: 2,
        name: "NodeJs",
      },
      {
        id: 3,
        name: "Docker",
      },
    ],
  },
  {
    id: 4,
    image: "/movie.png",
    title: "Movie web",
    descFE: "Fetching data from themoviedb",
    subDesc: "Watch currently available movies. ",
    linkWeb: [
      {
        name: "Frontend",
        link: "https://movie-app-indol-zeta-87.vercel.app/",
      },
    ],
    linkGit: [
      {
        name: "Frontend",
        link: "https://github.com/minhduc1003/movie-app",
      },
    ],
    categories: [
      {
        id: 1,
        name: "ReactJs",
      },
    ],
  },
];
