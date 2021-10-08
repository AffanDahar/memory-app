import React, {useState} from 'react'
import {Typography, TextField, Button} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import useStyles from './styles'
import { commentPost } from '../../actions/posts'
const CommentSec = ({post}) => {
    console.log('postt', post)
    const [comments , setComments] = useState([1,2,3])
    const [comment, setComment] = useState('')
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'))
    const dispatch = useDispatch();

    const handleComment = () => {
     const finalComment = `${user.result.name} : ${comment}`
      dispatch(commentPost(finalComment, post._id))
    }
    return (
       <div>
          <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>

            <Typography gutterBottom variant="h6">Comments</Typography>
        {comments.map((data , i) => (
            <Typography gutterBottom variant="subtitle1">
                comment {data}
            </Typography>
        ))}
        </div>
        {user?.result?.name && (
           <div style={{ width: '70%' }}>
           <Typography gutterBottom variant="h6">Write a comment</Typography>
           
           <TextField fullWidth rows={4} variant="outlined" label="Comment" multiline value={comment} onChange={(e) => setComment(e.target.value)} />
         <br/>
         
         <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="primary" variant="contained" onClick={handleComment}>
             Comment
           </Button></div>
        )}
       
           </div>
       </div>
    )
}

export default CommentSec
