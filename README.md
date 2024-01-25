<html>

<head>
    <style>
        label,
        input[type="text"],
        input[type="radio"] {
            display: inline-block;
            margin-bottom: 10px;
        }


        label {
            width: 150px;
        }
    </style>
    
</head>

<body>
    
    <h2>Rekisteröitymislomake</h2>
    <div id="ilmoitukset"></div>
    <form name= "rekisteroitymis">
        <label for="kayttaja">Käyttäjä ID:</label>
        <input type="text" id="kayttaja" name="kayttaja" value=""><br>

        <label for="salasana">Salasana:</label>
        <input type="text" id="salasana" name="salasana" value=""><br>

        <label for="nimi">Nimi:</label>
        <input type="text" id="nimi" name="nimi" value=""><br>

        <label for="osoite">Osoite:</label>
        <input type="text" id="osoite" name="osoite" value=""><br>

        <label for="Maa">Maa:</label>
        <select id="Maa" name="Maa">
            <option value="Suomi">Suomi</option>
            <option value="Ruotsi">Ruotsi</option>
            <option value="Englanti">Englanti</option>
            <option value="Venäjä">Venäjä</option>
        </select> <br>

        <label for="postinumero">Postinumero:</label>
        <input type="text" id="postinumero" name="postinumero" value=""><br>

        <label for="sahkoposti">Sähköposti:</label>
        <input type="text" id="sahkoposti" name="sahkoposti" value=""><br>

        <label for="sukupuoli">Sukupuoli:</label>
        <input type="radio" id="Mies" name="sukupuoli" value="Mies">
        <label for="Mies">Mies</label>
        <input type="radio" id="nainen" name="sukupuoli" value="Nainen">
        <label for="Nainen">Nainen</label><br>

        <label for="Kieli">Kieli:</label>
        <input type="checkbox" id="Suomi" name="Kieli" value="Suomi">
        <label for="Suomi">Suomi</label>
        <input type="checkbox" id="Muu kuin suomi" name="Kieli" value="Muu kuin suomi">
        <label for="Muu kuin suomi">Muu kuin suomi</label><br>

        <label for="Lisatietoja:">Lisätietoja:</label>
        <textarea name="Lisatietoja" rows="10" cols="30"></textarea>
        <br>
        <input type="submit" value="Lähetä">
        <script src="./rekisteroitymislomake.js">
            function checkbox() {
                var suomicheckbox = document.getElementById('Suomi');
                var muucheckbox = document.getElementById('MuuKuinSuomi');
                if (!suomicheckbox.checked && !muucheckbox.checked) {
                    console.log("Valitse vähintään yksi kieli.");
                    return false;
                }
                return true;
            }
        </script>
       
    </form>

</body>

</html>   
