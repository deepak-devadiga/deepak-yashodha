import { useEffect, useState } from 'react';
import './Countdown.scss';

const Countdown = props => {

    const [isMobile, setIsMobile] = useState(props.isMobile);

    useEffect(() => {
        setIsMobile(props.isMobile);
    }, [props.isMobile]);


    const calculateTimeLeft = (dd, mm, yyyy) => {
        let difference = +new Date(`${mm}/${dd}/${yyyy}`).setHours(12, 15, 0) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;

    }
    useEffect(() => {

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(2, 12, 2021));
            if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0)
                clearInterval(timer);
        }, 1000);
        // return () => timer ? timer() : null;
    }, [])
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(2, 12, 2021));
    return <div className={isMobile ? 'countdown-mob-section' : 'countdown-section'}>
        <div className="countdown-title">Join in the celebration of our <span className="highlight">Love</span> & <span className="highlight">Marriage</span></div>
        <div className="countdown-time">
            <div className="days tile">
                {('0' + timeLeft.days).slice(-2)}
                <div className="subtitle">DAYS</div>
            </div>{isMobile ? <span className="time-separator">:</span> : <span className="time-separator">&nbsp; : &nbsp;</span>}
            <div className="hours tile">
                {('0' + timeLeft.hours).slice(-2)}
                <div className="subtitle">HOURS</div>
            </div>{isMobile ? <span className="time-separator">:</span> : <span className="time-separator">&nbsp; : &nbsp;</span>}
            <div className="minutes tile">
                {('0' + timeLeft.minutes).slice(-2)}
                <div className="subtitle">MINUTES</div>
            </div>{isMobile ? <span className="time-separator">:</span> : <span className="time-separator">&nbsp; : &nbsp;</span>}
            <div className="seconds tile">
                {('0' + timeLeft.seconds).slice(-2)}
                <div className="subtitle">SECONDS</div>
            </div>
        </div>
    </div>
}
export default Countdown;
