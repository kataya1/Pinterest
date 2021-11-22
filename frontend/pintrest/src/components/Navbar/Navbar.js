import { library } from '@fortawesome/fontawesome-svg-core'
import { faPinterest} from '@fortawesome/free-brands-svg-icons'
import { faBell,faCommentDots,faSearch,faChevronDown,faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import ButtonFlex from '../Button/ButtonFlex'

import '../Navbar/Navbar.css'
import Searchbox  from '../Searchbox/Searchbox'; 

library.add(faPinterest,faBell,faCommentDots,faSearch,faChevronDown,faUser)


export default function Navbar() {
    
    return (
    <nav>
        <div className='left'>
            <Link to='/'>
                <ButtonFlex buttonStyle="btn--logo"><FontAwesomeIcon icon={['fab', 'pinterest']} size="2x"/></ButtonFlex>
            </Link>
            <Link to='/'>
                <ButtonFlex buttonStyle='btn--text'>Home</ButtonFlex>
            </Link>
        </div>
        <Searchbox></Searchbox>
        <div className='right'>
            <ButtonFlex buttonStyle="btn--icon"><FontAwesomeIcon icon="bell" size="2x"/></ButtonFlex>
            <ButtonFlex buttonStyle="btn--icon"><FontAwesomeIcon icon="comment-dots" size="2x"/></ButtonFlex>
            <Avatar src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80"/>
            <Link to='/settings'>
                <ButtonFlex buttonStyle="btn--down"><FontAwesomeIcon icon="chevron-down"/></ButtonFlex>
            </Link>
        </div>
    </nav>
    )
}
