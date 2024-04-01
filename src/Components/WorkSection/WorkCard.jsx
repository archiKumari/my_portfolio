import "./WorkCard.css";

import homePage1 from "../../Assets/bnl-home-page.png";
import homePage2 from "../../Assets/mgs-home-page.png";
import homePage3 from "../../Assets/petdrifts-home-page.jpg";
import Badge from "../Badge/Badge";

const WorkCard = ({data}) => {
  console.log("WorkDetails received in card: ",data);
  if(!data) {
    return <div>{data}</div>
  }
  const { companyName, position, duration, skills, imagePath } = data;
  return (
    <div className="container">
      <div className="text-container">
        <div>
        <p className="title">{position}</p>
        <p className="subtext1">{companyName}</p>
        <p className="subtext2">{duration}</p>
        </div>
        <div className="badge-container">
        {skills.map((item) => (<Badge text={item}/>))}
        </div>
      </div>
      <div className="image-container">
        <img className="image" src={imagePath} alt={imagePath} />
      </div>
    </div>
  );
};

export default WorkCard;
