import React from 'react'
import style from '../Dialogs.module.css'

const Messag = Props => {
	return (
		<div className={style.message} id={Props.id}>
			{Props.messageSend}
		</div>
	)
}

export default Messag
