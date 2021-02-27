import React, { createContext, useContext } from 'react';
import { useSetReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useSetReducer({
        sets: [],
        cards: [],
        currentSet: '',
    });

    console.log(state);
    return <Provider value={[ state, dispatch ]} {...props} />
};

const  useStoreContext = () => {
    return useContext(StoreContext)
};

export { StoreProvider, useStoreContext };