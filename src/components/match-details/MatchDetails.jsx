import { Link, useParams } from "react-router-dom";
import TeamLineUp from "../team-lineup/TeamLineUp";
import { useEffect, useState } from "react";
import { getMatchById, getMatchStageById } from "../../utils/utils";

export default function MatchDetails() {
    const {matchID} = useParams();
    const [match, setMatch] = useState(null);
    const [stage, setStage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMatchById(matchID);
            const stage = await getMatchStageById(matchID);
            setMatch(data);
            setStage(stage);
          };
      
          fetchData();
    }, [matchID]);

    const date = new Date(match?.MatchDate);
    const formattedDate = date.toLocaleDateString('en-UK', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    if (!match) {
        return <p>Loading match details...</p>;
    }

    return (
        <>
            <div className="match-details-section">
                <div className="match-details-header">
                    <h3>UEFA Euro 2024</h3>
                    <h3>{formattedDate}</h3>
                    <h3>Full-time</h3>
                </div>
                <div className="match-details-result-big">
                    <div className="team-container-big">
                        <div className="country-flag-container-big">
                            <img src={`/flags/${match.ATeam}.png`} alt="country-flag" className="country-flag-big" />
                        </div>
                        <Link to={`/team/${match.ATeamID}`}><p>{match.ATeam}</p></Link>
                    </div>
                    <div className="match-result-big">
                        <p>{match.ATeamScore} : {match.BTeamScore}</p>
                    </div>
                    <div className="team-container-big">
                        <div className="country-flag-container-big">
                            <img src={`/flags/${match.BTeam}.png`} alt="country-flag" className="country-flag-big" />
                        </div>
                        <Link to={`/team/${match.BTeamID}`}><p>{match.BTeam}</p></Link>
                    </div>              
                </div>
                <h2>{stage}</h2>
                <div className="teams-lineup-section">
                    <TeamLineUp matchID={match.matchID} teamID={match.ATeamID} color="blue" />
                    <TeamLineUp matchID={match.matchID} teamID={match.BTeamID} color="red" />
                </div>
            </div>        
        </>
    )
}