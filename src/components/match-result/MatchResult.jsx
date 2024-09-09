export default function MatchResult(
    { match }
) {

    const date = new Date(match.MatchDate);
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
    });

    return (
        <>
            <div className="match-result-card">
                <div className="match-teams">
                    <div className="team-container">
                        <div className="country-flag-container">
                            <img src="https://www.worldometers.info/img/flags/fr-flag.gif" alt="" className="country-flag" />
                        </div>
                        <p>{match.ATeam}</p>
                    </div>
                    <div className="team-container">
                        <div className="country-flag-container">
                            <img src="https://www.worldometers.info/img/flags/sp-flag.gif" alt="" className="country-flag" />
                        </div>
                        <p>{match.BTeam}</p>
                    </div>              
                </div>
                <div className="match-results-right">
                    <div className="match-result">
                        <p>{match.ATeamScore}</p>
                        <p>{match.BTeamScore}</p>
                    </div>
                    <div className="match-info">
                        <p>FT</p>
                        <p>{formattedDate}</p>
                    </div>
                </div>
            </div>          
        </>
    )
}