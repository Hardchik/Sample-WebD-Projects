
const AchievementCard = (props) => {
    const img = require(`../../Assets/Images/img/${props.img}`);
    return ( 
        <div className="achCardBox">
            <div className="achCardContent">
                <h2>{props.Achievement.achievement}</h2>
                <h2>{props.Achievement.competition}</h2>
                <p>
                    {props.Achievement.description}
                </p>
            </div>
            <div className="achCardCover">
                <img src={img} alt="" />
                <p>{props.Achievement.coverheadline}</p>
            </div>
        </div>
    );
}
 
export default AchievementCard;