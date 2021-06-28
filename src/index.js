import React from 'react';
import ReactDom from 'react-dom'
import './index.css'
import {Book} from'./book.js'
import {books} from './books.js'


function Booklist() {
    return (
    <section className= "booklist">
        {books.map((book) => {
            return <Book key= {book.id} {...book}></Book>
        })}

    </section>
    );
}


ReactDom.render(<Booklist />, document.getElementById('root'))