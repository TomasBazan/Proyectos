from typing import List

# Ver como implementar bien, la idea es usar prefijos y sufijos
# entonces cada elemento en result es el producto entre el
# anterior de prefijos por el siguiente de sufijos
# tengo que ver como recorrer bien pq tiene q ser O(n)

# Solucion sin usar dos arrays de prefijos y sufijos


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = [1] * len(nums)
        prefijo = 1
        for i in range(len(nums)):
            result[i] = prefijo
            prefijo *= nums[i]
        sufijo = 1
        # desde el ultimo posicion hasta el -1 sin incluir, de a -1 step
        for i in range(len(nums) - 1, -1, -1):
            result[i] *= sufijo
            sufijo *= nums[i]
        return result
# Mala solucion
# class Solution:
#    def productExceptSelf(self, nums: List[int]) -> List[int]:
#        result = [1] * len(nums)
#        for i in range(len(nums)):
#            for j in range(len(nums)):
#                if j == i:
#                    continue
#                else:
#                    result[i] = result[i] * nums[j]
#                    print(result[i])
#        return result


s = Solution()
numeros = [1, 2, 3, 4]
printeo = s.productExceptSelf(numeros)
print(printeo)
