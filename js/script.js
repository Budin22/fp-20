'use strict';

let first, second;

// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
first = [1,2,3];
second = [4,5,6];
first = first.concat(second);
console.log(first);

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
first = [1,2,3];
first.reverse();
console.log(first);

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
first = [1,2,3];
first.push(4,5,6);
console.log(first);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
first.unshift(4,5,6);
console.log(first);

// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
first = ['js', 'css', 'jq'];
let resultShift = first.shift();
console.log(resultShift);

// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
first = ['js', 'css', 'jq'];
resultShift = first.pop();
console.log(resultShift);

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].
first = [1,2,3,4,5];
first = first.slice(0,3)
console.log(first);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].
first = [1,2,3,4,5];
first = first.slice(-2)
console.log(first);

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].
first = [1,2,3,4,5];
first.splice(1,2);
console.log(first);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].
first = [1,2,3,4,5];
first = first.splice(1,3)
console.log(first);


// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
first = [1,2,3,4,5];
first.splice(3,0,'a', 'b', 'c');
console.log(first);

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
first = [1,2,3,4,5];
first.splice(1,0,'a', 'b');
first.splice(6,0,'c');
first.push('e');
console.log(first);

// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
first = [3, 4, 1, 2, 7];
first.sort();
console.log(first);

// 14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
first = [5, 6, 7, 8, 9];
let result = 0;
for(let i = 0; i < first.length; i++) {
    result += first[i];
}
console.log(result);

// 15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
first = [5, 6, 7, 8, 9];
for(let i = 0; i < first.length; i++) {
    first[i] = Math.pow(first[i], 2)
}
console.log(first);

// 16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
first = [1,-3, 5, 6,-7, 8, 9,-11];
second = [];
for(let i = 0; i < first.length; i++) {
    if(first[i] < 0) {
        second.push(first[i]);
    }
}
console.log(second);

// 17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
first = [1,-3, 5, 6,-7, 8, 9,-11];
second = [];
for(let i = 0; i < first.length; i++) {
    if(first[i] % 2 === 0) {
        second.push(first[i]);
    }
}
console.log(second);

// 18. Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
first = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
second = [];
for(let i = 0; i < first.length; i++) {
    if(first[i].length > 5) {
        second.push(first[i]);
    }
}
console.log(second);

// 19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
first = [1, 2, [3, 4], 5, [6, 7]];
second = [];
for(let i = 0; i < first.length; i++) {
    if(Array.isArray(first[i])) {
        second.push(first[i]);
    }
}
console.log(second);

// 20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
first = [5,-3, 6,-5, 0,-7, 8, 9];
second = 0;

for(let i = 0; i < first.length; i++) {
    if(first[i] < 0) {
        second ++;
    }
}
console.log(second);