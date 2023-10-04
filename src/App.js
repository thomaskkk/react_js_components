import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

    const [teams, setTeams] = useState([
        {
            name: 'Programação',
            color: '#57C278'
        },
        {
            name: 'Front-End',
            color: '#82CFFA'
        },
        {
            name: 'Data Science',
            color: '#A6D157'
        },
        {
            name: 'Devops',
            color: '#E06B69'
        },
        {
            name: 'UX e Design',
            color: '#DB6EBF'
        },
        {
            name: 'Mobile',
            color: '#FFBA05'
        },
        {
            name: 'Inovação e Gestão',
            color: '#FF8A29'
        }
    ])
    
    const [coworkers, setcoworkers] = useState([])

    function deleteCoworker() {
        console.log('deletando colaborador')
    }

    function changeTeamColor(color, name) {
        setTeams(teams.map(team => {
            if (team.name === name) {
                team.color = color
            }
            return team
        }))
    }

    const addCoworker = (coworker) => {
        setcoworkers([...coworkers, coworker])
    }

    return (
        <div className="App">
            <Banner />
            <Form teams={teams.map(team => team.name)} recordCoworker={coworker => addCoworker(coworker)} />
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
