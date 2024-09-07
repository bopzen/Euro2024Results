import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header>
                <h1>Header</h1>
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