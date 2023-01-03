import Link from "next/link";
import HeaderInfo from "../components/animations/headerinfo";
import Card from "../components/mainScreen/card";
import Image from "next/image";
import ContactInfo from "../components/contactsection/contactinfo";
import ContactInfoPng from "../components/contactsection/contactinfopng";

export default function ContactMe() {
    return(
    
        <div className="overflow-visible flex space-x-3 container mx-auto mt-16 pl-24">
            
            <div>
                <Image src="/webdevLogo3.png" alt="" width={600} height={600}/> 
            </div>
            
        
            <div className="py-8 lg:py-16 px-4 mx-auto pr-40 whitespace-nowrap">
                    <h2 className="mb-4 text-lg text-center font-cool">
                        <HeaderInfo header="Contact Me!" d1="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"  d2="" d3=""/>
                    </h2>
                <ContactInfo content="janattsite@gmail.com" pageLink="" d1="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"/>
                <ContactInfo content="Jana-TT" pageLink="https://github.com/Jana-TT?tab=repositories%22%7D%3E%22%7D%3E" d1="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/>
                <ContactInfoPng content="Jana Tahan" pageLink="https://www.linkedin.com/in/jana-tahan-2a13a7253/" imageSource="/linkedinLogo.png" widthSize={20} heightSize={20}/>
            </div>


        </div>
        
    )
}