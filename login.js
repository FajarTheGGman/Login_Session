//Note : Jangan di recode cuk gw cape buat nya
//hargai lah programmer² yang cape² buat script nya
//Copyright© 2019 by Fajar Firdaus

//Module Yang dibutuhkan 
let f = require("./feedback.js");
var p = require('prompt');
var sh = require('shelljs');
var ch = require('colors');

//Sedikit Hiasan :v
console.log(ch.rainbow('[!] Login Session by fajar firdaus'));
console.log("");

console.log(ch.rainbow('[=====================]'));
console.log(ch.red('Author : Fajar Firdaus'));
console.log(ch.red('FB : Fajar Firdaus / Ace.of.spades729'));
console.log(ch.red('IG : fajar_firdaus_7'));
console.log(ch.red('YT : iTech7732'));
console.log(ch.rainbow('[=====================]'));

//Setup prompt 
p.get(["Username","Password"], function(error,result){
//Pengkondisian Dan Setup Username sama password
	if(result.Username == "Fajar" ){
		console.log('Login.....')
	}else if(result.Password == "Firdaus"){
		console.log('');
	}else{
		console.log('[!] Username Atau Password salah')
		sh.exec("node feedback.js");
	}
});