import React from 'react'
import {Header, Stub, Footer} from '../../core/components'
import {student} from '../../shared/img'
import style from './ProfilePage.module.sass'

export const ProfilePage = React.memo(() => {
    return (
        <div className={style.profile}>
            <Header title={'ПРОФИЛЬ'} background={'purple'} icon={student} isSettings/>
            <Stub/>
            <Footer/>
        </div>
    )
})

