import './HeaderMob.scss';
import * as $ from 'jquery';

const HeaderMob = props => {
    $(window).on('scroll', e => {
        if ($(window).scrollTop() > 100)
            toggleClass(true)
        else
            toggleClass(false)
    });

    const toggleClass = isScrolled => {
        $('.headermon-section').removeClass('scrolled');
        if (isScrolled)
            $('.headermob-section').addClass('scrolled');
        else
            $('.headermob-section').removeClass('scrolled');

    }


    return <div className='headermob-section'>
        <i className="fa fa-2x fa-bars" aria-hidden="true" onClick={props.menuClicked}></i>
    </div>
}

export default HeaderMob;