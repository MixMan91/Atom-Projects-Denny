class MyDate {
  constructor(month, day, year, formatter) {
    this._month = month;
    this._day = day;
    this._year = year;
    this._formatter = formatter;
  }

  toString() {
    return this._formatter.format(this._month, this._day, this._year);
  }
}

class USAFormatter {
  format(mon, day, year) {
    return `${mon}/${day}/${year}`;
  }
}

let d = new MyDate(2, 3, 2019, new USAFormatter());
console.log(d.toString());
