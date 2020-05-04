import React from 'react'
import {Header} from '../../core/components'
import {zoom} from '../../shared/img'

export const InfoLessonPage = React.memo(() => {
    return (
        <div>
            <Header title={'Список уроков'} background={'cyan'} icon={zoom}/>
            <h1>Список уроков</h1>
        </div>
    )
})

