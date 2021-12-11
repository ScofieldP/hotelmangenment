import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import Submenu from './SubMenu'
import { IconContext } from 'react-icons/lib'


const Nav = styled.div`
    background: #15171c;
    height:80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.div`
    background: #15171c;
    width:300px;
    height: 200vh;
    display: flex;
    justify-content:center;
    position:fixed;
    top:0;
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        display: none;
    }

`;
const SidebarWrap = styled.div`
    width:100%;
`;

/*bar */
const NavIcon = styled(Link)`
    margin-left:320px;
    font-size:12px;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration:none;
    color:#fff
`
const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
         <Nav>
           <NavIcon to='#'>
               <h1>Quản lý khách sạn</h1>
           </NavIcon>
          </Nav>
          <SidebarNav sidebar ={sidebar} >
              <SidebarWrap>
              <NavIcon to='#'>
           </NavIcon>
           {SidebarData.map((item, index)=>{
                return<Submenu item={item} key={index} />;
           })}
             </SidebarWrap>
          </SidebarNav>
          </IconContext.Provider>
        </>
    );
};

export default Sidebar
