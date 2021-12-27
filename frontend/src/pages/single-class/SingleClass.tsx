import React from 'react'

export default function SingleClass({params}:any) {
    return (
        <div className="container">
            <h1>
                {params.id}
            </h1>
        </div>
    )
}
