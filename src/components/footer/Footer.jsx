import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-main">
                    <Link to="/">
                        <nav className='footer-logo'>
                            <div className="footer-logo-container">
                            <img src="/logos/ec-2024-general-logo.webp" alt="euro2024-logo" />
                            </div>
                        </nav>               
                    </Link>

                    <nav>
                        <ul>
                            <li><a href="https://github.com/bopzen/Euro2024Results" target='_blank'>GitHub Project Repo</a></li>

                            <li className='footer-social-links'>
                            <a href="https://github.com/bopzen" target='_blank'><i className="fab fa-github"></i></a>
                            <a href="https://facebook.com/boyantodorov" target='_blank'><i className="fab fa-facebook"></i></a>
                            <a href="https://linkedin.com/in/boyantodorov" target='_blank'><i className="fab fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='footer-bottom'>
                    <p>© 2024 BOPZEN | Euro 2024 Results | Sirma Academy Final Exam</p>
                </div>
            </footer>
        </>
    )
}