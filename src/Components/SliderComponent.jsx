import { useEffect, useState } from 'react';
import { getDocs, collection} from 'firebase/firestore';
import { db } from '../Services/firebase';
import BeatLoader from "react-spinners/BeatLoader";
import ItemSlider from '../Components/ItemSlider';
import Slider from 'react-slick';
import '../Styles/ItemSlider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function useWindowsSize () {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() =>{
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth])
        }
        window.addEventListener('resize', handleResize)
    }, [])
    return size;
}


function SliderComponent () {
    const [height , width] = useWindowsSize();
    const [slides, setSlides] = useState(3);
    const [propertiesList, setPropertiesList] = useState();
    let colorLoader = '#ffffff';

    useEffect(() => {
        getDocs(collection(db, 'properties')).then((querySnapshot) => {
            const propertiesList = querySnapshot.docs.map(doc => {
                return{id: doc.id, ...doc.data()}
            })
            setPropertiesList(propertiesList)
            if (width <= 1024 && width >=760){
                setSlides(2)
            }else if (width <= 760){
                setSlides(1)
            }
        })
    }, [width])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: slides,
        autoplay: true,
        autoplaySpeed : 4500
    };
    return (
        <div className='container-slider'>
            <h4>| Propiedades</h4>
                <Slider {...settings}>
                    {propertiesList ? propertiesList.map(u => <ItemSlider key={u.id} img={u.img} title={u.title} description={u.description}/>)
                    :
                    <div className='loader-container'>
                        <BeatLoader color={colorLoader} size={100} />
                    </div>
                    }
                </Slider>
        </div>
    );
};
export default SliderComponent;