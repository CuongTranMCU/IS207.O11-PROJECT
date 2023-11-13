
function MyComponent({children}) {
    if (!children) {
      return null;
    }
  
    return <div className="TagSell" id="contentToCheck">{children}%</div>;
  }

function HomePost({Post,isWide}) 
{
    const homePostStyle = {
        width: isWide ? '90%' : '23%',
        /* Các thuộc tính style khác nếu cần */
      };
    
    return( 
        <div className="HomePost" key={Post.id} style={homePostStyle}>
            <div className="Postimgborder">
            <MyComponent>{Post.tagsell}</MyComponent>
            <img src={Post.img}
                className="HomePostImg"
            />
            </div>
            <div className="PostContentContainer">
                <div className="PostName">{Post.name}</div>
                <div className="PostPrice">{Post.price}đ</div>
            </div>
        </div>
    );
}
export default HomePost