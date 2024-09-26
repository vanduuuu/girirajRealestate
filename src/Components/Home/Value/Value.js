import React from 'react'
import Multicardslider from '../../MulticardSlider/Multicardslider'
import './Value.css'
const Value = () => {
  return (
    <div>
        <div className='value-outer'>
            <section>
                <div className='text-center'>
                <p className="bgP">Values we preserve</p>
                <p className='greypara mt-4 fs-3'>We create spaces that enable Everyday Joys;<br/> one community, one family, and one home at a time.</p>
                <Multicardslider/>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Value