$(document).ready(function(){

    // color의 li를 클릭했을때, li의 순번을 찾고 해당 순번에 맞게 ingredient의 li가 보여라

    $('.color li').click(function(){

        var i =$(this).index();
        $('.ingredient li').slideUp()
        $('.ingredient li').eq(i).slideDown()
            
    })
    $('.txtBox p').click(function(){

var i =$(this).index();
$('.recipe li').slideUp()
$('.recipe li').eq(i).slideDown()

})
    
// 123을반복해라
var i = 0

setInterval(function(){
i++;

if (i==3)i=0
// ==는 돌아갈 이미지의 개수와 동일
console.log(i)
$('.part1 li').eq(i-2).css({'left':'80%'}).stop().animate({'left':'-80%'})
$('.part1 li').eq(i-1).css({'left':'0'}).stop().animate({'left':'80%'})
$('.part1 li').eq(i).css({'left' : '-80%'}).stop().animate({'left':'0'})
},3000);


// recipe li를 클릭했을때 li의 순번을 찾고 해당순번에 맞게 recipe_box의 p가보여라
$('.recipe li').click(function(){

    var i =$(this).index();
    $('.recipe_box').show();
    $('.recipe_box p').slideUp()
    $('.recipe_box p').eq(i).slideDown()
        
})
$('.recipe_box p').click(function(){

    $('.recipe_box p').hide();
        
})


    })