import React from 'react';
import './App.css'
import PaginationBar from './components/PaginationBar/PaginationBar'

function App() {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const totalPages = 10;

  const handlePageChange = (page:number) => {
    setCurrentPage(page);
  };

  return (
    <PaginationBar  
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={handlePageChange}
/>
)
}

export default App
