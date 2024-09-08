import { Link } from "react-router-dom";
import TeamLineUp from "../team-lineup/TeamLineUp";

export default function MatchDetails() {
    return (
        <>
            <div className="match-details-section">
                <div className="match-details-header">
                    <h3>UEFA Euro 2024</h3>
                    <h3>14 June 2024</h3>
                    <h3>Full-time</h3>
                </div>
                <div className="match-details-result-big">
                    <div className="team-container-big">
                        <div className="country-flag-container-big">
                            <img src="https://www.worldometers.info/img/flags/fr-flag.gif" alt="" className="country-flag-big" />
                        </div>
                        <Link to="/team"><p>France</p></Link>
                    </div>
                    <div className="match-result-big">
                        <p>1 : 2</p>
                    </div>
                    <div className="team-container-big">
                        <div className="country-flag-container-big">
                            <img src="https://www.worldometers.info/img/flags/sp-flag.gif" alt="" className="country-flag-big" />
                        </div>
                        <Link to="/team"><b><p>Spain</p></b></Link>
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