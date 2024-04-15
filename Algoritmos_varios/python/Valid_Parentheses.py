# Puta madre era con sentido, no vale ([)]
class Solution:
    def isValid(self, s: str) -> bool:
        opens = s.count('(')
        closing = s.count(')')
        if opens - closing != 0:
            return False
        opens = s.count('[')
        closing = s.count(']')
        if opens - closing != 0:
            return False
        opens = s.count('{')
        closing = s.count('}')
        if opens - closing != 0:
            return False
        return True


test = "({{)}[]"
s = Solution()
print(s.isValid(test))
