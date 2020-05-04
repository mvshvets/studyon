import React from 'react'
import {Footer, Header, Stub} from '../../core/components'
import {rating} from '../../shared/img'
import style from './RatingPage.module.sass'

export const RatingPage = React.memo(() => {
    return (
        <div className={style.rating}>
            <Header title={'РЕЙТИНГ'} background={'cyan'} icon={rating}/>
            <Stub/>
            <Footer/>
        </div>
    )
})

