import React, {useEffect,useState} from 'react'
import {Header, Footer, Stub} from '../../core/components'
import {zoom} from '../../shared/img'
import axios from 'axios-jsonp-pro'
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner'
import List from '@vkontakte/vkui/dist/components/List/List'
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell'
import style from './InfoClassPage.module.sass'
import Icon28Users from '@vkontakte/icons/dist/28/users';

export const InfoClassPage = React.memo(() => {
    
    
    const [activeClass, setClass] = useState([])

	useEffect(() => {
        
        axios.get("https://skynets.space/listclass")
            .then(res => { // then print response status
                console.log(res.data);
                setClass(res.data);
            })

	}, []);

    return (
        <>
            <Header title={'Список классов'} background={'cyan'} icon={zoom}/>
            <div className={style.infoClass}>
            {activeClass.length == 0 &&
				<ScreenSpinner />	
			}
             {activeClass.length != 0 &&
                <List>    
                {activeClass.map((item, i) => (
                    <Cell before={<Icon28Users />}>{item}</Cell>
                ))}
                </List>
			}
            </div>
            <Footer/>
        </>
    )
    
})

