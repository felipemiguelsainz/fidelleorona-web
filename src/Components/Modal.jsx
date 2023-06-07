import { useState } from "react"
import "../Styles/Modal.css"
import { FaWhatsapp } from "react-icons/fa"
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { BiExit } from "react-icons/bi"

function Modal (props) {
    console.log(props.status)
    return(
    <div>
    {props.status ? (
    <div  onClick={() => {props.setStatus(false)}} className="modal-background">
        <div className="modal-container">
            <div className="modal-styled">
                <div id="sideA-modal">
                    <h3>Contactos</h3>
                    <div className="contact-link">
                        <div className="contact-icon"><FaWhatsapp/></div>
                        <div className="contact-text">+54 9 11 3063-3049</div>
                    </div>
                    <div className="contact-link">
                        <div className="contact-icon"><AiOutlineMail/></div>
                        <div className="contact-text">Mail</div>
                    </div>
                    <div className="contact-link">
                        <div className="contact-icon"><AiOutlinePhone/></div>
                        <div className="contact-text">Mobile phone</div>
                    </div>
                </div>
                <div id="sideB-modal">
                    <h3>Mail Form</h3>
                </div>
            </div>
        </div>
        <div id="quit-button"><BiExit/></div>
    </div>) : 
    (
        <div></div>
    )}
    </div>
    )
}
export default Modal