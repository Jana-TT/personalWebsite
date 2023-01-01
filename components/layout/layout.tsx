import React from "react"
import Header from "../mainScreen/header"
import Head from "next/head"
interface props{
    children?: React.ReactNode
}

export default function Layout({ children }: props){
    return(
        <>
            <Head>
                <title>Jana Tahan</title>
                <link rel="icon" href="/cursive_j.png"/>
            </Head>

            <Header/>
            
            <main>{children}</main>
        </>
    )
}