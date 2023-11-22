function BlogPost(props) 
{
    const type={
        width: props.type ? '48%' : '30%',
    };
    return(
        <div className="BlogPost" style={type}>
            <div className="Blogimgborder">
                <img className="BlogImg" src={props.img}/>
            </div>
            <div className="BlogTitle">{props.title}</div>
            <div className="BlogContent">{props.content}</div>
        </div>
    );
   
}
export default BlogPost