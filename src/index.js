import React from 'react';
import ReactDom from 'react-dom';

function BookList(){
  return(
  <section>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
  );
}

const Book = ()=>{
  return (
    <article>
      <Image/>
      <Author/>
      <Title/>
    </article>
  );
}

const Image = ()=>{
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/6182z76Pg1L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" alt=""/>
  );
}

const Author = () =>{
  return (
    <h4>Becky Lowax</h4>
  );
}

const Title = ()=>{
  return (
    <h1>Best Parks in USA to visit</h1>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));