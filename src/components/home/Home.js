import './Home.scss';


const Home = () => {
    return <div className='home-section section' id='home__section'>
        <div className='home-content'>
            <div className='name'>
                <span className='groom-name'>DEEPAK</span>
                <span className='and'>&nbsp;&&nbsp;</span>
                <span className='bride-name'>YASHODHA</span>
            </div>
            <div className='date'>
                <span className='date-row'>02 December 2021, 12:15 PM | R N  Shetty  Kalyana Bhavana, Kundapura</span>
            </div>
            {/* <div className='save-date'>
                <button className='btn save-the-date' onClick={() => saveDate()}>Save the Date</button>
            </div> */}
        </div>
    </div>
}

export default Home;