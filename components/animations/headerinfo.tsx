import { motion } from "framer-motion"
interface props {
    header : string

    d1: string
    d2: string
    d3: string 
}

const HeaderInfo = ({ header, d1, d2, d3} : props) => {
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
        animate="visible">
          
          {letters.map((letter, index) => (
      
          <motion.span variants={child} key={index} className="text-lg2 font-cool">
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}

        <div className="pl-4 pt-3">
          <svg className="w-10 h-10 stroke-blush" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg%22%3E"><path d={d1}></path><path d={d2}></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d3}></path></svg>
        </div>

      </motion.div>
    );
  };
  
  export default HeaderInfo;
  