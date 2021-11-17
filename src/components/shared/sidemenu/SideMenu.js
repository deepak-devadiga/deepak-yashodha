import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './SideMenu.scss';
import * as $ from 'jquery';

const SideMenu = props => {
    const [isOpened, setIsOpened] = useState(props.isOpened);
    useEffect(() => {
        setIsOpened(!props.isOpened);
        toggleSideMenu();
    }, [props]);

    const toggleSideMenu = () => {
        console.log(isOpened);
        if (isOpened)
            $('.sidemenu-section').animate({
                'left': '0vw'
            });
        else
            $('.sidemenu-section').animate({
                'left': '-83vw'
            });
    }
    return <div className='sidemenu-section'>Sidemenu</div>
}

export default SideMenu;