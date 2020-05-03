import React from 'react'
import style from './Header.module.sass'
import {home_icon, settings_icon} from '../../../shared/img'
import PropTypes from 'prop-types'
import {H3} from '../../../shared/components/'

export const Header = React.memo(props => {
    const {title, background, icon, isSettings} = props
    return (
            <header className={`${style.header} ${style[background]}`}>
                <div className={style.header__nav}>
                <img src={home_icon} alt={'Вернуться "Домой"'}/>
                {isSettings && <img src={settings_icon} alt={'Настройки'}/>}
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