import { useEffect, useState } from 'react'
import { getDocs, collection} from 'firebase/firestore'
import { db } from '../Services/firebase'
import ItemSlider from '../Components/ItemSlider'
import Slider from 'react-slick';
import '../Styles/ItemSlider.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SliderComponent () {
    const [propertiesList, setPropertiesList] = useState()
    useEffect(() => {
        getDocs(collection(db, 'properties')).then((querySnapshot) => {
            const propertiesList = querySnapshot.docs.map(doc => {
                return{id: doc.id, ...doc.data()}
            })
            setPropertiesList(propertiesList)
        })
    }, [])
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed : 2500
    };
    return (
        <div className='container-slider'>
            <h3>Propiedades</h3>
                <Slider {...settings}>
                    {propertiesList ? propertiesList.map(u => <ItemSlider key={u.id} img={u.img} title={u.title} description={u.description}/>): <div>Hola</div>}
                </Slider>
        </div>
    );
};
export default SliderComponent;