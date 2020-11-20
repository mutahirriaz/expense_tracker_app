import React, { createContext, useReducer } from 'react'
import AppReducer from "../context/AppReducer"


    const initialState = {
        transactions : [
       
        ]
    }


    // Global Variable //
    export const GlobalContext = createContext(initialState);

    // Global Provider //
    export const GlobalProvider = ({children}) => {

        const [state,dispatch] = useReducer(AppReducer, initialState)

        // ACTIONS //
        function deleteTransaction(id){
            dispatch({
                type:"DELETE_TRANSACTION",
                payload:id
            });
        }

        function addTransaction(transaction){
            dispatch({
                type:"ADD_TRANSACTION",
                payload:transaction
            });
        }



        return (
            <GlobalContext.Provider value = {

                {
                    transactions : state.transactions,
                    deleteTransaction,
                    addTransaction
                }
            } >
                {children}


            </GlobalContext.Provider>
        )
            
        

    }




