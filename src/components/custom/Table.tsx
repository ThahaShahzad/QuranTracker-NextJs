import React, { useMemo } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BsCheck } from 'react-icons/bs'
import { Cell, Column, useTable } from 'react-table'
interface props {
  tableName?: {
    right?: string
    left?: string
    subjects?: string[]
  }
  columns: Column[]
  data: any
}
const Table = ({ tableName, columns, data }: props) => {
  const colWithEditButton = columns.map((column) => {
    if (column.accessor === '[editButton]')
      return {
        Header: 'Edit',
        accessor: '[editButton]',
        Cell: (cellObj: any) => (
          <button onClick={() => handleClickEditRow(cellObj)}>
            <AiFillEdit />
          </button>
        ),
        width: '10'
      }
    return column
  })
  const localColumns: any = useMemo(() => colWithEditButton, [])
  const localData = useMemo(() => data, [])
  const handleClickEditRow = (cellObj: any) => {
    console.log(cellObj.cell.row.values)
  }
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns: localColumns,
    data: localData
  })
  return (
    <section className=' rounded-lg bg-bg p-2 md:p-8'>
      <div className='flex justify-between'>
        <h4>
          {tableName?.right} {tableName?.left && ' -'} <span>{tableName?.left}</span>
        </h4>
        <h4>{tableName?.subjects?.map((subject) => subject)}</h4>
      </div>
      <table className='whitespace-nowrap' {...getTableProps()}>
        <thead className='border-2 border-primary'>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className='p-2 md:p-4 border-2 border-primary w-[1%]' {...cell.getCellProps()}>
                      {cell.value === true ? <BsCheck /> : cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default Table
