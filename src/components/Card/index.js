import { AiFillCloseCircle } from 'react-icons/ai'
import './Card.css'

const Card = ({ coworker, bgColor, onDelete}) => {
    return (
        <div className='card'>
            <AiFillCloseCircle size={25} className='delete' onClick={onDelete} />
            <div className='header' style={{ backgroundColor: bgColor }}>
                <img src={coworker.image} alt={coworker.name} />
            </div>
            <div className='footer'>
                <h4>{coworker.name}</h4>
                <h5>{coworker.role}</h5>
            </div>
        </div>
    )
}

export default Card