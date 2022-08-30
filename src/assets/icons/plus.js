const Plus = ({width, height, color}) => {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" width={width ? width : '13'} height={height ? height : '24'} viewBox="0 0 13 24">
            <text id="_" data-name="+" transform="translate(0 19)" fill={color ? color : '#354e57'} font-size="18" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">+</tspan></text>
        </svg>
     );
}
 
export default Plus;