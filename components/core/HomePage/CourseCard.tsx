
const CourseCard = ({cardData,currentCard,setCurrentCard}:{cardData:any, currentCard: any, setCurrentCard:any}) => {

  return (
    <div>
      
    <button className={`flex flex-col rounded-xl w-[360px] h-[280px] p-5 gap-1  ${currentCard===cardData.heading? "bg-richblack-800 text-richblack-5":"bg-richblack-700 text-richblue-100"}`} onClick={()=>{setCurrentCard(cardData.heading)}}>

<div className=' flex flex-col text-center p-2 border-b-2 border-richblack-100 border-dashed '>
  <p className={` text-xl font-bold text-left mb-2 text-white`}>
    {cardData.heading}
  </p>
  <p className=" text-left mb-6 text-base ">
    {cardData.description}
  </p>
</div>
<div className=' flex justify-between w-full p-3'>
  <p>{cardData.level}</p>
  <p>{cardData.lessionNumber} Lessons</p>
  </div>
</button>
    </div>

  )
}

export default CourseCard