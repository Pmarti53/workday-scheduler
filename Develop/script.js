var addTask = document.getElementById('row')


n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;

$(document).ready(function () {
    $(".row").click(function () {
        console.log("div was selected");
    });
});

jQuery(document).ready(function () {
    $(".row").append('<p><a id=".row-1" href="#"></a></p>');
    $('#myLink').on('click',
        function () {
            $('textarea').val('some content');
        }
    );
});
































