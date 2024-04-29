import cls from './BlockLinks.module.scss'
import Link from 'next/link'

interface IBlockLinks {
	className?: string
}

const BlockLinks = ({ className }: IBlockLinks) => {
	return (
		<div className={`${cls.wrap} ${className}`}>
			<Link
				href={''}
				target={'_blank'}
				className={`${cls.block} ${cls.smaller} ${cls.mega}`}
			></Link>
			<Link
				href={'https://kraken14.store/'}
				target={'_blank'}
				className={`${cls.block} ${cls.kraken}`}
			></Link>
			<Link
				href={''}
				target={'_blank'}
				className={`${cls.block} ${cls.smaller} ${cls.sprut}`}
			></Link>
		</div>
	)
}

export default BlockLinks
