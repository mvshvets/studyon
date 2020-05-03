import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.sass'

export const Button = props => {
	const {text} = props
	return <button className={style.button}>{text}</button>
};

Button.propTypes = {
	text: PropTypes.string
}