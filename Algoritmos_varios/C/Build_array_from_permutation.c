#include <stdio.h>
#include <stdlib.h>

/* The code takes an arbitrary array from input and
generates other array from a permutation of the original array,
folowing the patther that new[i] = old[old[i]]
*/
// otro
int *buildArray(int *nums, int numsSize, int *returnSize) {
    int *ans = malloc(sizeof(int) * numsSize);
    for (int i = 0; i < numsSize; i++) {
        ans[i] = nums[nums[i]];
    }
    *returnSize = numsSize;
    return ans;
}
// Asume the caller frees the array
int *create_new_array(int array_size) {
    int *array = malloc(sizeof(int) * (array_size + 1));
    printf("Please tipe the elements of the array.\n");
    for (int i = 0; i < array_size; i++) {
        scanf("%d", &array[i]);
    }
    return array;
}

int main() {
    int *array;
    int  size;
    int *other_array;
    int *other_size = malloc(sizeof(int));
    printf("What will be the size of the array?..\n");
    scanf("%d", &size);
    array       = create_new_array(size);
    other_array = buildArray(array, size, other_size);
    printf("[");
    for (int i = 0; i < *other_size; i++) {
        if (i == *other_size - 1) {
            printf("%d", other_array[i]);
        } else {
            printf("%d,", other_array[i]);
        }
    }
    printf("]\n");
    free(other_array);
    free(array);
    f(other_size);
    return 0;
}