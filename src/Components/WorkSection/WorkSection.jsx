import workData from "../../DataFiles/WorkData";
import DesktopFrame from "../Frames/DesktopFrame/DesktopFrame";
import MobileFrame from "../Frames/MobileFrame/MobileFrame";
import Separator from "../Separator";

const WorkSection = () => {
  return (
    <div>
      {workData.map((work, index) => {
        if (work.category === "mobile") {
          return (
            <div>
              <MobileFrame
                key={index}
                title={work.companyName}
                heading={work.position}
                subtext={work.duration}
                skills={work.skills}
                imagePath={work.imagePath}
              />
              <Separator />
            </div>
          );
        } else {
          return (
            <div>
              <DesktopFrame
                key={index}
                title={work.companyName}
                heading={work.position}
                subtext={work.duration}
                skills={work.skills}
                imagePath={work.imagePath}
              />
              <Separator />
            </div>
          );
        }
      })}
    </div>
  );
};

export default WorkSection;
