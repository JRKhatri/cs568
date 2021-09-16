
export default function Review (props){
    return(
        <div className = 'review'>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <button onClick = {props.updateReviewBtnClicked}>Update Review</button>
            <button onClick = {props.deleteReviewBtnClicked}>Delete Review</button>
            
        </div>
    )
}