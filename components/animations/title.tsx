import { motion } from "framer-motion"
interface props {
    name: string
    
}

export default function Title( {name} : props) {
    return(
        <div className="relative">
            <motion.div className='pt-80 text-xl text-center font-cool' initial="hidden" animate="visible" variants={{
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

            <h1 className="">
                {name}
            </h1>

        </motion.div>

        </div>
    )
}