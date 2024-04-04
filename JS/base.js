function LoadNAVBAR()  {
    // 현재 문서의 모든 요소 가져오기
    const allElements = document.getElementsByTagName('*');

    // 모든 요소에 대해 반복
    for(var i = 0; i < allElements.length; i++) {
        var el = allElements[i]; // 현재 요소

        // 현재 요소의 "nav-include-path" 속성 가져오기
        var navpath = el.getAttribute("nav-include-path");

        // 속성이 있으면 실행
        if (navpath) {
            var xhttp = new XMLHttpRequest(); // 멤버 함수 동적 할당
            xhttp.onreadystatechange = function () { // 서버 응답 변경될 때마다 실행 (콜백 함수)
                if (this.readyState == 4 && this.status == 200) {
                    el.innerHTML = this.responseText;
                    el.removeAttribute("nav-include-path");
                    LoadNAVBAR(); // Event Handler -> 재귀
                }
            }

            // 서버로 http 요청
            xhttp.open("GET", navpath, true);
            xhttp.send();
            return;
        }
    }
 }

function go_home() {
    window.location.href = 'homework.html'; // 현재 웹페이지의 url 변경 (파일 자체로 url이 될 수 있다.)
}