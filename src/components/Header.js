import React from 'react'
import gif from '../images/placeholder.gif'
import Counter from './Counter'

export default function Header() {
    return (
        <div className="header">
            <img className="rec" src={gif} alt=""/>
            <Counter />
        </div>
    )
}
