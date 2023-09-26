import React from 'react'
import '../styles/elite-page.css'
import Elite from './Elite'
import Adwantages from './Adwantages'

function ElitePage() {
  return (
   <div className="elite-main-page overflow-hidden">
     <div className='elite-page container-fluid p-0'>
     <div className="row">
        <div className="col-12 col-md-6 col-lg-6">
            <div className="elite-left py-5">
                <h1>100% Placement Program</h1>
                <h2>Get 50% Refund if not Placed</h2>
                <p className="mt-2">Be Practical Conducting Elite Batch for Freshers and working Professionals to make you job ready. where we Guarantee Our Placements.
                </p>
               <div className='text-start'>
               <button className="elite-btn btn p-3 px-4 fs-4">Join Now</button>
               </div>
                <div className="elite-banner">
                    <h3>Elite</h3>
                </div>
            </div>
            
        </div>
        <div className="col-12 col-md-6 col-lg-6">
            <div className="elite-right">
                <div className="elite-gold-circle">

                </div>
            </div>
        </div>
     </div>
    </div>
    <div className="container elite-devider"></div>
    <Elite/>
    <div className="container elite-devider"></div>
    <div className="elite-highlights container p-3">
        <div className="row">
            <div className="col-12 col-md-4 col-lg-4">
                <div className="highlight-card">
                <div className="highlight-header">
                <i class="bi bi-check-circle-fill"></i>
                </div>
                   <div className="highlight-body">
                   <h2>100% Job Placement</h2>
                    <p>Looking for a training institute that offers job placement Guarantee? Look no further! Because be practical Started Elite Program where every student get 100% Job placement. Our institute offers comprehensive training programs that equip you with the skills you need to succeed in your career.</p>
                   </div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
                <div className="highlight-card">
                    <div className="highlight-header">
                    <i class="bi bi-cash"></i>
                    </div>
                   <div className="highlight-body">
                   <h2>50% refund If not Placed</h2>
                    <p>Our Elite Program takes you to various Learning Paths to make you perfect for Industry Ready, If we fail to get you the job, 50% of the paid amount will be refunded.</p>
                   </div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
                <div className="highlight-card">
                <div className="highlight-header">
                <i class="bi bi-building-fill-check"></i>
                </div>
                  <div className="highlight-body">
                  <h2>Batch Monitored by Company Experts.</h2>
                    <p>This Feature of the program makes you perfect for Job ready because you will be directly monitored by Company experts, where you will get a chance to know what our partnered clients are expecting from freshers so that it will help you restructure your learning skills and make you crack your dream job.</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container elite-devider"></div>
    <Adwantages/>
   </div>
  )
}

export default ElitePage
