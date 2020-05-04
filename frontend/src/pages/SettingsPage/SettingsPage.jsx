import React from 'react'
import {Footer, Header, Stub} from '../../core/components'
import {setting} from '../../shared/img'
import style from './SettingsPage.module.sass'

export const SettingsPage = React.memo(() => {
    return (
        <>
            <Header title={'НАСТРОЙКИ'} background={'red'} icon={setting}/>
            <div className={style.settings}>
                <Stub/>
            </div>
            <Footer/>
        </>
    )
})

