import React from 'react';
import { Link } from 'react-router-dom';

//import { ReactComponent as Logo} from '../../assets/tree.svg';

import './header.styles.scss';

const Header = ()=>(
    <div className='header'>
   
    <div className='options'>
    <Link className='option' to='/shop'>
    SHOP
    </Link>
    <Link className='option' to='/shop'>
    CONTACT
    </Link>
    </div>
    </div>
)

export default Header;