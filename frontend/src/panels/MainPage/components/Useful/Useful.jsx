import React from 'react'
import style from './Useful.module.sass'
import {cinema} from '../../../../shared/img'
import {Button, H1, H3} from '../../../../shared/components'

export const Useful = () => {

    return (
        <div className={style.useful}>
            <img src={cinema} alt={'Полезное'}/>
            <div className={style.useful__text}>
                <H3 text={'Актуальные материалы от блогеров'}/>
            </div>
            <Button text={<H1 text={'ПОЛЕЗНОЕ'}/>} className={style.useful__button}/>
        </div>)
}