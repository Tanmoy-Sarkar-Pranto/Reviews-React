import { useState } from "react"
import reviews from "./data"

import Review from "./Review"

const App = () => {
  // console.log(reviews)
  // console.log(reviews.length)
  let [index, setIndex] = useState(0)
  const user = reviews[index]
  // console.log(user)
  return (
    <div className="centerDiv">
      {/* <h2>Reviews</h2> */}

      <Review
        {...user}
        index={index}
        setIndex={setIndex}
        len={reviews.length}
      />
    </div>
  )
}
export default App
