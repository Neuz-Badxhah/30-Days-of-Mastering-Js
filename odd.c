// #include <stdio.h>

// int main()
// {
//     FILE *oddFile, *evenFile;
//     int number;

//     // Open odd.dat for reading
//     oddFile = fopen("odd.dat", "r");
//     if (oddFile == NULL)
//     {
//         printf("Error: Cannot open odd.dat\n");
//         return 1;
//     }

//     // Open even.dat for reading
//     evenFile = fopen("even.dat", "r");
//     if (evenFile == NULL)
//     {
//         printf("Error: Cannot open even.dat\n");
//         fclose(oddFile); // Close the opened file
//         return 1;
//     }

//     // Reading and displaying odd numbers
//     printf("Odd numbers:\n");
//     while (fscanf(oddFile, "%d", &number) != EOF)
//     {
//         printf("%d ", number);
//     }
//     printf("\n");

//     // Reading and displaying even numbers
//     printf("Even numbers:\n");
//     while (fscanf(evenFile, "%d", &number) != EOF)
//     {
//         printf("%d ", number);
//     }
//     printf("\n");

//     // Close the files
//     fclose(oddFile);
//     fclose(evenFile);

//     return 0;
// }
