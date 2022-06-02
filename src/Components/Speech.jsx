import '../Styles/speech.css'

function Speech () {
    return(
        <div className="speech">
            <div className='container-speech'>
            "Original y con una comprensión innata de las necesidades de sus clientes, 
            siempre es un placer trabajar con el equipo de Love Nature".            
            </div>
            <div className='container-photo'>
                <img src={require('../img/face.png')} alt="Face" />
            </div>
        </div>
    )
}
export default Speech;