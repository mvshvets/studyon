import React from 'react';
import PropTypes from 'prop-types';
import style from './H2.module.sass'

export const H2 = React.memo(props => {
    const {text} = props
    return <h2 className={style.h2}>{text}</h2>
})

H2.propTypes = {
    text: PropTypes.string.isRequired
}