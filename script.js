function calculateAge() {
  let dob = new Date(document.getElementById("dob").value);
  if (!dob) {
    document.getElementById("age").innerHTML =
      "Please enter your date of birth";
  } else {
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    document.getElementById("age").innerHTML = "You are " + age + " years old";
  }
}
