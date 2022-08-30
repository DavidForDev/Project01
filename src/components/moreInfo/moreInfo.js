import React, { useState } from 'react';
import './moreInfo.style.scss';

// Import Icons

import Minus from '../../assets/icons/minus';
import Plus from '../../assets/icons/plus';

const MoreInfo = () => {
    const [showDetail, setShowDetail] = useState(false)
    const [showDetailStyle, setShowDetailStyle] = useState({height: '0'})

    function opener() {
        if(showDetail === false) {
            setShowDetailStyle({height: 'auto'})
            setShowDetail(true)
        } else if(showDetail === true) {
            setShowDetailStyle({height: '0'})
            setShowDetail(false)
        }
    }

    return ( 
        <div className='more__detail'>
            <div className='detail-box' onClick={opener}>
                <div className='flex justify-between align-items-center'>
                    <h6>Items 1</h6>
                    {showDetail === false ? <Plus /> : <Minus />}
                </div>
                <div className='detail-text' style={showDetailStyle}>
                    <p className='low'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id tristique arcu erat non enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id tristique arcu erat non enim.</p>
                </div>
            </div>
            <div className='detail-box'>
                <div className='flex justify-between align-items-center'>
                    <h6>Items 2</h6>
                    {showDetail === false ? <Plus /> : <Minus />}
                </div>
                <div className='detail-text' style={showDetailStyle}>
                    <p className='low'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id tristique arcu erat non enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id tristique arcu erat non enim.</p>
                </div>
            </div>
        </div>
    );
}
 
export default MoreInfo;