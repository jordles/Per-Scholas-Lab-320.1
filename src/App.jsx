import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import EmployeeList from './components/EmployeeList.jsx'
function App() {
  const [employees] = useState([
    { name: "James King", position: "President and CEO" },
    { name: "Julie Taylor", position: "VP of Marketing" },
    { name: "Eugene Lee", position: "CFO" },
    { name: "John Williams", position: "VP of Engineering" },
    { name: "Ray Moore", position: "VP of Sales" },
    { name: "Paul Jones", position: "QA Manager" }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    const filtered = employees.filter(employee =>
      employee.name.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  return (
    <>
      <Header />
      <SearchBar onSearchChange={handleSearchChange} />
      <EmployeeList employees={filteredEmployees} />
    </>
  );
}

export default App
