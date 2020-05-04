import React from 'react'
import {Header, Footer} from '../../core/components'
import {student} from '../../shared/img'
import style from './ProfilePage.module.sass'
import {Progress, PiggyBank, Strides} from './components'

export const ProfilePage = React.memo(props => {
    return (
        <>
            <Header title={'ПРОФИЛЬ'} background={'purple'} icon={student} isSettings/>
            <div className={style.profile}>

                {/** Блок достижений */}
                <Progress/>

                {/** Блок копилки */}
                <PiggyBank setActiveModal={props.setActiveModal}/>

                {/** Блок достижений*/}
                <Strides/>

            </div>
            <Footer/>
        </>
    )
})

