import React from 'react';
import style from './Useful.module.sass'
import {Button, H1, H2} from '../../shared/components'
import {cinema} from '../../shared/img'

export const Useful = () => (
	<div className={style.useful}>
		<img src={cinema} alt={'Полезное'}/>
		<div className={style.useful__text}>
		<H2 text={'Актуальные материалы от блогеров'}/>
		</div>
		<Button text={<H1 text={'ПОЛЕЗНОЕ'}/>}/>
	</div>
);

