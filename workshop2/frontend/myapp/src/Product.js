export default function Product(props){
    return(
        <div className="Product">
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button onClick ={props.showDetailClicked}>Details</button>
            <button onClick ={props.updateProductClicked}>Update</button>
            <button onClick ={props.deleteBtnClicked}>Delete</button>

            {/* <button onClick ={props.showCommentClicked}>Comment</button> */}
           
        </div>
    )
}