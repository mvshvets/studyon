import React, {useCallback, useContext} from 'react'
import {default as stepik} from './stepik.png'
import style from './ConnectOtherApp.module.sass'
import {Button, ButtonIcon, Text14} from '../../../../shared/components'
import {hint_icon} from '../PiggyBank/img'
import bridge from '@vkontakte/vk-bridge'
import axios from 'axios-jsonp-pro'
import {UserContext} from '../../../../core/context/User'

export const ConnectOtherApp = React.memo(() => {
    const {userData, setUserData} = useContext(UserContext)

    const authStepik = useCallback(async () => {

        const user = await bridge.send('VKWebAppGetUserInfo')

        let urlUsers = 'http://3.19.63.58:8080/user/' + user.id
        let friends = await axios.post(urlUsers, {accountList: [
                {
                    "accountService": "STEPIK",
                    "authorizationCode": "KBq1AGuEgpBoqK2q91MbUYovXgKVmk"
                }
            ]})
        let userData = friends.status === 201 || friends.status === 201 ? await axios.jsonp(urlUsers) : null
        setUserData(userData)

    }, [])
    return (
        <div className={style.connectOtherApp}>
            <div>
                <div className={style.header}>
                    <ButtonIcon icon={hint_icon} onClick={() => console.log('Click')} alt={'Подсказка'} className={style.hint} size={23}/>
                    <div>
                        <Text14 text={'Stepik | Образовательная платформа'} className={style.text1}/>
                        <Text14 text={'Study hard. Teach harder.'} className={style.text2}/>
                    </div>
                </div>
                {userData && userData.accounts.stepik ?
                    <Text14 text={'Аккаунт на Stepik привязан'}/>
                    :
                    <Button text={<Text14 text={'Привязать аккаунт на Stepik'}/>} className={style.button} onClick={authStepik}/>
                }
            </div>
            <img src={stepik} alt={'STEPIK'} className={style.logo}/>
        </div>
    )
})

