export const navLinks = [
  { title: "About", url: "#about", icon: "/assets/about.png" },
  { title: "Projects", url: "#projects", icon: "/assets/project.png" },
  { title: "Stack", url: "#stack", icon: "/assets/stack.png" },
  { title: "Contacts", url: "#contacts", icon: "/assets/contacts.png" },
];

export const socialLinks = [
  {
    title: "Linked In",
    url: "https://www.linkedin.com/in/abigaelgem",
    icon: "/assets/linkedin-sm.png",
  },
  {
    title: "Github",
    url: "https://github.com/gemsolis",
    icon: "/assets/github-sm.png",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/gemsolis.dev",
    icon: "/assets/instagram-sm.png",
  },
  {
    title: "Behance",
    url: "https://www.behance.net/gemsolis",
    icon: "/assets/behance-sm.png",
  },
];

export const techIcons = {
  nextjs: {
    iconSrc: "/assets/nextjs.png",
    altText: "NextJS",
  },
  react: {
    iconSrc: "/assets/react.png",
    altText: "React",
  },
  api: {
    iconSrc: "/assets/api.png",
    altText: "Rest API",
  },
  sass: {
    iconSrc: "/assets/sass.png",
    altText: "Styled Components",
  },
  less: {
    iconSrc: "/assets/less.png",
    altText: "Less",
  },
  styled: {
    iconSrc: "/assets/styled.png",
    altText: "Styled Components",
  },
  tailwind: {
    iconSrc: "/assets/tailwind.png",
    altText: "Tailwind CSS",
  },
  bootstrap: {
    iconSrc: "/assets/bootstrap.png",
    altText: "Firebase",
  },
  redux: {
    iconSrc: "/assets/redux.png",
    altText: "Redux",
  },
  firebase: {
    iconSrc: "/assets/firebase.png",
    altText: "Firebase",
  },
  jquery: {
    iconSrc: "/assets/j-query.png",
    altText: "jQuery",
  },
  node: {
    iconSrc: "/assets/nodejs.png",
    altText: "NodeJS",
  },
  express: {
    iconSrc: "/assets/express.png",
    altText: "ExpressJS",
  },
  github: {
    iconSrc: "/assets/git-hub.png",
    altText: "GitHub",
  },
  git: {
    iconSrc: "/assets/git.png",
    altText: "Git",
  },
  docker: {
    iconSrc: "/assets/docker.png",
    altText: "Docker",
  },
  adobexd: {
    iconSrc: "/assets/xd.png",
    altText: "Adobe XD",
  },
  figma: {
    iconSrc: "/assets/figma.png",
    altText: "Figma",
  },
};

export const projects = [
  {
    title: "Car Showcase Landing Page",
    image: "/assets/carshowcase.png",
    tech: [techIcons.nextjs, techIcons.api, techIcons.tailwind],
    github: "https://github.com/gemsolis/carsShowcase_nextjs",
    site: "https://cars-showcase-nextjs-72as.vercel.app/",
    description:
      "This landing page introduces a curated car selection, offering an interactive experience. It combines NextJS for structure, Rapid API for real-time data, and TailwindCSS for modern, responsive design.",
  },
  {
    title: "CRUD Product Management",
    image: "/assets/crudreact.png",
    tech: [techIcons.react, techIcons.styled, techIcons.tailwind],
    github: "https://github.com/gemsolis/crud-admin-app",
    site: "https://crud-product-app.web.app/",
    description:
      "This web app employs ReactJS and Firebase/Firestore for database and hosting. Users can perform CRUD operations on products, sorting and searching by name or description. It features form validation for specific fields, and utilizes Redux Toolkit and Styled-Components for development.",
  },
  {
    title: "LinkedIn Clone with Authentication",
    image: "/assets/linkedinclone.png",
    tech: [techIcons.react, techIcons.styled, techIcons.firebase],
    github: "https://github.com/gemsolis/LinkedIn-Clone.git",
    site: "https://linkedin-clone-96766.web.app/home",
    description:
      "LinkedIn-style React app using Firebase for post storage and user authentication. Users can create, edit, and delete posts, with image and video uploads.",
  },
  {
    title: "Cart Page using Redux",
    image: "/assets/reduxreact.png",
    tech: [techIcons.react, techIcons.api, techIcons.styled, techIcons.redux],
    github: "https://github.com/gemsolis/redux-shop-project.git",
    site: "https://redux-shopcart.web.app/",
    description:
      "Redux Toolkit-powered shopping cart web app using AsyncThunk for API integration. Features include item management, quantity adjustment, and cart clearing. Deployed on Firebase, built with ReactJS.",
  },
  {
    title: "Netflix Clone using TMDB API",
    image: "/assets/netflixclone.png",
    tech: [techIcons.react, techIcons.api, techIcons.styled],
    github: "https://github.com/gemsolis/Netflix-Clone-React-Project.git",
    site: "https://netflix-clone-react-project.web.app",
    description:
      "Desktop version clone of the popular streaming service online using React.js, Sass, TMDB Api and Firebase. This project showcase how I familiarize using API from a third-party database.",
  },
  {
    title: "Fully Responsive Restaurant Website— Gericth",
    image: "/assets/restoreact.png",
    tech: [techIcons.react, techIcons.styled],
    github: "https://github.com/gemsolis/Restaurant-Website-ReactJS.git",
    site: "https://restaurant-website-reactjs.web.app/",
    description:
      "In this project, I created a mobile-friendly restaurant website using ReactJS and styled-components. The website is optimized for mobile devices, ensuring a great user experience for visitors accessing the site on their smartphones or tablets.",
  },
];
