import React from 'react';
import style from './Profile.module.sass'
import {student} from '../../shared/img'
import {H1, H2, Button, Toggle} from '../../shared/components'
import PropTypes from 'prop-types'

export const Profile = props => {
	const {id} = props
	return (
		<div className={style.profile}>
			<img src={student} alt={'Профиль'}/>
			<div className={style.profile__text}>
				<H2 text={'Мммм... кто у нас тут такой умненький?'}/>
			</div>
			<Button text={<H1 text={'ПРОФИЛЬ'}/>}/>
			<Toggle activeCircle={id}/>
		</div>)
}

Profile.propTypes = {
	id: PropTypes.string,
	handleToggle: PropTypes.func
}