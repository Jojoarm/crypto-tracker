import React, { createContext, useState } from 'react';

export const WatchListContext = createContext();

export const WatchListContextProvider = props => {
    const [watchList, setwatchList] = useState(["bitcoin", "ethereum", "ripple"])

    return (
        <WatchListContext.Provider value={{watchList}}>
            {props.children}
        </WatchListContext.Provider>
    )
}