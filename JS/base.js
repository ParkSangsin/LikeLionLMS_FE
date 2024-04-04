function LoadNAVBAR()  {
    const allElements = document.getElementsByTagName('*');

    for(var i = 0; i < allElements.length; i++) {
        var el = allElements[i];

        var navpath = el.getAttribute("nav-include-path");

        if (navpath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.innerHTML = this.responseText;
                    el.removeAttribute("nav-include-path");
                    LoadNAVBAR();
                }
            }
            xhttp.open("GET", navpath, true);
            xhttp.send();
            return;
        }
    }
 }

function go_home() {
    window.location.href = 'homework.html'; // 현재 웹페이지의 url 변경 (파일 자체로 url이 될 수 있다.)
}