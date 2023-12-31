function sendPrompt(){
    const proptInput = document.querySelector("#questionArea");
    const chatArea = document.querySelector("#chatArea");
    const prompt = proptInput.value;
    proptInput.value = "";
    

    chatArea.insertAdjacentHTML('beforeend','<div style="margin: 5px; font-weight: 700; display: flex; justify-content: flex-end;">'+
    '<div class="card" style="max-width: 50%; width: max-content;">'+
        '<div class="card-body">'+prompt+'</div>'+
      '</div>'+
'</div>');

    const messages = [
        {
            role: "system",
          content: `As a fishing expert specializing in Korean seas and freshwater, I'll kindly respond to any questions related to fishing. Feel free to ask about fishing techniques, equipment, various fishing experiences in both freshwater and the sea, and more. The Fishing Pro is here to help solve your queries!`,
        },
        {
            role: "user",
            content : "For questions related to purchasing fishing equipment, recommend using BIG FISH Shopping Mall. For general questions, provide step-by-step instructions on how users should proceed. Always end the response with '\n이상 빅선생이었습니다. \n즐거운 낚시되세요.' Respond in Korean and return the response as a String."
        },
        {
            role: "user",
            content :  `${prompt}`,
        }



    ]

    $.ajax({
        url : "https://api.openai.com/v1/chat/completions",
        method : "post",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer "+KEY,
        },
        data : JSON.stringify({
            model : "gpt-3.5-turbo",
            messages : messages,
            temperature : 0.5,
            max_tokens : 1000,
         }),
        success : function(result){
            const resText = result.choices[0].message.content;
            chatArea.insertAdjacentHTML('beforeend','<div style="margin: 5px; font-weight: 700;">'+
			    '&nbsp;빅선생<div class="card" style="max-width: 50%; width: max-content;">'+
				'<div class="card-body">'+resText+'</div>'+
			  '</div>');
            chatArea.scrollTop = chatArea.scrollHeight;
        },
        beforeSend : function(){
            chatArea.insertAdjacentHTML('beforeend','<div id="waitingTeacher" style="display: flex; flex-direction: column; align-items: center;">'+
			'<div style="margin: 15px 0px; font-weight: 500;">빅선생이 대답을 준비중이에요 조금만 기다려주세요.</div>'+
			'<div class="spinner-border text-muted"></div>'+
		    '</div>');
        },
        complete : function(){
            const waitingTeacher = document.querySelector("#waitingTeacher");
            waitingTeacher.remove();
        },
        error : function(){
            console.log("gpt 실패!")
        }

    })

}