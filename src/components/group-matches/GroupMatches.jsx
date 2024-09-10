import { Link } from "react-router-dom";
import MatchResult from "../match-result/MatchResult";

export default function GroupMatches(
    { group, matches }
) {
    return (
        <>
            <div className="group-results-card">
                <h3>Group {group}</h3>
                <div className="matches-container">

                    {matches.map(
                        (match) => (
                            <Link 
                                to={`/match/${match.matchID}`} 
                                key={match.matchID} 
                                className="match-link"
                            >
                                <MatchResult 
                                    match={match}
                                />
                            </Link>
                    ))}
                </div>
            </div>
        </>
    )
}