import React from 'react'
import {Compose} from './shared/components'
import {PageContextProvider, LoaderContextProvider, DocumentTitleContextProvider, UserContextProvider} from './core/context'
import {Routing} from './core/Routing'

export const App = React.memo(() => {
    return (
        <Compose
            components={[
                PageContextProvider,
                DocumentTitleContextProvider,
            ]}
        >
            <Routing/>
        </Compose>
    )
})
