import cls from './mainpage.module.scss'
import BlockLinks from '@/widgets/blockLinks/BlockLinks'
import Container from '@/widgets/Container/Container'
import BlocksAbout from '@/widgets/BlocksAbout/BlocksAbout'
import React from 'react'

export default function Index() {
	return (
		<div className={cls.homeBlock}>
			<Container>
				<h1 className={cls.mainText}>Мониторинг Darknet площадок </h1>
				<h2 className={cls.secondText}>
					Самые актуальные ссылки на даркнет площадки в Tor и Клирнет.
					Официальный мониторинг создан в сотрудничестве с RuTor и WayAway.
					Подписывайтесь на самые свежие новости в ветках "доверительные" на
					RuTor и WayAway!
				</h2>
				<BlockLinks />
				<BlocksAbout />
			</Container>
		</div>
	)
}
