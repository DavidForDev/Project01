import React from 'react';
import './blog.style.scss';

// Import Components
import BlogCard from '../../components/blogCard/blogcard';
import PrimaryBanner from '../../components/banners/primary_banner/primary_banner';

// Import data base
import { blog } from '../../lib/blog';

// Import Image
import img from '../../assets/images/banners/banner1.jpg'

const Blog = () => {
    return ( 
        <div className='home__container'>
            <div className='blog home_display'>
                {blog.map((e, index) => {
                    for (let i = index; i < 8; i++) {
                       return( 
                        <BlogCard base={e}/>
                       )
                    }
                })}
            </div>
            <div className='home_display'>
                <PrimaryBanner 
                    imageSrc={img}
                    h2title='Clean products that deliver better solutions'
                    h2color='#354E57'
                    ptitle='A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best'
                    pcolor='#354E57'
                    btnborder='1px solid white'
                    btncolor='black'
                    btntitle='Read More'
                    bannerBcColor='transparent'
                />
            </div>
            <div className='blog home_display'>
                {blog.map((e, index) => {
                    for (let i = index; i < 8; i++) {
                       return( 
                        <BlogCard base={e}/>
                       )
                    }
                })}
            </div>
        </div>
    );
}
 
export default Blog;