import React from 'react';
import PropTypes from 'prop-types';
import style from './H1.module.sass'

export const H1 = props => {
    const {text} = props
    return <h1 className={style.h1}>{text}</h1>
};

H1.propTypes = {
    text: PropTypes.string
}