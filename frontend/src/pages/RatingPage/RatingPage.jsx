import React, {useEffect,useState} from 'react'
import {Footer, Header, Stub} from '../../core/components'
import axios from 'axios-jsonp-pro'
import {rating} from '../../shared/img'
import Irina from '../../shared/img/irina.jpg'
import Maks from '../../shared/img/maks.jpg'
import style from './RatingPage.module.sass'
import bridge from '@vkontakte/vk-bridge';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell'
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar'
import Group from '@vkontakte/vkui/dist/components/Group/Group'



export const RatingPage = React.memo(() => {

    const [fetchedUser, setUsers] = useState([])

    useEffect(() => {
        
        async function fetchData() {
            
            const user = await bridge.send('VKWebAppGetUserInfo');
            console.log(user);
            setUsers(user);

            let urlUsers = "http://3.19.63.58:8080/user/"+ user.id; 
            let friends = await axios.jsonp(urlUsers)
            console.log(friends);
            
    
            const token = await bridge.send("VKWebAppGetAuthToken", { "app_id": 7432322, "scope": "friends,video, groups" });
            console.log(token.access_token);
        }

        fetchData();
    
    }, []);

    function getDiv(count){
        if(count > 200){
            return <div className={style.ballsGood}> <span className={style.count}>{count} </span><br /> монет </div>;
        }
        else{
            return <div className={style.balls}> <span className={style.count}>{count} </span><br /> монет </div>;
        }
    
    }

    return (
        <>
            <Header title={'РЕЙТИНГ'} background={'cyan'} icon={rating}/>
            <div className={style.rating}>
            <Group title="User Data Fetched with VK Bridge">
                <Cell
                        before={<Avatar src={Irina}/>}
                        description="Самара"
                        asideContent={getDiv(500)}
                    >
                        {`${"Ирина"} ${"Дождик"}`}
                    </Cell>
                   <h1></h1>
                </Group>

                <Group title="User Data Fetched with VK Bridge">
                <Cell
                        before={<Avatar src={Maks}/>}
                        description="Краснодар"
                        asideContent={getDiv(200)}
                    >
                        {`${"Максим"} ${"Швец"}`}
                    </Cell>
                   <h1></h1>
                </Group>

                
                
            {fetchedUser &&
                <Group title="User Data Fetched with VK Bridge">
                    <Cell
                        before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                        description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
                        asideContent={getDiv(0)}
                    >
                        {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                    </Cell>
                </Group>}
                
            </div>
            <Footer/>
        </>
    )
})

