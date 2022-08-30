const RightArrow = ({width, height, color}) => {
  return ( 
    <svg xmlns="http://www.w3.org/2000/svg" style={{transform: 'rotate(180deg)'}} width={width ? width : '15.484'} height={height ? height : '7.5'} viewBox="0 0 15.484 7.5">
      <path id="Path_2878" fill={color ? color : '#354e57'} data-name="Path 2878" d="M14.878,135.145H2.069l2.122-2.112a.6.6,0,0,0-.853-.857l-3.16,3.145h0a.605.605,0,0,0,0,.856h0l3.16,3.145a.6.6,0,0,0,.853-.857l-2.122-2.112H14.878a.6.6,0,0,0,0-1.21Z" transform="translate(0 -132)"/>
    </svg>
  );
}
 
export default RightArrow;