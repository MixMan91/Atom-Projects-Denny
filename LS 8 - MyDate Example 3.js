class WorldDateFormatter {
   constructor (year, month, day) {
     this._year = year;
     this._month = month;
     this._day = day;
   }

   formatDate() {
     return this._day + '/' + this._month + '/' + this._year;
   }
 }
