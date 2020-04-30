import React from 'react';
import CounterClass from './counters/class';
import CounterFuntion from './counters/function';

export default function() {

    return(
        <div>
            <h1>Counter as class</h1>
            <CounterClass />
            <h1>Counter as funtion</h1>
            <CounterFuntion />
        </div>
    )
};