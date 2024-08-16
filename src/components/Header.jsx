
import Logo from '../assets/img/logo.svg';
import Nav from '../components/Nav'
import AccountBtns from '../components/AccountBtns'

import { CgMenuRight } from 'react-icons/cg';

const Header = ({setNavMobile}) => {
  return <header
  data-aos='fade-down'
  data-aos-delay='900'
  data-aos-duration='2000'
   className=' py-[30px] lg:pt-[60px]'>
    <div className="container mx-auto flex items-center
     justify-between">
      {/* .logo  */}
      <a href="#">
        <img src={Logo} alt="" />
      </a>
      {/* nav & btns  */}
      <div className=' hidden lg:flex gap-x-[55px]'>
        <Nav />
        <AccountBtns />
      </div>

      {/* open nav btn  */}
      <div onClick={()=> setNavMobile(true)} className=' lg:hidden cursor-pointer'>
      <CgMenuRight className=' text-2xl'/>
      </div>
    </div>

  </header>;
};

export default Header;
