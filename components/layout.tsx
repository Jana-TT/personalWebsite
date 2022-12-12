import React from "react"
import Header from "./mainScreen/header"

interface props{
    children: JSX.Element
}

export default function Layout({ children }: props){
    return(
        <>
            <Header/>
            <main>{children}</main>
        </>
    )
}