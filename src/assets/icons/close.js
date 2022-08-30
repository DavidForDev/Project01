const Close = ({width, height, color}) => {
  return ( 
    <svg xmlns="http://www.w3.org/2000/svg" width={width ? width : '22.847'} height={height ? height : '22.847'} viewBox="0 0 22.847 22.847">
      <path id="Icon_ionic-md-close" fill={color ? color : '#354e57'} data-name="Icon ionic-md-close" d="M30.371,9.808,28.086,7.523l-9.139,9.139L9.808,7.523,7.523,9.808l9.139,9.139L7.523,28.086l2.285,2.285,9.139-9.139,9.139,9.139,2.285-2.285-9.139-9.139Z" transform="translate(-7.523 -7.523)"/>
    </svg>
  );
}
 
export default Close;