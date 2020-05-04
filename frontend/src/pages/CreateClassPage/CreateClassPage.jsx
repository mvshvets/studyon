import React from 'react'
import {Header} from '../../core/components'
import {zoom} from '../../shared/img'

export const CreateClassPage = React.memo(() => {
    return (
        <div>
            <Header title={'Создание класса'} background={'cyan'} icon={zoom}/>
            <h1>Создаем класс</h1>
        </div>
    )
})

