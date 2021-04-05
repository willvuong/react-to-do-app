import { getQueriesForElement } from '@testing-library/react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'

import Button from './Button.js'

const Header = ({ title, onShowAddTask, showAdd}) => {
   

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            text={showAdd ? <FaTimes /> : <FaPlus />} 
            color={showAdd? 'red' : 'steelblue'} 
            onClick={onShowAddTask}/>
        </header>
    )
    
}

Header.defaultProps = {
    title: 'To-Do List',
}

Header.propTypes = {
    title: PropTypes.string,
}

// inline CSS in JSX
// const headerStyle = {
//     color: 'red',
//     backgroundColor: 'green'
// }

export default Header
