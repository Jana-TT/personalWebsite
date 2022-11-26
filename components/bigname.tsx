import { motion } from "framer-motion"

export default function BigName(){
    return(
        <div className=''>
            <motion.div className='pt-80 text-xl text-center' initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
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
            
            <div className='text-lg pt-16 flex items-center justify-center'>
                Full stack web developer, UI/UX designer, and game art designer
            </div>

        </div>
    )
}