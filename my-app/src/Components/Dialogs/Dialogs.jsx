import React from 'react'
import style from './Dialogs.module.css'
import Messag from './Messag/Messag'
import DialogItem from './DialogItem/DialogItem'
import { onChangeMessage, onPushMessage } from '../../redux/state'

export const Dialogs = Props => {
	let element = React.createRef()
	let onChangeFunction = e => {
		let text = e.target.value
		Props.store.dispatch(onChangeMessage(text))
	}
	let onPushFunction = () => {
		Props.store.dispatch(onPushMessage())
		Props.store.dispatch(onChangeMessage(''))
	}

	return (
		<div className={style.app_dialogs}>
			<div className={style.dialogs_items}>
				{Props.store._state.dialogsPage.dialogsData.map(item => (
					<DialogItem id={item.id} name={item.name} />
				))}
			</div>
			<div className={style.messages}>
				{Props.store._state.dialogsPage.messageData.map(item => (
					<Messag messageSend={item.message} id={item.id} />
				))}
				<div>
					<textarea
						ref={element}
						onChange={onChangeFunction}
						value={Props.store._state.dialogsPage.newMessageBody}
					></textarea>
				</div>
				<div>
					<button onClick={onPushFunction}>Push</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
