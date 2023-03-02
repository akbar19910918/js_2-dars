                   //1-masala. Prefix and Postfix
//let a=1,b=1;

//let c=++a; //=2   a dan oldin kelgan ++ ishora a ni qiymatini 1 ga oshirib natija qilib korsatadi
//let d=b++; //=1   ++ ishora b qiymatga 1ni qoshishi kerak aslida.lekn console qilganda bni qiymatini oqiydi
/// 2-marta console qilsak 2 chiqarb beradi

//             2-masala. Assinment result
// let a=2;

// let x=1+(a*=2); //a*=2 degani a ni 2 ga kopaytirb chiqqan qiymatni a ga tenglab qoyish.
//  shunda x ni qiymati 5 boladi.

//              3-masala.Type Conversion
//""+1+0;
// console.log(""+1+0);//natija 10 chiqadi.sababi stringga 1va 0ni qoshyapdi. natija srtingda  chiqyapdi

// ""-1+0;
// console.log(""-1+0);//natija -1 chiqadi.string bosh bolgani uchun -1ga 0ni qoshayapdi.natija numberda chiqadi

// true+false;
// console.log(true+false); //natija 1 chiqadi,chunki true 1ga false 0ga teng.

// 6/"3";
// console.log(6/"3");//natija 2.numberda  

// "2"*"3";
// console.log("2"*"3");// natija 6 numberda

// 4+5+"px";
// console.log(4+5+"px");//natija 9px chiqadi.chunki oldin 2 numberni bir biriga qoshadi keyn stringni qoshadi
// stringni qiymatga qoshmaydi.yoniga qoshib qoyadi.

// "$"+4+5;
// console.log("$"+4+5);// natija $45 chiqadi,chunki amal bajarilganda chapdan ongga qarab oqib boriladi.
//shunda $4 string chiqadi va shunga keyn 5 ni qoshadi.natijada $45 string qiymat chiqadi.

// "4"-2;
// console.log("4"-2);//natija 2 chiqadi.stringni nummberga otkazb 4 dan 2ni ayrdik.

// "4px"-2;
// console.log("4px"-2);// natija NaN chiqadi,chunki 4px raqam emas.

// "-9" + 5;
// console.log("-9"+5);//natija -95.stringni yoniga numberni qoyb qoydi.
// etiborli tarafi stringda numberni ayirmoqchi bolsak stringni numberga aylantirb keyn amal bajaradi

//"-9"-5;
// console.log("-9"-5);//natija -14.stringni oldin numberga otkazb keyn amal bajarildi

// null + 1
// console.log(null + 1);//natija 1.

// undefined + 1
// console.log(undefined + 1);// natija NaN

//" \t \n" - 2
//console.log(" \t \n" - 2);// natija -2.sababini ozm xam bilmadm

//                      4-masala. Comparisons
// comparisonsda faqat 2 qiymat qaytaradi.true va false.
// 5>4
// console.log(5>4);//true. biz 5 4dan kattami deb savol qoyyapmz,console bizga xa(true)deb javob qaytaryapdi

// "apple" > "pinapple"
// console.log("apple" > "pinapple");// natija false.chunki bizda aski tebl bor shundan taqqoslidigan bosak a<p dan

// "2" > "12"
// console.log("2" > "12");// natija true.chunki string malumotni taqqoslayotganda oldin 2sindan xam 1 bolib 
// turganlarini taqqoslaydi.bu yerda 2 1da katta bolgani uchun xam natija true chiqyapdi

// undefined==null
// console.log(undefined==null);// natija true.chunki 2sixam bosh qiymat.

// undefined===null
// console.log(undefined===null);//natija false.chunki === bu tenglik qiymatni xam,date typeni xam tekshiradi

// null=="\n0\n"
// console.log(null=="\n0\n");// natija false.chunki bu yerda \n degani 1ta qator tashasin degani.

"\t\n"- 2
console.log("\t\n"- 2);// natija -2.chunki \t degani tab tashash.keyn bosh string bolb qoladi.