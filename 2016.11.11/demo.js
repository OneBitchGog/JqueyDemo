/**
 * Created by Administrator on 2016/11/11.
 */
// window.onload = function () {
//     document.getElementById("demo2").onclick = makeItRed;
// }
//
// function makeItRed() {
//     //document.getElementById("demo2").style.color = "red";
//    // $("#demo2").css("color", "red");
//     $("ul.myList li a").css("color","red");
// }

$(init);

function init() {
    //$("ul.myList li a").css("color","red");
   //$("ul.myList > li > a").css("color","red");
    //$("a[href ^= 'http://']").css("color","black");

    //$("li:has(a)").css("color","red");
    //$(':first').css("color","red");


    //$("table#haha tbody td:first-child").css("color","red");
    //$("table#haha tbody td:nth-child(3)").css("color","blue");
   // $("table#haha tbody td:last-child").css("color","yellow");
   //  $("table#haha tbody td:eq(6)").css("color","red");


    // 记住一句话   nth-child(1)   从1开始 eq(0)   从0开始
// debugger;
    // $("<div class='foo'>i have foo!</div><div>i no have foo!</div>").filter(".foo").click(function () {
    //     debugger;
    //     alert("haha");
    // }).end().appendTo(".myList");

 //   $("<div class='foo'>I have foo!</div><div>i no have foo!</div>").appendTo(".myList");


    // var arr = $("td").filter(function () {
    //     return this.innerHTML.match(/^\d+$/);
    // })
    //
    // console.dir(arr.slice(2,3));
    // console.dir(arr[0]);

    // var s = $("p").contains('haha');
    // var s = $("p").size();
    // var _s = $('p').contains("haha");
    // console.dir(s);


    // var arrAlts = new Array();
    // $("img").each(function () {
    //     arrAlts.push(this.alt);
    // })
    //
    // console.dir(arrAlts);


    var ss = $("#sds").attr("alt")
    alert(ss);

}

