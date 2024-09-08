export default function MatchResult() {
    return (
        <>
            <div className="match-result-card">
                <div className="match-teams">
                    <div className="team-container">
                        <div className="country-flag-container">
                            <img src="https://www.worldometers.info/img/flags/fr-flag.gif" alt="" className="country-flag" />
                        </div>
                        <p>France </p>
                    </div>
                    <div className="team-container">
                        <div className="country-flag-container">
                            <img src="https://www.worldometers.info/img/flags/sp-flag.gif" alt="" className="country-flag" />
                        </div>
                        <p>Spain</p>
                    </div>              
                </div>
                <div className="match-result">
                    <p>1</p>
                    <p>2</p>
                </div>
                <div className="match-info">
                    <p>FT</p>
                    <p>Jun 14</p>
                </div>


            </div>

            
        </>
    )
}