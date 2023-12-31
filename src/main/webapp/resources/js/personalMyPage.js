function showProfile(){
    const profileWork = document.querySelector("#profileWork");

    const reservationWorkArea = document.querySelector("#reservationWorkArea");
    const goodspayList = document.querySelector("#goodspayList"); 

    const buttonProfile = document.querySelector("#buttonProfile");
    const buttonReservation = document.querySelector("#buttonReservation");
    const buttonGoodsPay = document.querySelector("#buttonGoodspayment");

    profileWork.style.display = "flex";
    reservationWorkArea.style.display = "none";
    goodspayList.style.display = "none";
    buttonProfile.style.background = "rgb(28, 134, 204)";
    buttonReservation.style.background = "rgb(59, 175, 252)";
    buttonGoodsPay.style.background = "rgb(59, 175, 252)";
}

function showReservation(){

    const profileWork = document.querySelector("#profileWork");
    const reservationWorkArea = document.querySelector("#reservationWorkArea");
    const goodspayList = document.querySelector("#goodspayList"); 

    const buttonProfile = document.querySelector("#buttonProfile");
    const buttonReservation = document.querySelector("#buttonReservation");
    const buttonGoodsPay = document.querySelector("#buttonGoodspayment");


    profileWork.style.display = "none";
    reservationWorkArea.style.display = "flex";
    goodspayList.style.display = "none";
    buttonProfile.style.background = "rgb(59, 175, 252)";
    buttonReservation.style.background = "rgb(28, 134, 204)";
  buttonGoodsPay.style.background = "rgb(59, 175, 252)";
}

function showGoodsPayment() {
 const profileWork = document.querySelector("#profileWork");
    const reservationWorkArea = document.querySelector("#reservationWorkArea");
     const goodspayList = document.querySelector("#goodspayList"); 
    const buttonProfile = document.querySelector("#buttonProfile");
    const buttonReservation = document.querySelector("#buttonReservation");
     const buttonGoodsPay = document.querySelector("#buttonGoodspayment");

    profileWork.style.display = "none";
    reservationWorkArea.style.display = "none";
    goodspayList.style.display = "flex";
    buttonProfile.style.background = "rgb(59, 175, 252)";
    buttonReservation.style.background = "rgb(59, 175, 252)";
     buttonGoodsPay.style.background = "rgb(28, 134, 204)";
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

function profileImgChange(){
    const profileShowArea = document.querySelector("#profileShowArea");
    const memNo = document.querySelector("#memNo");
    const memChangeName = document.querySelector("#memChangeName");
    const profileImg = document.querySelector("#profileImg");
    

    let formData = new FormData();
        formData.append("profileImg",profileImg.files[0]);
        formData.append("memNo",memNo.value);
        formData.append("memChangeName",memChangeName.value);
                    
    memberApi.profileImgAreaChange(formData, function(result){
        profileShowArea.src = result;
    })

    

}

function chatPopUp(){
    window.open("personalChat","popup Chat","width = 550, height = 600, top = 100, left = 200, location = no, status=no toolbars=no");
}


function checkUpdatePwd(){
    let reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

    const updatePwd = document.querySelector("#updatePwd");
    const updatePwdArea = document.querySelector("#updatePwdArea");
    const updatePwdBtn = document.querySelector("#updatePwdBtn");

    if(reg.test(updatePwd.value)){
        updatePwdArea.innerHTML = " &nbsp;O";
        updatePwdArea.style.color = "#2f9947";
        updatePwdBtn.removeAttribute("disabled");
    }else{
        updatePwdArea.innerHTML = " &nbsp;X";
        updatePwdArea.style.color = "#dd2f35";
        updatePwdBtn.setAttribute("disabled",true);
    }

}

function sameUpdatePwd(){
    const updatePwd = document.querySelector("#updatePwd");
    const samePwd = document.querySelector("#samePwd");
    const samePwdArea = document.querySelector("#samePwdArea");
    const updatePwdBtn = document.querySelector("#updatePwdBtn");

    if(updatePwd.value===samePwd.value){
        samePwdArea.innerHTML = " &nbsp;O";
        samePwdArea.style.color = "#2f9947";
        updatePwdBtn.removeAttribute("disabled");
    }else{
        samePwdArea.innerHTML = " &nbsp;X";
        samePwdArea.style.color = "#dd2f35";
        updatePwdBtn.setAttribute("disabled",true);
    }
}

let rPage = 1;
function ajaxMoreResList(memNo){
	rPage++;
	const sendData = { memNo: memNo,
						rPage: rPage};
	resApi.moreResList(sendData,function(data){
		if(document.getElementById("moreBtn") != null){
        			document.getElementById("moreBtn").style.display = "none";
        }
		moreResList(data.reserList)
		let moreButton = $(`<button id="moreBtnA" onclick="ajaxMoreResList(${memNo})">더 보기 `
						+`<span>`+data.pi.currentPage+` </span>`
						+`<span style="color: rgba(96,96,96,.5)">/ `+data.pi.maxPage+`</span>`
						+`</button>`);
       	$('.moreBtn-area').html(moreButton);
        if(data.pi.currentPage === data.pi.maxPage){
            document.getElementById("moreBtnA").style.display = "none";
        }
	})
}

function convertToDateObject(dateString) {
    // "12월 27, 2023" 형식의 날짜 문자열을 JavaScript Date 객체로 변환
    let parts = dateString.split(" ");
    let month = parts[0].replace("월", "");
    let day = parts[1].replace(",", "");
    let year = parts[2];

    // 날짜 문자열을 JavaScript Date 객체로 변환
    let dateObject = new Date(month + " " + day + ", " + year);

    return dateObject;
}
function dateFix(dateString) {
    // Date 객체를 ISO 형식("YYYY-MM-DD")으로 변환
    let dateObject = convertToDateObject(dateString);
    let isoString = dateObject.toISOString().split("T")[0];

    return isoString;
}

function moreResList(data){
	let showListArea = $("#reservationWork");
	let Content = '';
	
	$.each(data, function (index, res) {
                Content += `<div style="margin-bottom: 30px;" class="card">`
						+ `<div class="card-header" style="padding-bottom: 3px; cursor: pointer;" onclick="location.href='myReservationDetail?revNo=`
						+ res.revNo+`'"><div style="display: flex; flex-direction: row; justify-content: space-between;">`
						+ `<span style="font-weight: bold;">`+res.rstoreName+`</span><span style="font-size: 13px;">No. `+res.revNo+`</span></div>`
						+ `<div style="display: flex; flex-direction: row; justify-content: space-between;">`
						+ `<span style="font-size: 13px;">`+dateFix(res.revDate)+`</span>`;
						
				if(res.revStatus == 'WAITREV'){
					Content += `<span>예약 대기</span>`;
				}else if(res.revStatus == 'OKREV'){
					Content += `<span>예약 완료</span>`;
				}else if(res.revStatus == 'CANCELREV'){
					Content += `<span>예약 취소</span>`;
				}else if(res.revStatus == 'DONEREV'){
					Content += `<span>이용 완료</span>`;
				}
				
				Content += `</div></div><div class="card-body"><div style="display: flex; flex-direction: row; justify-content: space-between;">`
						+ `<span>`+res.rticketName+`</span><span>`+res.rticketPrice*res.revPeople+`원</span></div></div>`
						+ `<div class="card-footer"><div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">`
						+ `<span style="font-size: 13px;">예약한 시간에 도착하지 못할 경우 예약이 취소될 수 있습니다.</span><span>`
						+ `<button onclick="chatPopUp()" class="btn btn-sm btn-primary">1:1 문의</button>`
						+ `<button class="btn btn-sm btn-primary" onclick="location.href='resDetailPage?storeNumber=`+res.rstoreNo+`'">예약 바로가기</button>`
						+ `</span></div></div></div>`;
            });
	
	showListArea.append(Content);
}
    
