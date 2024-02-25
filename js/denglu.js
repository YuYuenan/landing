
function verify() {
    var obj = document.getElementById("password");
    var psw = obj.value;
    var len = psw.length;
    var charNum = 0;
    if (len >= 8) {
        for (var i = 0; i < psw.length; i++) {
            var ascNum = psw.substr(i, 1).charCodeAt();

            if ((ascNum >= 65 && ascNum <= 90) || (ascNum >= 97 && ascNum <= 122)) {
                charNum += 1
            }
        }
        if (charNum == 0) {
            alert("The first digit of the password must be a letter")
        } else {
            alert("The password length is:" + len + "\nThe password is：" + psw + "\nSubmitted successfully")
        }

    } else {
        alert("Password length cannot be less than 8")
    }
}