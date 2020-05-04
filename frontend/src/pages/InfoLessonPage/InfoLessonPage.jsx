import React from 'react'
import {Header, Footer, Stub} from '../../core/components'
import {zoom} from '../../shared/img'
import style from './InfoLessonPage.module.sass'

export const InfoLessonPage = React.memo(() => {
    return (
        <>
            <Header title={'Список уроков'} background={'cyan'} icon={zoom}/>
            <div className={style.infoLesson}>
                <Stub/>
            </div>
            <Footer/>
        </>
    )
})

