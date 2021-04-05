//import PropTypes from 'prop-types'

const Button = ({ text, color, onClick }) => {
    // const onClick = (e) => {
    //     console.log(e)
    // }
    
    return (
        <div>
            <button 
            className='btn' 
            style={{backgroundColor: color}}
            onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    color: 'green'
}

// Changed button from Add/Close -> FaPlus/FaTimes
// Button.propTypes = {
//     text: PropTypes.string,
//     color: PropTypes.string
// }

export default Button
