import { useContext } from 'react';
import { MainContext } from '../context/MainContext';

export const useMain = () => {
	const context = useContext(MainContext);

	if (!context) throw new Error('useAuth must be used within a MainProvider');

	return context;
};

export default useMain;
