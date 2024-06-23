$(document).ready(function () {
    var lastInput;
    $("#whiteboard").click(function (e) {
        if (e.target.tagName === "DIV") {
            if (lastInput && lastInput.val() === "") {
                lastInput.blur();
                $(lastInput).remove();

                lastInput = null;                
            }
            else {
                console.log(e.clientX, e.clientY);

                var input = $("<input class='newtext' type='text'>");
                input.css("left", e.clientX);
                input.css("top", e.clientY);
                $("#whiteboard").append(input);
                input.focus();
                lastInput = input;


                $(input).on("blur", function () {
                    $(input).addClass("nofocus");
                });
            }
        }
    });
});
