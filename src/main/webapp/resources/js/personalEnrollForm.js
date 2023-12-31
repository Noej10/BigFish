// 회원 가입 시 중복체크 (사용 가능 시 "Y" 반환 사용 불가능 시 "N" 반환)
function checkEmailId(){
    const emailId = document.querySelector("#emailId");
    const checkEmailIdSpace = document.querySelector("#checkEmailIdSpace");
    const enrollBtn = document.querySelector("#enroll-btn");

    // $.ajax({
    //     url : "checkEmailId",
    //     data : {emailId : emailId.value},
    //     success : function(result){
    //         if(result==="Y"){
    //             // 사용 가능한 경우
    //             checkEmailIdSpace.innerHTML = "사용 가능한 아이디입니다.";
    //             checkEmailIdSpace.style.color = "#2f9947";
    //         }else{
    //             // 사용 불가능한 경우
    //             checkEmailIdSpace.innerHTML = "사용 불가능한 아이디입니다.";
    //             checkEmailIdSpace.style.color = "#dd2f35";
    //             enrollBtn.setAttribute("disabled",true);
    //         }

    //     },
    //     error : function(){
    //         console.log("ajax 중복 체크 통신 실패");
    //     }
    // })
    
    const sendData = {emailId : emailId.value};
    memberApi.checkId(sendData, function(result){
        if(result==="Y"){
            // 사용 가능한 경우
            checkEmailIdSpace.innerHTML = "사용 가능한 아이디입니다.";
            checkEmailIdSpace.style.color = "#2f9947";
            enrollBtn.removeAttribute("disabled");
        }else{
            // 사용 불가능한 경우
            checkEmailIdSpace.innerHTML = "사용 불가능한 아이디입니다.";
            checkEmailIdSpace.style.color = "#dd2f35";
            enrollBtn.setAttribute("disabled",true);
        }
    })

}

// 회원 가입 시 닉네임 중복체크 (사용 가능 시 "Y" 반환 사용 불가능 시 "N" 반환)
function checkNick(){
    const memNick = document.querySelector("#memNick");
    const checkNickSpace = document.querySelector("#checkNickSpace");
    const enrollBtn = document.querySelector("#enroll-btn");
    const sendData = {memNick : memNick.value};
    
    memberApi.checkNick(sendData, function(result){
        if(result==="Y"){
            // 사용 가능한 경우
            checkNickSpace.innerHTML = "사용 가능한 닉네임입니다.";
            checkNickSpace.style.color = "#2f9947";
        }else{
            // 사용 불가능한 경우
            checkNickSpace.innerHTML = "사용 불가능한 닉네임입니다.";
            checkNickSpace.style.color = "#dd2f35";
            enrollBtn.setAttribute("disabled",true);
        }
    })

}



// 주소 검색 API

function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            // if(data.userSelectedType === 'R'){
            //     // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            //     // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            //     if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
            //         extraAddr += data.bname;
            //     }
            //     // 건물명이 있고, 공동주택일 경우 추가한다.
            //     if(data.buildingName !== '' && data.apartment === 'Y'){
            //         extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            //     }
            //     // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            //     if(extraAddr !== ''){
            //         extraAddr = ' (' + extraAddr + ')';
            //     }
            //     // 조합된 참고항목을 해당 필드에 넣는다.
            //     document.getElementById("sample6_extraAddress").value = extraAddr;
            
            // } else {
            //     document.getElementById("sample6_extraAddress").value = '';
            // }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('postcode').value = data.zonecode;
            document.getElementById("address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("addressDetail").focus();
        }
    }).open();
}