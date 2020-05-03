import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import style from './Toggle.module.sass'
import {PAGES_NAME} from './consts'

export const Toggle = props => {
    const {activeCircle} = props
    console.log(activeCircle)
    const toggleGroup = useMemo(() => {
        return PAGES_NAME.map(name => (
            <li className={name === activeCircle ? style.active : ''} key={name}>{name}</li>
        ))
    }, [activeCircle])

    return <ul className={style.toggle}>
        {toggleGroup}
    </ul>
}

Toggle.propTypes = {
    activeCircle: PropTypes.string,
}