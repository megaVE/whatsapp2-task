import styles from "./NewMessage.module.css"

const NewMessage = ({currentMessage, setCurrentMessage, handleSubmit, user, setUser}) => {
    return (
        <form className={styles.message} onSubmit={handleSubmit}>
            <input type="number" name="user" id="user" value={user} onChange={(e) => {setUser(e.target.value)}}/>
            <input type="text" name="message" id="message" placeholder="Envie uma mensagem" value={currentMessage} onChange={(e) => {setCurrentMessage(e.target.value)}}/>
            <input type="submit" value="Enviar"/>
        </form>
    )
}

export default NewMessage