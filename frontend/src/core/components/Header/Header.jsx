import React, {useCallback, useContext} from 'react'
import style from './Header.module.sass'
import {home_icon, settings_icon} from '../../../shared/img'
import PropTypes from 'prop-types'
import {ButtonIcon, H3} from '../../../shared/components/'
import {PageContext} from '../../context'

export const Header = React.memo(props => {
    const {title, background, icon, isSettings} = props
    const { setPageName, setPanelName } = useContext(PageContext)

    const setNavigation = useCallback(id => {
        setPageName(id)
        setPanelName(id)
    }, [setPageName, setPanelName])

    const setToSettings = useCallback(id => {
        setPanelName(id)
    }, [setPanelName])

    return (
            <header className={`${style.header} ${style[background]}`}>
                <div className={style.header__nav}>
                <ButtonIcon icon={home_icon} onClick={setNavigation} view={'home'} alt={'Вернуться назад'} size={40}/>
                {isSettings && <ButtonIcon icon={settings_icon} onClick={setToSettings} view={'settings'} alt={'Настройки'} size={40}/>}
                </div>
                <div style={{color: '#fff'}}>
                    <H3 text={title}/>
                </div>
                <img src={icon} alt={'Картинка раздела'} className={style.header__icon}/>
            </header>
    )
})

Header.propTypes = {
    title: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    icon: PropTypes.string,
    isSettings: PropTypes.bool
}