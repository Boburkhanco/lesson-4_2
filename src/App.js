import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [post, setPost] = useState([])
  const [comment, setComment] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setData(data))
    // console.log(data);
  }, [])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res1 => res1.json())
    .then(post => setPost(post))
    console.log(post);
  }, [])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res2 => res2.json())
    .then(comment => setComment(comment))
    console.log(comment);
  }, [])
  
  return (
    <div className="App">
      <div className="boxes-1">
        Users:
        {data.map(item => {
          return(
            <li 
            key={item.id} 
            className="box">
              <span>{item.id}</span>
              <h3> Name: {item.name}</h3>
              <p> Address: {item.address.city}</p>
              <p> Company: {item.company.name}</p>
              <a href=""> Email: {item.email}</a>
              <a href=""> Website: {item.website}</a>
            </li>
          )
        })}
      </div>
      <div className="boxes-1">
        Posts:
        {post.map(item => {
          return(
            <li 
            key={item.id} 
            className="box">
            <span>{item.id}</span>
              <h3> Title: {item.title}</h3>
              <p> Post: {item.body}</p>
            </li>
          )
        })}
      </div>
      <div className="boxes-1">
        Comments:
        {comment.map(item => {
          return(
            <li 
            key={item.id} 
            className="box">
              <span>{item.id}</span>
              <h3> Name: {item.name}</h3>
              <p> Comment: {item.body}</p>
              <a href=""> Email: {item.email}</a>
            </li>
          )
        })}
      </div>
    </div>
  );
}

export default App;
