import "./TopBar.css"

function TopBar({text}) {
  return (
      <div className="top-bar">
        <p className="top-bar-text">{text}</p>
      </div>
  );
}

export default TopBar;
