'use client'

import Link from 'next/link'

import {
   ColumnDef,
   flexRender,
   getCoreRowModel,
   getSortedRowModel,
   SortingState,
   useReactTable,
   getPaginationRowModel,
} from '@tanstack/react-table'
import { IPayment } from '@/models/payment'
import { useMemo, useState } from 'react'

const PaymentsTable = ({ payments }: { payments: IPayment[] }) => {
   const [sorting, setSorting] = useState<SortingState>([])

   const columns = useMemo<ColumnDef<unknown>[]>(
      () => [
         {
            accessorKey: '_id',
            header: 'ID',
            cell: (info) => {
               const value = info.getValue() as string
               return (
                  <Link href={`/--admin--/payments/${value}`}>
                     <span className='text-sm text-slate-500 underline'>{value.slice(-4)}</span>
                  </Link>
               )
            },
         },
         {
            accessorKey: 'months',
            header: 'Months',
            cell: (info) => {
               const value = info.getValue() as string
               return <span className='yekan rtl text-sm text-slate-500'>{value}</span>
            },
         },
         {
            accessorKey: 'client',
            header: 'Client',
            cell: (info) => {
               const value = info.getValue() as string
               return <span className='yekan text-sm text-slate-500'>{value}</span>
            },
         },
         {
            accessorKey: 'createdAt',
            header: 'Created At',
            cell: (info) => {
               const value = info.getValue() as string
               return (
                  <span className='yekan text-sm text-slate-500'>
                     {new Date(value).toLocaleString('fa')} <br />
                     {new Date(value).toLocaleString()}
                  </span>
               )
            },
         },
      ],
      [],
   )

   const table = useReactTable({
      data: payments,
      columns,
      state: {
         sorting,
      },
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      debugTable: false,
   })

   return (
      <div className='relative overflow-x-auto'>
         <table className='w-full table-auto text-left text-sm text-slate-500'>
            <thead className='bg-slate-50 text-xs uppercase text-slate-500'>
               {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                     {headerGroup.headers.map((header) => {
                        return (
                           <th key={header.id} colSpan={header.colSpan} className='px-6 py-3'>
                              {header.isPlaceholder ? null : (
                                 <div
                                    {...{
                                       className: header.column.getCanSort()
                                          ? 'cursor-pointer select-none'
                                          : '',
                                       onClick: header.column.getToggleSortingHandler(),
                                    }}
                                 >
                                    {flexRender(
                                       header.column.columnDef.header,
                                       header.getContext(),
                                    )}
                                    {{
                                       asc: ' 🔼',
                                       desc: ' 🔽',
                                    }[header.column.getIsSorted() as string] ?? null}
                                 </div>
                              )}
                           </th>
                        )
                     })}
                  </tr>
               ))}
            </thead>
            <tbody className=''>
               {table.getRowModel().rows.map((row) => {
                  return (
                     <tr key={row.id} className='border-b border-slate-300 bg-white'>
                        {row.getVisibleCells().map((cell) => {
                           return (
                              <td key={cell.id} className='px-6 py-4'>
                                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
                              </td>
                           )
                        })}
                     </tr>
                  )
               })}
            </tbody>
         </table>

         <div className='mt-5 flex items-center gap-5'>
            <button
               className='rounded-lg border bg-slate-800 p-1 px-2 text-sm'
               onClick={() => table.setPageIndex(0)}
               disabled={!table.getCanPreviousPage()}
            >
               First Page
            </button>
            <button
               className='rounded-lg border bg-slate-800 p-1 px-2 text-sm'
               onClick={() => table.previousPage()}
               disabled={!table.getCanPreviousPage()}
            >
               Previous Page
            </button>
            <button
               className='rounded-lg border bg-slate-800 p-1 px-2 text-sm'
               onClick={() => table.nextPage()}
               disabled={!table.getCanNextPage()}
            >
               Next Page
            </button>
            <button
               className='rounded-lg border bg-slate-800 p-1 px-2 text-sm'
               onClick={() => table.setPageIndex(table.getPageCount() - 1)}
               disabled={!table.getCanNextPage()}
            >
               Last Page
            </button>

            <span className='flex items-center gap-1'>
               <div>Page</div>
               <strong>
                  {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
               </strong>
            </span>

            <span className='flex items-center gap-1 bg-slate-800 text-sm'>
               Go to:
               <input
                  type='number'
                  defaultValue={table.getState().pagination.pageIndex + 1}
                  onChange={(e) => {
                     const page = e.target.value ? Number(e.target.value) - 1 : 0
                     table.setPageIndex(page)
                  }}
                  className='w-16 rounded border bg-slate-800 p-1 text-sm'
               />
            </span>
            <select
               className='bg-slate-800 text-sm'
               value={table.getState().pagination.pageSize}
               onChange={(e) => {
                  table.setPageSize(Number(e.target.value))
               }}
            >
               {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                     {pageSize}
                  </option>
               ))}
            </select>
         </div>
      </div>
   )
}

export default PaymentsTable
