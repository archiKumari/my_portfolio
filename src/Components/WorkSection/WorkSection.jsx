import workData from "../../DataFiles/WorkData";
import DesktopFrame from "../Frames/DesktopFrame/DesktopFrame";
import MobileFrame from "../Frames/MobileFrame/MobileFrame";
import Separator from "../Separator"

const WorkSection = () => {

  return (
    <div>
      <DesktopFrame data={workData[0]}/>
      <Separator/>
      <MobileFrame data={workData[1]}/>
      <Separator/>
      <DesktopFrame data={workData[2]}/>
    </div>
  );
};

export default WorkSection;
