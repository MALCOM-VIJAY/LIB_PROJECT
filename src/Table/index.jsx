import React,{useState} from "react";
import "./Table.css"
const Table = ({data}) =>{
    const[currentPage,setCurrentPage] = useState(1)
    const recordsPerPage=10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records=data.slice(firstIndex,lastIndex);
    const npage=Math.ceil(data.length/recordsPerPage);
    const numbers =[...Array(npage+1).keys()].slice(1)
    return (
      <div>
        <main className="table">
        <table>
          <thead>
            <th >Title</th>
            <th>Author</th>
            <th>Subject</th>
            <th>Published-Date</th>
            {/* <th>Url</th> */}
          </thead>
          <tbody>
            {records.map((d,i)=>(
              <tr key={i}>
                <td><strong>{d.title}</strong></td>
                <td>{d.author}</td>
                <td>{d.subject}</td>
                <td>{d.date}</td>
                {/* <td>{d.imageurl}</td> */}
                
              </tr>
            ))}
          </tbody>
        </table>
        </main>
        <nav>
          <ul className="pagination">
            <li className='page-item'>
              <a href="#" className='page-link' onClick={prePage}>Prev</a>
            </li>
            {
              numbers.map((n,i)=>(
                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}> 
                <a href="#" style={{textDecoration:'none'}} className='page-link'
                 onClick={()=>changeCPage(n)}>{n}</a>
                </li>
              ))
            }
            <li className='page-item'>
              <a href="#" className='page-link' onClick={nextPage}>Next</a>
            </li>
          </ul>
        </nav>
      </div>
    )
    function prePage(){
      if(currentPage !== firstIndex && currentPage > 1){
        setCurrentPage(currentPage-1)
      }
    }
    function changeCPage(id){
      setCurrentPage(id)
    }
    function nextPage(){
      if(currentPage!== npage){
        setCurrentPage(currentPage+1)
      }
    }
}

export default Table