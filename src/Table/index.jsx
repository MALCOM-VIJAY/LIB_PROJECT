import React,{useState} from "react";
import "./Table.css"
const Table = ({data}) =>{
    // Pagination(Pagination of the table to move next set of data)
    const[currentPage,setCurrentPage] = useState(1)
    const recordsPerPage=10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records=data.slice(firstIndex,lastIndex);
    const npage=Math.ceil(data.length/recordsPerPage);
    const numbers =[...Array(npage+1).keys()].slice(1)
    return (
      // Table html names and data exportation
      <div>
        <main className="table">
        <table>
          <thead>
            <th >Title</th>
            <th>Author</th>
            <th>Subject</th>
            <th>Published-Date</th>
          </thead>
          <tbody>
            {records.map((d,i)=>(
              <tr key={i}>
                <td><strong>{d.title}</strong></td>
                <td>{d.author}</td>
                <td>{d.subject}</td>
                <td>{d.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </main>
        <nav>
          {/* Next and prev buttons of the table are declared here*/}
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
    // The functions of the count are declared are for the count of 10
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