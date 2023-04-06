$(function () {
    $("#header").load("./header.html");
});
$(function () {
    $("#footer").load("./footer.html");
});

list_class_uses = document.getElementById("uses").classList;
list_class_user_manual = document.getElementById("user_manual").classList;
uses_content_display = document.getElementById("uses-content").classList;
user_manual_content_display = document.getElementById("user-manual-content").classList;

function uses_content() {
    if (list_class_uses[1] == 'disabled') {
        list_class_uses.remove("disabled");
        list_class_uses.add("active");
        list_class_user_manual.remove("active");
        list_class_user_manual.add("disabled");

        uses_content_display.remove("display_none");
        if (user_manual_content_display[1] != "display_none") {
            user_manual_content_display.add("display_none");
        }
        
    }
}

function user_manual_content() {
    if (list_class_user_manual[1] == 'disabled') {
        list_class_user_manual.remove("disabled");
        list_class_user_manual.add("active");
        list_class_uses.remove("active");
        list_class_uses.add("disabled");
        user_manual_content_display.remove("display_none")
        uses_content_display.add("display_none")
    }
}

document.getElementById("uses").addEventListener("click", uses_content);
document.getElementById("user_manual").addEventListener("click", user_manual_content);