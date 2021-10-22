import './Header.scss';
import * as headerData from './Header.json';
import * as $ from 'jquery';

const Header = props => {

    const header = headerData.headerContent;

    $(window).on('scroll', e => {
        if ($(window).scrollTop() > 100)
            toggleClass(true)
        else
            toggleClass(false)
    });

    const toggleClass = isScrolled => {
        $('.header-section').removeClass('scrolled');
        if (isScrolled)
            $('.header-section').addClass('scrolled');
        else
            $('.header-section').removeClass('scrolled');

    }

    return <div className='header-section'>
        {
            header.map(h => <div key={h.id + '__header-tab'} className='header-tab' onClick={() => props.selectedOpt(h)}>{h.title}</div>)
        }
    </div>
}

export default Header;