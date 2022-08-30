const Star = ({width, height, color}) => {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" width={width? width : '15.237'} height={height ? height : '14.535'} viewBox="0 0 15.237 14.535">
            <g id="_001-star" data-name="001-star" transform="translate(0)">
                <g id="Group_3023" data-name="Group 3023" transform="translate(0 0)">
                <path id="Path_2879" fill={color ? color : '#a67744'} data-name="Path 2879" d="M15.215,17.315a.446.446,0,0,0-.36-.3l-4.723-.686-2.112-4.28a.446.446,0,0,0-.8,0l-2.113,4.28-4.723.686a.446.446,0,0,0-.247.761L3.553,21.1l-.807,4.7a.446.446,0,0,0,.648.471l4.225-2.221,4.225,2.221a.446.446,0,0,0,.648-.471l-.807-4.7L15.1,17.773A.446.446,0,0,0,15.215,17.315Z" transform="translate(0 -11.796)"/>
                </g>
            </g>
        </svg>
     );
}
 
export default Star;