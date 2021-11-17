import { useEffect, useState } from 'react';
import './GettingThere.scss';
import cal from '../../assets/images/getting-there/wedding-day.png';
import Countdown from '../countdown/Countdown';


/**
   * A customized popup on the map.
   */
class Popup extends window.google.maps.OverlayView {
    position;
    containerDiv;
    constructor(position, content) {
        console.log(position, content);
        super();
        this.position = position;
        content.classList.add("popup-bubble");

        // This zero-height div is positioned at the bottom of the bubble.
        const bubbleAnchor = document.createElement("div");

        bubbleAnchor.classList.add("popup-bubble-anchor");
        bubbleAnchor.appendChild(content);
        // This zero-height div is positioned at the bottom of the tip.
        this.containerDiv = document.createElement("div");
        this.containerDiv.classList.add("popup-container");
        this.containerDiv.appendChild(bubbleAnchor);
        // Optionally stop clicks, etc., from bubbling up to the map.
        Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
    }
    /** Called when the popup is added to the map. */
    onAdd() {
        this.getPanes().floatPane.appendChild(this.containerDiv);
    }
    /** Called when the popup is removed from the map. */
    onRemove() {
        if (this.containerDiv.parentElement) {
            this.containerDiv.parentElement.removeChild(this.containerDiv);
        }
    }
    /** Called each frame when the popup needs to draw itself. */
    draw() {
        const divPosition = this.getProjection().fromLatLngToDivPixel(
            this.position
        );
        // Hide the popup when it is far out of view.
        const display =
            Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
                ? "block"
                : "none";

        if (display === "block") {
            this.containerDiv.style.left = divPosition.x + "px";
            this.containerDiv.style.top = divPosition.y + "px";
        }

        if (this.containerDiv.style.display !== display) {
            this.containerDiv.style.display = display;
        }
    }
}


const GettingThere = props => {

    const [isMobile, setIsMobile] = useState(props.isMobile);

    useEffect(() => {
        setIsMobile(props.isMobile);
    }, [props.isMobile]);


    useEffect(() => {
        if (window.google) {
            // initMap();
            let map = new window.google.maps.Map(document.getElementById("map"), {
                center: { lat: 13.62352048309294, lng: 74.69228982208983 },
                zoom: 17.55,
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            });
            let counter = 0;
            const intervalRef = setInterval(() => {
                const contentRef = document.getElementById("map-content");
                console.log('fetching...', contentRef);
                if (counter >= 10)
                    clearInterval(intervalRef);
                if (contentRef) {
                    console.log('fetched', contentRef);
                    clearInterval(intervalRef);
                    let popup = new Popup(
                        new window.google.maps.LatLng(13.62352048309294, 74.69228982208983),
                        document.getElementById("map-content")
                    );
                    popup.setMap(map);
                }
                counter++;
            }, 1000)


        }
    }, []);

    return <div id='getting__there__section'>
        <Countdown isMobile={isMobile}></Countdown>
        <div className='getting-there-section section'  >
            <div id='map'></div>
            <div id="map-content">
                <div className="image-map">
                    <img src={cal} alt='calendar icon' loading="lazy" />
                </div>
                <div className="desc-map">
                    <div>Deepak <span className='separator-text'>&#9829;</span> Yashodha</div>
                    <div><small>December 02, 2021 | 12:15 PM</small></div>
                </div>
            </div>
        </div>
    </div>
}

export default GettingThere;