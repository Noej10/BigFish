<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>  
<%
	String contextPath = request.getContextPath();
	String alertMsg = (String)session.getAttribute("alertMsg");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>BIG FISH</title>
<style>
	.header-box{
		color: rgb(59, 175, 252);
		width: 70%;
		height: 40px;
		margin-left: 15%;
		border-bottom: 2px solid gray;
		
	}
	
	.search-result{
		width: 70%;
		height: 50px;
		margin-left: 15%;
		border-bottom: 2px solid gray;
		position: relative;
	}

	.seaReservation-board{
		display: inline-table;
		width: 100%;
		height: 100px;
	}

	.fishReservation-board{
		display: inline-table;
		width: 100%;
		height: 100px;
	}

	.shop-board{
		background-color: rgb(224, 224, 224);
		width: 100%;
		height: 100px;
	}

	.study-board{
		background-color: rgb(224, 224, 224);
		width: 100%;
		height: 100px;
	}

	.fishing-board{
		background-color: rgb(224, 224, 224);
		width: 100%;
		height: 100px;
	}

	.free-board{
		background-color: rgb(224, 224, 224);
		width: 100%;
		height: 100px;
	}

	.boardList{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 70%;
		align-items: center;
		margin: 0px auto;
	}

	.all-see{
		display: flex;
		color: rgb(41, 90, 221);
		justify-content: flex-end;
	}
	.list-box-area{
    padding-right: 20px;
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    position: relative;
    display: block;
    margin-top: 20px;
    background: #fff;
    border: 1px solid #d5d5d5;
    border-radius: 0.3rem;
    }
    .list-img-box{
    display: flex;
}
.img-box{
    width: 0;
    height: 165px;
    width: 275px;
    padding-left: 317px;
    overflow: hidden;
    position: relative;
    
}
.img-box img{
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: auto;
    transform: translate(-57%, 0);
}
.list-txt-box{
    float: left;
    width: calc(100% - 275px);
    padding-left: 15px;
    margin: 0;
    padding: 0;
}
.list-name{
    font-size: 22px;
    font-weight: bold;
    color: #000000;
    margin-top: 10px;
    margin-bottom: 7px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 250px;
}
</style>
</head>
<body>
	<jsp:include page="../common/header.jsp"/>
	<br><br><br><br><br>
	<div class="container">
		<form action="search.bo">
		<div class="header-box">
			<h5>통합 검색 결과</h5>
		</div>
		<br>
		<div class="search-result">
			<td><c:out value="${keyword}"/> 통합검색 결과</td>
		</div>

		<br>
		
		<div class="boardList">
			<div id="seaReservation-board" class="seaReservation-board">
				<div class="board-title">
					<h5>바다 낚시터</h5>
				</div>
				<table class="seaReservation_table">
					<c:forEach var="ssl" items="${seaStoreList}" varStatus="loopStatus">
						<a class="list-box-area" href="resDetailPage?storeNumber=${ssl.storeNo}">
			                <div class="list-img-box">
			                    <div class="img-box">
			                        <img src="<%=contextPath%>/resources/uploadFiles/${ssl.thumbnailImg}">
			                    </div>
			                    <div class="list-txt-box">
			                        <p class="list-name">
			                            	${ssl.storeName}
			                        </p>
			                        <p class="fish-info">
			                            <span class="reply">
			                                <img style="height: 12px;" src="<%=contextPath%>/resources/images/reply.png" alt="">
			                                ${ssl.replyCount}
			                            </span>
			                            <span class="like">
			                                <img style="height: 12px;" src="<%=contextPath%>/resources/images/like.png" alt="">
			                                ${ssl.likeCount}
			                            </span>
			                        </p>
			                        <p class="address">
			                            <span>${ssl.storeAddress}</span>
			                        </p>
			                        <div class="price-area">
			                            <p>
			                                ${ssl.minPrice}
			                                <span>원</span>
			                            </p>
			                        </div>
			                    </div>
			                </div>
			            </a>
					</c:forEach>
				</table>
				<br>
				<div class="all-see">
					<a href="list.st">더보기</a>
				</div>
			</div>
	
			<br><br>

			<div id="fishReservation-board" class="fishReservation-board">
				<div class="board-title">
					<h5>민물 낚시터</h5>
				</div>
				<table class="fishReservation_table">
					<c:forEach var="sl" items="${fishStoreList}" varStatus="loopStatus">
						<a class="list-box-area" href="resDetailPage?storeNumber=${sl.storeNo}">
			                <div class="list-img-box">
			                    <div class="img-box">
			                        <img src="<%=contextPath%>/resources/uploadFiles/${sl.thumbnailImg}">
			                    </div>
			                    <div class="list-txt-box">
			                        <p class="list-name">
			                            	${sl.storeName}
			                        </p>
			                        <p class="fish-info">
			                            <span class="reply">
			                                <img style="height: 12px;" src="<%=contextPath%>/resources/images/reply.png" alt="">
			                                ${sl.replyCount}
			                            </span>
			                            <span class="like">
			                                <img style="height: 12px;" src="<%=contextPath%>/resources/images/like.png" alt="">
			                                ${sl.likeCount}
			                            </span>
			                        </p>
			                        <p class="address">
			                            <span>${sl.storeAddress}</span>
			                        </p>
			                        <div class="price-area">
			                            <p>
			                                ${sl.minPrice}
			                                <span>원</span>
			                            </p>
			                        </div>
			                    </div>
			                </div>
			            </a>
					</c:forEach>
				</table>
				<br>
				<div class="all-see">
					<a href="list.st">더보기</a>
				</div>
			</div>
	
			<br><br>

			<div id="shop-board" class="shop-board">
				<div class="board-title">
					<h5>낚시 용품</h5>
				</div>
				<table class="shop_table">
					<c:forEach var="s" items="${shopList}">
					<tr>		
						<td>
							<a onclick="location.href='detail.sh?sno=${s.productNo}'" style="cursor: pointer;">${s.productName}</a>
						</td>
					</tr>	
					</c:forEach>
				</table>
				<br>
				<div class="all-see">
					<a href="list.sh">더보기</a>
				</div>
			</div>
	
			<br><br>

			<div id="study-board" class="study-board">
				<div class="board-title">
					<h5>학습동영상</h5>
				</div>
				<table class="study_table">
					<c:forEach var="s" items="${list}">
					<tr>		
						<td>
							<a onclick="location.href='detail.st?sno=${s.studyNo}'" style="cursor: pointer;">${s.studyTitle}</a>
						</td>
					</tr>	
					</c:forEach>
				</table>
				<br>
				<div class="all-see">
					<a href="list.st">더보기</a>
				</div>
			</div>
	
			<br><br>

			<div id="fishing-board" class="fishing-board">
				<div class="board-title">
					<h5>조황게시판</h5>
				</div>
				<table class="fishing-table">
					<c:forEach var="b" items="${list1}">
					<tr>		
						<td>
							<a onclick="location.href='detail.fibo?bno=${b.fishingNo}'" style="cursor: pointer;">${b.fishingTitle}</a>
						</td>
					</tr>	
					</c:forEach>
				</table>
				<br>
				<div class="all-see">
					<a href="list.fibo">더보기</a>
				</div>
			</div>
			
			<br><br>

			<div id="free-board" class="free-board">
				<div class="board-title">
					<h5>자유게시판</h5>
				</div>
				<table class="free_table">
					<c:forEach var="b" items="${list2}">
					<tr>		
						<td>
							<a onclick="location.href='detail.fbo?bno=${b.freeNo}'" style="cursor: pointer;">${b.freeTitle}</a>
						</td>
					</tr>	
					</c:forEach>
				</table>
				<br>
				<div class="all-see">
					<a href="list.fbo">더보기</a>
				</div>
			</div>
		</div>
	</form>
	</div>

	<script>
		window.onload = function() {
		const studyboard = document.querySelector("#study-board");
		const fishingboard = document.querySelector("#fishing-board");
		const freeboard = document.querySelector("#free-board");
		const seaReservationboard = document.querySelector("#seaReservation-board");
		const fishReservationboard = document.querySelector("#fishReservation-board");
		const shopboard = document.querySelector("#shop-board")
			console.log(${empty list})
			console.log(${empty list1})
			console.log(${empty list2})
			console.log(${empty seaReservationboard})
			console.log(${empty fishReservationboard})
		if (${empty list} || ${list.size()} === 0) {
			studyboard.style.display = "none";
		}
		
		if (${empty list1} || ${list1.size()} === 0) {
			fishingboard.style.display = "none";
		}
		
		if (${empty list2} || ${list2.size()} === 0) {
			freeboard.style.display = "none";
		}
		
		if (${empty seaStoreList} || ${seaStoreList.size()} === 0) {
			seaReservationboard.style.display = "none";
		}

		if (${empty fishStoreList} || ${fishStoreList.size()} === 0) {
			fishReservationboard.style.display = "none";
		}

		if (${empty shopList} || ${shopList.size()} === 0) {
			shopboard.style.display = "none";
		}
	}
	</script>
	<jsp:include page="../common/footer.jsp"/>
</body>
</html>