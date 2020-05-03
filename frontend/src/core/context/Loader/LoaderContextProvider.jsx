import React, { useMemo, useState } from 'react'
import { LoaderContext } from './LoaderContext'

export const LoaderContextProvider = React.memo(({ children }) => {
    const [loaderState, setLoaderState] = useState(false)
    const spin = useMemo(
        () => loaderState && <div>Спиннер</div>,
        [loaderState]
    )

    return (
        <LoaderContext.Provider value={{ loaderState, setLoaderState }}>
            {spin && children}
        </LoaderContext.Provider>
    )
})
