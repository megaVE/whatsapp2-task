import styles from "./ContactBar.module.css"

import img_dkasndalsknxa from "./img/avatar2.png"
import img_afdkashdikshd from "./img/avatar3.png"
import img_dkasnmdkasdas from "./img/avatar4.png"

import { useState } from "react"
import { NavLink, useParams } from "react-router-dom";

const ContactBar = () => {
  const MAX_CHAR = 30;

  const {id} = useParams();

  const[contacts, setContacts] = useState([
    {
      name: "Sabrina Matos",
      id: "dkasndalsknxa",
      image: img_dkasndalsknxa,
      lastMessage: "Oi, tudo bem?",
      lastMessageStatus: "double check",
      lastMessageTime: "22:40",
      pendingNotifications: 0,
    },
    {
      name: "João Augusto",
      id: "afdkashdikshd",
      image: img_afdkashdikshd,
      lastMessage: "Está disponível para um freela?",
      lastMessageTime: "12:30",
      pendingNotifications: 3
    },
    {
      name: "Maria Silva",
      id: "dkasnmdkasdas",
      image: img_dkasnmdkasdas,
      lastMessage: "O projeto ficou perfeito, obrigada!",
      lastMessageTime: "8:20",
      pendingNotifications: 5
    }
  ])

  // Encurta a última mensagem de algum contato, quando necessário, para exibição
  const shortenMessage = (message) => message.split(MAX_CHAR) + "..."

  // const tempot = require(`./img/avatar2.png`)
  
  return (
    <div className="contacts-container">
      {contacts.map((contact, key) => (
      <NavLink to={`/${contact.id}`}>
        <div key={key} className={contact.id === id ? "contact-box active-chat" : "contact-box"}>
          <img className="user-photo"
           src={contact.image}
           alt={`Contato ${key}`}
          />
          <div className="user-info">
              <p className="user-name">{contact.name}</p>
              <p className="user-messagepreview">
                {contact?.lastMessageStatus === "double check" && <i className="fas fa-check-double"></i>}
                {contact.lastMessage}</p>
          </div>
          <div className="message-info">
              <p className="message-time">{contact.lastMessageTime}</p>
              {contact.pendingNotifications !== 0 && <p className="message-pending">{contact.pendingNotifications}</p>}
          </div>
        </div>
      </NavLink>
      ))}
  </div>
  )
}

export default ContactBar