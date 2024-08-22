import React from 'react'

export default function HomeWork1({ user }) {
    return (
        <div>
            <p>
                {user ? `Hello ${user.firstName}` : 'Hello Guest'}
            </p>
        </div>
    )
}
