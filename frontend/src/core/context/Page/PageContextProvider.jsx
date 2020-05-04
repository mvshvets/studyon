import React, { useCallback, useState } from 'react'
import { PageContext } from './PageContext'

export const PageContextProvider = React.memo(({ children }) => {
    const [pageName, setPageName] = useState('home')
    const [panelName, setPanelName] = useState('home')

    const onSetPageName = useCallback(
        (newPageName) => {
            setPageName(newPageName)
        },
        [setPageName]
    )

    const onSetPanelName = useCallback(
        (newPanelName) => {
            setPanelName(newPanelName)
        },
        [setPanelName]
    )

    return (
        <PageContext.Provider value={{ pageName, setPageName: onSetPageName, panelName, setPanelName: onSetPanelName }}>
            {pageName && children}
        </PageContext.Provider>
    )
})
