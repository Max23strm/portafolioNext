import Image from "next/image"
import { motion } from "framer-motion"



const Bubble = ({ logo}) => {
  return (
    <motion.div
      whileInView={{
        scale: [0, 1],
        opacity: [0,1],
        transition: {
          duration: 1,
          ease: 'easeInOut'
        }
      }}
    >
        <Image
            alt="bubble"
            src={logo}
            className={"bubbleIMG"}
        />
    </motion.div>
  )
}

export default Bubble