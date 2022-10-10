import { Fragment, useContext } from 'react';
import {Outlet, Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';


const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null)
  }




  return(
    <Fragment>
      <NavigationContainer>
      <LogoContainer to='/'>
        <p className='logo'>Logo</p> 
        </LogoContainer>
        <NavLinks>
         <NavLink to='/shop'>
            SHOP
         </NavLink>
         {currentUser ? (
            <NavLink as='span' onClick={signOutHandler}>
              {' '}
              SIGN OUT{' '}
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;