//#include <tic.h>
#include <stdio.h>
#include <time.h>
int main() {
  long int M, N, m, n, r /* , d */;

  printf("Ingresar primer numero\n");
  scanf("%ld", &m);
  printf("Ingresar segundo numero\n");
  scanf("%ld", &n);
  M = m;
  N = n;
  for (int i = 0; i < 50; i++) printf("*");
  printf("\n");
  // Book's Algorithm E
  clock_t start_clock = clock();
  clock_t end_clock;
  while (1) {
    r = m % n;

    // d = m / n;
    if (r == 0) {
      end_clock = clock();

      break;
    }
    m = n;
    n = r;
  }
  printf("The program lasted %ld \n", (end_clock - start_clock));
  printf("The result is : %ld \n", n);
  // My Algorithm to imprube E
  m = M;
  n = N;
  for (int i = 0; i < 50; i++) printf("*");
  printf("\n");

  start_clock = clock();
  while (1) {
    r = m % n;
    if (r == 0) {
      end_clock = clock();
      break;
    }
    if (r > n) {
      m = r;
    } else {
      m = n;
      n = r;
    }
  }
  printf("The program lasted %ld \n", (end_clock - start_clock));
  printf("The result is : %ld \n", n);
  m = M;
  n = N;
  for (int i = 0; i < 50; i++) printf("*");
  printf("\n");
  // Book's Algorithm to impruve F
  start_clock = clock();
  while (1) {
    m = m % n;
    if (m == 0) {
      end_clock = clock();
      printf("The result is : %ld \n", n);
      break;
    }
    n = n % m;
    if (n == 0) {
      end_clock = clock();
      printf("The result is : %ld \n", m);
      break;
    }
  }
  printf("The program lasted %ld \n", (end_clock - start_clock));

  return 0;
}