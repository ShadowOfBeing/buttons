function changeColorAndAlert(id) {
    var button = document.getElementById(id);
    document.getElementById(id).classList.add("class_green");
    if (id == 'up_1') {
        document.getElementById('middle_1').classList.remove("class_green");
        document.getElementById('down_1').classList.remove("class_green");
        alert("Я верхняя кнопка и ты нажал на меня!");
    } else if (id == 'middle_1') {
        document.getElementById('up_1').classList.remove("class_green");
        document.getElementById('down_1').classList.remove("class_green");
        alert("Я средняя кнопка, не тыкай мне тут!");
    } else {
        document.getElementById('up_1').classList.remove("class_green");
        document.getElementById('middle_1').classList.remove("class_green");
        alert("Я нижняя кнопка, не тычь в меня, я аж покраснела!");
    }
}