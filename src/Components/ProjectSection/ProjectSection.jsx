import projectData from "../../DataFiles/ProjectData";
import DesktopFrame from "../Frames/DesktopFrame/DesktopFrame";
import MobileFrame from "../Frames/MobileFrame/MobileFrame";
import Separator from "../Separator";

const ProjectSection = () => {
  return (
    <div>
      {projectData.map((project, index) => {
        if (project.category === "mobile") {
          return (
            <div>
              <MobileFrame
                key={index}
                title={project.projectName}
                heading={project.type}
                subtext={project.description}
                skills={project.skills}
                imagePath={project.imagePath}
              />
              <Separator />
            </div>
          );
        } else {
          return (
            <div>
              <DesktopFrame
                key={index}
                title={project.projectName}
                heading={project.type}
                subtext={project.description}
                skills={project.skills}
                imagePath={project.imagePath}
              />
              <Separator />
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProjectSection;