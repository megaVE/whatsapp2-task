import styles from "./CurrentConversation.module.css"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CurrentConversation = () => {
    const{id} = useParams();

    const[image, setImage] = useState("imgs/avatar2.png");
    const[name, setName] = useState("");

    const[users] = useState([
        {
            user: "Sabrina Matos",
            id: "dkasndalsknxa"
        },
        {
            user: "João Augusto",
            id: "afdkashdikshd"
        },
        {
            user: "Maria Silva",
            id: "dkasnmdkasdas"
        }
    ]);

    const[conversation] = useState([
        {
            message: "Oi, tudo bem?",
            messageTime: "",
            author: "dkasndalsknxa"
        },
        {
            message: "Cala a boca, puta!",
            messageTime: "",
            author: "dkasndalsasxa"
        }
    ]);

    useEffect(() => {
        const currentName = users.filter(user => user.id === id)
        setName(currentName[0].user)
    }, [id]);

    const changeImage = (id) => {
        setImage(`img_${id}.jpg`)
    }

    return (
        <main className="chat-container">
            <nav className="chat-navbar">
                <div className="contactinfo-container">
                    <img className="user-photo" src={image}/>
                    <p className="user-name">{name}</p>
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
                    {conversation.map((message, key) => (
                        <p key={key} className={message.author === id ? "guest-message" : "user-message"}>{message.message}</p>
                    ))}
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