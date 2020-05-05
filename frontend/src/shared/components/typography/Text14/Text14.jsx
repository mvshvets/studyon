import React from 'react';
import PropTypes from 'prop-types';
import style from './Text14.module.sass'

export const Text14 = React.memo(props => {
    const {text, className} = props
    return <p className={`${style.text14} ${className ? className : ''}`}>{text}</p>
})

Text14.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
}