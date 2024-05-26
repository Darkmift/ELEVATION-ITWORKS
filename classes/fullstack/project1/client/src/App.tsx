import React from 'react';
import './App.css'
import Footer from './components/Footer/Footer'

function App() {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const total = 82;
  const totalPages = 10;

  const handlePageChange = (page:number) => {
    setCurrentPage(page);
  };

  return (
    <Footer 
    total={total}
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={handlePageChange}
  />
)
}

export default App
