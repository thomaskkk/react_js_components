import { AiFillCloseCircle } from 'react-icons/ai'
import './Card.css'

const Card = ({ coworker, bgColor, onDelete}) => {
    return (
        <div className='card'>
            <AiFillCloseCircle
                size={25}
                className='card-delete'
                onClick={() => onDelete(coworker.id)}
            />
            <div className='card-header' style={{ backgroundColor: bgColor }}>
                <img src={coworker.image} alt={coworker.name} />
            </div>
            <div className='card-footer'>
                <h4>{coworker.name}</h4>
                <h5>{coworker.role}</h5>
            </div>
        </div>
    )
}

export default Card