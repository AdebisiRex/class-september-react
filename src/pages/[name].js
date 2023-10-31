import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Name = () => {
const router = useRouter()
const findRegisteredUser =()=>{
    /*finds in our database if this user (router.query.name) exists
    if he does send us his data so we can generate the contend of this page

    else route them to 404

    */
}
  return (
    <h1>
        This page belongs to {router.query.name}
    </h1>
  )
}

export default Name