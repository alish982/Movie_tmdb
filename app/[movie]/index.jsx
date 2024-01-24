'use client'

import useState from 'react'

export default function CommentPage(){
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    const fetchComment = async() => {
        const response = await fetch('./comment')
        const data = await response.json()
        setComments (data)
    }

    const submitComment = async () =>{
        const response = await fetch('./comment', {
            method: 'POST',
            body : JSON.stringify({ comment }),
            headers: {
                'content-type ': 'application/json',
            },
        })
            const data = await response.json()
            console.log(data)
        }

    return(
        <div>
            <input
                type = "text"
                value = {comment}
                onChange={(e) => setComment(e.target.value)}
            />

            <button onClick ={submitComment} >submit commnet</button>
            <button onClick ={fetchComment} >load commnet</button>
        </div>
    )
}