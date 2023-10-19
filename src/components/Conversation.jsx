import styles from "./Conversation.module.css"

const Conversation = ({messages, user}) => {
    const userColor = [
        {color: "red"},
        {color: "orange"},
        {color: "yellow"},
        {color: "green"},
        {color: "cyan"},
        {color: "blue"},
        {color: "purple"}
    ]

    console.log("oi", messages, user)

    return (
        <div>
            <ul className={styles.conversation}>
                {messages.map((message, index) => (
                    <div key={`message-${index}`} className={styles.message}>
                        <li>
                            {/* List Bullet */}
                            <p style={userColor[message.user]}>[{message.user}]: {message.message}</p>
                        </li>
                    </div>
                ))}
                <div id="last-message"></div>
            </ul>

            {/* <div className={styles.lastMessage}>
                <a href="#last-message">Descer Tudo</a>
            </div> */}
        </div>
    )
}

export default Conversation