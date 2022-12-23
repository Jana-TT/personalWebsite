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
        <div className="flex p-4 justify-center">
            
            <Image src={imageSource} alt="" width={widthSize} height={heightSize} className=""/> 

            <div className="pl-4">
                {text}
            </div>
            
        </div>
    )
}