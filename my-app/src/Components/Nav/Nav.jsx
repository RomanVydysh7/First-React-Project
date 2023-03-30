import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom'

function Nav() {
	return (
		<nav className={classes.app_nav}>
			<div>
				<NavLink
					to='/profile'
					style={({ isActive }) => ({
						color: isActive ? 'greenyellow' : 'white',
					})}
				>
					Profile
				</NavLink>
			</div>
			<div>
				<NavLink
					to='/message'
					style={({ isActive }) => ({
						color: isActive ? 'greenyellow' : 'white',
					})}
				>
					Message
				</NavLink>
			</div>
			<div>
				<NavLink
					to='/news'
					style={({ isActive }) => ({
						color: isActive ? 'greenyellow' : 'white',
					})}
				>
					News
				</NavLink>
			</div>
			<div>
				<NavLink
					to='/music'
					style={({ isActive }) => ({
						color: isActive ? 'greenyellow' : 'white',
					})}
				>
					Music
				</NavLink>
			</div>
			<div>
				<NavLink
					to='/settings'
					style={({ isActive }) => ({
						color: isActive ? 'greenyellow' : 'white',
					})}
				>
					Settings
				</NavLink>
			</div>
		</nav>
	)
}

export default Nav
