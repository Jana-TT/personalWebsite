import { motion } from "framer-motion"
interface props {
    header : string
}

const HeaderInfo = ({ header } : props) => {
    const letters = Array.from(header);
  
    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.01, delayChildren: 0.01 * i },
      }),
    };
  
    const child = {
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
        },
      },
      hidden: {
        opacity: 0,
        x: -20,
        y: 10,
        
      },
    };
  
    return (
      <motion.div
        style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span variants={child} key={index}  className="text-lg2">
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    );
  };
  
  export default HeaderInfo;
  