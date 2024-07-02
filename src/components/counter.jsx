import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = (e) => {
        console.log("Before state update");
        setCount(count + 1);
        console.log("After state update, hello1");
    }

    //when count is updated, first getting component rerender with new state then useEffect is executing
    //when rerendering is done all the useEffects that depent on that state are executed first
    useEffect(() => {
        console.log("Count1 Value is: ", count);
        if(count > 0) return;
        setCount(count + 1);
    }, [count])
    useEffect(() => {
        console.log("Count2 Value is: ", count);
    }, [count])

    console.log("hello2");

    return (
        <div>
            <h1>Counter value is {count}</h1>
            <button onClick={handleClick}>Increase Me</button>
        </div>
    )
}

export default Counter;


// Event Handler Execution:

// When you click the button, the event handler handleClick is invoked.
// Inside handleClick, setCount(count + 1) is called. This doesn't immediately re-render the component; instead, it schedules a state update.
// After scheduling the state update, the rest of the code in handleClick continues to execute, so console.log("hello1") is executed, and "hello1" is logged to the console.
// State Update and Re-render:

// Once the event handler completes and the JavaScript call stack is clear, React processes the scheduled state update.
// React then triggers a re-render of the Counter component with the new state value.
// During the re-render, the entire component function runs again, so console.log("hello2") is executed, and "hello2" is logged to the console again.
