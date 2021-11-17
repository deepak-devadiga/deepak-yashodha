import { useEffect, useState } from 'react';
import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';
import Main from '../main/Main';
import './Layout.scss';
import * as $ from 'jquery';
import HeaderMob from '../../shared/header/HeaderMob';
import SideMenu from '../../shared/sidemenu/SideMenu';

const Layout = () => {
    const [routeData, setRouteData] = useState({
        "title": "HOME",
        "id": 0,
        "hash": "home__section"
    });
    const [isOpened, setIsOpened] = useState(false);
    $('html, body').scrollTop();
    const selectedOption = opt => {
        console.log(opt);
        setRouteData(opt);
    }

    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile = (width <= 768);

    const menuClicked = () => {
        setIsOpened(!isOpened)
        console.log('menu clicked ', isOpened)
    }

    return <div className='layout-section'>
        {isMobile ? <HeaderMob menuClicked={() => menuClicked()} /> : <Header selectedOpt={opt => selectedOption(opt)} />}
        {isMobile ? <SideMenu isOpened={isOpened} /> : null}
        <Main routeData={routeData} isMobile={isMobile}>
        </Main>
        <Footer></Footer>
    </div>
}

export default Layout;