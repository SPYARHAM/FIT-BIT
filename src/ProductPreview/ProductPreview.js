import React from 'react';
import '../App';
import './/ProductPreview.css';

 const ProductPreview = (props) => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
     return (
         <div className='product-preview'>
            <img src={props.currentPreviewImage} alt='smartWatch' /> 
            {
                props.showHeartBeatSection ?
                    <div className='product-time-features'>
                        <p>{currentHour + ':' + currentMinutes}</p>
                    </div>
                    :
                     <div className='product-heart-features'>
                       <i className="fas fa-heartbeat"></i>
                       <p>78</p>
                     </div> 

            }
            
         </div>
       
     );
 }
 export default ProductPreview;