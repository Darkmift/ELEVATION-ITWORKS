// import { useState } from 'react'
import './App.css'
import Title from './components/Title/Title'
import { Table, TBody, THeader, TD, TH, TR } from './components/Table/Table';

function App() {
  // const [count, setCount] = useState(0)

  return (
    // table example
    <Table >
      <THeader >
        <TR rowType='header'>
          <TH>Status</TH>
          <TH>Build ID</TH>
          <TH>Caption</TH>
        </TR>
      </THeader>
      <TBody>
        <TR rowType='success'>
          <TD classNames='w-[136px]'>Success</TD>
          <TD>2024.05.02.1</TD>
          <TD>BuildToolCopmile</TD>
        </TR>
        <TR rowType='failed'>
          <TD>Failed</TD>
          <TD>2024.05.02.1</TD>
          <TD>BuildToolCopmile</TD>
        </TR>
        <TR rowType='cancelled'>
          <TD>Cancelled</TD>
          <TD>2024.05.02.1</TD>
          <TD>BuildToolCopmile</TD>
        </TR>
        <TR rowType='success'>
          <TD>Success</TD>
          <TD>2024.05.02.1</TD>
          <TD>BuildToolCopmile</TD>
        </TR>
      </TBody>
    </Table>
  )
}

export default App
