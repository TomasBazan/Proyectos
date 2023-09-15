# a, b = 11, 22
# puts(a)
# puts(b)
#
# puts sizeof(Int8)
# puts (a + b).to_s
# miNombre = "Tomas"
# puts "Hola #{miNombre} \nnumero #{a}
# y la suma #{a + b}"

class Being
  @@count = 0

  def initialize
    @@count += 1
    puts " creamos un ser "
  end

  def show_count
    " Hay #{@@count} seres "
  end
end

class Human < Being
  def initialize
    super
    puts " creamos un humano "
  end
end

class Animal < Being
  def initialize
    super
    puts " creamos un animal "
  end
end

class Dog < Animal
  def initialize
    super
    puts " creamos un perro "
  end
end

h = Human.new

puts h.show_count
d = Dog.new
puts d.show_count

# int main() {
#  for (int i = 0; i < 10; i += 1) {
#    printf("%d\n", i)
#  }
#  return 0
# }
