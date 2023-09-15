strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

mi_diccionario = {}
for i in strs:
    iterable = ''.join(sorted(i))
    if iterable in mi_diccionario:
        mi_diccionario[iterable].append(i)
    else:
        mi_diccionario[iterable] = [i]

print(mi_diccionario)
print(list(mi_diccionario.values()))
