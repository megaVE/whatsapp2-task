import styles from "./MainPage.module.css"

import ContactBar from "../../components/ContactBar"
import CurrentConversation from "../../components/CurrentConversation"

const MainPage = () => {
  return (
    <div className="container">
        <aside className="sidebar">
            <div className="toolbar-container">
                <img className="user-photo" src="./imgs/avatar1.png" alt="Meu Perfil"/>
                <div className="auxicons-toolbar-container">
                    <i className="fas fa-spinner"></i>
                    <i className="fas fa-comment-alt"></i>
                    <i className="fas fa-ellipsis-v"></i>
                </div>
            </div>
            <div className="notification-container">
                <i className="fas fa-bell-slash"></i>
                <p className="receive-notification">Receba notificações de novas mensagens</p>
                <p className="activate-notification">Ativar notificações na área de trabalho <i className="fas fa-angle-right"></i></p>
            </div>
            <div className="search-container">
                <i id="contact-search" className="fas fa-search"></i>
                <input type="text" name="search" id="search" placeholder="Procurar ou começar uma nova conversa"/>
            </div>
            <ContactBar/>
        </aside>
        <CurrentConversation/>
    </div>
  )
}

export default MainPage