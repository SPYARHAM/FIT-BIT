
import React,{Component} from 'react';
import './App.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import TopBar from './TopBar/TopBar';
import ProductData from './Utils/ProductData';


class App extends Component {
  state = {
    productdata:ProductData,
    currentPreviewImagePos:0,
    showHeartBeatSection:true,
  }

   onSelectColorClick = (index) => {
    const updatePreviewColor = this.state.productdata.colorOptions[index].imageUrl;
    console.log(updatePreviewColor);
    this.setState({currentPreviewImagePos:index});
  }
  onFeatureItemClick = (index) => {
    const featureList = this.state.productdata.featureList;
    const selectedFeature = featureList[index];
    console.log(selectedFeature);
    if (selectedFeature === 'Time') {
      this.setState({showHeartBeatSection:true});
    } else {
      this.setState({showHeartBeatSection:false});
    }
  }
  render () {
      return (
        <div className="App">
              <TopBar/>
          <div className='product-container'>
            <div className='product-preview'>
              <ProductPreview currentPreviewImage={this.state.productdata.colorOptions[this.state.currentPreviewImagePos].imageUrl}
                              showHeartBeatSection={this.state.showHeartBeatSection} />
            </div>
            <div className='product-container-data'>
              <ProductDetails data={this.state.productdata} 
                              onSelectColorClick={this.onSelectColorClick} 
                              currentPreviewImagePos={this.state.currentPreviewImagePos} 
                              onFeatureItemClick={this.onFeatureItemClick}
                              showHeartBeatSection={this.state.showHeartBeatSection} />
            </div>
          </div>
      </div>
      );
  }
}

export default App;
