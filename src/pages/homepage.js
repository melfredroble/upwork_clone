import React, {useState} from 'react';

const Homepage = () => {

    const [onHover, setOnHover] = useState(false);

  return (
    <div className='mt-5 pt-5'>
        <button
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}>
            Hover over me!
        </button>
        {onHover && (
            <div>
            I'll appear when you hover over the button.
            </div>
        )}
    </div>
  )
}

export default Homepage