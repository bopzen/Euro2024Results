export async function getDataFromCSV(filepath) {
    try {
        const response = await fetch(filepath);
        const data = await response.text();
        const rows = data.split('\r\n');
        console.log('Fetched data: ' + rows);
        return rows.map(row => row.split(','));
    } catch (error) {
        console.log(error)
    }
}

export async function getAllMatches() {
    const allMatchesRawData = await getDataFromCSV('/data/matches.csv');
    const allTeamsRawData = await getDataFromCSV('/data/teams.csv');
    console.log(allMatchesRawData)
    console.log(allTeamsRawData)

    let allMatches = [];

    for (let i = 1; i < allMatchesRawData.length-1; i++) {
        let row = allMatchesRawData[i];
        let matchObject = {};
        matchObject['matchID'] = Number(row[0]);
        matchObject['ATeamID'] = Number(row[1]);
        matchObject['ATeam'] = allTeamsRawData[row[1]] ? allTeamsRawData[row[1]][1] : 'N/A';
        matchObject['ATeamGroup'] = allTeamsRawData[row[1]] ? allTeamsRawData[row[1]][3] : 'N/A';
        matchObject['BTeamID'] = Number(row[2]);
        matchObject['BTeam'] = allTeamsRawData[row[2]] ? allTeamsRawData[row[2]][1] : 'N/A';
        matchObject['BTeamGroup'] = allTeamsRawData[row[2]] ? allTeamsRawData[row[2]][3] : 'N/A';
        matchObject['ATeamScore'] = row[4] ? row[4].split('-')[0] : 'N/A';
        matchObject['BTeamScore'] = row[4] ? row[4].split('-')[1] : 'N/A';
        matchObject['MatchDate'] = row[3] ? row[3] : 'N/A';
        allMatches.push(matchObject);
    }
    console.log(allMatches);
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

export async function getTeamById(id) {
    const allTeamsRawData = await getDataFromCSV('/data/teams.csv');
    let teamObject = {};
    teamObject['teamID'] = allTeamsRawData[id][0];
    teamObject['Name'] = allTeamsRawData[id][1];
    teamObject['Manager'] = allTeamsRawData[id][2];
    teamObject['Group'] = allTeamsRawData[id][3];
    return teamObject;
}

export async function getPlayersByTeamId(id) {
    const allTeamPlayers = await getDataFromCSV('/data/players.csv');
    
    let teamPlayers = [];
    
    for (let i = 1; i < allTeamPlayers.length-1; i++) {
        let row = allTeamPlayers[i];
        let playerObject = {};
        if (row[4] == id) {
            playerObject['PlayerID'] = row[0];
            playerObject['TeamNumber'] = row[1];
            playerObject['Position'] = row[2];
            playerObject['FullName'] = row[3];
            teamPlayers.push(playerObject);
        }       
    }

    return teamPlayers;
}

export async function getMatchLineUpById(matchId) {
    const allRecordsRawData = await getDataFromCSV('/data/records.csv');
    const allPlayersRawData = await getDataFromCSV('/data/players.csv');
    let matchLineUp = [];
    for (let i = 1; i < allRecordsRawData.length-1; i++) {
        let row = allRecordsRawData[i];
        let playerObject = {};
        if (row[2] == matchId) {
            playerObject['MatchID'] = Number(row[2]);
            playerObject['PlayerID'] = Number(row[1]);
            playerObject['PlayerName'] = allPlayersRawData[Number(row[1])][3];
            playerObject['PlayerNumber'] = allPlayersRawData[Number(row[1])][1];
            playerObject['PlayerPosition'] = allPlayersRawData[Number(row[1])][2];
            playerObject['TeamID'] = Number(allPlayersRawData[Number(row[1])][4]);
            playerObject['FromMinutes'] = Number(row[3]);
            playerObject['ToMinutes'] = Number(row[4]);
            matchLineUp.push(playerObject);
        }

    }
    return matchLineUp
}