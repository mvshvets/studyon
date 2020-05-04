import React, {useState} from 'react'
import axios from 'axios-jsonp-pro'
import Group from '@vkontakte/vkui/dist/components/Group/Group'
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell'
import Icon28DocumentOutline from '@vkontakte/icons/dist/28/document_outline'
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline'
import Icon28Users from '@vkontakte/icons/dist/28/users'
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout'
import Button from '@vkontakte/vkui/dist/components/Button/Button'
import Input from '@vkontakte/vkui/dist/components/Input/Input'
import {zoom} from '../../shared/img'
import {Footer, Header} from '../../core/components'
import style from './ZoomPage.module.sass'


export const ZoomPage = React.memo(() => {

    const [activeEmail, setEmail] = useState('')

    function createLesson() {
        console.log(activeEmail)
        // let userId = "BbERJ4OZS1KDFOSHdZglNw";
        // let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InlXQ1Z6YUxSU3JtVlJsQktPTjBqTUEiLCJleHAiOjE1ODkxMjE0OTQsImlhdCI6MTU4ODUxNjY5OH0.iB-wYBxEzDTsNLZBAfcZl8hfccYpZlRffuYbKyQcNVQ";
        let urlUsers = 'https://skynets.space/users'
        let usersId = 'BbERJ4OZS1KDFOSHdZglNw'

        axios.get(urlUsers)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    function changeEmail(e) {
        setEmail(e.target.value)
    }

    return (
        <>
            <Header title={'ZOOM-ZOOM'} background={'cyan'} icon={zoom}/>
            <div className={style.zoom}>
                <Group>
                    <Cell expandable before={<Icon28AddOutline/>}>
                        Создать урок
                    </Cell>
                    <Cell expandable before={<Icon28AddOutline/>}>
                        Создать класс
                    </Cell>
                    <Cell expandable before={<Icon28DocumentOutline/>}>
                        Информация по урокам
                    </Cell>
                    <Cell expandable before={<Icon28Users/>}>
                        Информация по классам
                    </Cell>
                </Group>

                <FormLayout>

                    <Input
                        type="email"
                        top="E-mail"
                        name="email"
                        value={activeEmail}
                        onChange={(e) => changeEmail(e)}
                        status={activeEmail ? 'valid' : 'error'}
                        bottom={activeEmail ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'}
                    />

                    <Button size="xl" onClick={createLesson}>Создать урок</Button>

                </FormLayout>
            </div>
            <Footer/>
        </>
    )
})

