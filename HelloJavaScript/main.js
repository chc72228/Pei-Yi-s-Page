$(document).ready(function() {
    $("input").click(function()
    {
        var numberOfListItem=$("li").length;
        var randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        
        $("Hi").text($("li").eq(randomChildNumber).text());
    });
});