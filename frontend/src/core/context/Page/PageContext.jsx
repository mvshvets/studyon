import React from 'react'
import { NotImplementedError } from '../../errors'

export const PageContext = React.createContext({
    pageName: null,
    panelName: null,
    setPageName: (pageName) => {
        throw new NotImplementedError()
    },
    setPanelName: (panelName) => {
        throw new NotImplementedError()
    },
})
