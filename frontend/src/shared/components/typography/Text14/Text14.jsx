import React from 'react';
import PropTypes from 'prop-types';
import style from './Text14.module.sass'

export const Text14 = React.memo(props => {
    const {text} = props
    return <h3 className={style.text14}>{text}</h3>
})

Text14.propTypes = {
    text: PropTypes.string.isRequired
}