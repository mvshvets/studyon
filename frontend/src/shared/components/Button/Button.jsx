import React, {useCallback} from 'react'
import PropTypes from 'prop-types';
import style from './Button.module.sass'

export const Button = React.memo(props => {
	const {text, className, onClick} = props

	const handleButton = useCallback(() => {
		console.log(text)
		if ( typeof text === 'string' ) onClick(text)
		//onClick(text.props.text)
	}, [text, onClick])

	return <button className={`${style.button} ${className ? className : ''}`} onClick={handleButton}>{text}</button>
})

Button.propTypes = {
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func
}