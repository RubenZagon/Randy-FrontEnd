import React, { useReducer } from 'react';

const initialState = { counter: 0 };
export const NEW_NOTIFY = 'NEW_NOTIFY';
export const RESET_NOTIFYS = 'RESET_NOTIFYS';

type OptionsNotifys = 'NEW_NOTIFY' | 'RESET_NOTIFYS' | 'A BORRAR';

export interface NotifyInterface {
	type: OptionsNotifys;
	state: number;
}

export const notifysReducer = (state, action) => {
	switch (action.type) {
		case NEW_NOTIFY:
			return handleNewNotifications(state);
		case RESET_NOTIFYS:
			return handleResetOfNotifications(state);
		default:
			return state;
	}
};

const handleNewNotifications = (state) => {
	return { counter: state.counter + 1 };
};

const handleResetOfNotifications = (state) => {
	return { counter: (state.counter = 0) };
};

const defaultValue: unknown = [];
export const NotifyContext = React.createContext(defaultValue);

export const NotifyProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(notifysReducer, initialState);
	return <NotifyContext.Provider value={[ state, dispatch ]}>{children}</NotifyContext.Provider>;
};
