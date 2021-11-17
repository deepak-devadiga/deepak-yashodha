import { useEffect, useState } from 'react';
import './Home.scss';
import * as $ from 'jquery';


const Home = props => {

    const [isMobile, setIsMobile] = useState(props.isMobile);

    useEffect(() => {
        setIsMobile(props.isMobile);
    }, [props.isMobile]);


    return <div className={isMobile ? 'home-mob-section section' : 'home-section section'} id='home__section'>
        <div className='home-content'>
            <div className='name'>
                <span className='groom-name'>DEEPAK</span>
                <span className='and'>&nbsp;&&nbsp;</span>
                <span className='bride-name'>YASHODHA</span>
            </div>
            <div className='date'>
                <span className='date-row'>02 December 2021, 12:15 PM | R N  Shetty  Kalyana Bhavana, Kundapura</span>
            </div>
            <div className="arrow bounce">
                <a className="fa fa-chevron-down fa-2x" href="#"></a>
            </div>
            <div className="arrow1 bounce">
                <a className="fa fa-chevron-down fa-2x" href="#"></a>
            </div>
            <div className='next-section'>GETTING THERE</div>
        </div>

    </div>
}

export default Home;