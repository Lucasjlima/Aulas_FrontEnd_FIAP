'use client'

import { useState } from 'react';

const compContato = () => {
    const [count,setCount] = useState(0);

    return(
        <>
        <h1>Contatos</h1>
        <button className='hover:bg-amber-200'   onClick={ () => { setCount(count + 1) } }>Somar</button>
        <br />
        <button className='hover:bg-amber-900' onClick={ () => { setCount(count - count) } }>Zerar</button>
        <p>Contador : { count }</p>
        </>
    );
}

export default compContato;