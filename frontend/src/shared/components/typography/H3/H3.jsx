import React from 'react';
import PropTypes from 'prop-types';
import style from './H3.module.sass'

export const H3 = props => {
    const {text} = props
    return <h3 className={style.h3}>{text}</h3>
};

H3.propTypes = {
    text: PropTypes.string
}