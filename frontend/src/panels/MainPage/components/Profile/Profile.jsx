import React from 'react';
import style from './Profile.module.sass'
import {student} from '../../../../shared/img'
import {H1, H3, Button} from '../../../../shared/components'

export const Profile = () => {

	return (
		<div className={style.profile}>
			<img src={student} alt={'Профиль'}/>
			<div className={style.profile__text}>
				<H3 text={'Мммм... кто у нас тут такой умненький?'}/>
			</div>
			<Button text={<H1 text={'ПРОФИЛЬ'}/>} className={style.profile__button}/>
		</div>)
}
