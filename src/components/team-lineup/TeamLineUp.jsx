import { useEffect, useState } from "react";
import { getMatchLineUpById } from "../../utils/utils";

export default function TeamLineUp(
    { matchID, teamID }
) {

    const [matchLineUp, setMatchLineUp] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMatchLineUpById(matchID);
            setMatchLineUp(data);
          };
      
          fetchData();
    }, [matchID, teamID]);

    const teamLineUp = matchLineUp.filter(player => player.TeamID === teamID);
    console.log(teamLineUp)

    if (!matchLineUp) {
        return <p>Loading match details...</p>;
    }
    console.log(matchID)
    console.log(teamID)
    console.log(matchLineUp)
    return (
        <>
            <div className="team-lineup-container">
                <div className="team-lineup-top-field">
                </div>
                <div className="team-lineup-bottom-field">
                </div>
                <div className="team-lineup-center">
                </div>
                <div className="team-lineup-goal-top">
                </div>
                <div className="team-lineup-goal-bottom">
                </div>
            </div>

            <div>
            {teamLineUp.map(player => (
                    <div key={player.PlayerID} className="player">
                        {player.PlayerName} {player.PlayerPosition}
                    </div>
                ))}
            </div>

        </>
    )
}