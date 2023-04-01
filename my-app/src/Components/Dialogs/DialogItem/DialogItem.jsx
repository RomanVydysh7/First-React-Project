import React from 'react'
import style from './DialogsItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = Props => {
	let path = '/message/' + Props.id
	return (
		<div className={style.dialog}>
			<NavLink to={path}>{Props.name}</NavLink>
		</div>
	)
}

export default DialogItem
