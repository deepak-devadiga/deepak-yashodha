import { useState } from 'react';
import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';
import Main from '../main/Main';
import './Layout.scss';
import * as $ from 'jquery';

const Layout = () => {
    const [routeData, setRouteData] = useState({
        "title": "HOME",
        "id": 0,
        "hash": "home__section"
    });
    $('html, body').scrollTop();
    const selectedOption = opt => {
        console.log(opt);
        setRouteData(opt);
    }
    return <div className='layout-section'>
        <Header selectedOpt={opt => selectedOption(opt)}></Header>
        <Main routeData={routeData}>
        </Main>
        <Footer></Footer>
    </div>
}

export default Layout;