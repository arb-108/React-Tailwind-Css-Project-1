import React from 'react'

const ProjectsSection = () => {
  return (

    <div className='py-5 p-2 bg-gray-100 sm:px-20 sm:hidden'>
    <h2 className='p-4 text-2xl font-bold'>News & Updates</h2>
        <div className='grid grid-cols-2 gap-4 p-4 justify-items-center sm:hidden
        '>
            <div>
                <img src="./Images/project1.png" alt="" />
            </div>
            <div>
                <img src="./Images/project2.png" alt="" />
            </div>
            <div>
                <img src="./Images/project3.png" alt="" />
            </div>
            <div>
                <img src="./Images/project4.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProjectsSection