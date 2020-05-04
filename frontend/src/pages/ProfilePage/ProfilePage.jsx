import React from 'react'
import {Header, Footer} from '../../core/components'
import {student} from '../../shared/img'
import {achive1} from '../../shared/img/achives'
import {piggy_bank, hint_icon} from './img'
import style from './ProfilePage.module.sass'
import {Progress} from './components'

export const ProfilePage = React.memo(() => {
    return (
        <>
            <Header title={'ПРОФИЛЬ'} background={'purple'} icon={student} isSettings/>
            <div className={style.profile}>

                {/** Блок достижений */}
                <Progress/>

                {/** Блок копилки */}
                <div>
                    <div>В вашей копилке:</div>
                    <div>{`${'0'} монет`}</div>
                    <div>(чеканных)</div>
                    <img src={piggy_bank} alt={'Копилка'}/>
                    <img src={hint_icon} alt={'Подсказка'}/>
                </div>

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

