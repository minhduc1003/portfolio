export interface IExp {
  id: number;
  time: string;
  title: string;
  desc: string;
  categories: ICategories[];
}
export interface ICategories {
  id: number;
  name: string;
}
export const exp: IExp[] = [
  {
    id: 1,
    time: "25/9/2023-20/12/2023",
    title: "Working at SAVIS group",
    desc: "I work as a .Net, Angular, and AngularJs intern at Savis Group.",
    categories: [
      {
        id: 1,
        name: ".Net",
      },
      {
        id: 2,
        name: "Angular",
      },
      {
        id: 3,
        name: "AngularJs",
      },
      {
        id: 4,
        name: "Docker",
      },
    ],
  },
  {
    id: 2,
    time: "2023",
    title: "Learning basics Nodejs and Nextjs",
    desc: "I have started learning basics Nodejs and Nextjs",
    categories: [
      {
        id: 1,
        name: "Nodejs",
      },
      {
        id: 2,
        name: "Nextjs",
      },
    ],
  },
  {
    id: 3,
    time: "2021",
    title: "Learning basics react framework",
    desc: "I have started learning basics SCSS and ReactJs and Redux and more library working with React",
    categories: [
      {
        id: 1,
        name: "SCSS",
      },
      {
        id: 2,
        name: "ReactJs",
      },
      {
        id: 3,
        name: "Redux",
      },
      {
        id: 4,
        name: "More...",
      },
    ],
  },
  {
    id: 4,
    time: "2021",
    title: "Learning basics web development",
    desc: "I have started learning basics HTML, CSS, Javascript, git",
    categories: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "Javascript",
      },
      {
        id: 4,
        name: "Git",
      },
    ],
  },
];
