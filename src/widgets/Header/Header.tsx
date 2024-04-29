import cls from './Header.module.scss'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Lenta from '@/widgets/Lenta/Lenta'

export function Header() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const toggleMenu = () => setIsOpen(!isOpen)

	useEffect(() => {
		console.log(isOpen)
	}, [isOpen])

	return (
		<header className={cls.header}>
			<div className={cls.headwrap}>
				<Link href={'/'} className={cls.logoBlock}>
					<h3 className={cls.h3}>DARK SIDE</h3>
				</Link>
				<img className={cls.logo} src={'/img/logo.svg'} alt={'logo darth'} />
				<div className={`${cls.links} ${isOpen ? cls.flex : cls.hid}`}>
					<Link href={'/sprut'} className={cls.link}>
						BLACKSPRUT
					</Link>
					<Link href={'/kraken'} className={cls.link}>
						KRAKEN
					</Link>
					<Link href={'/mega'} className={cls.link}>
						MEGA
					</Link>
				</div>
				<div className={cls.burger} onClick={toggleMenu}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<Lenta />
		</header>
	)
}
