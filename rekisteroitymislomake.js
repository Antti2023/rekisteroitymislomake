let lomake = document.forms["rekisteroitymis"]
lomake.addEventListener("submit", tarkistaLomake)

function tarkistaLomake(event) {
    event.preventDefault();
    const kayttajaid = document.getElementById("kayttaja").value;
    const salasana = document.getElementById("salasana").value;
    const nimi = document.getElementById("nimi").value;
    const osoite = document.getElementById("osoite").value;
    const maa = document.getElementById("Maa").value;
    const postinumero = document.getElementById("postinumero").value;
    const sahkoposti = document.getElementById("sahkoposti").value;
    const sukupuoli = document.querySelector('input[name="sukupuoli"]:checked');
    const kieli = document.querySelectorAll('input[name="Kieli"]:checked');
    const salasanavaatimukset = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@£$€&%#]).{6,}$/;
    
    if (
        kayttajaid.length < 6 || 
        nimi === "" ||
        osoite === "" ||
        maa === "" ||
        postinumero.length !== 5 ||
        isNaN(postinumero) ||
        !sahkoposti.includes("@") ||
        !salasana.match(salasanavaatimukset) ||
        kieli.length === 0
    ) {
        console.log("Tarkista lomakkeen tiedot!");
        return false;
    }
    console.log("Lomake lähetetty onnistuneesti!")
    return true;
}

