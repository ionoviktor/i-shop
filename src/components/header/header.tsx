
import { Link } from 'react-router';

import logo from '../../assets/img/logo.svg'
import cart from '../../assets/img/cart.svg';


export const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />

            <Link to={'/cart'}>
                <img src={cart} className='headerCart' alt="btn" />
            </Link>

        </div>
    )
}
