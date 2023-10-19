import { useState } from "react"

import Conversation from "./components/Conversation"
import Header from "./components/Header"
import NewMessage from "./components/NewMessage"
import Sidebar from "./components/Sidebar"

function App() {
	const[user, setUser] = useState(0)
	const[messages, setMessages] = useState([])
	const[currentMessage, setCurrentMessage] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		if(currentMessage !== "") setMessages([...messages, {user, message: currentMessage}])
		setCurrentMessage("")
	}

	return (
		<div style={{backgroundColor: "#111"}}>
			{/* , minHeight: "95vh" */}
			<Sidebar/>

			<div>
				<Header/>

				<div style={{height: "90vh"}}>
					<Conversation messages={messages} user={user}/>
				
					<NewMessage currentMessage={currentMessage} setCurrentMessage={setCurrentMessage} handleSubmit={handleSubmit}
								user={user} setUser={setUser}/>
				</div>
			</div>
		</div>
	)
}

export default App
