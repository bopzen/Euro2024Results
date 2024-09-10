import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header>
                <Link to="/">
                    <div className="euro-logo-container">
                        <img src="/logos/ec-2024-general-logo.webp" alt="euro2024-logo" />
                    </div>
                </Link>            
                <h2>The UEFA European Football Championship 2024 Match Results</h2>
            </header>
        </>
    )
}