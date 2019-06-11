function MyDate(year, month, day) {
     this._value = MyDate._dateToValue(year, month, day);
    }
      MyDate._dateToValue = function(year, month, day) {
           // Insert magic here, but watch your fingers, please.
         }

      MyDate.fromString = function(date_string) {
           // get year, month, day
          return new Mydate(year, month, day);
         }

      MyDate.prototype = {
           addDays: function(num_days) {
           this._value += num_days;
         }
 }
