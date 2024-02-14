let totalBelanja = 125000;
let jenisMember = "Bronze";

// AND
if (totalBelanja > 100000 && jenisMember == "Silver") {
    console.log("Selamat, Anda mendapat diskon sebesar 10%");
} else {
    console.log("Maaf, saat ini Anda belum mendapat diskon");
}

// OR
if (totalBelanja > 100000 || jenisMember == "Silver") {
    console.log("Selamat, Anda mendapat diskon sebesar 10%");
} else {
    console.log("Maaf, saat ini Anda belum mendapat diskon");
}