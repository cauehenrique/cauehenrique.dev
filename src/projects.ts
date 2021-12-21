export interface Project {
  name: string;
  description: string;
  backgroundURL: string;
  href: string;
}

const projects: Project[] = [
  {
    name: "buziosterramar.com.br",
    description: "Hotel e-commerce made with Next.js and TailwindCSS",
    backgroundURL: "./buzios.jpg",
    href: "https://buziosterramar.com.br",
  },
  {
    name: "Snowyland",
    description: "A cute pixel art platformer game made with Godot",
    backgroundURL: "./snowyland.jpg",
    href: "https://store.steampowered.com/app/1731730/Snowyland/",
  },
];

export default projects;
