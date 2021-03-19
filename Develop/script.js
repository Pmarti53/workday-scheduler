


n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;

$(document).ready(function () {
    $(".row").click(function () {
        console.log("div was selected");
        
    });
});






























// // $(".row").on("click", div, function() {
// //     console.log("<div> was clicked")
// // })

// $(document).ready(function () {
//     $("div").click(function () {
//         $(this).hide();
//     });
// });

// document.getElementById("currentDay").innerHTML = "Date";

// const date = date.now();

// document.querySelectorAll("#times")