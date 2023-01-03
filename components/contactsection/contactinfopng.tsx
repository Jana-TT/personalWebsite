import Image from "next/image"
import Link from "next/link"

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
                <div className="flex shadow-sm bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                    <Image src={imageSource} alt="" width={widthSize} height={heightSize}/>
                    <div className="pl-4">
                        {content}
                    </div>
                </div> 
            </Link>                    
        </div>
        
    )
}