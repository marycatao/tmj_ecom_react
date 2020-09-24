import React from 'react';

function Logo(){
    return(
        <>
            <a href='/'>
                <img className='lo' src={require('./gif/TMJ.png')}     width='200px' height='100px'/>
            </a>
        </>
    );
}
export default Logo;