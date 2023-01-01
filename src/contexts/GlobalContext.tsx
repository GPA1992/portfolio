/* eslint-disable @typescript-eslint/no-empty-function */
import { Visitor, VisitorToSend } from '../types/UserType';
import { createContext, Dispatch, SetStateAction } from 'react';

type GlobalContextType = {
	count: number;
	setCount: Dispatch<SetStateAction<number>>;
	visitors: Array<Visitor>;
	setVisitors: Dispatch<SetStateAction<never[]>>;
	avatar: string;
	setAvatar: Dispatch<SetStateAction<string>>;
	fullComment: VisitorToSend;
	setFullComment: Dispatch<SetStateAction<VisitorToSend>>;
};

const GlobalContext = createContext<GlobalContextType>({
	count: 0,
	setCount: () => {},
	visitors: [],
	setVisitors: () => {},
	avatar: '',
	setAvatar: () => {},
	fullComment: { name: '', position: '', comment: '', avatar: '' },
	setFullComment: () => {},
});

export default GlobalContext;
