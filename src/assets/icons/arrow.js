const Arrow = ({width, height, color, rotate}) => {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" style={rotate} width={width ? width : '10.991'} height={height ? height : '6.284'} viewBox="0 0 10.991 6.284">
            <path id="Icon_ionic-ios-arrow-down" fill={color ? color : '#547665'} data-name="Icon ionic-ios-arrow-down" d="M11.685,15.636l4.156-4.159a.782.782,0,0,1,1.109,0,.792.792,0,0,1,0,1.113L12.241,17.3a.784.784,0,0,1-1.083.023L6.417,12.593A.786.786,0,1,1,7.526,11.48Z" transform="translate(-6.188 -11.246)"/>
        </svg>
     );
}
 
export default Arrow;