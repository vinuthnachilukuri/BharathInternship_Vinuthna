convert = () => {
    let inp = document.getElementById("deg").value;
    console.log("Input:", inp);

    if (inp == null || inp == '') {
        alert("Enter temperature");
        return;
    }

    if (isNaN(inp)) {
        alert("Enter an Integer Value");
        return;
    }

    const type = document.getElementById("temp_scale").value;
    console.log("Temperature Scale:", type);

    const result1 = document.getElementById("output_res1");
    const result2 = document.getElementById("output_res2");

    if (type == 'Fah') {
        const res1 = (5 * (inp - 32) / 9).toFixed(2);
        result1.value = res1 + ' °C';
        const res2 = (Number(res1) + 273).toFixed(2);
        result2.value = res2 + ' K';
    } else if (type == 'Cel') {
        const res1 = (1.8 * inp + 32).toFixed(2);
        result1.value = res1 + ' °F';
        const res2 = (Number(inp) + 273).toFixed(2);
        result2.value = res2 + ' K';
    } else if (type == 'Kel') {
        const res1 = (Number(inp) - 273).toFixed(2);
        result1.value = res1 + ' °C';
        const res2 = ((Number(res1) * 1.8) + 32).toFixed(2);
        result2.value = res2 + ' °F';
    } else if (type == 'Sel') {
        alert("Select a Temperature Scale");
    }
}
