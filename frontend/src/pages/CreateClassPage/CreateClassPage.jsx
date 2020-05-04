import React, { useState } from 'react'
import { Header, Footer } from '../../core/components'
import { zoom } from '../../shared/img'
import axios from 'axios-jsonp-pro'
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout'
import Button from '@vkontakte/vkui/dist/components/Button/Button'
import Input from '@vkontakte/vkui/dist/components/Input/Input'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import Link from '@vkontakte/vkui/dist/components/Link/Link'
import style from './CreateClassPage.module.sass'

export const CreateClassPage = React.memo(() => {
    
    const [activeTopic, setTopic] = useState('')
    const [activeClass, setClass] = useState(null)

    function createLesson() {

        let urlMeting = 'https://skynets.space/class';

        const data = new FormData()
        data.append('topic', activeTopic)

        axios.post(urlMeting, data, {
            // receive two    parameter endpoint url ,form data
        })
            .then(res => { // then print response status
                setClass("https://vk.com/app7432322_154621764");
            })

    }


    function changeTopic(e) {
        setTopic(e.target.value)
    }



    return (
        <>
            <Header title={'Создание класса'} background={'cyan'} icon={zoom} />
            <div className={style.createClass}>

                {activeClass == null &&
                    <FormLayout>

                        <Input
                            value={activeTopic}
                            onChange={(e) => changeTopic(e)}
                            top="Название класса" />

                        <Button size="xl" onClick={createLesson}>Создать урок</Button>

                    </FormLayout>
                }

                {activeClass != null &&
                    <Div>
                        <h1>Ссылка для учеников: {activeClass}</h1>
                        <Link href={activeClass} target="_blank">{activeClass}</Link>
                    </Div>
                }
            </div>
            <Footer />
        </>
    )
})

