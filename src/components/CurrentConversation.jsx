import styles from "./CurrentConversation.module.css"

import { useState } from "react";

const CurrentConversation = () => {
    const[image, setImage] = useState("");
    const[conversation, setConversation] = useState([]);

    const changeImage = (id) => {
        setImage(`img_${id}.jpg`)
    }

    return (
        <main className="chat-container">
            <nav className="chat-navbar">
                <div className="contactinfo-container">
                    <img className="user-photo" src="imgs/avatar2.png"/>
                    <p className="user-name">Sabrina Matos</p>
                </div>
                <ul className="chattools-container">
                    <li><i className="fas fa-search"></i></li>
                    <li><i className="fas fa-paperclip"></i></li>
                    <li><i className="fas fa-ellipsis-v"></i></li>
                </ul>
            </nav>
            <div className="messages-container">
                <div className="bg-image"></div>
                <div className="chat-messages">
                    <p className="guest-message">Olá, bom dia</p>
                    <p className="user-message">Oi, tudo bem?</p>
                </div>
            </div>
            <div className="sendmessage-container">
                <i className="fas fa-grin"></i>
                <input id="chatmessage" className="userinput" type="text" name="message" placeholder="Digite uma mensagem"/>
                <i className="fas fa-microphone"></i>
            </div>
        </main>
    )
}

export default CurrentConversation