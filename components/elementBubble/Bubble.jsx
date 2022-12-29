import Image from "next/image"



const Bubble = ({ logo}) => {
  return (
    <div>
        <Image
            alt="bubble"
            src={logo}
            className={"bubbleIMG"}
        />
    </div>
  )
}

export default Bubble