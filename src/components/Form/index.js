import './Form.css'
import Field from '../Field';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';

const Form = ({ recordCoworker, teams, recordTeam }) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [nameTeam, setNameTeam] = useState('')
    const [colorTeam, setColorTeam] = useState('')

    const onSaveTeam = (event) => {
        event.preventDefault()
        recordTeam({ name: nameTeam, color: colorTeam })
    }

    const onSaveCoworker = (event) => {
        event.preventDefault()
        recordCoworker({
            name,
            role,
            image,
            team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSaveCoworker}>
                <h3>Preencha os dados para criar o card do colaborador</h3>
                <Field
                    required
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={value => setName(value)}
                />
                <Field
                    required 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={role}
                    onChange={value => setRole(value)}
                />
                <Field
                    required
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChange={value => setImage(value)}
                /> 
                <Dropdown
                    required
                    label="Time"
                    itens={teams}
                    value={team}
                    onChange={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
            <form onSubmit={onSaveTeam}>
                <h3>Preencha os dados para criar o time</h3>
                <Field
                    required
                    label="Nome"
                    placeholder="Digite o nome do time"
                    value={nameTeam}
                    onChange={value => setNameTeam(value)}
                />
                <Field
                    required 
                    type='color'
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    value={colorTeam}
                    onChange={value => setColorTeam(value)}
                />
                <Button>
                    Criar Time
                </Button>
            </form>
        </section>

    )
}

export default Form