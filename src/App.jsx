import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/Home';
import MatchDetails from './components/match-details/MatchDetails';
import TeamDetails from './components/team-details/TeamDetails';
import NotFound from './components/not-found/NotFound';

function App() {

    return (
        <>
            <Header/ >

            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/match" element={<MatchDetails />}/>
                    <Route path="/team" element={<TeamDetails />}/>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </>
    )
}

export default App
