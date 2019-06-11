class MyClass {
  static fromOtherFormat(data) {
    let value_1, value_2,
        invalid_data = false;

    // Transform "data" somehow into whatever
    // values are needed for the constructor.
    // If we can't convert, set the invalid_data
    // boolean to true.

    if ( invalid_data ) {
      return;
    }

    return new MyClass(value_1, value_2);
  }
}
