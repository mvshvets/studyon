import React from 'react'
import {Footer, Header, Stub} from '../../core/components'
import {cinema} from '../../shared/img'
import style from './UsefulPage.module.sass'

export const UsefulPage = React.memo(() => {
    return (
        <div className={style.useful}>
            <Header title={'ИНТЕРЕСНОЕ'} background={'red'} icon={cinema}/>
            <Stub/>
            <Footer/>
        </div>
    )
})

