import classes from './Nav.module.css'

function Nav() {
	return (
		<nav className={classes.app_nav}>
			<div>
				<a href='#'>Profile</a>
			</div>
			<div>
				<a href='#'>Message</a>
			</div>
			<div>
				<a href='#'>News</a>
			</div>
			<div>
				<a href='#'>Music</a>
			</div>
			<div>
				<a href='#'>Settings</a>
			</div>
		</nav>
	)
}

export default Nav
