import '../Styles/ItemSlider.css'

function ItemSlider (props) {
    return (
        <div className="component-slider">
            <div className='children-slider'>
                <div className='img-container'>
                    <img className='img-component' src={props.img} alt=""/>
                </div>
                <div className='text-container'>
                    <h5>{props.title}</h5>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}
export default ItemSlider;