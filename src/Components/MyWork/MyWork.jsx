import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import MyWork_Data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='portfolio' className="mywork">
        <div className="mywork-title">
            <h1>My Latest work</h1>
            <img src={theme_pattern} alt="pattern" />
        </div>
        <div className="mywork-container">
            {MyWork_Data.map((mywork,index)=>{
                return(
                    <img key={index} src={mywork.w_img} alt="gg" />
                )
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="arrow_icon" />
        </div>
    </div>
  )
}

export default MyWork