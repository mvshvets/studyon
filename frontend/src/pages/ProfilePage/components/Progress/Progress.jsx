import React, {useMemo} from 'react'
import style from './Progress.module.sass'
import {Text14, Text18} from '../../../../shared/components'

const progressOfPlatform = [
    {name: 'STEPIK', key: 'stepik', percent: 23}
]

export const Progress = React.memo(() => {

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
                {progressRender}
            </div>
        </div>
    )
})

