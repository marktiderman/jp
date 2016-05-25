<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script>
$('switcher-2 .switcher-3').removeClass('active');
$('#content-0, #content-2, #content-3').hide();
$('.switcher-1').on('click', function(e) {
    e.preventDefault();
    $('#content-0, #content-2, #content-3').hide();
    $('#content-1').show();
    $('.switcher-1').addClass('active');
    $('.switcher-2, .switcher-3').removeClass('active');
});
$('.switcher-2').on('click', function(e) {
    e.preventDefault();
    $('#content-2').show();
    $('#content-0, #content-1, #content-3').hide();
    $('.switcher-2').addClass('active');
    $('.switcher-1, .switcher-3').removeClass('active');
});
$('.switcher-3').on('click', function(e) {
    e.preventDefault();
    $('#content-3').show();
    $('#content-0, #content-1, #content-2').hide();
    $('.switcher-3').addClass('active');
    $('.switcher-1, .switcher-2').removeClass('active');

});
</script>
