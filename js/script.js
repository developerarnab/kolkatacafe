
$(document).ready(function () {

    $('.menu-toggle').click(function () {

        $('nav').toggleClass('active')

    })

    $('ul li').click(function () {

        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');

    })

})

// -------------  FILTER GALLERY

  $('.list').click(function(){
const value = $(this).attr('data-filter');
if (value == 'all'){
$('.item').show('6000');

}
else{
    $('.item').not('.'+value).hide('6000');
    $('.item').filter('.'+value).show('6000');
}
  })

$('.list').click(function(){

    $(this).addClass('active').siblings().removeClass('active');
})
  


// --------------en filter gallery










