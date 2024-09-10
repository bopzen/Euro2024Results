export async function getDataFromCSV(filepath) {
    try {
        const response = await fetch(filepath);
        const data = await response.text();
        const rows = data.split('\r\n');
        return rows.map(row => row.split(','));
    } catch (error) {
        console.log(error)
    }
}

export async function getAllMatches() {
    const allMatchesRawData = await getDataFromCSV('/data/matches.csv');
    const allTeamsRawData = await getDataFromCSV('/data/teams.csv');

    let allMatches = [];

    for (let i = 1; i < allMatchesRawData.length-1; i++) {
        let row = allMatchesRawData[i];
        let matchObject = {};
        matchObject['matchID'] = Number(row[0]);
        matchObject['ATeam'] = allTeamsRawData[row[1]] ? allTeamsRawData[row[1]][1] : 'N/A';
        matchObject['ATeamGroup'] = allTeamsRawData[row[1]] ? allTeamsRawData[row[1]][3] : 'N/A';
        matchObject['BTeam'] = allTeamsRawData[row[2]] ? allTeamsRawData[row[2]][1] : 'N/A';
        matchObject['BTeamGroup'] = allTeamsRawData[row[2]] ? allTeamsRawData[row[2]][3] : 'N/A';
        matchObject['ATeamScore'] = row[4] ? row[4].split('-')[0] : 'N/A';
        matchObject['BTeamScore'] = row[4] ? row[4].split('-')[1] : 'N/A';
        matchObject['MatchDate'] = row[3] ? row[3] : 'N/A';
        allMatches.push(matchObject);
    }
    return allMatches
}

export async function getMatchById(id) {
    const allMatches = await getAllMatches();
    const match = allMatches.find(
        (match) => match.matchID == id
    )
    return match
}

export async function getMatchStageById(id) {
    const match = await getMatchById(id);

    if (match.ATeamGroup == match.BTeamGroup) {
        return `Group ${match.ATeamGroup}`
    }
    if (match.matchID >= 37 && match.matchID <= 44) {
        return 'ROUND OF 16'
    }
    if (match.matchID >= 45 && match.matchID <= 48) {
        return 'QUARTER-FINALS'
    }
    if (match.matchID >= 49 && match.matchID <= 50) {
        return 'SEMI-FINALS'
    }
    if (match.matchID == 51) {
        return 'FINAL'
    }

}