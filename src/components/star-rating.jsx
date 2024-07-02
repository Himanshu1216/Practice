import { useState } from "react";

const StarRating = ({starCount = 5}) => {
    
    const [starValue, setStarValue] = useState(-1);
    console.log(starValue);

    const [hoverValue, setHoverValue] = useState(-1);
    console.log(hoverValue);

    const arr = new Array(starCount).fill(0);
    console.log(arr);

    return (
        arr.map((value, index) => {
            return (
                <span 
                key={index}
                onClick={() => setStarValue(index)}
                onMouseEnter={() => setHoverValue(index)}
                onMouseLeave={() => setHoverValue(-1)}
                className={(index <= starValue && hoverValue == -1) || index <= hoverValue ? "gold" : ""}
                >
                    &#9733;
                </span>
            )
        })
    )
}

export default StarRating;