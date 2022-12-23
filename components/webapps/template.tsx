import Image from "next/image"
import Link from "next/link"

interface props {
    imageSource: string
    description: string[]
    title: string
    linkto: string
    widthLength: number
    heightLength: number
}

export default function Template( {imageSource, description, widthLength, heightLength, title, linkto}: props) {
    return(

        <Link href={linkto} className="flex flex-row items-center pt-4">

            <button className="bg-gray-300 flex hover:border rounded p-2 hover:bg-gray-200 border-blush hover:border-2">

                <Image src={imageSource} alt={""} width={widthLength} height={heightLength}/>

                <div className="pl-6 text-left">

                    <div className="text-lg">
                        {title}
                    </div>

                    <div className="font-serif text-md pt-4">
                        {description.map((e) => 
                        <li key={e}>
                            {e}
                        </li>
                        )}
                    </div>
                    
                </div> 

            </button>

        </Link>
    )
}