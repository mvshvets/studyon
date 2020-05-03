import React, {useCallback, useMemo} from 'react'
import PropTypes from 'prop-types'
import style from './Toggle.module.sass'
import {PAGES_NAME} from './consts'

export const Toggle = React.memo(props => {
    const {activeCircle, onClick} = props

    const handleToggle = useCallback((name) => () => {
        onClick(name)
    }, [onClick])

    const toggleGroup = useMemo(() => {
        return PAGES_NAME.map(name => (
            <li className={name === activeCircle ? style.active : ''} key={name} onClick={handleToggle(name)}>{name}</li>
        ))
    }, [activeCircle, handleToggle])

    return <ul className={style.toggle}>
        {toggleGroup}
    </ul>
})

Toggle.propTypes = {
    activeCircle: PropTypes.string,
    onClick: PropTypes.func
}