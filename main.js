let i = 0;
window.onload = web();

function web(webn) {
    if (i === 0) {
        web0();
    } else {
        switch (webn) {
            case 1:
                web1();
                break;
            case 2:
                web2();
                break;
        }
    }
}

function web0() {
    let web = document.getElementById('elem');
    web.innerHTML = `
    <br>
    <h2> Hola Pablo Humberto <h3>
    <h3 style="color:red"> Conversión Binario Número <h3>
    <br>
    <button type="submit" onclick="web1()"> BINARIO a NUMERO </button>
    <br>
    <br>
    <button type="submit" onclick="web2()"> NUMERO a BINARIO </button>
    `;
}

function web1() {

    let web = document.getElementById('elem');
    web.innerHTML = `
        <p onclick="web0();"> 🏠 </p>
        <h3 style="color:red"> Conversión Binario a Número <h3>
        <br>
        <br>
        <h2> Ingresa un número Binario <h2>
        <input type="number"  id="numeroBinario">
        <br>
        <button type="submit" onclick="resBinario_Numero();"> BINARIO a NÚMERO </button>
        <br>
        <label id="resultado"> </label>
        `;
}


function web2() {

    let web = document.getElementById('elem');
    web.innerHTML = `
        <p onclick="web0();"> 🏠 </p>
        <h3 style="color:red"> Conversión Número a Binario <h3>
        <br>
        <br>
        <h2> Ingresa un Número Sistema Decimal <h2>
        <input type="number" id="numeroBinario">
        <br>
        <button type="submit" onclick="resNumero_Binario();"> NÚMERO a BINARIO </button>
        <br>
        <label id="resultado">  </label>
        `;
}


// const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=' + API_KEY);
//     const data = await response.json();
//     const peliculas = data.results;

async function resBinario_Numero() {

    let numBinario = document.getElementById("numeroBinario").value;

    if (document.getElementById("numeroBinario").value == "") {
        document.getElementById("resultado").innerHTML = "Debes ingresar un número, no debes dejar vacia la información";
    } else {
        if (!isNaN(numBinario) != true) {
            document.getElementById("resultado").innerHTML = "Debes ingresar un número";
        } else {
            if (numBinario.includes(".")) {
                document.getElementById("resultado").innerHTML = "Debes ingresar un número BINARIO, no decimal";
            } else {
                let numBinario2 = numBinario;
                numBinario2 = numBinario2.replace(/0/g, "");
                numBinario2 = numBinario2.replace(/1/g, "");

                if (numBinario2 != "") {
                    document.getElementById("resultado").innerHTML = "Debes ingresar un número BINARIO";

                } else {
                    if (window.navigator.onLine) {
                        //alert("si hay internet");
                        //const response = await fetch('http://localhost:7079/api/Function1?' + 'bn' + numBinario);
                        //https://fbinario1.azurewebsites.net/api/Function1
                        const response = await fetch('https://fbinario1.azurewebsites.net/api/Function1?' + 'bn' + numBinario);
                        //alert(response.ok);
                        const data = await response.text();
                        //alert(data);
                        document.getElementById("resultado").innerHTML = data;
                    } else {
                        alert(" no hay conexion a internet");
                    }
                }
            }
        }
    }
}



async function resNumero_Binario() {

    let numBinario = document.getElementById("numeroBinario").value;

    if (document.getElementById("numeroBinario").value == "") {
        document.getElementById("resultado").innerHTML = "Debes ingresar un número, no debes dejar vacia la información";
    } else {
        if (!isNaN(numBinario) != true) {
            document.getElementById("resultado").innerHTML = "Debes ingresar un número";
        } else {
            if (numBinario.includes(".")) {
                document.getElementById("resultado").innerHTML = "Debes ingresar un número ENTERO, no decimal";
            } else {
                if (window.navigator.onLine) {
                    //alert("si hay internet");
                    //const response = await fetch('http://localhost:7079/api/Function1?' + 'nb' + numBinario);
                    const response = await fetch('https://fbinario1.azurewebsites.net/api/Function1?' + 'nb' + numBinario);
                    //https://fbinario1.azurewebsites.net/api/Function1
                    //alert(response.ok);
                    const data = await response.text();
                    //alert(data);
                    document.getElementById("resultado").innerHTML = data;
                } else {
                    alert(" no hay conexion a internet");
                }
            }
        }
    }
}






