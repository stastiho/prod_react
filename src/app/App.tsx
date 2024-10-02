import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from 'widgets';
import { SideBar } from 'widgets/SideBar';
import { AppRouter } from './providers/router';
import './styles/index.scss';


const App = () => {
   const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
						<NavBar />
						<div className='content-page'>
							<SideBar />
           		<AppRouter/>
						</div>
        </div>
    );
};

export default App;
