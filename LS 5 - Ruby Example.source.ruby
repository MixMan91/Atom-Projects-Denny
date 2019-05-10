class User
  def intialize (email, password)
    @email = email
    @password = password
  end

  def check_password(test_password)
    @password == test_password
  end
end

u = User.new('alice@users.com', 'bad_password')

if u.check_password('bad_password')
  puts "Access granted!"
end
