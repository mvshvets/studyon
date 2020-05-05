import React from 'react';
import PropTypes from 'prop-types';
import style from './Text18.module.sass'

export const Text18 = React.memo(props => {
    const {text, className} = props
    return <p className={`${style.text18} ${className ? className : ''}`}>{text}</p>
})

Text18.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
}