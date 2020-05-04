import React from 'react'
import {Header} from '../../core/components'
import {rating} from '../../shared/img'
import {StubPage} from '..'

export const RatingPage = React.memo(() => {
    return (
        <div>
            <Header title={'РЕЙТИНГ'} background={'cyan'} icon={rating}/>
            <StubPage/>
        </div>
    )
})

