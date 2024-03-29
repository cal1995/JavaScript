/*
 * @Author: your name
 * @Date: 2021-01-25 16:02:19
 * @LastEditTime: 2021-01-25 16:09:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \instance-deployd:\JavaScript\circulation\demo01.js
 */
// for、 while、 do while

/**
 *    循环结构的执行步骤
 *      1. 声明循环变量
 *      2. 判断循环条件
 *      3. 执行循环体操作
 *      4. 更新循环变量
 *      5. 执行 2-3-4  直到条件不成立，结束循环
 */

// 1. while
//  while 循环会在指定条件为真时循环执行代码块
/**
 *     while(条件) {
 *          // coding
 *      } 
 *
 */
let num = 1;
while(num < 10) {
    console.log(num);
    num++
}

// 2. do - while
/**
 *  do - while 是 while 循环的变体，该循环会在检查条件是否为真之前执行一次代码块，然后如果条件为真的话，就会重复这个循环
 * 
 *      do {
 *          // codeing
 *      }while(条件)
 */

let num2 = 0;
do{
    console.log(num2);
    num2++;
}while(num2 < 10)


// 3. for
/**
 *  for 循环定义的变量不管里面有多少函数，变量在里面的所有函数面都是可以取到的
 * 
 *  js 的变量提升（var 定义的是全局变量，同时只在定义的函数方法内可以理解为全局变量）
 * 
 *  var 在for循环里面定义的变量也是全局变量
 * 
 *  但是let 不一样，let在{} 里面就是局部变量
 */