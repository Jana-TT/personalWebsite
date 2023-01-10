import Image from "next/image"
import Link from "next/link"
import CopyBtnDemo from "./copytoclipboard"

interface props{
    content: string
    pageLink: string
    imageSource: string
    widthSize: number
    heightSize: number
}

export default function ContactInfo({content, pageLink, imageSource, widthSize, heightSize}: props) {
    return(
        <div className="pt-2">
            <Link href={pageLink}>
                <div className="flex shadow-sm bg-gray-400 border border-gray-300 text-sm rounded-lg w-full p-2.5 hover:border-blush">
                    <Image src={imageSource} alt="" width={widthSize} height={heightSize}/>
                    <div className="pl-4">
                        {content}
                    </div>
                </div> 
            </Link>                    
        </div>
    )
}