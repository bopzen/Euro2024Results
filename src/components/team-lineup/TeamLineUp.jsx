import { useEffect, useState } from "react";
import { getMatchLineUpById } from "../../utils/utils";

export default function TeamLineUp(
    { matchID, teamID, color }
) {

    const [matchLineUp, setMatchLineUp] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMatchLineUpById(matchID);
            setMatchLineUp(data);
          };
      
          fetchData();
    }, [matchID, teamID]);

    const teamLineUp = matchLineUp.filter((player) => player.TeamID === teamID && player.FromMinutes === 0);
    const substitutes = matchLineUp.filter((player) => player.TeamID === teamID && player.FromMinutes !== 0);
    const goalkeepers = teamLineUp.filter((player) => player.PlayerPosition === 'GK');
    const defenders = teamLineUp.filter((player) => player.PlayerPosition === 'DF');
    const midfielders = teamLineUp.filter((player) => player.PlayerPosition === 'MF');
    const forwards = teamLineUp.filter((player) => player.PlayerPosition === 'FW');

    function getPositionClass(position) {
        return position.toLowerCase();
    };

    if (!matchLineUp) {
        return <p>Loading match details...</p>;
    }

    return (
        <>
            <div className="fields-section">
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
                    <div className="forwards">
                        {forwards.map(player => (
                            <div key={player.PlayerID} className="forward-player">
                                <div className="tshirt-container">
                                    <img src={`/icons/tshirt_${color}.png`} alt="tshirt" />
                                    <div className="player-number">
                                        {player.PlayerNumber}
                                    </div>
                                </div>  
                                <div>
                                    {player.PlayerName}
                                </div>                                           
                            </div>
                        ))}
                    </div>
                    <div className="midfielders">
                        {midfielders.map(player => (
                            <div key={player.PlayerID} className="midfielder-player">
                                <div className="tshirt-container">
                                    <img src={`/icons/tshirt_${color}.png`}  alt="tshirt" />
                                    <div className="player-number">
                                        {player.PlayerNumber}
                                    </div>
                                </div>  
                                <div>
                                    {player.PlayerName}
                                </div>  
                            </div>
                        ))}
                    </div>
                    <div className="defenders">
                        {defenders.map(player => (
                            <div key={player.PlayerID} className="defender-player">
                                <div className="tshirt-container">
                                    <img src={`/icons/tshirt_${color}.png`}  alt="tshirt" />
                                    <div className="player-number">
                                        {player.PlayerNumber}
                                    </div>
                                </div>  
                                <div>
                                    {player.PlayerName}
                                </div>  
                            </div>
                        ))}
                    </div>
                    <div className="goalkeepers">
                        {goalkeepers.map(player => (
                            <div key={player.PlayerID} className="goalkeeper-player">
                                <div className="tshirt-container">
                                    <img src="/icons/tshirt_black.png" alt="tshirt" />
                                    <div className="player-number">
                                        {player.PlayerNumber}
                                    </div>
                                </div>  
                                <div>
                                    {player.PlayerName} 
                                </div>  
                            </div>
                        ))}
                    </div>
                </div>

                <div className="substitutes">
                    <h3>Substitutes</h3>
                    {substitutes.length > 0
                    ? (
                    <table className="substitutes-table">
                        <tbody>              
                            {substitutes.map(player => (
                            <tr key={player.PlayerID} className="substitutes-player">
                                <td>{player.PlayerNumber} {player.PlayerName}</td> 
                                <td className="position">
                                    <div className={getPositionClass(player.PlayerPosition)}>
                                        {player.PlayerPosition}
                                    </div>
                                </td> 
                                <td>{player.FromMinutes}'</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    ) : (
                        <div>No Data</div>
                    )}
                </div>      
            </div>
        </>
    )
}