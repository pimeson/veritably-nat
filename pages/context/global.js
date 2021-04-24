import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalProvider = (props) => {
    const [isInitialLoad, setisInitialLoad] = React.useState(true)

    return (
        <GlobalContext.Provider value={{
            isInitialLoad,
            setisInitialLoad
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export function useGlobalContext() {
    return React.useContext(GlobalContext)
}