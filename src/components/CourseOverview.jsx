import React from 'react'

function CourseOverview(props) {
  return (
   <>
   <h2 className="banner-heading">Course Overview</h2>
   <section className='p-2 py-3'>
     {
        props.overview.map((item, index)=>{
            return(
                <div div key={index}>
                 <div className='mt-3 bg-light p-lg-5 p-md-2 rounded-2'>
                <h3 className='main-text'>Course Description</h3>
                <p className='fs-5'>{item.course_description}</p>
                </div>
                <div className='mt-3 bg-light p-lg-5 p-md-2 rounded-2'>
                <h3 className='main-text'>Course Certificate</h3>
                <p className='fs-5'>{item.certification}</p>
                </div>
                </div>
            )
        })
     }
    </section>
   </>
  )
}

export default CourseOverview
