import React from 'react'
import {Footer, Header, Stub} from '../../core/components'
import {store} from '../../shared/img'
import style from './StorePage.module.sass'

export const StorePage = React.memo(() => {
    return (
        <div className={style.store}>
            <Header title={'МАГАЗИН'} background={'orange'} icon={store}/>
            <Stub/>
            <Footer/>
        </div>
    )
})

