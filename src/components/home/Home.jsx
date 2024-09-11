import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllMatches } from "../../utils/utils";

import GroupMatches from "../group-matches/GroupMatches";
import MatchResult from "../match-result/MatchResult";

export default function Home() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllMatches();
            setMatches(data);
          };
      
          fetchData();
    }, []);
    console.log('state:' + matches);

    function filterMatchesByGroup(group) {
        return matches.filter(
            (match) => match.ATeamGroup == group && match.BTeamGroup == group
        );
    }
    function filterFinalsMatches(startId, endId) {
        let finalMatches = matches.filter(
            (match) => match.matchID >= startId && match.matchID <= endId
        );
        return finalMatches;
    }

    return (
        <>
            <h2>GROUP STAGE</h2>
            <div className="group-results-container">
                <GroupMatches group="A" matches={filterMatchesByGroup("A")}/>
                <GroupMatches group="B" matches={filterMatchesByGroup("B")}/>
                <GroupMatches group="C" matches={filterMatchesByGroup("C")}/>
                <GroupMatches group="D" matches={filterMatchesByGroup("D")}/>
                <GroupMatches group="E" matches={filterMatchesByGroup("E")}/>
                <GroupMatches group="F" matches={filterMatchesByGroup("F")}/>
            </div>
            
            <h2>ROUND OF 16</h2>
            <div className="final-results-container">
                {filterFinalsMatches(37, 44).map((match) => (
                    <Link to={`/match/${match.matchID}`} key={match.matchID}>
                        <MatchResult match={match} />
                    </Link>
                ))}
            </div>

            <h2>QUARTER-FINALS</h2>
            <div className="final-results-container">
                {filterFinalsMatches(45, 48).map((match) => (
                    <Link to={`/match/${match.matchID}`} key={match.matchID}>
                        <MatchResult match={match} />
                    </Link>
                ))}
            </div>

            <h2>SEMI-FINALS</h2>
            <div className="final-results-container">
                {filterFinalsMatches(49, 50).map((match) => (
                    <Link to={`/match/${match.matchID}`} key={match.matchID}>
                        <MatchResult match={match} />
                    </Link>
                ))}
            </div>

            <h2>FINAL</h2>
            <div className="final-results-container">
                {filterFinalsMatches(51, 51).map((match) => (
                    <Link to={`/match/${match.matchID}`} key={match.matchID}>
                        <MatchResult match={match} />
                    </Link>
                ))}
            </div>
        </>
    )
}