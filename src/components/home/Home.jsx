import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataFromCSV } from "../../utils/utils";

import GroupMatches from "../group-matches/GroupMatches";
import MatchResult from "../match-result/MatchResult";

export default function Home() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDataFromCSV('/data/matches.csv'); 
            setMatches(data);
            console.log('CSV Data:', data);
          };
      
          fetchData();
    }, []);



    return (
        <>
            <p>{ matches}</p>
            <h2>GROUP STAGE</h2>
            <div className="group-results-container">
                <GroupMatches />
                <GroupMatches />
                <GroupMatches />
                <GroupMatches />
                <GroupMatches />
                <GroupMatches />
            </div>
            
            <h2>ROUND OF 16</h2>
            <div className="final-results-container">
                <Link to="/match"><MatchResult /></Link>
                <Link to="/match"><MatchResult /></Link>
                <Link to="/match"><MatchResult /></Link>
                <Link to="/match"><MatchResult /></Link>
                <Link to="/match"><MatchResult /></Link>
                <Link to="/match"><MatchResult /></Link>
                <Link to="/match"><MatchResult /></Link>
                <Link to="/match"><MatchResult /></Link>
            </div>
            <h2>QUARTER-FINALS</h2>
            <div className="final-results-container">
                <Link to="/match"><MatchResult /></Link>
                <Link to="/match"><MatchResult /></Link>
                <Link to="/match"><MatchResult /></Link>
                <Link to="/match"><MatchResult /></Link>
            </div>
            <h2>SEMI-FINALS</h2>
            <div className="final-results-container">
                <Link to="/match"><MatchResult /></Link>
                <Link to="/match"><MatchResult /></Link>
            </div>
            <h2>FINAL</h2>
            <div className="final-results-container">
                <Link to="/match"><MatchResult /></Link>
            </div>
        </>
    )
}