
function MyComponent({children}) {
    if (!children) {      
      return null;
    }
  
    return <div className="TagSell" id="contentToCheck">{children}%</div>;
  }

function Product({Post,isWide}) 
{
    const homePostStyle = {
        width: isWide ? '90%' : '100%',
        //width:'100%',
      };
    const NewPrice = Math.round(Post.price * (1 - Post.discount/100));
    const PriceShow ={
      display: Post.discount ? 'display' : 'none',
     }
    return( 
        <div className="HomePost" key={Post.id} style={homePostStyle}>
            <div className="Postimgborder">
            <MyComponent>{Post.discount}</MyComponent>
            <img src={Post.imgPath}
                className="HomePostImg"
            />
            </div>
            <div className="PostContentContainer">
                <div className="PostName">{Post.name}</div>
                <div className="PostPrice">
                <div className="OldPrice" style={PriceShow}>
                    {Post.price} &nbsp;
                  </div>
                  <div className="NewPrice">
                     {NewPrice} đ 
                  </div>
                  
                </div>
            </div>
        </div>
    );
}
export default Product