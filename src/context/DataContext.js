import React, {useState} from 'react'

export const DataContext = React.createContext({})


export function DataProvider ({children}){
    const [data, setData] = useState([])

    return <DataContext.Provider value={{data,setData}}>
        {children}
    </DataContext.Provider>
}
