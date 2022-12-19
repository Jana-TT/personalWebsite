import Image from "next/image"

interface props {
    imageSource: string
    description: string
    widthLength: number
    heightLength: number
}

export default function Template( {imageSource, description, widthLength, heightLength}: props) {
    return(

        <div className="justify-center flex pt-6">
            <Image src={imageSource} alt={""} width={widthLength} height={heightLength}/>

            <div className="pl-6">
                {description}
            </div>

        </div>
    )
}