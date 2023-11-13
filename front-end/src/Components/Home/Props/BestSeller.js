import "../Css/BestSeller.css";
function BestSeller({plant}) 
{
    return(      
        
    <div class="bsitem" key={plant.id}>
        <a class="imgborder" href="#">
            <img class="bsimg" src={plant.img}/>
        </a>
        <div class="bscontent">
            <a class="bsproduct" href="#">
                {plant.name}
            </a>
            <p class="bsprice">{plant.price} đ</p>
        </div>
    </div>
                    
                
    );
}
export default BestSeller