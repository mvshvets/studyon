import React from 'react'
import {achive1} from '../../../../shared/img/achives'
import style from './Strides.module.sass'
import {Text14} from '../../../../shared/components'
import {Gallery} from '@vkontakte/vkui'

export const Strides = React.memo(() => {

    return (
        <div className={style.strides}>
            <Text14 text={'Ваши достижения:'}/>
            <Gallery
                className={style.icons}
                slideWidth={75}
            >
                <img src={achive1} alt={'Копилка'}/>
            </Gallery>
        </div>
    )
})

