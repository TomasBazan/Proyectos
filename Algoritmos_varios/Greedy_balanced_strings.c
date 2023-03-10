#include <stdio.h>
#include <stdlib.h>
/*
Nota:
Modificar el programa para que tenga un mejor uso. Input una funcion y verifica si la funcion tiene () balanceados
#define VAL(c) c == 'R' ? 1 : -1

int balancedStringSplit(char *s) {
    int t = VAL(s[0]), i = 1, res = 0;

    while (s[i]) {
        t += VAL(s[i++]);
        res += t == 0;
    }

    return res;
}

*/

int balancedStringSplit(char *s) {
    int   proportion_balanced = 0;
    int   count_balanced      = 0;
    char *input_string;

    input_string = s;
    while (*input_string) {
        if (*input_string == 'R') {
            proportion_balanced++;
        } else if (*input_string == 'L') {
            proportion_balanced--;
        }
        if (proportion_balanced == 0) {
            count_balanced++;
        }
        input_string++;
    }
    return count_balanced;
}

int main() {
    int   cuantity_substrings;
    char *string_to_procces = malloc(sizeof(char) * 1000);
    printf("Please enter a string with only 'R' or 'L' letter with lengt greater than 2 and less than 1000. For example 'RLLLRLRL'\n");
    scanf("%s", string_to_procces);

    cuantity_substrings = balancedStringSplit(string_to_procces);
    printf("The cuantity of balanced substrings that you can make from your string is:  %d\n", cuantity_substrings);
    free(string_to_procces);
    return 0;
}