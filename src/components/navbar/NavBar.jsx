import React, {useState} from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Logo from '../../assets/Logo.svg'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT3?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <img src={Logo} className='navbar-logo' alt='logo' />
        <div className='navbar-container1'>
          <Menu />
        </div>
      </div>
      <div className='navbar-sign'>
        <p>Sign in</p>
        <button>Sign up</button>
      </div>
      <div className='navbar-menu-sm'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        { toggleMenu && (
          <div className='navbar-container2 scale-up-center'>
            <div className='navbar-container2_links'>
              <Menu />
              <div className='navbar-container2_sign'>
                <p>Sign in</p>
                <button className='navbar-container2_btn'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar