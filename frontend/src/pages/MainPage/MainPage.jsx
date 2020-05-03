import React from 'react'
import {Gallery} from '@vkontakte/vkui'
import {Useful, Profile, Rating, Store, Zoom, Prospects} from './components'
import './MainPage.css';

export const MainPage = React.memo(props => {
    const {handleView} = props
    return (
        <Gallery
            style={{height: '100vh'}}
            bullets="light"
        >
            {/** 'Полезное' */}
            <Useful/>
            {/** 'Профиль' */}
            <Profile handleView={handleView}/>
            {/** 'Рейтинг' */}
            <Rating/>
            {/** 'Магазин' */}
            <Store/>
            {/** 'Zoom-zoom' */}
            <Zoom/>
            {/** 'Перспективы' */}
            <Prospects/>
        </Gallery>
    )
})

