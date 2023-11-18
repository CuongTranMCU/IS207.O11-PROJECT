//import "./styles.css";
function Post(props) 
{
    return(      
    <div className="postcontainer" >
        <img className="postimage" alt="experience" src={props.pic}/>
        <div className="contentcontainer">
            <h3 className="posttitle">{props.title}</h3>
            <div className="postcontent">{props.content}</div>
            <div className="comment">{props.comment} COMMENTS</div>
        </div>
    </div>
    );
}
export default Post