import { Link } from "react-router-dom";
import MatchResult from "../match-result/MatchResult";

export default function GroupMatches() {
    return (
        <>
            <div className="group-results-card">
                <h3>Group A</h3>
                <div className="matches-container">
                    <Link to="/Match"><MatchResult /></Link>
                    <Link to="/Match"><MatchResult /></Link>
                    <Link to="/Match"><MatchResult /></Link>
                    <Link to="/Match"><MatchResult /></Link>
                    <Link to="/Match"><MatchResult /></Link>
                    <Link to="/Match"><MatchResult /></Link>
                    <Link to="/Match"><MatchResult /></Link>
                    <Link to="/Match"><MatchResult /></Link>
                    <Link to="/Match"><MatchResult /></Link>
                    <Link to="/Match"><MatchResult /></Link>
                    <Link to="/Match"><MatchResult /></Link>
                    <Link to="/Match"><MatchResult /></Link>
                </div>
            </div>



        </>
    )
}