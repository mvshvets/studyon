import React from 'react'
import {Footer, Header, Stub} from '../../core/components'
import {cinema} from '../../shared/img'
import style from './UsefulPage.module.sass'

export const UsefulPage = React.memo(() => {
    return (
        <>
            <Header title={'ИНТЕРЕСНОЕ'} background={'red'} icon={cinema}/>
            <div className={style.useful}>
                <Stub/>
            </div>
            <Footer/>
        </>
    )
})

