import React,{useState} from "react";
import Data from '../Data.json';
import Table from '../Table';
import {IoCaretBackCircleOutline} from 'react-icons/io5'
import { Link } from "react-router-dom"
import './Books.css';

const Books = () =>{
  const [query, setQuery] = useState("");
  const [keys,setKey] = useState(["title"]);
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
return (
  <div className="Books">
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <div className="contain">
          <Link to="/" style={{textDecoration:"none",padding:"0px 20px 0px 0px"}}><IoCaretBackCircleOutline size={40} className="home"/></Link>
          <select name="catagory" id="select" onChange={(e)=>{setKey([e.target.value])}}>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="subject">Subject</option>
            <option value="date">Published-Date</option>
          </select>
          <input
            className="search"
            placeholder={`Search ${keys}`}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
      </div>
      <p style={{borderBottom:"2px solid black"}}>Count: {search(Data).length}</p>
    </div>
    {<Table data={search(Data)} />}
  </div>
);
}
    

export default Books;