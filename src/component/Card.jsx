import { useState } from 'react'
import data from '../data.json'
const Card = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
  
    const filteredData = data.filter((car) =>
      car.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
      setCurrentPage(1); // Reset to first page when searching
    };
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
      navigate.push(`/page/${newPage}`);
    };
  
    // Generate an array of page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  return (
    <>
       <div className="App">
        <div className="search">
        <input
          type="search" size={80}
          placeholder="Search by Car Name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        </div>
      </div>
      <div className="main-card">
        <div className="row">
          {currentData.map((car) => (
            <div className="col-4 card">
              <img src={car.image} alt="" />
              <div className="heading ">
                <h4>{car.name} </h4>
                <p>{car.year} </p>
              </div>
              <div className="inner-card">
                <div className="detail-1">
                  <p>{car.seater} </p>
                  <p>{car.transmission} </p>
                </div>
                <div className="detail-2">
                  <p>{car.fuel} </p>
                  <p>{car.mileage} </p>
                </div>
              </div>
              <hr />
              <div className="price-detail">
                <p>₹{car.price} </p>
                <div className='button-content'>
                  <i class="fa-regular fa-heart"></i>
                  <button>rent now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='navigation'>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? 'active' : ''}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
             <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default Card
