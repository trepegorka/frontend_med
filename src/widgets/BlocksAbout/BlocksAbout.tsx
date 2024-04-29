import cls from './BlocksAbout.module.scss'
import Link from 'next/link'

interface IBlocksAbout {
	className?: string
}

const BlocksAbout = ({ className }: IBlocksAbout) => {
	return (
		<div className={cls.wrap}>
			<div className={cls.block}>
				<div className={cls.left}>
					<img
						className={`${cls.imageHolder} ${cls.krknImg}`}
						src={'/img/Kraken_logo-removebg-preview.svg'}
						alt={'Kraken logo'}
					/>
				</div>
				<div className={cls.textHolder}>
					<p className={cls.text}>
						<b>Kraken Dark Market</b> — один из крупнейших российских
						даркнет-рынков по торговле наркотиками, поддельными документами,
						услугами по отмыванию денег и так далее. Был запущен летом 2022 года
						после закрытия крупнейшего даркнет-рынка Hydra и стал его
						преемником.
					</p>
					<Link href={'/kraken'} className={cls.btn}>
						Обзор
					</Link>
				</div>
				<Link href={'/kraken'} className={`${cls.btn} ${cls.btnMob}`}>
					Обзор
				</Link>
			</div>
			<div className={cls.block}>
				<div className={cls.left}>
					<img
						className={`${cls.imageHolder} ${cls.megaImg}`}
						src={'/img/Mega_logo-removebg-preview.png'}
						alt={'Kraken logo'}
					/>
				</div>
				<div className={cls.textHolder}>
					<p className={cls.text}>
						<b>Mega Dark Market</b> — уникальный интернет-магазин, в котором
						можно купить абсолютно всё, что взбредет в голову, здравомыслящую и
						не очень. Здесь вы найдёте и цифровые товары, и различную экзотику,
						и запрещенные к обороту товары (сами знаете какие). Сколько людей,
						столько и желаний, а тёмный megamarket может удовлетворить их почти
						все.
					</p>
					<Link href={'/mega'} className={cls.btn}>
						Обзор
					</Link>
				</div>
				<Link href={'/mega'} className={`${cls.btn} ${cls.btnMob}`}>
					Обзор
				</Link>
			</div>
			<div className={cls.block}>
				<div className={cls.left}>
					<img
						className={` ${cls.imageHolder} ${cls.sprutImg}`}
						src={'/img/logo-black-sprut.png'}
						alt={'Kraken logo'}
					/>
				</div>
				<div className={cls.textHolder}>
					<p className={cls.text}>
						<b>BLACKSPRUT</b> — это по сути каталог продавцов, которые в
						магазинах маркетплейса продают товары, имеющие специфическое
						назначение. Он живет и здравствует на тёмной стороне, в сети Tor.
						Купленный товар вы сможете забрать в закладках. То есть, курьер к
						вам не приедет с коробочкой и квитанцией на руках, вместо этого вам
						дадут адрес места, его описание, где вы сможете забрать заказ.
					</p>
					<Link href={'/sprut'} className={cls.btn}>
						Обзор
					</Link>
				</div>
				<Link href={'/sprut'} className={`${cls.btn} ${cls.btnMob}`}>
					Обзор
				</Link>
			</div>
		</div>
	)
}

export default BlocksAbout
