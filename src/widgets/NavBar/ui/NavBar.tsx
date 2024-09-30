import { classNames } from 'helpers/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwither } from 'shared/ui/ThemeSwither/ui/ThemeSwither';
import cls from './NavBar.module.scss';

interface NavBarProps {
	className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<ThemeSwither />
			<div className={cls.links}>
				<AppLink to={'/'} theme ={AppLinkTheme.SECONDARY} className={cls.mainLink}>
						Главная
				</AppLink>
				<AppLink to={'/about'} theme ={AppLinkTheme.SECONDARY}>
						О сайте
				</AppLink>
			</div>
		</div>
	);
};
