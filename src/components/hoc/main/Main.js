import GettingThere from '../../getting-there/GettingThere';
import Home from '../../home/Home';
import './Main.scss';
import * as $ from 'jquery';
import { useEffect, useState } from 'react';

const Main = props => {
    const [isMobile, setIsMobile] = useState(props.isMobile);
    useEffect(() => {
        setIsMobile(props.isMobile);
    }, [props.isMobile]);


    if ($("#" + props.routeData.hash).offset() !== undefined)
        $('html, body').animate({
            scrollTop: $("#" + props.routeData.hash).offset().top - 72
        }, 800);
    else
        $('html, body').scrollTop();
    return <main className='main-section'>
        <Home isMobile={isMobile}></Home>
        <GettingThere isMobile={isMobile}></GettingThere>
    </main>
}

export default Main;