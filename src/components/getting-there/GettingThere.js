import { useEffect } from 'react';
import './GettingThere.scss';
import weddingImg from '../../assets/images/getting-there/wedding-day.png';
import { useInView } from 'react-hook-inview';



const GettingThere = () => {

    const [ref, isVisible] = useInView({
        threshold: 1,
        onEnter: () => {
            clearMarker();
            setTimeout(() => {
                new window.google.maps.Marker({
                    animation: window.google.maps.Animation.DROP,
                    position: { lat: 13.62352048309294, lng: 74.69228982208983 },
                    map,
                    title: "The Wedding Location",
                    icon: weddingImg
                });
            }, 1500)
        }
    })

    let map;
    const initMap = () => {
        map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: 13.62352048309294, lng: 74.69228982208983 },
            zoom: 17.55,
            stylers: [
                {
                    visibility: 'off'
                }
            ]
        });


    };


    const clearMarker = () => {
        new window.google.maps.Marker(null);
    }
    useEffect(() => {
        if (window.google) {
            console.log(window.google)
            initMap();
            clearMarker();
        }
    }, [])
    return <div className='getting-there-section section' id='getting__there__section'>
        <div id='map' ref={ref}></div>
    </div>
}

export default GettingThere;