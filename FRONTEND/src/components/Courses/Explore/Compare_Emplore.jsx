import React from 'react'
import Comparison_Table from './Comparison_Table'
import Downnav from './Downnav'

export default function Compare_Emplore() {
  return (
    <div>
          <Comparison_Table />
          <div style={{ position: "fixed", bottom: "0px" }}>
          <Downnav />
        </div>
    </div>
  )
}
