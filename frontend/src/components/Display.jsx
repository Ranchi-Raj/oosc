import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
    const user = useSelector((state) => state.counter.user)

    return (
        <>
            <div className="text-white">
               Details
            </div>
        </>
    )
}
