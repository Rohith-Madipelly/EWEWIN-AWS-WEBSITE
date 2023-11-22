// import moment from "moment";

// export const getAmountByMinutes = ({ fromDate, toDate, hourly_rate }) => {
//   const startTime = moment(fromDate);
//   const endTime = moment(toDate);
//   const duration = moment.duration(endTime.diff(startTime));
//   const minutes = parseInt(duration.asMinutes());
//   const min_rate = parseInt(hourly_rate) / 60;
//   const totalPrice = parseInt(min_rate * minutes);
//   return totalPrice;
// };

// export const blockInvalidChar = (e) =>
//   ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();

// export const allowOnlyText = (e) =>
//   (!/^[A-Za-z ]*$/.test(e.key) || ["."].includes(e.key)) && e.preventDefault();

export const onTop = () => {
  window.scrollTo(0, 0);
};
