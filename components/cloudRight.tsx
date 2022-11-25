import Image from 'next/image'
import watercolorCloud from '../public/watercolorCloud.png'
import { motion } from "framer-motion"

export default function CloudRight(){
    return(
        <main className='w-24'>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 1
                },
                visible: {
                    scale: 1, 
                    opacity: 1,
                    transition: {
                        delay: .4
                    }
                },
            }}> 
            <Image src = { watercolorCloud } alt="" height={500}></Image>
            </motion.div>
        </main>
    )
}