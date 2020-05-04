import React from 'react'
import {Footer, Header, Stub} from '../../core/components'
import {rating} from '../../shared/img'
import style from './RatingPage.module.sass'

export const RatingPage = React.memo(() => {
    return (
        <>
            <Header title={'РЕЙТИНГ'} background={'cyan'} icon={rating}/>
            <div className={style.rating}>
                <Stub/>
            </div>
            <Footer/>
        </>
    )
})

