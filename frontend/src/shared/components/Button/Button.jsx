import React, {useCallback} from 'react'
import PropTypes from 'prop-types';
import style from './Button.module.sass'

export const Button = React.memo(props => {
	const {text, id, className, onClick} = props

	const handleButton = useCallback(() => {
		onClick(id)
	}, [id, onClick])

	return <button className={`${style.button} ${className ? className : ''}`} onClick={handleButton}>{text}</button>
})

Button.propTypes = {
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	id: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func
}