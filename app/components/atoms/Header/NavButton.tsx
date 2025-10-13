import React from 'react';
import { Menu } from 'antd';

const NavButton = () =>{
    return (
        <Menu mode ="horizontal" items={[
            {key : "1", label : "Inicio"},
            {key : "2", label : "Perfil"},
            {key : "3", label : "Logros"}
        ]}>

        </Menu>
    )
}
export default NavButton;