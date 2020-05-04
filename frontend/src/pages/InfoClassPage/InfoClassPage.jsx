import React from 'react'
import {Header, Footer, Stub} from '../../core/components'
import {zoom} from '../../shared/img'
import style from './InfoClassPage.module.sass'

export const InfoClassPage = React.memo(() => {
    return (
        <>
            <Header title={'Список классов'} background={'cyan'} icon={zoom}/>
            <div className={style.infoClass}>
                <Stub/>
            </div>
            <Footer/>
        </>
    )
})

