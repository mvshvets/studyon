import React from 'react'
import {Header} from '../../core/components'
import {zoom} from '../../shared/img'

export const InfoClassPage = React.memo(() => {
    return (
        <div>
            <Header title={'Список классов'} background={'cyan'} icon={zoom}/>
            <h1>Список классов</h1>
        </div>
    )
})

