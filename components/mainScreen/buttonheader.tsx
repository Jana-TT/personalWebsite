import Link from "next/link"

interface props {
    pageLink: string
    buttonName: string
}

export default function ButtonHeader({pageLink, buttonName }: props){
    return(
        <>
            <Link href= {pageLink}>
                <button className="bg-gradient-to-tl from-galaxy-500 to-galaxy-400 rounded p-1">
                    <div className="text-white font-semibold py-2 px-4 bg-gray-200 hover:bg-gray-100">{buttonName}</div>
                </button>
                
            </Link>
        </>
    )
}