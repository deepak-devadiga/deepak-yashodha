import GettingThere from '../../getting-there/GettingThere';
import Home from '../../home/Home';
import './Main.scss';
import * as $ from 'jquery';

const Main = props => {
    if ($("#" + props.routeData.hash).offset() !== undefined)
        $('html, body').animate({
            scrollTop: $("#" + props.routeData.hash).offset().top
        }, 1000);
    else
        $('html, body').scrollTop();
    return <main className='main-section'>
        <Home></Home>
        <GettingThere></GettingThere>
    </main>
}

export default Main;