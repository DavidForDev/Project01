const Eye = ({width, height, color}) => {
  return ( 
    <svg xmlns="http://www.w3.org/2000/svg" width={width ? width : '14.489'} height={height ? height : '9.659'} viewBox="0 0 14.489 9.659">
      <path id="Icon_awesome-eye" fill={color ? color : '#354e57'} data-name="Icon awesome-eye" d="M14.4,8.962A8.068,8.068,0,0,0,7.244,4.5,8.069,8.069,0,0,0,.088,8.963a.814.814,0,0,0,0,.734,8.068,8.068,0,0,0,7.157,4.462A8.069,8.069,0,0,0,14.4,9.7.814.814,0,0,0,14.4,8.962ZM7.244,12.952A3.622,3.622,0,1,1,10.867,9.33,3.622,3.622,0,0,1,7.244,12.952Zm0-6.037a2.4,2.4,0,0,0-.637.1A1.2,1.2,0,0,1,4.925,8.693,2.409,2.409,0,1,0,7.244,6.915Z" transform="translate(0 -4.5)"/>
    </svg>
  );
}
 
export default Eye;