word = input()
vocals = "aeiou"
word_no_vocals = {i for i in word if i not in vocals}
print("word with vocals " + str(word))
print("word without vocals " + str(word_no_vocals))