import Card from '../Card'
import './Team.css'

const Team = ({ team, coworkers, onDelete }) => {
    return (
        (coworkers.length > 0) && <section className='team' style={{ backgroundImage: 'url(/img/fundo.png)', backgroundColor: team.secondaryColor }}>
            <h3 style={{ borderColor: team.primaryColor }}>{team.name}</h3>
            <div className='coworkers'>
                {coworkers.map((coworker, index) => {
                    return (
                        <Card bgColor={team.primaryColor} key={index}coworker={coworker} onDelete={onDelete} />
                    )
                })}
            </div>
        </section>
    )
}

export default Team