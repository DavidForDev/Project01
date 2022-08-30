import React from 'react';
import './contact.style.scss';

const Contact = () => {
    return ( 
        <div className='home__container'>
            <div className='contact home_display'>
                <div className='contact_detail'>
                    <h1>Contact Us</h1>
                    <p className='medium'>Before reaching out to our team, you may want to review these helpful resources in case your question has already been answered.
                        If you still need help, we’d love to hear from you. Feel free to reach out to our Customer Care team directly.
                    </p>
                </div>
            </div>
            <div className='contact home_display flex justify-between align-items-start'>
                <div className='contact_container'>
                    <div>
                        <h6>General Inquiries</h6>
                        <span>info@smoothproducts/com</span>
                    </div>
                    <div>
                        <h6>Press & Media</h6>
                        <span>info@smoothproducts/com</span>
                    </div>
                    <div>
                        <h6>Returns</h6>
                        <span>info@smoothproducts/com</span>
                    </div>
                </div>
                <div className='contact_container'>
                    <div>
                        <h6>Sooth Brand Corporate Headquarters</h6>
                    </div>
                    <div>
                        <span>4380 Wilson Street, Suite 300</span>
                    </div>
                    <div>
                        <span>Burlington, VT 80237</span>
                    </div>
                    <div>
                        <span>Monday – Friday 9am-4:30pm</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;