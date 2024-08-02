//! npm i moment
import moment from "moment";

//* Unix formatındaki zamanı normal tarihe çeviren fonksiyon
const formatDate = (unix_time) => {
  //* saniye olarak gelen veriyi 1000 ile çarpıp milisaniyeye çevirdik
  //! answer: 2024-07-17
  const formatted = new Date(unix_time * 1000);

  //* Örneğin, "bugün", "yarın", "dün" gibi ifadelerle tarihi gösterir.
  //! asnwer: Today at 1:00 PM
  return moment(formatted).calendar();
};

export default formatDate;
