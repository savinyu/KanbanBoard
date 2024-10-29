export const Dp = ({ name, index, available }) => {
  const getInitials = (fullName) => {
    const nameParts = fullName.split(' ');
    const initials = nameParts[0][0] + (nameParts[1] ? nameParts[1][0] : '');
    return initials.toUpperCase();
  };

  const colors = ["red-background", "blue-background", "green-background", "purple-background", "yellow-background"];
  const backgroundColor = colors[index % colors.length];

  return (
    <>
      <div className="status-dot-container">
        <StatusDot isActive={available} />
      </div>
      <div className={`initials-circle ${backgroundColor}`}>{getInitials(name)}</div>
    </>
  );
};

export const StatusDot = ({ isActive }) => {
  const dotStyle = {
    backgroundColor: isActive ? 'green' : 'lightgray',
    borderRadius: '50%',
    width: '8px',
    height: '8px',
  };

  return (
    <div className="status-dot">
      <div style={dotStyle}></div>
      <img src={'/assets/dot.svg'} alt="dot" style={{ display: 'none' }} />
    </div>
  );
};
