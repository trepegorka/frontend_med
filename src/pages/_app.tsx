import { AppProps } from 'next/app'
import React from 'react'
import '@/app/styles/global.scss'
import Head from 'next/head'
import { Header } from '@/widgets/Header/Header'

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<>
			<Head>
				<title>Мониторинг DarkSide. Ссылка на любимый маркетплейс.</title>
				<meta
					name="description"
					content="КРАКЕН onion - маркетплейс даркнет площадка. KRAKEN портал ссылка даркнет онион тор kraken krkn зеркало. Ссылка на kraken вход сайт. Мониторинг"
				/>
				<link rel="icon" href="/img/logo.svg" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no"
				/>
			</Head>
			<Header />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
