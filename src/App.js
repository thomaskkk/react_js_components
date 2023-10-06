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

    const inicial = [
        {
            id: uuidv4(),
            fav: false,
            name: 'JULIANA AMOASEI',
            role: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[0].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'DANIEL ARTINE',
            role: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[0].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'GUILHERME LIMA',
            role: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[0].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'PAULO SILVEIRA',
            role: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[0].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'JULIANA AMOASEI',
            role: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[1].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'DANIEL ARTINE',
            role: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[1].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'GUILHERME LIMA',
            role: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[1].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'PAULO SILVEIRA',
            role: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[1].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'JULIANA AMOASEI',
            role: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[2].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'DANIEL ARTINE',
            role: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[2].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'GUILHERME LIMA',
            role: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[2].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'PAULO SILVEIRA',
            role: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[2].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'JULIANA AMOASEI',
            role: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[3].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'DANIEL ARTINE',
            role: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[3].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'GUILHERME LIMA',
            role: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[3].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'PAULO SILVEIRA',
            role: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[3].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'JULIANA AMOASEI',
            role: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[4].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'DANIEL ARTINE',
            role: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[4].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'GUILHERME LIMA',
            role: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[4].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'PAULO SILVEIRA',
            role: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[4].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'JULIANA AMOASEI',
            role: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[5].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'DANIEL ARTINE',
            role: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[5].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'GUILHERME LIMA',
            role: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[5].name
        },
        {
            id: uuidv4(),
            fav: false,
            name: 'PAULO SILVEIRA',
            role: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[5].name
        },
    ]

    const [coworkers, setCoworkers] = useState(inicial)

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

    function setFav(id) {
        setCoworkers(coworkers.map(coworker => {
            if (coworker.id === id) coworker.fav = !coworker.fav
            return coworker
        }))
    }

    const addTeam = (team) => {
        setTeams([...teams, { ...team, id: uuidv4() }])
    }

    const addCoworker = (coworker) => {
        setCoworkers([...coworkers, coworker])
    }

    return (
        <div>
            <Banner />
            <Form
                recordTeam={addTeam}
                teams={teams.map(team => team.name)}
                recordCoworker={coworker => addCoworker(coworker)}
            />
            <section className='teams'>
                <h1>Minha Organização</h1>
                {teams.map((team, index) => <Team
                    changeColor={changeTeamColor}
                    key={index}
                    team={team}
                    coworkers={coworkers.filter(coworker => coworker.team === team.name)}
                    onDelete={deleteCoworker}
                    onFav={setFav}
                />)}
            </section>
            <Footer />
        </div>
    );
}

export default App;
