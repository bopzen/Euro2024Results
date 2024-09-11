import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import MatchDetails from './components/match-details/MatchDetails';
import TeamDetails from './components/team-details/TeamDetails';
import NotFound from './components/not-found/NotFound';

function App() {

    return (
        <>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/match/:matchID" element={<MatchDetails />}/>
                    <Route path="/team/:teamID" element={<TeamDetails />}/>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </>
    )
}

export default App
