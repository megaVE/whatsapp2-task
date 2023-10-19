import styles from "./Sidebar.module.css"

const Sidebar = () => {
    const contacts = [0, 1, 2, 3, 4, 5, 6]

    return (
        <aside className={styles.sidebar}>
            <h3>Meus Contatos</h3>
            <nav>
                {contacts.map((contact, index) => (
                    <div key={`contact-${index}`} className={styles.contact}>
                        <a href="">Contato {contact}</a>
                    </div>
                ))}
                <div className={`${styles.contact} ${styles.active}`}>
                    <a href="">Contato 7</a>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar