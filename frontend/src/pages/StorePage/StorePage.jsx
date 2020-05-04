import React from 'react'
import {Header} from '../../core/components'
import {store} from '../../shared/img'
import {StubPage} from '..'

export const StorePage = React.memo(() => {
    return (
        <div>
            <Header title={'МАГАЗИН'} background={'orange'} icon={store}/>
            <StubPage/>
        </div>
    )
})

