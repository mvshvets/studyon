import React, {useCallback, useContext, useMemo} from 'react'
import style from './Footer.module.sass'
import {PageContext} from '../../context'
import {ICONS_MENU} from './consts'
import {ButtonIcon} from '../../../shared/components'

export const Footer = React.memo(() => {
    const {setPageName, setPanelName} = useContext(PageContext)

    const setNavigation = useCallback(id => {
        setPageName(id)
        setPanelName(id)
    }, [setPageName, setPanelName])

    const footerMenuRender = useMemo(() => {
        return ICONS_MENU.map((item) => <ButtonIcon icon={item.scr} onClick={setNavigation} view={item.key} key={item.key} alt={item.name} size={35} />)
    }, [setNavigation])

    return (
        <footer className={style.footer}>
            <nav>
                {footerMenuRender}
            </nav>
        </footer>
    )
})