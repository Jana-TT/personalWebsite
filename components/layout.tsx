import React from "react"
import Header from "./mainScreen/header"
import SideBar from "./sidebar"

interface props{
    children?: React.ReactNode
}

export default function Layout({ children }: props){
    return(
        <>
            <Header/>
            <main>{children}</main>
        </>
    )
}