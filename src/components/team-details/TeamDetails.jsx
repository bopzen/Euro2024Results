import { useParams } from "react-router-dom";
import { getPlayersByTeamId, getTeamById } from "../../utils/utils";
import { useEffect, useState } from "react";

export default function TeamDetails() {
    const {teamID} = useParams();
    const [team, setTeam] = useState(null);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTeamById(teamID);
            const playersData = await getPlayersByTeamId(teamID);
            setTeam(data);
            setPlayers(playersData);
          };
      
          fetchData();
    }, [teamID]);

    if (!team) {
        return <p>Loading team details...</p>;
    }

    if (!players) {
        return <p>Loading team details...</p>;
    }

    console.log(players)

    function getPositionClass(position) {
        return position.toLowerCase();
    };

    function isCaptain(playerName) {
        return playerName.toLowerCase().includes("(captain)");
    };

    return (
        <>
            <div className="team-details-section">
                <div className="team-details-header">
                    <div className="country-flag-container-big">
                        <img src={`/flags/${team.Name}.png`} alt="country-flag" className="country-flag-big" />
                    </div>
                    <p>{team.Name} national football team</p>
                </div>
                <h3>MANAGER</h3>
                <h4>{team.Manager}</h4>
                <h3>ROSTER</h3>
                <table className="roster-table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Player Name</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player) => (
                            <tr key={player.PlayerID}>
                                <td>{player.TeamNumber}</td>
                                <td>
                                    {isCaptain(player.FullName) 
                                    ? (<b>{player.FullName}</b>) 
                                    : (player.FullName)}
                                </td>
                                <td className="position">
                                    <div className={getPositionClass(player.Position)}>
                                        {player.Position}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>              
                </table>
            </div>
        </>
    )
}