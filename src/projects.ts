export interface Project {
	name: string;
	description: string;
	backgroundURL: string;
	href: string;
}

const projects: Project[] = [
	{
		name: "buziosterramar.com.br",
		description: "Hotel e-commerce made with SvelteKit and TailwindCSS",
		backgroundURL: "./buzios.jpg",
		href: "https://buziosterramar.com.br",
	},
	{
		name: "Snowyland",
		description: "A cute pixel art platformer game made with Godot",
		backgroundURL: "./snowyland.jpg",
		href: "https://store.steampowered.com/app/1731730/Snowyland/",
	},
	{
		name: "Svelte IRC",
		description: "A chat app made with Svelte, TailwindCSS and SocketIO",
		backgroundURL: "./irc.jpg",
		href: "https://svelte-irc.vercel.app/",
	},
];

export default projects;
