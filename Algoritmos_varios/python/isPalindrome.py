class Solution:
    def isPalindrome(self, x: int) -> bool:
        x = str(x)
        return x[::-1] == x

# casteo el int a string
# [::-1] para iterar por el string en orden inverso
# entonces, invierto el string y checkeo si es el mismo que el
# string del numero original
