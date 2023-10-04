import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

    const [teams, setTeams] = useState([
        {
            id: uuidv4(),
            name: 'Programação',
            color: '#57C278'
        },
        {
            id: uuidv4(),
            name: 'Front-End',
            color: '#82CFFA'
        },
        {
            id: uuidv4(),
            name: 'Data Science',
            color: '#A6D157'
        },
        {
            id: uuidv4(),
            name: 'Devops',
            color: '#E06B69'
        },
        {
            id: uuidv4(),
            name: 'UX e Design',
            color: '#DB6EBF'
        },
        {
            id: uuidv4(),
            name: 'Mobile',
            color: '#FFBA05'
        },
        {
            id: uuidv4(),
            name: 'Inovação e Gestão',
            color: '#FF8A29'
        }
    ])
    
    const [coworkers, setCoworkers] = useState([])

    function deleteCoworker(id) {
        setCoworkers(coworkers.filter(coworker => coworker.id !== id))
    }

    function changeTeamColor(color, id) {
        setTeams(teams.map(team => {
            if (team.id === id) {
                team.color = color
            }
            return team
        }))
    }

    const addTeam = (team) => {
        setTeams([...teams, { ...team, id: uuidv4() }])
    }

    const addCoworker = (coworker) => {
        setCoworkers([...coworkers, coworker])
    }

    return (
        <div className="App">
            <Banner />
            <Form
                recordTeam={addTeam}
                teams={teams.map(team => team.name)}
                recordCoworker={coworker => addCoworker(coworker)}
            />
            <section className='times'>
                <h1>Minha Organização</h1>
                {teams.map((team, index) => <Team
                    changeColor={changeTeamColor}
                    key={index}
                    team={team}
                    coworkers={coworkers.filter(coworker => coworker.team === team.name)}
                    onDelete={deleteCoworker}
                />)}
            </section>
            <Footer />
        </div>
    );
}

export default App;
