import { Link, useParams } from "react-router-dom";
import TeamLineUp from "../team-lineup/TeamLineUp";
import { useEffect, useState } from "react";
import { getMatchById } from "../../utils/utils";

export default function MatchDetails() {
    const {matchID} = useParams();
    const [match, setMatch] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMatchById(matchID);
            setMatch(data);
          };
      
          fetchData();
    }, [matchID]);

    console.log(match)
    if (!match) {
        return <p>Loading match details...</p>;
    }

    return (
        <>
            <div className="match-details-section">
                <div className="match-details-header">
                    <h3>UEFA Euro 2024</h3>
                    <h3>{match.MatchDate}</h3>
                    <h3>Full-time</h3>
                </div>
                <div className="match-details-result-big">
                    <div className="team-container-big">
                        <div className="country-flag-container-big">
                            <img src={`/flags/${match.ATeam}.png`} alt="country-flag" className="country-flag-big" />
                        </div>
                        <Link to="/team"><p>{match.ATeam}</p></Link>
                    </div>
                    <div className="match-result-big">
                        <p>{match.ATeamScore} : {match.BTeamScore}</p>
                    </div>
                    <div className="team-container-big">
                        <div className="country-flag-container-big">
                            <img src={`/flags/${match.BTeam}.png`} alt="country-flag" className="country-flag-big" />
                        </div>
                        <Link to="/team"><p>{match.BTeam}</p></Link>
                    </div>              
                </div>
                <h4>Group A</h4>
                <div className="teams-lineup-section">
                    <TeamLineUp />
                    <TeamLineUp />
                </div>
            </div>
            
            
        </>
    )
}