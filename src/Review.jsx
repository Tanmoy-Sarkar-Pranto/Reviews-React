import { FaQuoteRight, FaGreaterThan, FaLessThan } from "react-icons/fa"

const Review = (props) => {
  const handlePrev = () => {
    if (props.index > 0) {
      props.setIndex(props.index - 1)
    } else {
      props.setIndex(props.len - 1)
    }
  }
  const handleNext = () => {
    if (props.index < props.len - 1) {
      props.setIndex(props.index + 1)
    } else {
      props.setIndex(0)
    }
  }
  const handleSurprize = () => {
    const rand = Math.round(Math.random() * (props.len - 1))
    props.setIndex(rand)
  }
  return (
    <div className="review">
      <div className="img-container">
        <img src={props.image} alt={props.name} className="person-img" />
        <FaQuoteRight className="quote-icon" />
      </div>
      <h3 className="author">{props.name}</h3>
      <h5 className="job">{props.job}</h5>
      <p className="info">{props.text}</p>
      <div className="btn-container">
        <button onClick={handlePrev}>
          <FaLessThan className="prev-btn" />
        </button>
        <button onClick={handleNext}>
          <FaGreaterThan className="next-btn" />
        </button>
      </div>
      <button className="btn" onClick={handleSurprize}>
        Surprize me
      </button>
    </div>
  )
}
export default Review
