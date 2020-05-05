import React from 'react'
import stub from './stub.gif'
import style from './Stub.module.sass'
import {H3} from '../../../shared/components'

export const Stub = React.memo(() => {
    return (
        <div className={style.stub}>
            <H3 text={'Здесь будет'}/>
            <H3 text={'красиво....'}/>
            <img src={stub} alt={'Здесь будет красиво'} />
        </div>
    )
})

