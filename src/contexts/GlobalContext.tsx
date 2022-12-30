/* eslint-disable @typescript-eslint/no-empty-function */
import { Visitor } from '../types/UserType';
import { createContext, Dispatch, SetStateAction } from 'react';

type GlobalContextType = {
	count: number;
	setCount: Dispatch<SetStateAction<number>>;
	visitors: Array<Visitor>;
	setVisitors: Dispatch<SetStateAction<Array<never>>>;
};

const GlobalContext = createContext<GlobalContextType>({
	count: 0,
	setCount: () => {},
	visitors: [],
	setVisitors: () => {},
});

export default GlobalContext;
