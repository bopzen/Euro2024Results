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