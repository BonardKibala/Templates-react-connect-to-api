import styled from 'styled-components';
// import {NavLink as Link} from 'react-router-dom';
import {Link} from 'react-scroll'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
background-color : #000;
width: 100%;
height: 80px;
display: flex;
justifyContent: space-between;
padding : 0.5rem calc ((100vw-1000px)/2);
position: fixed;
z-index: 10;
`
export const NavLink = styled(Link)`
color : #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
//color:#15cdfc;
}
&:hover{
    color: red;
}
`
export const Bars = styled(FaBars)`
display: none;
color: #fff;
margin-top: 1.6rem;
margin-right: 1rem;
@media screen and (max-width:768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-100%,75%);
    font-size: 2.2rem;
    cursor: pointer;
    text-align: center;
    
}
`
export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-left:55rem;
@media screen and (max-width: 768px){
    display: none;
}

`