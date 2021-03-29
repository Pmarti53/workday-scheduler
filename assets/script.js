var time = moment().format("LTS");



function Repopulate() {
    for (i = 7; i < 12; i++) {
        var storedtext = localStorage.getItem("text-" + i)
        console.log(storedtext)
        $("#text-" + i).text(storedtext);
    }
}

function clock() {
    setInterval(function () {
        $("#times").html(moment().format('LTS'));
    }, 1000);
}

// div selection function
$(document).ready(function () {
    $(".row").click(function () {
        // console.log("div was selected");
    });
});

//enter text fucntion
$(document).ready(function () {
    $(".row").append('<p><a id=".row-1" href="#"></a></p>');
    $('#myLink').on('click',
        function () {
            $('textarea').val('some content');
        }
    );
});

// save function
$(".saveBtn").on("click", function () {
    var timeClicked = $(this).siblings(".textinput").attr('id');
    var eventInput = $(this).siblings(".textinput").val();
    localStorage.setItem(timeClicked, eventInput);
    console.log(localStorage.getItem('timeClicked'))

});




clock();
Repopulate();
n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;































