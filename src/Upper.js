import React from 'react';
import { useState } from 'react';

function Upper() {
    const [txt, setTxt] = useState('Результат');
    return (
        <>
            <h1>{txt.toUpperCase()}</h1>
            <input value={txt} onChange={(e) => setTxt(e.target.value)}/>
            <input value={txt} onChange={(e) => setTxt(e.target.value)}/>
        </>
    );
}

export default Upper;
