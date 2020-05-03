import React, { useCallback, useState } from 'react'
import { PageContext } from './PageContext'

export const PageContextProvider = React.memo(({ children }) => {
    const [pageName, setPageName] = useState('home')

    const onSetPageName = useCallback(
        (pageName) => {
            setPageName(pageName)
        },
        [setPageName]
    )

    return (
        <PageContext.Provider value={{ pageName, setPageName: onSetPageName }}>
            {pageName && children}
        </PageContext.Provider>
    )
})
