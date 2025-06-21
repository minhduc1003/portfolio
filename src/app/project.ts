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
    image: "/park.png",
    title: "Smart Parking System",
    descFE:
      "Frontend built with ReactJS for web and React Native for mobile platforms, real-time parking slot status updated via WebSocket, allowing users to book and view parking availability easily.",
    descBE:
      "Backend developed using NodeJS/Express and MongoDB to handle parking data, booking operations, and real-time updates through WebSocket connections.",
    subDesc:
      "A smart parking management system that enables users to reserve parking slots and monitor lot status in real-time via web and mobile applications.",
    linkWeb: [],
    linkGit: [
      {
        name: "All source",
        link: "https://github.com/minhduc1003/Smart-Parking-System",
      },
    ],
    categories: [
      {
        id: 1,
        name: "ReactJS",
      },
      {
        id: 2,
        name: "React Native",
      },
      {
        id: 3,
        name: "NodeJS",
      },
      {
        id: 4,
        name: "MongoDB",
      },
      {
        id: 5,
        name: "C ++",
      },
    ],
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
