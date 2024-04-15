import types

""" 
class Solution:
    def isPalindrome(self, s: str) -> bool:
        s1 = s.translate({ord(i): None for i in ' ,.:;@$#-_{}[]\'\"()/|?!*`&'})
        s2 = s1.lower()
        s1 = s1.lower()[::-1]
        return s1 == s2
 """


class Solution:
    def isPalindrome(self, s: str) -> bool:

        string_ = ''.join(c for c in s if c.isalnum())
        string_ = string_.lower()
        if string_ == string_[::-1]:
            return True
        return False


s = Solution()

text = "A man, a plan, a canal: Panama"
text2 = "race a car"
text3 = "Tomas"
if (s.isPalindrome(text)):
    print("Succes with the first text")
if not (s.isPalindrome(text2)):
    print("Failed with the first text")
