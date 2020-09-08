function calculateBMI() {
    let heightInFeet = parseInt(document.getElementById("heightInFeets").value);
    let heightInInches = parseInt(document.getElementById("heightInInches").value);
    let weightInKg = parseFloat(document.getElementById("weight").value);

    let totalHeightInInches = (heightInFeet * 12) + heightInInches; // This convert height to inches. 1 feet = 12 inches
    let heightInMeters = ((totalHeightInInches / 39.37) * 1000) / 1000; // divding height with to convert height into meters. Multiplying & dividing with 100 rounds off the result to 2 decimal positions
    heightInMetersSquare = (((Math.pow(heightInMeters, 2)) * 1000) / 1000);
    let BMI = (((weightInKg / heightInMetersSquare) * 100) / 100);
    console.log(BMI);

    if (BMI < 18.5) {
        let result = "Your are Under Weight (BMI is : " + BMI + ")";
        let resultBox = document.getElementById("resultBox").value = result;
    } else if (BMI > 18.5 && BMI <= 24.9) {
        document.getElementById("resultBox").style.boxShadow = "30px 20px 40px rgb(115, 22, 236)"; // Will change color of text Result Box
        document.getElementById("resultBox").style.color = "#0000ff";
        let result = "Your have perefect weight (BMI is : " + BMI + ")";
        let resultBox = document.getElementById("resultBox").value = result;
    } else if (BMI > 25.0 && BMI <= 29.9) {
        let result = "Your are over weight (BMI is : " + BMI + ")";
        let resultBox = document.getElementById("resultBox").value = result;
    } else if (BMI > 30.0) {
        let result = "Your are obese (BMI is : " + BMI + ")";
        let resultBox = document.getElementById("resultBox").value = result;
    }
}