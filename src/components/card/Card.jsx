import './style.css'

const Card = (props) => {
    return (
        <div className='card'>
            <i class={props.icon}></i>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Card