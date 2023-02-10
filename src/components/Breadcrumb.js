import React from 'react'

const Breadcrumb = () => {
  return (
    <div className="mt-5 pt-4">
    <nav aria-label="breadcrumb bg-white">
        <ol class="breadcrumb pt-3  text-dark-green bg-white">
            <li class="breadcrumb-item">
                <a href="/" className='text-dark-green text-decoration-none fw-bold-5 fs-14'>Development & IT</a>
            </li>
            <li class="breadcrumb-item">
                <a href="/" className='text-dark-green text-decoration-none fw-bold-5 fs-14'>Design & Creative</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
                <a href="/" className='text-dark-green text-decoration-none fw-bold-5 fs-14'>Sales & Marketing</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
                <a href="/" className='text-dark-green text-decoration-none fw-bold-5 fs-14'>Writing & Translation</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
                <a href="/" className='text-dark-green text-decoration-none fw-bold-5 fs-14'>Admin & Customer Support</a>
            </li>
            <li class="breadcrumb-item active fw-bold-5" aria-current="page">
                More
            </li>
        </ol>
    </nav>
    </div>
  )
}

export default Breadcrumb