import React from 'react'
import {Header, Footer, Stub} from '../../core/components'
import {zoom} from '../../shared/img'
import style from './CreateClassPage.module.sass'

export const CreateClassPage = React.memo(() => {
    return (
        <>
            <Header title={'Создание класса'} background={'cyan'} icon={zoom}/>
            <div className={style.createClass}>
               <Stub/>
            </div>
            <Footer/>
        </>
    )
})

