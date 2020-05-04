import React from 'react'
import {Header} from '../../core/components'
import {rocket} from '../../shared/img'
import {StubPage} from '..'

export const ProspectsPage = React.memo(() => {
    return (
        <div>
            <Header title={'ПЕРСПЕКТИВЫ'} background={'orange'} icon={rocket}/>
            <StubPage/>
        </div>
    )
})

