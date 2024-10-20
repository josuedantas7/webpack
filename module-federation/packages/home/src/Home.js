import React from 'react'
import { Button } from 'reactstrap'

const Home = () => {
    return (
        <div>
            <h1 className='display-3'>Olá Module Federation</h1>
            <hr className='my-2' />
            <p>Este componente é de outro App!</p>
            <button>Essa é a home</button>
        </div>
    )
}

export default Home