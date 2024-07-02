import { useEffect, useState } from "react";
import './infinite-scroll.css';

const InfiniteScroll = () => {

    //need to maintain state(as new image load state will change and thus will change the ui)

    const [imgArray, setimgArray] = useState([]);
    const [pageNum, setpageNum] = useState(1);

    useEffect(() => {
        fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=4`)
        .then((res) => {
            return res.json();
        })
        .then(arr => {
            setimgArray((prv) => {
                return [...prv, ...arr];
            })
        })
        
    }, [pageNum])

    console.log(imgArray);
    
    useEffect(() => {
        const observer = new IntersectionObserver((params) => {
            console.log(params);
            if(params[0].isIntersecting) {
                setpageNum(pageNum + 1);
                observer.unobserve(lastImage);
            }
        })
        console.log("hello");
        const len = imgArray.length;
        const lastImage = document.getElementById(`img-item-${len - 1}`);
        console.log(lastImage);
        if(!len) return;
        observer.observe(lastImage);
    }, [imgArray])

    return (
        <div className="infinite-scroll">
            {
                imgArray.map((data, index) => {
                    return (
                        <img 
                            src={data.download_url}
                            alt="img-item" 
                            key={index}
                            id={`img-item-${index}`}
                        />
                    )
                })
            }
        </div>
    )
}

export default InfiniteScroll;