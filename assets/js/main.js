$(document).ready(function(){
    $("#write-btn").click(function(){
        var list = $('#name').val();
        $("ol").append('<li>'+ list + '</li>');
        $("#name").val("");
    });

    $("#search-btn").on("keyup", function(){
        var search = $(this).val().toLowerCase();
        $("li").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(search)>-1);
        });
    });   
})