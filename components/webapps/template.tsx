import Link from "next/link"
import Image from "next/image"

interface props{
    text: string
    imageSource: string
    widthSize: number
    heightSize: number
    linkPage: string
}

export default function Template({text, imageSource, widthSize, heightSize, linkPage}: props) {
    return(
        <Link href={linkPage}>
            <div className="flex p-4 justify-center">
                <Image src={imageSource} alt="" width={widthSize} height={heightSize}/> 

                <div className="flex-none pl-6">
                    {text}
                </div>
            </div>
        </Link>
    )
}