import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

    const teams = [
        {
            name: 'Programação',
            secondaryColor: '#D9F7E9',
            primaryColor: '#57C278'
        },
        {
            name: 'Front-End',
            secondaryColor: '#E8F8FF',
            primaryColor: '#82CFFA'
        },
        {
            name: 'Data Science',
            secondaryColor: '#F0F8E2',
            primaryColor: '#A6D157'
        },
        {
            name: 'Devops',
            secondaryColor: '#FDE7E8',
            primaryColor: '#E06B69'
        },
        {
            name: 'UX e Design',
            secondaryColor: '#FAE9F5',
            primaryColor: '#DB6EBF'
        },
        {
            name: 'Mobile',
            secondaryColor: '#FFF5D9',
            primaryColor: '#FFBA05'
        },
        {
            name: 'Inovação e Gestão',
            secondaryColor: '#FFEEDF',
            primaryColor: '#FF8A29'
        }
    ]
    
    const [coworkers, setcoworkers] = useState([])

    function deleteCoworker() {
        console.log('deletando colaborador')
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
