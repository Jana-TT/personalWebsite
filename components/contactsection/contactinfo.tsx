import Link from "next/link"
import CopyBtnDemo from "./copytoclipboard"
import CopyToClipboard from "./copytoclipboard"

interface props{
    content: string
    pageLink: string
    d1: string
}

export default function ContactInfo({content, pageLink, d1}: props) {
    return(
            <Link href={pageLink}>
                <div className="flex shadow-sm bg-gray-400 border border-gray-300 text-sm rounded-lg w-full p-2.5 hover:border-blush">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d={d1} /></svg>
                    <div className="pl-4">
                        {content}
                    </div>
                    <CopyToClipboard textToCopy={content}/>
                </div> 
            </Link>                    
    )
}