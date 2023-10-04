import Card from '../Card'
import './Team.css'
import hexToRgba from 'hex-to-rgba';

const Team = ({ team, coworkers, onDelete, changeColor }) => {
    return (
        (coworkers.length > 0) && <section className='team' style={{ backgroundImage: 'url(/img/fundo.png)', backgroundColor: hexToRgba(team.color, '0.6') }}>
            <input onChange={event => changeColor(event.target.value, team.id)} value={team.color} type="color" className='input-color' />
            <h3 style={{ borderColor: team.color }}>{team.name}</h3>
            <div className='coworkers'>
                {coworkers.map((coworker, index) => {
                    return (
                        <Card bgColor={team.color} key={index}coworker={coworker} onDelete={onDelete} />
                    )
                })}
            </div>
        </section>
    )
}

export default Team