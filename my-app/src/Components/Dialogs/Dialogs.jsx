import React from 'react'
import style from './Dialogs.module.css'
import Messag from './Messag/Messag'
import DialogItem from './DialogItem/DialogItem'
import { useDispatch, useSelector } from 'react-redux'

export const Dialogs = Props => {
	let element = React.createRef()
	let dispatch = useDispatch()
	let dialogsName = useSelector(state => state.dialogsReducer.dialogsData)
	let dialogsMessage = useSelector(state => state.dialogsReducer.messageData)
	let dialogstext = useSelector(state => state.dialogsReducer.newMessageBody)
	let onPushFunction = () => {
		dispatch({ type: 'SAND_MESSAGE', payload: element.current.value })
	}
	let onChangeFunction = () => {
		dispatch({
			type: 'UPDATE_NEW_MESSAGE_BODY',
			payload: element.current.value,
		})
	}

	return (
		<div className={style.app_dialogs}>
			<div className={style.dialogs_items}>
				{dialogsName.map(item => (
					<DialogItem id={item.id} name={item.name} />
				))}
			</div>
			<div className={style.messages}>
				{dialogsMessage.map(item => (
					<Messag messageSend={item.message} id={item.id} />
				))}
				<div>
					<textarea
						ref={element}
						onChange={() => onChangeFunction()}
						value={dialogstext}
					></textarea>
				</div>
				<div>
					<button onClick={() => onPushFunction()}>Push</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
