//Convert number to format money
const moneyFormat = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

 //capitalize first character and replace space
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  let char = s.charAt(0).toUpperCase() + s.slice(1);
  return char.replace('_', ' ');
}

//convert date unix
const convertUnixDate = unixtimestamp => {
  let months_arr = ['ene','feb','mar','abr','may','jun','jul','ago','Sep','Oct','Nov','Dec'];
  let date = new Date(unixtimestamp*1000);
  let year = date.getFullYear();
  let month = months_arr[date.getMonth()];
  let day = date.getDate();
  return `${day} ${month} ${year}`;
}

//convert datetime unix
const convertUnixHours = unixtimestamp => {
  let date = new Date(unixtimestamp*1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  return `${hours}:${minutes.substr(-2)}:${ seconds.substr(-2)}`;
}

//Sum total of items 
const getSumTotal = items => {

  let sumTotal = 0;

  items.map( item => {
    sumTotal += item.unit_price;
  });

  return sumTotal;
}

//custom subtotal
const getSubTotal = total => {
  return total * 0.9374;
}

//custom fee
const getFee = total => {
  return total * 0.0626;
}

export { 
  moneyFormat, 
  capitalize, 
  convertUnixDate, 
  convertUnixHours,
  getSumTotal,
  getSubTotal,
  getFee
};