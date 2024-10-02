import { classNames } from 'helpers/classNames/classNames';
import { useState } from 'react';
import { ThemeSwither } from 'shared/ui/ThemeSwither';
import cls from './SideBar.module.scss';

interface SideBarProps {
	className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(prev => !prev);
	}
	return (
		<div className={classNames(cls.sidebar, {[cls.collapsed] : collapsed}, [className])}>
			<button onClick={onToggle}>toggle</button>
			<div className={cls.swithers}>
				<ThemeSwither />
			</div>
		</div>
	);
};
