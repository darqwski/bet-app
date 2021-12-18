import { createContext, useContext } from 'react';
import { ISnackbarContext } from '@/context/snackbar-manager/types';

export const SnackBarContext = createContext<ISnackbarContext>({
	addSnackBar: ()=> {
		throw 'Snackbar Context is missing';
	}, removeSnackbar:(): void => {
		throw 'Snackbar Context is missing';
	}
});

export const useSnackbar = (): ISnackbarContext => useContext(SnackBarContext);
