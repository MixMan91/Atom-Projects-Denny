class MyDate {
   // Define the constructor method
   constructor(year, month, day) {
     // Create a "private" member variable
     this._value = MyDate._dateToValue(year, month, day);
   }

   static _dateToValue(year, month, day) {
     // Do some magic here
   }

   // A class method
   static fromString(date_string) {
     // Local variables, no "this." prefix needed
     let parts = date_string.split('-'),
         year = parseInt(parts[0], 10),
         month = parseInt(parts[1], 10),
         day = parseInt(parts[2], 10);

     return new MyDate(year, month, day);
   }

   addDays(num_days) {
     // Whereas this is the member variable, so "this." is needed
     this._value += num_days;
   }
 }
