import React from 'react'
import style from './Useful.module.sass'
import {Button, H1, H2, Toggle} from '../../shared/components'
import {cinema} from '../../shared/img'
import PropTypes from 'prop-types'

export const Useful = props => {
    const {id} = props
    return (
        <div className={style.useful}>
            <img src={cinema} alt={'Полезное'}/>
            <div className={style.useful__text}>
                <H2 text={'Актуальные материалы от блогеров'}/>
            </div>
            <Button text={<H1 text={'ПОЛЕЗНОЕ'}/>}/>
            <Toggle activeCircle={id}/>
        </div>)
}

Useful.propTypes = {
    id: PropTypes.string,
    handleToggle: PropTypes.func
}