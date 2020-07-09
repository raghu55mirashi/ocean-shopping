import styled from 'styled-components'

import { Link } from 'react-router-dom'


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    position:fixed;
    z-index:100;
    top:0;
    left:0;
    background: #20002c;  
    background: -webkit-linear-gradient(to left, #cbb4d4, #20002c);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #cbb4d4, #20002c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    @media screen and (max-width: 800px){
        height: 60px;
        padding: 10px;
    }
`
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 10px 25px;

    @media screen and (max-width: 800px){
        width:50px;
        padding: 0;
    }
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px){
        width: 80%;
    }
`

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    color: #fff;
`
