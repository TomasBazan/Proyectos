from typing import List

# Para futuras referencias: Uso sorted con reverse para ordenar de mayor a menor
# uso el slice operador para que lo haga hasta k
# el metodo items devuelve lista de tuplas con clave-valor
# el lambda calculo es para que ordene en base al valor


# class Solution:
#    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
#        elements_nums = set(nums)
#        ocurrencias = dict()
#        result = []
#        for i in elements_nums:
#            ocurrencias[i] = nums.count(i)
#        for i in range(k):
#            element = (max(ocurrencias, key=ocurrencias.get))
#            result.append(element)
#            del ocurrencias[element]
#        return result

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        result = []
        Frq = {}
        for i in nums:
            if i in Frq:
                Frq[i] += 1
            else:
                Frq[i] = 1
        temp = sorted(Frq.items(), key=lambda x: x[1], reverse=True)[:k]
        for i in range(k):
            result.append(temp[i][0])
        return result


algo = {}
print(algo)
algo[0] = 1
algo[1] = 2
algo[3] = 4
algo[4] = 2
print(algo.items())
s = Solution()
print(s.topKFrequent([1, 1, 1, 2, 2, 3], 2))

print(s.topKFrequent([1, 2], 2))
