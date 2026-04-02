import { useEffect, useRef, useState } from "react";

const CarouselTask = () => {
    const images = ['../../../src/assets/image1.png', '../../../src/assets/image2.png', '../../../src/assets/image3.png', '../../../src/assets/image4.png', '../../../src/assets/image5.png', '../../../src/assets/image6.png']
    const [index, setIndex] = useState(0);
    const timer = useRef<number | undefined>(undefined);
    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const start = () => {
        timer.current = setInterval(nextImage, 3000);
    }
    const stop = () => clearInterval(timer.current);
    useEffect(() => {
        start();
        return () => stop();
    }, [index]);

    const pause = () => stop();
    const resume = () => start();
    return (
        <div>
            <h1>Carousel Task</h1>
            <div
                onMouseEnter={pause}
                onMouseLeave={resume}
                onTouchStart={pause}
                onTouchEnd={resume}
                style={{ cursor: 'pointer' }}>

                <img key={index} src={images[index]} alt={`image-${index}`} style={{ width: '100%' }} />

            </div>
        </div>
    );
};

export default CarouselTask;
