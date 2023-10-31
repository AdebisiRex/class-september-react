import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      {/* <ul className="nav">
        <Link className='nav-link' href={"user-profile"}>Visit User Profile</Link>
        <li className="nav-item">
          <Link className="nav-link" href={"users/itel"}>
            {" "}
            Check Itel Out
          </Link>
        </li>
        <li className="nav-item">
          <Link href={"dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link className="nav-link" href={"users/nokia"}>
            {" "}
            Check Nokia Out
          </Link>
        </li>
        <li>
          <Link className="nav-link" href={"users/iphone"}>
            {" "}
            Check Iphone Out
          </Link>
        </li>
        <li>
          <Link className="nav-link" href={"users/samsung"}>
            {" "}
            Check Samsung Out
          </Link>
        </li>
      </ul> */}
      <ul className='nav'>
        <li className="nav-item">
          <Link className='nav-link' href={'/'}> Home</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' href={'/dashboard'}>Dashboard</Link>
        </li>
        {/* <li className="nav-item">
          <Link className='nav-link' href={'user-profile'}> User Profile</Link>
        </li> */}
        <li className="nav-item">
          <Link className='nav-link' href={'/users/blogs'}> Visit Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' href={'dashboard'}> Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' href={'/user_input'}> User_Input</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' href={'/class-based'}>Class Based</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar