import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import style from './Button.module.sass'

export const ButtonIcon = React.memo(props => {
	const {icon, view, alt, className, onClick} = props

	const handleButton = useCallback(() => {
		onClick(view)
	}, [view, onClick])

	return <button className={`${style.buttonIcon} ${className ? className : ''}`} onClick={handleButton}>
		<img src={icon} alt={alt} width={40} height={40}/>
	</button>
})

ButtonIcon.propTypes = {
	icon: PropTypes.string.isRequired,
	view: PropTypes.oneOfType(PropTypes.string, PropTypes.object),
	alt: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired
}