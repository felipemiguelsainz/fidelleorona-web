import '../Styles/speech.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteRight} from '@fortawesome/free-solid-svg-icons'

function Speech () {
    return(
        <div className="speech" id='contact'>
            <div className="icon-container"><FontAwesomeIcon className='icon-quote-right' icon={faQuoteRight}/></div>
            <div className='container-speech'>
            "En un mundo desafiante y en constante cambio, nuestra tarea consiste en brindar un asesoramiento personalizado e integral, adaptado a los intereses de cada cliente"          
            </div>
            <div className='container-author'>
                <p>-Pablo Fidelle y Carolina Orona</p>
            </div>
        </div>
    )
}
export default Speech;