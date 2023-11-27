document.addEventListener("DOMContentLoaded", function() {
    const form = document.forms["formNewItem"];
    const result = document.getElementById("result");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const conversionType = form.querySelector("#tyyppi").value;
        const lampoInput = parseFloat(form.querySelector("#lampo").value);
        const tarkkuus = parseInt(form.querySelector("#tarkkuus").value);

        if (conversionType === "1") {
            printType = "Fahrenheitia";
        }
        else {
            printType = "Celsiusta";
        }
        if (isNaN(lampoInput) || lampoInput === "") {
            result.textContent = "Syötä lämpötila numeroina.";
        } 
        else {
            const uusiLampo = uusiLampotila(conversionType, lampoInput, tarkkuus);
            if (uusiLampo < -273.15) {
                result.textContent = "Lämpötila < absoluuttinen nollapiste.";
            }
            else if (uusiLampo > 999999999) {
                result.textContent = "Oletko tosissasi?";
            }
            else {
                result.textContent =`Vastaus: ${uusiLampo} ${printType}`;
            }
        }
    });

    function uusiLampotila(tyyppi, value, tarkkuus) {
        if (tyyppi === "1") {
            return ((value * 9 / 5) + 32).toFixed(tarkkuus);
        } 
        else {
            return ((value - 32) * 5 / 9).toFixed(tarkkuus);
        }
    }
});
