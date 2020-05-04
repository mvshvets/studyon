import React from 'react'
import {Footer, Header, Stub} from '../../core/components'
import {setting} from '../../shared/img'
import style from './SettingsPage.module.sass'

export const SettingsPage = React.memo(() => {
    return (
        <div className={style.settings}>
            <Header title={'НАСТРОЙКИ'} background={'red'} icon={setting}/>
            <Stub/>
            <Footer/>
        </div>
    )
})

