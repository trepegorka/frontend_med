import cls from './Container.module.scss'

interface IContainer {
	children: React.ReactNode
}

const Container = ({ children }: IContainer) => {
	return <div className={cls.container}>{children}</div>
}

export default Container
