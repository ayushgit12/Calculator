import React from 'react'

function History() {

     const fetchData = () => {
          if (localStorage.getItem('calc')) {
               let data = JSON.parse(localStorage.getItem('calc'))
               return data.map((item, index) => {
                    return <div key={index}>{item}</div>
               })
          }

     }

     const clearHistory = () => {
          localStorage.removeItem('calc')
          window.location.reload()
     }

     if(!localStorage.getItem('calc'))
          return
     return (
          <div className='text-white bg-slate-400 w-3/4 m-auto rounded-md pb-20'>

               
               <div className='text-end'><button className='bg-red-500 p-2 rounded-md' onClick={clearHistory}>X Clear History</button>
               </div>
               <div className='text-center'>
                    <h1 className='text-3xl'>History</h1>
                    <div className='flex flex-col items-center'>{fetchData()}</div>
               </div>
          </div>
     )
}





export default History
