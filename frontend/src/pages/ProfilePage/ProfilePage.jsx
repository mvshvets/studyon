import React, {useContext, useEffect} from 'react'
import {Header, Footer} from '../../core/components'
import {student} from '../../shared/img'
import style from './ProfilePage.module.sass'
import {Progress, PiggyBank, Strides, ConnectOtherApp} from './components'
import bridge from '@vkontakte/vk-bridge'
import axios from 'axios-jsonp-pro'
import {UserContext} from '../../core/context/User'

export const ProfilePage = React.memo(props => {
    const {setUserData} = useContext(UserContext)

    const fetchData = async () => {

        const userVK = await bridge.send('VKWebAppGetUserInfo');

        let urlUsers = "http://3.19.63.58:8080/user/"+ userVK.id;
        let userData = await axios.jsonp(urlUsers)
        console.log(userData);
        setUserData(userData)

        const token = await bridge.send("VKWebAppGetAuthToken", { "app_id": 7432322, "scope": "friends, video, groups" });
        console.log(token.access_token);
    }

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <>
            <Header title={'ПРОФИЛЬ'} background={'purple'} icon={student}/>
            <div className={style.profile}>

                {/** Блок достижений */}
                <Progress/>

                {/** Блок копилки */}
                <PiggyBank setActiveModal={props.setActiveModal}/>

                {/** Блок достижений*/}
                <Strides/>

                {/** Блок привязки */}
                <ConnectOtherApp/>

            </div>
            <Footer/>
        </>
    )
})

