import StarRating from "./components/star-rating"
import './App.css'
import Otp from "./components/otp"
import InfiniteScroll from "./components/Infinite-scroll/infinite-scroll"
import Counter from "./components/counter"

function App() {
    return (
      <div>
        {/* <StarRating starCount={10}/> */}
        {/* <Otp /> */}
        <InfiniteScroll />
        {/* <Counter /> */}
      </div>
    )
}

export default App
