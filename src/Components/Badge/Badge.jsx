import "./Badge.scss"

const Badge = ({text}) => {
    return (
        <div className="badge">
            <span>{text}</span>
        </div>
    )
}

export default Badge;