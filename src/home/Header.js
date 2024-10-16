import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import logo from '../assets/logo.png'
import { Button } from 'primereact/button';
const Header=()=>{
    const items = [
        {
            label: 'Explore Projects',
            icon: 'pi pi-home'
        },
        {
            label: 'About Us',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            // items: [
            //     {
            //         label: 'Components',
            //         icon: 'pi pi-bolt'
            //     },
            //     {
            //         label: 'Blocks',
            //         icon: 'pi pi-server'
            //     },
            //     {
            //         label: 'UI Kit',
            //         icon: 'pi pi-pencil'
            //     },
            //     {
            //         label: 'Templates',
            //         icon: 'pi pi-palette',
            //         items: [
            //             {
            //                 label: 'Apollo',
            //                 icon: 'pi pi-palette'
            //             },
            //             {
            //                 label: 'Ultima',
            //                 icon: 'pi pi-palette'
            //             }
            //         ]
            //     }
            // ]
        },
        {
            label: 'Resources',
            icon: 'pi pi-envelope'
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];

    return (
        <div className="d-flex justify-content-between">
            <div className='d-flex'>
            <div id='#logo'>
            <img src={logo} alt="logo" className='logo-img' /></div>
           
            <Menubar model={items} className='px-0'/>
            </div>
            
            <div className="p-3 pe-4 ">
            <Button label="Sign In" className='rounded text-white me-2' text/>
            <Button label="Register" className='rounded register-button' />
        </div>
        </div>
    )
}
export default Header