

const GroupFilter = ({minRating,onRateFilter,ratings}) => {
  return (
    <ul className="flex flex-wrap justify-start items-center gap-3 ">
        {ratings.map((rating,index) => (
        <div key={index}>
             <li className={`${minRating === rating ?'border-b-2 border-white':''}text-lg cursor-pointer`}onClick={()=>onRateFilter(rating)}> <span className="me-1">Rating</span>{rating}+ <span className="ml-1 text-yellow-500"><i className="fa-solid fa-star"></i></span></li>
            </div>    
        ))}
    </ul>
  )
}

export default GroupFilter
