import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header>
                <div className="euro-logo-container">
                    <img src="/logos/ec-2024-general-logo.webp" alt="euro2024-logo" />
                </div>
                
                <h2>The UEFA European Football Championship 2024 Match Results</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/Match">Match</Link>
                        <Link to="/Team">Team</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}