import classes from './Header.module.css'

function Header() {
	return (
		<header className={classes.app_header}>
			<img
				src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
				className={classes.logo}
				alt='1'
			/>
		</header>
	)
}

export default Header
