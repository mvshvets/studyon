import React from 'react'
import {Gallery} from '@vkontakte/vkui'
import {Useful, Profile, Rating, Store, Zoom, Prospects} from './components'
import './MainPage.css';

export const MainPage = props => {
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
            <Zoom handleView={handleView}/>
            {/** 'Перспективы' */}
            <Prospects/>
        </Gallery>
    )
}

