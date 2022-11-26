import Link from "next/link";

interface props {
    pageLink: string
    buttonName: string
}

export default function ButtonHeader({pageLink, buttonName }: props){
    return(
        <>
            <Link href= {pageLink}>
                <button className="bg-sky-100 hover:bg-sky-200 text-white font-bold py-2 px-4 border border-sky-100 rounded">{buttonName}</button>
            </Link>
        </>
    )
}