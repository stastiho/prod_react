import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from 'widgets';
import { AppRouter } from './providers/router';
import './styles/index.scss';


const App = () => {
   const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
						<NavBar />
           	<AppRouter/>
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};

export default App;
