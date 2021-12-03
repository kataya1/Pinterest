import React from 'react'
import { useNavigate } from 'react-router'
import CreatePin from './CreatePin'
export default function Createpinroute() {
    const navigate = useNavigate()
    return (
        <CreatePin navigate={navigate}/>
    )
}
