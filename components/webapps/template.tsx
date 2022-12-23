import Link from "next/link"
import Image from "next/image"

interface props{
    text: string
    imageSource: string
    widthSize: number
    heightSize: number
}

export default function Template({text, imageSource, widthSize, heightSize}: props) {
    return(
        <button className="flex items-stretch justify-center">

            <div className="flex">
                <Image src={imageSource} alt="" width={widthSize} height={heightSize}/> 
            </div>

        </button>
    )
}