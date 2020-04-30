import React, {useState} from 'react';

export default function() {

    let [cnt, setCnt] = useState(0);

    let increase = () => {
        setCnt(cnt + 1);
    }

    return (
        <div>
            <div>{cnt}</div>
            <hr/>
            <button onClick={increase}>Plus +</button>
        </div>
    )
};