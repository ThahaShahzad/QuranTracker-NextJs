import React from 'react'

interface props {
  columns: string[]
  data: any[]
}
const SimpleTable = ({ columns, data }: props) => {
  return (
    <table className='whitespace-nowrap'>
      <thead className='border-2 border-primary'>
        <tr>
          {columns.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row: any) => (
          <tr>
            {row.cells.map((cell: any) => {
              return <td className='p-2 md:p-4 border-2 border-primary w-[1%]'>{cell}</td>
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SimpleTable
