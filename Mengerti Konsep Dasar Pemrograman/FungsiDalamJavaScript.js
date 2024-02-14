function greeting() {
    console.log("Selamat sore!");
}

greeting();

// Parameter Fungsi
function greetingParameter(greet) {
    console.log("Selamat " + greet + "!");
}

greetingParameter("malam"); // Selamat malam!
greetingParameter("pagi"); // Selamat pagi!

function greetingName(greet, name) {
    console.log("Selamat " + greet + ", " + name + "!");
}

greetingName("sore", "Dimas"); // Selamat sore, Dimas!
greetingName("pagi", "Yasmin"); // Selamat pagi, Yasmin!

function greetingDefault(greet, name = "Bapak/Ibu") {
    console.log("Selamat " + greet + ", " + name + "!");
}

greetingDefault("sore", "Dimas"); // Selamat sore, Dimas!
greetingDefault("pagi"); // Selamat pagi, Bapak/Ibu