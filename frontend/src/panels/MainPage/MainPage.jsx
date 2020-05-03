import React, {useState} from 'react'
import {Gallery} from '@vkontakte/vkui'
import {Useful, Profile, Rating, Store, Zoom, Prospects} from './components'

export const MainPage = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    return (
        <Gallery
            slideWidth={'100%'}
            style={{height: '100%'}}
            bullets="light"
            slideIndex={slideIndex}
            onChange={slideIndex => {
                setSlideIndex(slideIndex)
            }}
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

