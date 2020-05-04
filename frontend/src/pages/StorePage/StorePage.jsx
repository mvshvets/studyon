import React from 'react'
import {Footer, Header, Stub} from '../../core/components'
import {store} from '../../shared/img'
import style from './StorePage.module.sass'

export const StorePage = React.memo(() => {
    return (
        <>
            <Header title={'МАГАЗИН'} background={'orange'} icon={store}/>
            <div className={style.store}>
                <Stub/>
            </div>
            <Footer/>
        </>
    )
})

