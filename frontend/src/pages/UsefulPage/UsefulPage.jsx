import React from 'react'
import {Header} from '../../core/components'
import {cinema} from '../../shared/img'
import {StubPage} from '..'

export const UsefulPage = React.memo(() => {
    return (
        <div>
            <Header title={'ИНТЕРЕСНОЕ'} background={'red'} icon={cinema}/>
            <StubPage/>
        </div>
    )
})

