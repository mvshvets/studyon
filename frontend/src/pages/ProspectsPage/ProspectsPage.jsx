import React from 'react'
import {Footer, Header, Stub} from '../../core/components'
import {rocket} from '../../shared/img'
import style from './ProspectsPage.module.sass'

export const ProspectsPage = React.memo(() => {
    return (
        <>
            <Header title={'ПЕРСПЕКТИВЫ'} background={'orange'} icon={rocket}/>
            <div className={style.prospects}>
                <Stub/>
            </div>
            <Footer/>
        </>
    )
})

