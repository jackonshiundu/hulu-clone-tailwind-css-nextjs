import React from 'react'
import Thumnail from './Thumnail'

const Results = ({requests }) => {
    
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
        {
            requests.map((result)=>(
                <Thumnail key={result.id} result={result}/>
           ) )
        }
    </div>
  )
}

export default Results

