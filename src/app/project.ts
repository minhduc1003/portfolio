import { ICategories } from "./experience";

export interface IProject {
  id: number,
  image: string,
  title: string,
  desc: string,
  linkWeb: string,
  linkGit: string,
  categories: ICategories[],
}
export const project: IProject[] = [
  {
    id: 1,
    image: "",
    title: "CrowFunding",
    desc: "web to make donations include feature Login, register, add campaigns, view existing campaigns",
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
  }, {
    id: 2,
    image: "",
    title: "server for web sales",
    desc: "Login, register, add, edit, delete products",
    linkWeb: "",
    linkGit: "https://github.com/minhduc1003/invent-app-backend",
    categories: [
      {
        id: 1,
        name: "ExpressJs",
      },
      {
        id: 2,
        name: "JWT",
      },
      {
        id: 3,
        name: "bcrypt"
      },
      {
        id: 3,
        name: "nodemailer"
      },
      {
        id: 5,
        name: "multer"
      }
    ],
  },
  {
    id: 3,
    image: "https://i.ibb.co/fHZ7gTS/blog.png",
    title: "Blog Website",
    desc: "",
    linkWeb: "",
    linkGit: "https://github.com/minhduc1003/Blogs",
    categories: [
      {
        id: 1,
        name: "ReactJs",
      },
      {
        id: 2,
        name: "FireBase",
      },
    ],
  },
  {
    id: 3,
    image: "",
    title: "Movie web",
    desc: "Watch currently available movies",
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
  }
];
