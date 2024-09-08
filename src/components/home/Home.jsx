import GroupMatches from "../group-matches/GroupMatches";
import MatchResult from "../match-result/MatchResult";

export default function Home() {
    return (
        <>
            <h2>Group Stage</h2>
            <div className="group-results-container">
                <GroupMatches />
                <GroupMatches />
                <GroupMatches />
                <GroupMatches />
                <GroupMatches />
                <GroupMatches />
            </div>
            
            <h2>Round of 16</h2>
            <div className="final-results-container">
                <MatchResult />
                <MatchResult />
                <MatchResult />
                <MatchResult />
                <MatchResult />
                <MatchResult />
                <MatchResult />
                <MatchResult />
            </div>
            <h2>Quarter-finals</h2>
            <div className="final-results-container">
                <MatchResult />
                <MatchResult />
                <MatchResult />
                <MatchResult />
            </div>
            <h2>Semi-finals</h2>
            <div className="final-results-container">
                <MatchResult />
                <MatchResult />
            </div>
            <h2>Final</h2>
            <div className="final-results-container">
                <MatchResult />
            </div>
        </>
    )
}