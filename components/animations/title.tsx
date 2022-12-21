import { motion } from "framer-motion"
interface props {
    name: string
}

export default function Title( {name} : props) {
    return(
        <div className="">
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
            {name}
        </motion.div>

        </div>
    )
}