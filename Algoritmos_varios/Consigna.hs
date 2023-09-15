import Data.Binary.Get (skip)

factorial :: Int -> Int
factorial 0 = 1 --case base (pattern-matching con "0")
factorial n = n * factorial (n -1) --caso recursivo (pattern-matching con "n")

--Repasemos funciones recursivas sobre listas.  Podemos caracterizar (al menos)
--tres tipos de funciones recursivas sobre listas: "MAP", "FILTER", "FOLD".

--Funciones recursivas del tipo "MAP":
duplica :: [Int] -> [Int]
duplica [] = []
duplica (x : xs) = (2 * x) : duplica xs

mas1 :: [Int] -> [Int]
mas1 [] = []
mas1 (x : xs) = (x + 1) : mas1 xs

generalMap :: [Int] -> (Int -> Int) -> [Int]
generalMap [] f = []
generalMap (x : xs) f = f x : generalMap xs f

polGeneralMap :: [a] -> (a -> a) -> [a]
polGeneralMap [] f = []
polGeneralMap (x : xs) f = f x : polGeneralMap xs f

morePolGeneralMap :: [a] -> (a -> b) -> [b]
morePolGeneralMap [] f = []
morePolGeneralMap (x : xs) f = f x : morePolGeneralMap xs f

--Ejercicio 1:
--a) redefinir la función "duplica" y "mas1" en términos de "generalMap" y "polGeneralMap".
duplica' :: [Int] -> [Int]
duplica' xs = polGeneralMap xs (2 *)

mas1' :: [Int] -> [Int]
mas1' xs = generalMap xs (+ 1)

--b) definir la función esPar:: [Int] -> [Bool] en términos de "morePolGeneralMap".
--Donde la función "esPar" mapea cada elemento de la lista a un booleano que indica si el mismo es un numero par.
--Por ejemplo, esPar [2,9,4,5] = [True, False, True,False].

esPar :: [Int] -> [Bool]
esPar xs = morePolGeneralMap xs even

--Funciones recursivas del tipo "FILTER":
soloPares :: [Int] -> [Int]
soloPares [] = []
soloPares (x : xs)
  | mod x 2 == 0 = x : soloPares xs
  | mod x 2 /= 0 = soloPares xs

--Ejercicio 2:
--a) generalizar la funciones de tipo "FILTER" sobre lista de enteros.
algunFilter :: [Int] -> (Int -> Bool) -> [Int]
algunFilter [] _ = []
algunFilter (x : xs) f
  | f x = x : algunFilter xs f
  | otherwise = algunFilter xs f

--b) dar una versión polimorfica de la misma.
polimorficFilter :: [a] -> (a -> Bool) -> [a]
polimorficFilter [] _ = []
polimorficFilter (x : xs) f
  | f x = x : polimorficFilter xs f
  | otherwise = polimorficFilter xs f

--c) redefinir la función "soloPares" en términos de dicha generalización.
soloPares' :: [Int] -> [Int]
soloPares' xs = polimorficFilter xs even

--Funciones recursivas del tipo "FOLD":
sumatoria :: [Int] -> Int
sumatoria [] = 0
sumatoria (x : xs) = x + sumatoria (xs)

--Ejercicio 3:
--a) generalizar la funciones de tipo "FOLD" sobre lista de enteros.

miFold :: [Int] -> (Int -> Int -> Int) -> Int
miFold [] _ = 0
miFold [x] f = x
miFold (x : xs) f = f (miFold xs f) x

--b) dar una versión polimorfica de la misma.
miFoldPol :: [a] -> (a -> a -> a) -> a
miFoldPol [] _ = error "no se puede aplicar fold a una lista vacia"
miFoldPol [x] f = x
miFoldPol (x : xs) f = f (miFoldPol xs f) x

--c) redefinir la función "sumatoria" en términos de dicha generalización.
sumatoria' :: [Int] -> Int
sumatoria' xs = miFoldPol xs (+)

type Radio = Float --Define un "alias de tipo" (sinónimo)

type Lado = Float

data Arbolin a = Empty | Node a (Arbolin a) (Arbolin a)

--fun que recorra el arbol y devuelva una lista de los elementos

liste :: Arbolin a -> [a]
liste Empty = []
liste (Node a lft rgt ) = a : liste lft  ++ liste rgt


--Vamos a definir 4 figuras
data Figura
  = Circulo Radio --Cada uno de estos es un _constructor_
  | Cuadrado Lado --define el constructor de un "Cuadrado"
  | Rectangulo Lado Lado --define el constructor de un "Rectangulo"
  | Punto --define el constructor de un "Punto"
  deriving (Eq, Show)

perimetro :: Figura -> Float
perimetro (Circulo radio) = 2 * pi * radio
perimetro (Cuadrado lado) = 4 * lado
perimetro (Rectangulo ancho alto) = 2 * ancho + 2 * alto
perimetro (Punto) = error "no se puede calcular el perimetro del punto"

--Ejercicio 4: definir una función que devuelva la superficie de una "Figura"
superficie :: Figura -> Float
superficie (Circulo radio) = pi * radio ^ 2
superficie (Cuadrado lado) = lado ^ 2
superficie (Rectangulo ancho alto) = ancho * alto
superficie (Punto) = error "no se puede calcular la superficie del punto"

--Ejercicio 5:

--a) Asi como definimos el tipo "Figura" en el ejercicio anterior, ahora definir
--un tipo "Expr" que permita representar una expresión aritmética sobre enteros
--(sin variables) con nuestros propios operadores :+:, :-:, :*:
--Por ejemplo: (5 :*: 3) :+: 10 :-: 2 es una "Expr"

data Expr
  = Int :+: Int
  | Int :*: Int
  | Int :-: Int
  deriving (Eq, Show)

--b)Luego, definir su semántica, i.e., definir una función que evalúa (en forma
--natural) una expresión aritmética "Expr". Por ejemplo:
--
--evaluar ((5 :*: 3) :+: 10 :-: 2) = 5*3 + 10 - 2 = 23
--
evaluar :: Expr -> Int
evaluar (a :+: b) = a + b
evaluar (a :*: b) = a * b
evaluar (a :-: b) = a - b

--Ejercicio 6:

--a) Definir un tipo "BinTree" que permita representar un arbol binario
--genérico, en cuyos nodos se almacenen valores de un tipo arbitrario.
data BinTree a = Hoja | Rama (BinTree a) a (BinTree a) deriving Show

arbolPruebanNum :: BinTree Int
arbolPruebanNum = Rama (Rama (Rama Hoja 1 Hoja) 2 (Rama Hoja 3 Hoja)) 5 (Rama (Rama Hoja 6 Hoja) 8 (Rama Hoja 9 Hoja))
--b) Definir una función de _folding_ que recorra los elementos del arbol en
--alguna de los tres ordenes posibles (preorder,inorder o posorder).
--Ayuda: devolver una lista con los elementos del arbol en el orden en el que
--fueron visitados.
_folding_ :: BinTree a -> [a]
_folding_ Hoja = []
_folding_ (Rama x a y) =  _folding_ x ++ _folding_ y ++ [a] -- pos order
  -- pre order :[a] ++ _folding_ x ++ _folding_ y   
  -- in order : _folding_ x ++ [a] ++ _folding_ y

--c) Definir una función que devuelva la profundidad de un arbol binario. Luego,
--redefinirla en terminos de una funcion fold que opera sobre arboles binarios.