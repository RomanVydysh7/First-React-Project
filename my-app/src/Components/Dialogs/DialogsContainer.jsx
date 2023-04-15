import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SAND_MESSAGE, UPDATE_NEW_MESSAGE_BODY } from '../../redux/dialogsSlice'
import Dialogs from './Dialogs'

export const DialogsContainer = () => {
	let dispatch = useDispatch()
	let dialogsName = useSelector(state => state.dialogsSlice.dialogsData)
	let dialogsMessage = useSelector(state => state.dialogsSlice.messageData)
	let dialogstext = useSelector(state => state.dialogsSlice.newMessageBody)
	let onPushFunction = () => {
		dispatch(SAND_MESSAGE())
		dispatch(UPDATE_NEW_MESSAGE_BODY(''))
	}
	let onChangeFunction = e => {
		dispatch(UPDATE_NEW_MESSAGE_BODY(e.target.value))
	}

	return (
		<Dialogs
			Names={dialogsName}
			Messages={dialogsMessage}
			text={dialogstext}
			Push={onPushFunction}
			Change={onChangeFunction}
		/>
	)
}

export default DialogsContainer
