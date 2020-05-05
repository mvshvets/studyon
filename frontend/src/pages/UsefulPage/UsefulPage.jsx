import React from 'react'
import { Footer, Header, Stub } from '../../core/components'
import { cinema } from '../../shared/img'
import style from './UsefulPage.module.sass'
import YouTube from 'react-youtube';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell'
import Group from '@vkontakte/vkui/dist/components/Group/Group'
import List from '@vkontakte/vkui/dist/components/List/List'


export const UsefulPage = React.memo(() => {


    const opts = {
        height: '390',
        width: '100%',
        padding: '20px',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <>
            <Header title={'ИНТЕРЕСНОЕ'} background={'red'} icon={cinema} />
            <div className={style.useful}>
                    <List>
                        <Cell>

                            <YouTube videoId="k3qLGh2Qd9w" opts={opts} />

                        </Cell>
                        <Cell>

                            <YouTube videoId="t3g4l7TyENo" opts={opts} />

                        </Cell>
                        <Cell>

                            <YouTube videoId="WDL4lUvYpT8" opts={opts} />

                        </Cell>
                    </List>

            </div>
            <Footer />
        </>
    )

})

