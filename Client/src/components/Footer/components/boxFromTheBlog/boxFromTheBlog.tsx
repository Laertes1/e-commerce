import React from 'react'

export default function boxFromTheBlog(props: any) {
  return (
    <span className="footer-container-fourthBoxer-boxeMoreOfBlog-box">
        <p className="footer-container-fourthBoxer-boxeMoreOfBlog-box-date">{props.date}</p>
        <p className="footer-container-fourthBoxer-boxeMoreOfBlog-box-text">{props.text}</p>
        <p className="footer-container-fourthBoxer-boxeMoreOfBlog-box-comments">{props.comments}</p>
    </span>
  )
}
