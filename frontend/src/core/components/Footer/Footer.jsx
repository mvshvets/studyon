import React, {useCallback, useContext, useMemo} from 'react'
import style from './Footer.module.sass'
import {PageContext} from '../../context'
import {ICONS_MENU} from './consts'

export const Footer = React.memo(() => {
    const {setPageName, setPanelName} = useContext(PageContext)

    const setNavigation = useCallback(id => {
        setPageName(id)
        setPanelName(id)
    }, [setPageName, setPanelName])

    const footerMenuRender = useMemo(() => {
        return ICONS_MENU.map((item) => <img src={item.scr} alt={item.name} key={item.key} onClick={() => setNavigation(item.key)} width={35} height={35}/>)
    }, [setNavigation])

    return (
        <footer className={style.footer}>
            <nav>
                {footerMenuRender}
            </nav>
        </footer>
    )
})