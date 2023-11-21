import React from 'react'
import "./skeleton.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = () => {
  return (
      <div className='skeleton-warapper' >
        <div className='skeleton'>
            <div className="skeleton1">
                <div className="skeleton2">
                    <Skeleton height={200}  />
                </div>
            </div>

            <div className="skeleton1">
                <div className="skeleton2">
                    <Skeleton height={15} />
                    <Skeleton height={15} />
                </div>
                <div className="skeleton2">   
                    <Skeleton count={3} />
                </div>

                <div className="skeleton-btn">
                    <Skeleton width={80} height={20}/>
                </div>
            </div>
        </div>

        <div className='skeleton'>
            <div className="skeleton1">
                <div className="skeleton2">
                    <Skeleton height={200}  />
                </div>
            </div>

            <div className="skeleton1">
                <div className="skeleton2">
                    <Skeleton height={15} />
                    <Skeleton height={15} />
                </div>
                <div className="skeleton2">   
                    <Skeleton count={3} />
                </div>

                <div className="skeleton-btn">
                    <Skeleton width={80} height={20}/>
                </div>
            </div>
        </div>
        
        <div className='skeleton'>
            <div className="skeleton1">
                <div className="skeleton2">
                    <Skeleton height={200}  />
                </div>
            </div>

            <div className="skeleton1">
                <div className="skeleton2">
                    <Skeleton height={15} />
                    <Skeleton height={15} />
                </div>
                <div className="skeleton2">   
                    <Skeleton count={3} />
                </div>

                <div className="skeleton-btn">
                    <Skeleton width={80} height={20}/>
                </div>
            </div>
        </div>


        
    </div>
  )
}

export default SkeletonCard