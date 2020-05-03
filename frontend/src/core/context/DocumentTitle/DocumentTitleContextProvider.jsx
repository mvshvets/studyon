import React, { useCallback } from 'react'
import { DocumentTitleContext } from './DocumentTitleContext'

export const DocumentTitleContextProvider = React.memo(({ children }) => {
    document.title = 'StudyOn'

    const updateTitle = useCallback(
        (newTitle) => (document.title = newTitle),
        []
    )

    return (
        <DocumentTitleContext.Provider value={{ updateTitle }}>
            {children}
        </DocumentTitleContext.Provider>
    )
})
