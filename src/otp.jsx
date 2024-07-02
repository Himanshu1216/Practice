import { useEffect, useRef, useState } from "react";

const Otp = ({otpLength = 6}) => {

    const otp = new Array(otpLength).fill('');
    const [otpValue, setotpValue] = useState(otp);
    const ref = useRef([]);

    useEffect(() => {
        ref.current[0].focus();
    }, [])
    
    const handleKeyDown = (e, index) => {
        // console.log(e);
        // console.log(index);
        const key = e.key;
        console.log(key);

        const newotpValue = [...otpValue];

        if(key === 'ArrowLeft') {
            if(index > 0) ref.current[index - 1].focus();
        }

        if(key === 'ArrowRight') {
            if(index < otpLength - 1) ref.current[index + 1].focus();
        }

        if(key === 'Backspace') {
            newotpValue[index] = ' ';
            setotpValue(newotpValue);
            if(index === 0) {    
                return;
            }
            //one way
            // const prvInput = document.getElementById(`otp-input-${index - 1}`);
            // prvInput.focus();

            //using useRef
            ref.current[index - 1].focus();
            return;
        }
        if(isNaN(key)) {
            return;
        }
        newotpValue[index] = e.key;
        setotpValue(newotpValue);
        if(index == otpLength - 1) {
            return;
        }
        // const nextInput = document.getElementById(`otp-input-${index + 1}`); 
        // nextInput.focus();

        //using useRef Hook
        ref.current[index + 1].focus();
    }
    
    return (
        otpValue.map((value, index) => {
            return (
                <input 
                    id={`otp-input-${index}`}
                    type="text"
                    key={index}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    value={otpValue[index]}
                    ref={(currentInput) => ref.current[index] = currentInput}
                />
            )
        })
    )
}

export default Otp;