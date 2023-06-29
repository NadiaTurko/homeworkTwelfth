const userGretting = () => {
  const timeNow = new Date();
  const getHours = timeNow.getHours();
  if (getHours >= 5 && getHours < 11) {
    return "Good morning";
  }
  if (getHours >= 11 && getHours < 17) {
    return "Good day";
  }
  if (getHours >= 17 && getHours < 23) {
    return "Good evening";
  }
  if (getHours >= 23 || (getHours >= 0 && getHours < 5)) {
    return "Good night";
  }
};
module.exports = { userGretting };
