import React from 'react'
import {Gallery} from '@vkontakte/vkui'
import {Useful, Profile, Rating, Store, Zoom, Prospects} from './components'
import './MainPage.css';

export const MainPage = () => {

    return (
        <Gallery
            style={{height: '100vh'}}
            bullets="light"
        >
            {/** 'Полезное' */}
            <Useful/>
            {/** 'Профиль' */}
            <Profile/>
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
}

