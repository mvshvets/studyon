import React from 'react'
import {Header, Footer} from '../../core/components'
import {student} from '../../shared/img'
import {achive1} from '../../shared/img/achives'
import style from './ProfilePage.module.sass'
import {Progress, PiggyBank} from './components'

export const ProfilePage = React.memo(() => {
    return (
        <>
            <Header title={'ПРОФИЛЬ'} background={'purple'} icon={student} isSettings/>
            <div className={style.profile}>

                {/** Блок достижений */}
                <Progress/>

                {/** Блок копилки */}
                <PiggyBank/>

                {/** Блок достижений*/}
                <div>
                    <div>Ваши достижения:</div>
                    <img src={achive1} alt={'Копилка'}/>
                </div>
            </div>
            <Footer/>
        </>
    )
})

