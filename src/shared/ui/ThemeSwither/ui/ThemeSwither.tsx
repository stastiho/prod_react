import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'helpers/classNames/classNames';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwither.module.scss';

interface ThemeSwitherProps {
	className?: string;
}

export const ThemeSwither = ({ className }: ThemeSwitherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			className={classNames(cls.themeswitcher, {}, [className])}
			onClick={toggleTheme}
			theme={ThemeButton.CLEAR}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};
