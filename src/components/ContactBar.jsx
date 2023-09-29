import styles from "./ContactBar.module.css"

import { useState } from "react"

const ContactBar = () => {
  const MAX_CHAR = 30;

  const[contacts, setContacts] = [
    {
      name: "Gabriel",
      id: "dkasndalsknxa",
      lastMessage: "Comprei um vestido novo. Quer ver como ficou?",
      lastMessageTime: "12:30",
      pendingNotifications: 1
    },
    {
      name: "Gabriel",
      id: "dkasndalsknxa",
      lastMessage: "Comprei um vestido novo. Quer ver como ficou?",
      lastMessageTime: "12:30",
      pendingNotifications: 1
    },
    {
      name: "Gabriel",
      id: "dkasndalsknxa",
      lastMessage: "Comprei um vestido novo. Quer ver como ficou?",
      lastMessageTime: "12:30",
      pendingNotifications: 1
    }
  ]

  // Encurta a última mensagem de algum contato, quando necessário, para exibição
  const shortenMessage = (message) => message.split(MAX_CHAR) + "..."

  return (
    <div className="contacts-container">
      <div className="contact-box active-chat">
          <img className="user-photo" src="./imgs/avatar2.png" alt="Contato 1"/>
          <div className="user-info">
              <p className="user-name">Sabrina Matos</p>
              <p className="user-messagepreview"><i className="fas fa-check-double"></i>Oi, tudo bem?</p>
          </div>
          <div className="message-info">
              <p className="message-time">22:40</p>
          </div>
      </div>
      <div className="contact-box">
          <img className="user-photo" src="./imgs/avatar3.png" alt="Contato 2"/>
          <div className="user-info">
              <p className="user-name">João Augusto</p>
              <p className="user-messagepreview">Está disponível para um freela?</p>
          </div>
          <div className="message-info">
              <p className="message-time">12:30</p>
              <p className="message-pending">3</p>
          </div>
      </div>
  </div>
  )
}

export default ContactBar