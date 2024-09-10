import { useParams } from "react-router-dom";
import { getTeamById } from "../../utils/utils";
import { useEffect, useState } from "react";

export default function TeamDetails() {
    const {teamID} = useParams();
    const [team, setTeam] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTeamById(teamID);
            setTeam(data);
          };
      
          fetchData();
    }, [teamID]);

    if (!team) {
        return <p>Loading team details...</p>;
    }

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
                        <tr>
                            <td>1</td>
                            <td>Brice Samba</td>
                            <td className="position"><div className="gk">GK</div></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Benjamin Pavard</td>
                            <td className="position"><div className="df">DF</div></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Ferland Mendy</td>
                            <td className="position"><div className="df">DF</div></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Dayot Upamecano</td>
                            <td className="position"><div className="df">DF</div></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Jules Koundé</td>
                            <td className="position"><div className="df">DF</div></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Eduardo Camavinga</td>
                            <td className="position"><div className="mf">MF</div></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Antoine Griezmann</td>
                            <td className="position"><div className="fw">FW</div></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Aurélien Tchouaméni</td>
                            <td className="position"><div className="mf">MF</div></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Olivier Giroud</td>
                            <td className="position"><div className="fw">FW</div></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td><b>Kylian Mbappé (captain)</b></td>
                            <td className="position"><div className="fw">FW</div></td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Ousmane Dembélé</td>
                            <td className="position"><div className="fw">FW</div></td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Randal Kolo Muani</td>
                            <td className="position"><div className="fw">FW</div></td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>N'Golo Kanté</td>
                            <td className="position"><div className="mf">MF</div></td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Adrien Rabiot</td>
                            <td className="position"><div className="mf">MF</div></td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Marcus Thuram</td>
                            <td className="position"><div className="fw">FW</div></td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>Mike Maignan</td>
                            <td className="position"><div className="gk">GK</div></td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>William Saliba</td>
                            <td className="position"><div className="df">DF</div></td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Warren Zaïre-Emery</td>
                            <td className="position"><div className="mf">MF</div></td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>Youssouf Fofana</td>
                            <td className="position"><div className="mf">MF</div></td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>Kingsley Coman</td>
                            <td className="position"><div className="fw">FW</div></td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>Jonathan Clauss</td>
                            <td className="position"><div className="df">DF</div></td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>Théo Hernandez</td>
                            <td className="position"><div className="df">DF</div></td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>Alphonse Areola</td>
                            <td className="position"><div className="gk">GK</div></td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>Ibrahima Konaté</td>
                            <td className="position"><div className="df">DF</div></td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>Bradley Barcola</td>
                            <td className="position"><div className="fw">FW</div></td>
                        </tr>
                    </tbody>              
                </table>
            </div>
        </>
    )
}