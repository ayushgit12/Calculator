import { useState } from 'react'
import './App.css'
import History from './history.jsx'


function App() {
  const [calc, setCalc] = useState("")

  const handleChange = (e) => {
    setCalc(e.target.value)
  }


  const handleCalc = (num) => {

    if(num === 'AC'){
      setCalc('')
      return
    }
    
    if(num === 'X'){
      setCalc(calc.slice(0, -1))
      return
    }

    if(num === '='){
      try {
        setCalc(eval(calc))
        
        if(localStorage.getItem('calc')){
          let data = JSON.parse(localStorage.getItem('calc'))
          data.push(calc+ '\n= ' + eval(calc)+'\n')
          localStorage.setItem('calc', JSON.stringify(data))
        }
        else
          localStorage.setItem('calc', JSON.stringify([calc]))

      }
      catch{
        setCalc('Error')
        setTimeout(() => {
          setCalc('')
        }, 3000);
      }
      return
    }

    setCalc(calc+num.toString())
    
  }



  return (


    
    
    <div className="inset-0 -z-10 min-h-screen w-full justify-center items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      

      <div>
        <div className='w-5/6 md:w-1/2 flex flex-wrap flex-col h-3/4 items-center bg-slate-500 m-auto py-10 my-10'>
          <h1 className='text-3xl p-5'>Calculator</h1>


          <div className="screen w-3/4">

            <input value={calc} className='w-full h-12 text-2xl p-1' onChange={handleChange} />
          </div>
          <div className='buttons my-12'>
            <div>
              <button onClick={()=>handleCalc('9')} className='bg-slate-800 btn-op text-white w-16 h-12 border hover:bg-slate-900 border-slate-500 rounded-md'>9</button>
              <button onClick={()=>handleCalc('8')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 hover:bg-slate-900 rounded-md'>8</button>
              <button onClick={()=>handleCalc('7')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 rounded-md hover:bg-slate-900'>7</button>
              <button onClick={()=>handleCalc('X')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 rounded-md hover:bg-slate-900'>X</button>
            </div>
            <div>
              <button onClick={()=>handleCalc('6')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 rounded-md hover:bg-slate-900'>6</button>
              <button onClick={()=>handleCalc('5')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 rounded-md hover:bg-slate-900'>5</button>
              <button onClick={()=>handleCalc('4')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 rounded-md hover:bg-slate-900'>4</button>
              <button onClick={()=>handleCalc('AC')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 rounded-md hover:bg-slate-900'>AC</button>
            </div>
            <div>
              <button onClick={()=>handleCalc('3')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 hover:bg-slate-900 rounded-md'>3</button>
              <button onClick={()=>handleCalc('2')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 hover:bg-slate-900 rounded-md'>2</button>
              <button onClick={()=>handleCalc('1')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 hover:bg-slate-900 rounded-md'>1</button>
            </div>
            <button onClick={()=>handleCalc('0')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 hover:bg-slate-900 rounded-md'>0</button>
            <button onClick={()=>handleCalc('.')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 hover:bg-slate-900 rounded-md'>.</button>
            <button onClick={()=>handleCalc('+')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 hover:bg-slate-900 rounded-md'>+</button>
            <button onClick={()=>handleCalc('-')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 hover:bg-slate-900 rounded-md'>-</button>
            <button onClick={()=>handleCalc('*')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 hover:bg-slate-900 rounded-md'>*</button>
            <button onClick={()=>handleCalc('/')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 hover:bg-slate-900 rounded-md'>/</button>
            <button onClick={()=>handleCalc('=')} className='bg-slate-800 btn-op text-white w-16 h-12 border border-slate-500 hover:bg-slate-900 rounded-md'>=</button>
          </div>
        </div>



    <div className='text-end'>
    <button className='bg-violet-500 rounded-md p-2 btn-show' onClick={()=>{
      
      
      let history = document.querySelector('.hist')
      let btnn = document.querySelector('.btn-show')
      if(history.classList.contains('opacity-0')){
        history.classList.remove('opacity-0')
        history.classList.add('opacity-100')
        btnn.innerHTML = 'Hide History'
      }
      else{
        history.classList.remove('opacity-100')
        history.classList.add('opacity-0')
        btnn.innerHTML = 'Show History'
      }
    }}>Show History</button>
    </div>
        <div className='opacity-0 hist'>
          <History />
        </div>

      </div>



    </div>
  )
}

export default App
