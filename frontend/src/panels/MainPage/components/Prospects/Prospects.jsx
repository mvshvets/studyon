import React from 'react';
import style from './Prospects.module.sass'
import {rocket} from '../../../../shared/img'
import {H1, H3, Button} from '../../../../shared/components'

export const Prospects = () => {

	return (
		<div className={style.prospects}>
			<img src={rocket} alt={'Перспективы'}/>
			<div className={style.prospects__text}>
				<H3 text={'Какие курсы надо пройти, чтобы стать самым-самым!'}/>
			</div>
			<Button text={<H1 text={'ПЕРСПЕКТИВЫ'}/>} className={style.prospects__button}/>
		</div>)
}