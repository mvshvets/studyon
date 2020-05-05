import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import style from './Button.module.sass'

export const ButtonIcon = React.memo(props => {
	const {icon, view, alt, size, className, onClick, ...restProps} = props

	const handleButton = useCallback(() => {
		onClick(view)
	}, [view, onClick])

	return <button className={`${style.buttonIcon} ${className ? className : ''}`} onClick={handleButton} {...restProps}>
		<img src={icon} alt={alt} width={size} height={size}/>
	</button>
})

ButtonIcon.propTypes = {
	icon: PropTypes.string.isRequired,
	view: PropTypes.oneOfType(PropTypes.string, PropTypes.object),
	alt: PropTypes.string,
	size: PropTypes.number,
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired
}