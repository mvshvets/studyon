import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.sass'

export const Button = props => {
	const {text, className} = props
	return <button className={`${style.button} ${className ? className : ''}`}>{text}</button>
};

Button.propTypes = {
	text: PropTypes.object,
	className: PropTypes.string
}