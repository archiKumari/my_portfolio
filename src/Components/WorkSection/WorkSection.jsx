import WorkCard from "./WorkCard";
import workData from "../../DataFiles/WorkData";

const WorkSection = () => {

  // console.log("WorkData1: ", workData[0].duration);

  return (
    <div>
      {workData.map((item,index) => (
        <WorkCard key={index} data={item} />
      ))}
    </div>
  );
};

export default WorkSection;
