import React from 'react'
import {  useParams } from 'react-router-dom'

export const PageDetails = () => {
    const { id } = useParams()
    console.log(id);
    return (
        <div>
            <div>
                pageDetails id is {id}
            </div>

        </div>
    )
}
