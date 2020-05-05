import React from 'react'
import {default as stepik} from './stepik.png'
import style from './ConnectOtherApp.module.sass'
import {Button, ButtonIcon, Text14} from '../../../../shared/components'
import {hint_icon} from '../PiggyBank/img'

export const ConnectOtherApp = React.memo(() => {

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
                {false ? <Text14 text={'Аккаунт на Stepik привязан'}/> : <Button text={<Text14 text={'Привязать аккаунт на Stepik'}/>} className={style.button}/>}
            </div>
            <img src={stepik} alt={'STEPIK'} className={style.logo}/>
        </div>
    )
})

