import "../Css/BestSeller.css";
function MyComponent({children}) {
    if (!children) {      
      return null;
    }
  
    return <div className="TagSell" id="contentToCheck">{children}%</div>;
  }
function BestSeller({plant}) 
{
    const NewPrice = Math.round(plant.price * (1 - plant.discount/100));
    const PriceShow ={
        display: plant.discount ? 'display' : 'none',
       }
    return(      
        
    <div class="bsitem" key={plant.id}>
        <div class="imgborder" >
            <MyComponent>{plant.discount}</MyComponent>
            <img class="bsimg" src={plant.imgPath}/>
        </div>
        <div class="bscontent">
            <a class="bsproduct" href="#">
                {plant.name}
            </a>
            <p class="bsprice">
                <div className="OldPrice" style={PriceShow}>
                    {plant.price} đ&nbsp;
                  </div>
                  <div className="NewPrice">
                     {NewPrice} đ 
                  </div>
            </p>
        </div>
    </div>
                    
                
    );
}
export default BestSeller