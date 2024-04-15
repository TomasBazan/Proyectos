#include <stdio.h>
#include <stdlib.h>

int minimumSum(int num) {
    int array[4];
    int aux = 0;
    for (int i = 3; i >= 0; i--) {
        array[i] = num % 10;
        num      = num / 10;
    }
    for (int i = 0; i < 4; i++) {
        for (int j = i; j < 4; j++) {
            if (array[j] < array[i]) {
                aux      = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }

    int sum1 = array[0] * 10 + array[2];
    int sum2 = array[1] * 10 + array[3];

    return sum1 + sum2;
}

int main() {
    int number;
    printf("Ingrese un numero de 4 digitos. \n");
    scanf("%d", &number);
    printf("\n\n %d \n\n", minimumSum(number));
    return 0;
}