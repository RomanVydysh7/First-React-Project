import React from 'react'
import style from './Dialogs.module.css'
import Messag from './Messag/Messag'
import DialogItem from './DialogItem/DialogItem'

export const Dialogs = Props => {
	return (
		<div className={style.app_dialogs}>
			<div className={style.dialogs_items}>
				{Props.Names.map(item => (
					<DialogItem id={item.id} name={item.name} />
				))}
			</div>
			<div className={style.messages}>
				{Props.Messages.map(item => (
					<Messag messageSend={item.message} id={item.id} />
				))}
				<div>
					<textarea
						onChange={e => Props.Change(e)}
						value={Props.text}
					></textarea>
				</div>
				<div>
					<button onClick={() => Props.Push()}>Push</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
