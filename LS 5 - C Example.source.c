int string_position(char *str, char look_for) {
  int i;

  for ( i = 0 ; str[i] != '\0' ; i++) {
    if ( str[i] == look_for ) {
      return i;
    }
  }

 return -1
}

int main(void {
  char *str = "Hello world";
  printf("w is number %d in %s\n", string_position(str, 'w'), str"
}
