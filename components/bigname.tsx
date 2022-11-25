import Image from 'next/image'
import watercolorCloud from '../public/watercolorCloud.png'
import { motion } from "framer-motion"

export default function BigName(){
    return(
        <main className='pt-96 text-xl text-center'>
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
            Jana Tahan           
            </motion.div>

            <motion.div className="" initial="hidden" animate="visible" variants={{
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
            </motion.div>

        </main>
    )
}