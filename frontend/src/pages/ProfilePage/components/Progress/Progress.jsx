import React, {useContext, useMemo} from 'react'
import style from './Progress.module.sass'
import {Text14, Text18} from '../../../../shared/components'
import {UserContext} from '../../../../core/context/User'

const progressOfPlatform = [
    {name: 'STEPIK', key: 'stepik', percent: 0}
]

export const Progress = React.memo(() => {
    const {userData} = useContext(UserContext)

    const progressRender = useMemo(() => progressOfPlatform.map(platform => {
        return <div className={style.progress__platform} key={platform.key}>
            <Text18
                text={platform.name}
                className={style.progress__text}
            />
            <div className={style.wrapper}>
                <div style={{width: `${platform.percent}%`}} className={style[platform.key]}/>
            </div>
        </div>
    }), [])

    return (
        <div className={style.progress}>
            <Text14 text={'Ваши достижения на образовательных платформах'}/>
            <div>
                {userData && userData.accounts.stepik ? progressRender : <Text14 text={'Привяжите хотя бы один аккаунт'} className={style.text}/>}
            </div>
        </div>
    )
})

