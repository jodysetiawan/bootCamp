function valName(Nama)
{
    var regexName = /^[A-Z]{3}$/;

    if (regexName.test(Nama)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(valName("JOD"))

function valUmur(Umur)
{
    var regexUmur = /^[0-9]{2}$/;

    if (regexUmur.test(Umur)) {
        return true;
    }
    else {
        return false;
    }
}
console.log (valUmur(25))

function valUsername(username) {

    var regexUser =/^([a-z]{4}(\.|\_)[0-9]{3})$/;

    if (regexUser.test(username)){
        return true
    }
    else {
        return false
    }
}
console.log (valUsername("jody-321"))