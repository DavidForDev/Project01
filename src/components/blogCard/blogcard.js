import React from 'react';
import './blocgcard.style.scss';

const BlogCard = ({base}) => {
    return (
        <div className='blog__container'>
            <div className='blog_image'>
                <img src={base.image} alt='blog_img' />
            </div>
            <div className='blog_detail'>
                <h6>{base.name}</h6>
                <p className='low'>{base.explain}</p>
                <a href='##'>Read</a>
            </div>
        </div>
    );
}
 
export default BlogCard;