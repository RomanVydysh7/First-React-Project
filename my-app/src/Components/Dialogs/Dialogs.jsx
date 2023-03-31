import React from 'react'
import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = Props => {
	let path = '/message/' + Props.id
	return (
		<div className={style.dialog}>
			<NavLink to={path}>{Props.name}</NavLink>
		</div>
	)
}

const Messag = Props => {
	return (
		<div className={style.message} id={Props.id}>
			{Props.messageSend}
		</div>
	)
}

let dialogsData = [
	{ name: 'Roman', id: 1 },
	{ name: 'Andriy', id: 2 },
	{ name: 'Diana', id: 3 },
	{ name: 'Yulia', id: 4 },
	{ name: 'Stepan', id: 5 },
]
let messageData = [
	{ message: 'hi', id: 1 },
	{ message: 'how are you?', id: 2 },
	{ message: 'I`m fine', id: 3 },
	{ message: 'Hello', id: 4 },
	{ message: 'bye', id: 5 },
]

export const Message = () => {
	return (
		<div className={style.app_dialogs}>
			<div className={style.dialogs_items}>
				{dialogsData.map(item => (
					<DialogItem id={item.id} name={item.name} />
				))}
			</div>
			<div className={style.messages}>
				{messageData.map(item => (
					<Messag messageSend={item.message} id={item.id} />
				))}
			</div>
		</div>
	)
}

export default Message
