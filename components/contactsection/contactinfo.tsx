import Link from "next/link"

interface props{
    content: string
    pageLink: string
    d1: string
    d2: string
    d3:string
}

export default function ContactInfo({content, pageLink, d1}: props) {
    return(
        <div className="pt-2">
            <Link href={pageLink}>
                <div className="flex shadow-sm bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d={d1} /></svg>
                    <div className="pl-4">
                        {content}
                    </div>
                </div> 
            </Link>                    
        </div>
        
    )
}