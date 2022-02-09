import React from 'react';

import './/ProdutDetails.css'
 const ProductDetails = (props) => {
     const colorOptions = props.data.colorOptions.map((item,index) => {
         const classArr = ['product-color']
         if (index===props.currentPreviewImagePos) {
             classArr.push('product-color-selected');
         }
         return (
            <img key={index}   className={classArr.join(" ")} 
                  src={item.imageUrl} alt={item.styleName}
                  onClick={()=> props.onSelectColorClick(index)}/>
         );
     })
     const featureList = props.data.featureList.map((item,index) => {
         const classArr =['feature-style']
            if (index === 0 && props.showHeartBeatSection) {
                classArr.push('selected-feature-style');
            } else if(index === 1 && props.showHeartBeatSection === false) {
                classArr.push('selected-feature-style');
            }
         return (
            <button onClick={()=>props.onFeatureItemClick(index)} 
                    key={index} className={classArr.join(" ")}>{item}</button>
         )
     })
     return (
            <div className='product-container'>
                <h1 className='title'>{props.data.title}</h1>
                <p className='description'>{props.data.description}</p>
                <h3 className='color-section'>Select Colour</h3>
            <div >
                {colorOptions }
                {/* <img className={['product-color','product-color-selected'].join(" ")} 
                             src='https://imgur.com/iOeUBV7.png' alt='black color watch'/>
                <img className='product-color' src='https://imgur.com/PTgQlim.png' 
                               alt='red color watch'/>
                <img className='product-color' src='https://imgur.com/Mplj1YR.png' 
                               alt='blue color watch'/>
                <img className='product-color' src='https://imgur.com/xSIK4M8.png' 
                               alt='purple color watch'/> */}
            </div>
        <h3 className='color-section'>Features</h3>
            <div >
                {featureList}
                {/* <button className={['feature-style','selected-feature-style'].join(" ")}>Time</button>
                     <button  className='feature-style'>Heart Rate</button> */}
            </div>
            <div >
                <button className='primary-button'>Buy Now</button>
            </div>  
          </div>
     )
 }
 export default ProductDetails;