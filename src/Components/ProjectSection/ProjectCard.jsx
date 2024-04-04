import "./ProjectCard.css";

import Badge from "../Badge/Badge";

const ProjectCard = ({data}) => {
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

export default ProjectCard;
