export const formatUpdateTime = ({updateTime}) => {
    const now = new Date();
    const updatedAt = new Date(updateTime);
  
    const timeDifference = now - updatedAt;
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    if (daysAgo === 0) {
      return "Updated today";
    } else if (daysAgo === 1) {
      return "Updated yesterday";
    } else {
      return `Updated ${daysAgo} days ago`;
    }
  };