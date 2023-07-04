import Banner from "../../Components/Banner/Banner";
import { useEffect, useState } from "react";
import achievements from './Achievements.json'
import AchievementCard from "./AchievementCard";

const AchievementSection = () => {
    const [Achievements, setAchievements] = useState(achievements.filter(achievement => achievement.year === 2022));
    const [year, setYear] = useState(2022);

    useEffect(() => {
        const newAchievements = achievements.filter(Achievement => Achievement.year === year);
        setAchievements(newAchievements);
    }, [year])


    return (
        <div>
           <Banner title="Our Achievements" setYear={setYear} />
           <div id="achSectionContainer">
            <section id="achSection">
                {Achievements.map(Achievement => <AchievementCard Achievement = {Achievement} key = {Achievement.id} img = {Achievement.coverphoto}/>)}
           </section>
           </div>
        </div>
    );
}

export default AchievementSection;