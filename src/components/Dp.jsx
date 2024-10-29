import dot from '../assets/dot.svg';

export const Dp = ({name,index,available}) => {
    const getInitials = (fullName) => {
        const nameParts = fullName.split(' ');
        const initials = nameParts[0][0] + (nameParts[1] ? nameParts[1][0] : '');
        return initials.toUpperCase();
      };
    const colors = ["bg-red-400", "bg-blue-400", "bg-green-400", "bg-purple-400", "bg-yellow-400"];
    const backgroundColor = colors[index%colors.length];
  return (
    <>
      <div className=''><StatusDot isActive={available}/></div>
      <div className={`h-5 w-5 ${backgroundColor} rounded-full font-light text-xs flex items-center justify-center text-white`}>{getInitials(name)}</div>
    </>
  )
}

export const StatusDot = ({ isActive }) => {
  const dotStyle = {
    backgroundColor: isActive ? 'green' : 'lightgray',
    borderRadius: '50%',
    width: '8px',
    height: '8px',
  };

  return (
    <div className='absolute z-10 ml-3 mt-3.5'>
      <div style={dotStyle}></div>
      <img src={dot} alt="dot" style={{ display: 'none' }} />
    </div>
  );
};
