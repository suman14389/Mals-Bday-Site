import React, {useState} from "react";
import "../Styles/Photos.css"
import oneSrc from "../Images/one.png"
import twoSrc from "../Images/two.png"
import threeSrc from "../Images/three.png"
import fourSrc from "../Images/four.png"
import fiveSrc from "../Images/five.png"
import sixSrc from "../Images/six.png"
import sevenSrc from "../Images/seven.png"
import eightSrc from "../Images/eight.png";
// import { Carousel } from '@trendyol-js/react-carousel';
import Carousel from 'react-elastic-carousel'

const Photos = () => {

    const imageSrcs = [oneSrc, twoSrc, threeSrc, fourSrc, fiveSrc];

    const [leftIndex, setLeftIndex] = useState(1);
    const [rightIndex, setRightIndex] = useState(3);

    console.log("photos");

    return <div className="photos-container">
        <Carousel itemsToShow={2} className="carousel-class">
            <img src={oneSrc} />
            <img src={twoSrc} />
            <img src={threeSrc} />
            <img src={fourSrc} />
            <img src={fiveSrc} />
            <img src={sixSrc} />
            <img src={sevenSrc} />
            <img src={eightSrc} />

        </Carousel>
    </div>
}

export default Photos;