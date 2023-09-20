import { ProjectCard, CaseStudyCard, Title } from "@/components";

const Projects = () => {
  return (
    <div
      id="projects"
      className="section-wrapper w-full mt-[150px] pb-10 bg-gray-800 text-white flex flex-col justify-center items-center rounded-[200px] "
    >
      <div className="mb-16 text-3xl ">
        <Title title="Projects" />
      </div>
      <ProjectCard />
      <CaseStudyCard />
    </div>
  );
};

export default Projects;
