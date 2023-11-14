'use client'

import { IBlog } from '@/models/blog'
import { useState } from 'react'
import DateFormat from '@/lib/dateFormat'
import { useRouter } from 'next/navigation'

const Comments = ({ blogs }: { blogs: IBlog[] }) => {
   const [filter, setFilter] = useState<string | null>('pending')

   const router = useRouter()

   const approvalChangeHandle = async (
      commentId: string,
      replyId: string | null,
      type: string,
      approval: string,
   ) => {
      const toast = await import('react-toastify').then((mod) => mod.toast)

      try {
         const res = await fetch('/api/--admin--/blog/comment', {
            method: 'PATCH',
            body: JSON.stringify({
               commentId,
               replyId,
               type,
               approval,
            }),
         })

         if (!res.ok) throw new Error()

         toast.success('Approval changed successfully.')
         router.refresh()
      } catch (err) {
         toast.error('An error occurred while chaning approval status!')
         console.error(err)
      }
   }

   return (
      <>
         <div className='grid w-full justify-center'>
            <div className='flex gap-2'>
               <button
                  onClick={() => setFilter(null)}
                  className={`${
                     filter == null ? 'bg-indigo-600' : ''
                  } rounded-full px-4 py-1 text-base`}
               >
                  All
               </button>
               <button
                  onClick={() => setFilter('pending')}
                  className={`${
                     filter == 'pending' ? 'bg-indigo-600' : ''
                  } rounded-full px-4 py-1 text-base`}
               >
                  Pending
               </button>
               <button
                  onClick={() => setFilter('approved')}
                  className={`${
                     filter == 'approved' ? 'bg-indigo-600' : ''
                  } rounded-full px-4 py-1 text-base`}
               >
                  Approved
               </button>
               <button
                  onClick={() => setFilter('disapproved')}
                  className={`${
                     filter == 'disapproved' ? 'bg-indigo-600' : ''
                  } rounded-full px-4 py-1 text-base`}
               >
                  Disapproved
               </button>
            </div>
         </div>

         {blogs
            .sort((a, b) => new Date(b.modifiedAt).getDate() - new Date(a.modifiedAt).getDate())
            .map((blog) => {
               return (
                  <>
                     <p className='yekanBold rtl pt-5 text-center text-lg text-slate-300 underline'>
                        {blog.title}
                     </p>
                     {blog.comments
                        .sort(
                           (a, b) =>
                              new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate(),
                        )
                        .map((comment) => {
                           let commentIncludeNotFilteredReply, commentNotFiltered

                           if (filter) {
                              commentIncludeNotFilteredReply = comment.replys.some(
                                 (reply) => reply.approval == filter,
                              )
                              commentNotFiltered = comment.approval == filter
                           }

                           if (!filter || commentNotFiltered || commentIncludeNotFilteredReply) {
                              return (
                                 <div key={comment._id}>
                                    <div className='items-top flex gap-3'>
                                       <div>
                                          <select
                                             className='yekan rounded-lg bg-slate-800 px-4 py-1 text-base'
                                             value={comment.approval}
                                             onChange={(e) => {
                                                approvalChangeHandle(
                                                   comment._id.toString(),
                                                   null,
                                                   'comment',
                                                   e.target.value,
                                                )
                                             }}
                                          >
                                             <option value='pending'>⏳</option>
                                             <option value='approved'>✔️</option>
                                             <option value='disapproved'>❌</option>
                                          </select>
                                       </div>
                                       <div className='rtl mx-6 w-full rounded-lg bg-slate-800 p-4'>
                                          <div className='mb-3 flex items-center justify-between'>
                                             <div className='flex items-center gap-3'>
                                                <div className='aspect-square h-7 w-7 rounded-full bg-slate-200'></div>
                                                <div className='flex w-full flex-wrap items-center gap-x-5'>
                                                   <span className='yekanBold text-base font-bold text-slate-200'>
                                                      {comment.username}
                                                   </span>
                                                   <span className='yekan text-sm text-slate-400'>
                                                      {DateFormat(comment.createdAt)}
                                                   </span>
                                                </div>
                                             </div>
                                          </div>
                                          <p className='yekan text-base font-normal leading-loose text-gray-300 lg:text-base lg:leading-8'>
                                             {comment.body}
                                          </p>
                                       </div>
                                    </div>
                                    {comment.replys.map((reply, idx) => {
                                       if (filter && reply.approval !== filter) return

                                       return (
                                          <div key={reply._id}>
                                             <div className='rtl my-2 mr-7 flex'>
                                                <div className=' min-w-[1rem]'>
                                                   {idx == 0 ? (
                                                      <svg
                                                         className='h-5 w-5 text-gray-500'
                                                         viewBox='0 0 24 24'
                                                         fill='none'
                                                         stroke='currentColor'
                                                         strokeWidth='2'
                                                         strokeLinecap='round'
                                                         strokeLinejoin='round'
                                                      >
                                                         {' '}
                                                         <polyline points='9 10 4 15 9 20' />{' '}
                                                         <path d='M20 4v7a4 4 0 0 1-4 4H4' />
                                                      </svg>
                                                   ) : (
                                                      ''
                                                   )}
                                                </div>
                                                <div className='items-top flex w-full gap-3'>
                                                   <div className='mx-6 w-full rounded-lg bg-slate-800 p-4'>
                                                      <div>
                                                         <div className='mb-3 flex  items-center gap-3'>
                                                            <div className='aspect-square h-7 w-7 rounded-full bg-slate-200'></div>
                                                            <div className='flex w-full items-center gap-5'>
                                                               <span className='yekanBold  text-base font-bold text-slate-200'>
                                                                  {reply.username}
                                                               </span>
                                                               <span className='yekan text-sm text-slate-400'>
                                                                  {DateFormat(reply.createdAt)}
                                                               </span>
                                                            </div>
                                                         </div>
                                                         <p className='yekan text-base font-normal leading-loose text-gray-300 lg:text-base lg:leading-8'>
                                                            {reply.body}
                                                         </p>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <select
                                                         className=' ltr yekan rounded-lg bg-slate-800 px-4 py-1 text-base'
                                                         value={reply.approval}
                                                         onChange={(e) => {
                                                            approvalChangeHandle(
                                                               comment._id.toString(),
                                                               reply._id.toString(),
                                                               'reply',
                                                               e.target.value,
                                                            )
                                                         }}
                                                      >
                                                         <option value='pending'>⏳</option>
                                                         <option value='approved'>✔️</option>
                                                         <option value='disapproved'>❌</option>
                                                      </select>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       )
                                    })}
                                 </div>
                              )
                           }
                        })}
                  </>
               )
            })}
      </>
   )
}

export default Comments
