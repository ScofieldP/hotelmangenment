import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from './Sidebar'
const SidebarLink = styled(Link)`
    display: flex;  
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding:10px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover{
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor:pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;

`;

const DropdownLink = styled(Link)`

    background: #414757;
    height: 60px;
    padding:25px;
    display:flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size:18px;


    &:hover { 
        background:#632ce4;
        cursor:pointer;
    }
`
   
const Submenu = ({item}) => {
    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)
    return(
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpen : item.subNav ? item.iconClose : null}
                </div>
            </SidebarLink>
         {subnav && item.subNav.map((item, index) =>{
             return(
                <DropdownLink to ={item.path} key ={index}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
             )
         })}
                
        </>
    );
};
export default Submenu