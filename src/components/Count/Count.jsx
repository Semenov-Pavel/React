import { useState } from "react";

function Count() {
    const [count, setCount] = useState(0);

    let handler = () => {
        let currentCount = count;
        currentCount++;
        setCount(currentCount);
    };

    return(
        <div>
            <h1>State</h1>
            <button onClick={handler}>add one</button>
            <p>{count}</p>
        </div>
    )
}

export default Count;