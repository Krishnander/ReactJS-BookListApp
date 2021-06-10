import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {books} from './Books'

function BookList(){
  return(
  <section className='bookList'>
    {books.map((book,index)=>{
      return <Book key={index} {...book}></Book>
    })}
  </section>
  );
}

const Book = (props)=>{
  const {image,title,author} = props;
  return (
    <article className='book'>
      <h1><img src={image} alt=''/></h1>
      <h3>{title}</h3>
      <h6>{author}</h6>
    </article>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));