// //looping
// const phi = 3.14;
// let jari2 = "";
// let total = "";
// let input= prompt("masukan angka untuk jari jari lingkaran yg bukan kelipatan 7");
// function jumlahluaslingkaran(a) {
//     jari2= a**2 
//     total = phi * jari2;
//     return total 
// }

// alert(jumlahluaslingkaran(10));

// function pushUp() {
    
// }

// for(i = 1; i<= 10; i++){
//     pushUp();
// }

// let bosan; 
// while(bosan == false){
//     pushUp();
// }

// counted loop = for loop, foreach loop, do/while loop
// for( var i = 0; i<10; i ++){
//     document.write(`perulangan ini ${i + 1} kali`);
// }

// // while 
// let ulang = confirm("apakah anda mau mengulangi?");
// let counter = 0;
// while(ulang){
// let jawab = confirm("apakah anda mau mengulangi?");
// counter++;
// if(jawab == false){
//     ulang = false;
// }}
// document.write("perulangan sudah dilakukan sebanyak" + counter + "kali");

// do/ while looping
// do{
//     //code
// }while(condition);

// let ulang = confirm("apakah anda mau mengulangi?");
// let counter = 0;

// do{
//     counter++;
//     ulang = confirm("apakah anda ingin mengulangi?");
// }while(ulang);
// document.write("perulangan sudah dilakukan sebanyak" + counter + "kali");

let sum = "";
while(true){
    let value = prompt("masukan sebuah huruf", '');
    if(!value) break;
    sum+= value;
}

alert('sum :' + sum);