import cls from './Lenta.module.scss'
import { useEffect, useState } from 'react'

interface IItem {
	symbol: string
	priceUsd: string
}
const Lenta = () => {
	const [topCryptos, setTopCryptos] = useState([])

	useEffect(() => {
		const fetchTopCryptos = async () => {
			try {
				const response = await fetch('https://api.coincap.io/v2/assets?limit=5')
				const data = await response.json()
				setTopCryptos(data.data)
			} catch (error) {
				console.error('Error fetching top cryptos:', error)
			}
		}

		fetchTopCryptos()

		const intervalId = setInterval(fetchTopCryptos, 10000)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<div className={cls.lentaWrap}>
			{topCryptos.map((item: IItem, index) => {
				return (
					<div key={index} className={cls.itemLent}>
						<span>{item.symbol}:&nbsp;</span>
						<span>{parseInt(item.priceUsd)}$</span>
					</div>
				)
			})}
			{topCryptos.map((item: IItem, index) => {
				return (
					<div key={index} className={cls.itemLent}>
						<span>{item.symbol}:&nbsp;</span>
						<span>{parseInt(item.priceUsd)}$</span>
					</div>
				)
			})}
			{topCryptos.map((item: IItem, index) => {
				return (
					<div key={index} className={cls.itemLent}>
						<span>{item.symbol}:&nbsp;</span>
						<span>{parseInt(item.priceUsd)}$</span>
					</div>
				)
			})}
			{topCryptos.map((item: IItem, index) => {
				return (
					<div key={index} className={cls.itemLent}>
						<span>{item.symbol}:&nbsp;</span>
						<span>{parseInt(item.priceUsd)}$</span>
					</div>
				)
			})}
			{topCryptos.map((item: IItem, index) => {
				return (
					<div key={index} className={cls.itemLent}>
						<span>{item.symbol}:&nbsp;</span>
						<span>{parseInt(item.priceUsd)}$</span>
					</div>
				)
			})}
			{topCryptos.map((item: IItem, index) => {
				return (
					<div key={index} className={cls.itemLent}>
						<span>{item.symbol}:&nbsp;</span>
						<span>{parseInt(item.priceUsd)}$</span>
					</div>
				)
			})}
		</div>
	)
}

export default Lenta
