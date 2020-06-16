import Navbar from './Navbar';
import { useDarkMode } from '../utils';

const SiteLayout = ({ children }) => {
    const [theme, handleToggleTheme] = useDarkMode();

    return (
        <div className="crow-background">
            <Navbar onToggleTheme={handleToggleTheme} themeMode={theme} />
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }} className="px-5 b-5">
                {children}
            </div>
        </div>
    );
};

export default SiteLayout;
