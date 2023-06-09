/*

	Developer by.LH [토토즈] 토토규민 And 빵규
	XSelectbox 2.4.4
  Date : 2011.08.09
  Comment : JQuery로 변경 및 소스 최소화 예정

*/
/*기본 변수선언*/
var XselectArrowSrc;	//오른쪽 화살표이미지
var XselectArrowSrcWidth;	//오른쪽 화살표이미지 width
var XselectArrowSrcheight;	//오른쪽 화살표이미지 height

var XselectOptionLayerCss; // 셀렉트 옵션 레이어 css
var XselectOptionsCss; //셀렉트 옵션 Css
var XselectTopBoxCss; //셀렉트박스 선택 Css
var XselectTopBoxLeftCss;  //상단 셀렉트 레이어 css
var XselectTopBoxArrowCss; // 상단 셀렉트 텍스트 css

var XselectBoxOverColor; // 셀렉트 마우스오버시 배경색
var XselectBoxOutColor; // 셀렉트 마우스아웃시 배경색
var Xspace; // 셀렉트 영역 투명이미지
var XselectBorder; //셀렉트 Border
var XselectOptionsHeight; //셀렉트 옵션들 Height
var XselectOptionHeight; //셀렉트 옵션 Height
var XselectOptionBorderColor; //셀렉트 Option Border color
var XselectTabIndex = 1; //셀렉트 Tabindex
var XselectOptionLinkCss; //셀렉트 옵션 링크 Css

var XselectTextOverColor; // 셀렉트 마우스오버시 글자색
var XselectTextOutColor; // 셀렉트 마우스아웃시 글자색
var XselectId; //셀렉트 ID

/*아이디별 타입 설정*/
function XselectBoxType(thisType){
  //기본설정
  Xspace = "/library/images/XselectBox/space.gif"; //셀렉트 영역 투명이미지 경로
  XselectOptionsHeight = 150; //셀렉트 옵션 Height
  XselectOptionHeight = 19; //셀렉트 옵션 박스 Height
  XselectBorder = 5; //셀렉트 Border

  switch (thisType) {
      case 'Type1': 
		XselectBorder = 1;
        XselectOptionBorderColor = "#EBEBEB";
        XselectOptionHeight = 20; //셀렉트 옵션 박스 Height
        XselectArrowSrc = "/library/images/XselectBox/btn_selop1.gif";	//오른쪽 화살표이미지
        XselectArrowSrcWidth = 19;	//오른쪽 화살표이미지 width
        XselectArrowSrcheight = 18;	//오른쪽 화살표이미지 height
        XselectTopBoxArrowCss = "background-color:#F7F7F7;"; //상단 셀렉트 화살표 css
        XselectBoxOverColor = "#999999"; // 셀렉트 마우스오버시 배경색
        XselectBoxOutColor = "#F7F7F7"; // 셀렉트 마우스아웃시 배경색

        XselectOptionLinkCss = "text-decoration: none;color:#666;font-size:8pt;font-weight:normal;"; //셀렉트 옵션 링크 Css
        XselectOptionLayerCss = "border:"+XselectBorder+"px solid "+XselectOptionBorderColor+";"; // 셀렉트 옵션 레이어 css (옵션 보더색조정)
        XselectOptionsCss = "background-color:#F7F7F7;padding:4px 0 0 5px;"; // 셀렉트 옵션 css
        XselectTopBoxCss = "border:"+XselectBorder+"px solid #DCDCDC;background-color:#F7F7F7;"; // 상단 셀렉트 레이어 css (bg는 공백확인용)
        XselectTopBoxLeftCss = "padding:2px 0 0 5px;_height:15px;color:#767676;vertical-align:middle;font-size:8pt;font-weight:normal;"; // 상단 셀렉트 텍스트 css

		XselectTextOverColor = "#ffffff"; // 셀렉트 마우스오버시 글자색
		XselectTextOutColor = "#666"; // 셀렉트 마우스아웃시 글자색

      break;
	  case 'Type2': 
		XselectBorder = 1;
        XselectOptionBorderColor = "#EBEBEB"; // 셀렉트 테두리선 색
        XselectOptionHeight = 20; //셀렉트 옵션 박스 Height
        XselectArrowSrc = "/images/common/select_allow.gif";	//오른쪽 화살표이미지
        XselectArrowSrcWidth = 19;	//오른쪽 화살표이미지 width
        XselectArrowSrcheight = 18;	//오른쪽 화살표이미지 height
        XselectTopBoxArrowCss = "background-color:#fff;"; //상단 셀렉트 화살표 css
        XselectBoxOverColor = "#999999"; // 셀렉트 마우스오버시 배경색
        XselectBoxOutColor = "#ffffff"; // 셀렉트 마우스아웃시 배경색

        XselectOptionLinkCss = "text-decoration: none;color:#666;font-size:8pt;font-weight:normal;"; //셀렉트 옵션 링크 Css
        XselectOptionLayerCss = "border:"+XselectBorder+"px solid "+XselectOptionBorderColor+";"; // 셀렉트 옵션 레이어 css (옵션 보더색조정)
        XselectOptionsCss = "background-color:#ffffff;padding:4px 0 0 5px;"; // 셀렉트 옵션 css
        XselectTopBoxCss = "border:"+XselectBorder+"px solid #DCDCDC;background-color:#ffffff;"; // 상단 셀렉트 레이어 css (bg는 공백확인용)
        XselectTopBoxLeftCss = "padding:2px 0 0 5px;_height:15px;color:#767676;vertical-align:middle;font-size:8pt;font-weight:normal;"; // 상단 셀렉트 텍스트 css

		XselectTextOverColor = "#ffffff"; // 셀렉트 마우스오버시 글자색
		XselectTextOutColor = "#666"; // 셀렉트 마우스아웃시 글자색

	  break;
	  case 'Type3': 
		XselectBorder = 1;
        XselectOptionBorderColor = "#EBEBEB";
        XselectOptionHeight = 17; //셀렉트 옵션 박스 Height
        XselectArrowSrc = "/library/images/XselectBox/btn_selop3.gif";	//오른쪽 화살표이미지
        XselectArrowSrcWidth = 19;	//오른쪽 화살표이미지 width
        XselectArrowSrcheight = 14;	//오른쪽 화살표이미지 height
        XselectTopBoxArrowCss = "background-color:#fff;"; //상단 셀렉트 화살표 css
        XselectBoxOverColor = "#999999"; // 셀렉트 마우스오버시 배경색
        XselectBoxOutColor = "#ffffff"; // 셀렉트 마우스아웃시 배경색

        XselectOptionLinkCss = "text-decoration: none;color:#666;font-size:8pt;font-weight:normal;"; //셀렉트 옵션 링크 Css
        XselectOptionLayerCss = "border:"+XselectBorder+"px solid "+XselectOptionBorderColor+";"; // 셀렉트 옵션 레이어 css (옵션 보더색조정)
        XselectOptionsCss = "background-color:#ffffff;padding:2px 0 0 5px;"; // 셀렉트 옵션 css
        XselectTopBoxCss = "border:"+XselectBorder+"px solid #DCDCDC;background-color:#ffffff;"; // 상단 셀렉트 레이어 css (bg는 공백확인용)
        XselectTopBoxLeftCss = "padding:1px 0 0 5px;_height:15px;color:#767676;vertical-align:middle;font-size:8pt;font-weight:normal;"; // 상단 셀렉트 텍스트 css

		XselectTextOverColor = "#ffffff"; // 셀렉트 마우스오버시 글자색
		XselectTextOutColor = "#666"; // 셀렉트 마우스아웃시 글자색

	  break;
	  case 'Type4': 
		XselectBorder = 1;
        XselectOptionBorderColor = "#C1902D";
        XselectOptionHeight = 17; //셀렉트 옵션 박스 Height
        XselectArrowSrc = "/library/images/XselectBox/btn_selop4.gif";	//오른쪽 화살표이미지
        XselectArrowSrcWidth = 19;	//오른쪽 화살표이미지 width
        XselectArrowSrcheight = 14;	//오른쪽 화살표이미지 height
        XselectTopBoxArrowCss = "background-color:#F5C667;"; //상단 셀렉트 화살표 css
        XselectBoxOverColor = "#999999"; // 셀렉트 마우스오버시 배경색
        XselectBoxOutColor = "#F5C667"; // 셀렉트 마우스아웃시 배경색

        XselectOptionLinkCss = "text-decoration: none;color:#663603;font-size:8pt;font-weight:normal;"; //셀렉트 옵션 링크 Css
        XselectOptionLayerCss = "border:"+XselectBorder+"px solid "+XselectOptionBorderColor+";"; // 셀렉트 옵션 레이어 css (옵션 보더색조정)
        XselectOptionsCss = "background-color:#F5C667;padding:2px 0 0 5px;"; // 셀렉트 옵션 css
        XselectTopBoxCss = "border:"+XselectBorder+"px solid #C1902D;background-color:#F5C667;"; // 상단 셀렉트 레이어 css (bg는 공백확인용)
        XselectTopBoxLeftCss = "padding:1px 0 0 5px;_height:15px;color:#663603;vertical-align:middle;font-size:8pt;font-weight:normal;"; // 상단 셀렉트 텍스트 css

		XselectTextOverColor = "#fff"; // 셀렉트 마우스오버시 글자색
		XselectTextOutColor = "#663603"; // 셀렉트 마우스아웃시 글자색

      break;
      default:
        XselectBorder = 1;
        XselectOptionBorderColor = "#DCDCDC";
        XselectOptionHeight = 17; //셀렉트 옵션 박스 Height
        XselectArrowSrc = "/library/images/XselectBox/btn_select.jpg";	//오른쪽 화살표이미지
        XselectArrowSrcWidth = 14;	//오른쪽 화살표이미지 width
        XselectArrowSrcheight = 17;	//오른쪽 화살표이미지 height
        XselectTopBoxArrowCss = "background-color:#ffffff;"; //상단 셀렉트 화살표 css
        XselectBoxOverColor = "#999999"; // 셀렉트 마우스오버시 배경색
        XselectBoxOutColor = "#ffffff"; // 셀렉트 마우스아웃시 배경색

        XselectOptionLinkCss = "text-decoration: none;color:#767676;font-size:8pt;font-weight:normal;"; //셀렉트 옵션 링크 Css
        XselectOptionLayerCss = "border:"+XselectBorder+"px solid "+XselectOptionBorderColor+";"; // 셀렉트 옵션 레이어 css (옵션 보더색조정)
        XselectOptionsCss = "background-color:#ffffff;padding:4px 0 0 15px;"; // 셀렉트 옵션 css
        XselectTopBoxCss = "border:"+XselectBorder+"px solid #DCDCDC;background-color:#ffffff;"; // 상단 셀렉트 레이어 css (bg는 공백확인용)
        XselectTopBoxLeftCss = "padding:4px 0 0 5px;_height:15px;color:#767676;vertical-align:middle;font-size:8pt;font-weight:normal;"; // 상단 셀렉트 텍스트 css

		XselectTextOverColor = "#ffffff"; // 셀렉트 마우스오버시 글자색
		XselectTextOutColor = "#767676"; // 셀렉트 마우스아웃시 글자색
      break;
  }
}

function selectThisValue(thisId,thisIndex,thisValue,thisString,thismode) {
	var objId = thisId;
	var nowIndex = thisIndex ;
	var valueString = thisString;
	var optionLayer = document.getElementById(objId+"selectBoxOptionLayer");
	var sourceObj = document.getElementById(objId);
	var nowSelectedValue = document.getElementById(objId+"SelectBoxOptionValue"+nowIndex).value;
 	if (optionLayer&&thismode=="off") optionLayer.style.visibility = "hidden"; //셀렉트 옵션 View 여부
	if (sourceObj) sourceObj.value = nowSelectedValue;
	if (sourceObj) sourceObj.text = thisString; //텍스트값 추가.10.11.23.김규민.
  if (sourceObj) sourceObj.options[thisIndex].selected == true;  //선택활성화추가
	obj = document.getElementById(thisId);
  if(thismode!="nochange")fireEvent(obj,'change');
	settingValue(objId,valueString);

  //오버아웃 처리
  $("."+objId + "selectBoxOptions").each(function(){$(this).css("background-color",document.getElementById(objId+"OutColor").value)}); //오버시 배경색 다른객체 초기화
  $("."+objId + "selectBoxOptions").each(function(){$(this).find("a").css("color",XselectTextOutColor)}); //오버시 글씨색 다른객체 초기화
  document.getElementById(objId+"selectBoxOptions"+thisIndex).style.background = XselectBoxOverColor;
  $("#"+objId+"selectBoxOptions" + thisIndex).find("a").css("color",XselectTextOverColor);
}

function settingValue(thisId,thisString) {
	var objId = thisId;
	var valueString = thisString;
	var selectedArea = document.getElementById(objId+"selectBoxSelectedValue");
	if (selectedArea) selectedArea.innerHTML = valueString;
}

function viewOptionLayer(thisId) {
	var objId = thisId;
	var optionLayer = document.getElementById(objId+"selectBoxOptionLayer");
  if (optionLayer) optionLayer.style.display = ""; // 처음에만 diplay로 작동
  if (optionLayer) optionLayer.style.visibility = "visible";
  //setTimeout('hideOptionLayerAgain("'+thisId+'")',3000);
  document.getElementById(objId+"selectBoxSelectedTopCover1").style.display = "";
  document.getElementById(objId+"selectBoxSelectedTopCover2").style.display = "none";
}

function hideOptionLayer(thisId) {
	var objId = thisId;
	var optionLayer = document.getElementById(objId+"selectBoxOptionLayer");
 	if (optionLayer) optionLayer.style.visibility = "hidden";
  document.getElementById(objId+"selectBoxSelectedTopCover1").style.display = "none";
  document.getElementById(objId+"selectBoxSelectedTopCover2").style.display = "";
  return false;
}


function viewOptionLayerClick(thisId) {
	var objId = thisId;
  var obj = document.getElementById(thisId);
  //document.getElementById(objId+"selectBoxOptions"+obj.options.selectedIndex).style.background = XselectBoxOverColor; 고민중
  if(obj.options.selectedIndex==0)document.getElementById(objId+"selectBoxOptions0").style.background = document.getElementById(objId+"OverColor").value;
	var optionLayer = document.getElementById(objId+"selectBoxOptionLayer");
  if (optionLayer) optionLayer.style.display = ""; // 처음에만 diplay로 작동
  if (optionLayer) optionLayer.style.visibility = "visible";
  document.getElementById(objId+"selectBoxSelectedTopCover1").style.display = "";
  document.getElementById(objId+"selectBoxSelectedTopCover2").style.display = "none";
}

//JQuery 사용.
function XselectBoxOver(obj,cor,num){
  
  //클릭했을때와 동일하게 동작실행
  var exec = ($(obj).find("a").attr("href").replace("javascript:","").replace("'off'","'nochange'"));
  eval(exec);
}
function XselectBoxOut(obj,cor,num){
//  obj.style.background = cor;
//	eval(document.getElementById("sel"+num)).style.color = XselectTextOutColor;
//obj.style.className= obj.id+"Out";
}

var XselectedIndex = 0;

function XselectBoxArrow(e,objId,emode){
    document.onkeydown=function(){return false;};
    var obj = document.getElementById(objId);
    var sidx = obj.options.selectedIndex < 0 ? 0 : obj.options.selectedIndex ;
    var selOptionsHeight = $("#" +objId + "selectBoxOptionLayerDIV").height();
//    $("#displayDebug1").text(sidx);


    if(e==38){
        if(parseInt(sidx)+1>1){
          var nowValue = obj.options[sidx-1].value;
          var nowText = obj.options[sidx-1].text;
          selectThisValue(objId,sidx-1,nowValue,nowText,emode);
          document.getElementById(objId+"selectBoxOptions"+(sidx-1)).style.background = document.getElementById(objId+"OverColor").value;
          document.getElementById(objId+"selectBoxOptions"+(sidx)).style.background = document.getElementById(objId+"OutColor").value;
          eval(document.getElementById("sel"+(sidx))).style.color = XselectTextOutColor; //색상 개별적으로 처리 필요할거 같음.
          eval(document.getElementById("sel"+(sidx-1))).style.color = XselectTextOverColor; //색상 개별적으로 처리 필요할거 같음.

          var aa = $("#"+ objId + "selectBoxOptionLayerDIV").scrollTop();
          var bb = ((sidx) * XselectOptionHeight);
          var cc = (sidx+1) * XselectOptionHeight - (selOptionsHeight-XselectOptionHeight);
          var dd = $("#"+ objId + "selectBoxOptionLayerDIV").scrollTop();

          $("#"+ objId + "selectBoxOptionLayerDIV").scrollTop(aa > bb  ? cc : dd);

        }
    }
    else if(e==40){
        if(parseInt(sidx)+1<obj.options.length){
          var nowValue = obj.options[sidx+1].value;
          var nowText = obj.options[sidx+1].text;
          selectThisValue(objId,sidx+1,nowValue,nowText,emode);
          document.getElementById(objId+"selectBoxOptions"+(parseInt(sidx)+1)).style.background = document.getElementById(objId+"OverColor").value;
          document.getElementById(objId+"selectBoxOptions"+(sidx)).style.background = document.getElementById(objId+"OutColor").value;
          eval(document.getElementById("sel"+(sidx))).style.color = XselectTextOutColor; //이거 개별적으로 처리 필요할거 같음.
          eval(document.getElementById("sel"+(parseInt(sidx)+1))).style.color = XselectTextOverColor; //색상 개별적으로 처리 필요할거 같음.

          var aa = $("#"+ objId + "selectBoxOptionLayerDIV").scrollTop() + (selOptionsHeight-XselectOptionHeight);
          var bb = ((sidx+(3)) * XselectOptionHeight);
          var cc = (sidx+1) * XselectOptionHeight;
          var dd = $("#"+ objId + "selectBoxOptionLayerDIV").scrollTop();


          $("#"+ objId + "selectBoxOptionLayerDIV").scrollTop(aa < bb  ? cc : dd);
        }
    }
    else if(e==13||27){
      selectThisValue(objId,sidx,obj.options[sidx].value,obj.options[sidx].text,"off");
    } 
}

function makeSelectBox(thisId, thisType) {
  XselectId = thisId; //전역변수 선언
  XselectBoxType(thisType); // Type 고르기
	var downArrowSrc = XselectArrowSrc;	//오른쪽 화살표이미지
	var downArrowSrcWidth = XselectArrowSrcWidth;	//오른쪽 화살표이미지 width
	var downArrowSrcheight = XselectArrowSrcheight;	//오른쪽 화살표이미지 height
	var objId = thisId;
	var obj = document.getElementById(objId);
	var selectBoxWidth = parseInt(obj.style.width);
	var selectBoxHeight = Number(obj.style.height)||XselectOptionHeight;

  var selHeight = ((obj.options.length * XselectOptionHeight) > XselectOptionsHeight ? XselectOptionsHeight : obj.options.length * XselectOptionHeight + 9); //셀렉트 옵션 Height
  if(document.getElementById("Xselect_"+objId)==null){
    newSelect = "<div id=\"Xselect_"+objId+"\" style='float:left;margin-right:"+(XselectBorder*2)+"px;'  ></div>"; // 최초에만 DIV 생성
    $("#"+thisId).parent().append(newSelect);

  }

	newSelect = "";
  newSelect += "<div id='" + objId + "selectBoxOptionLayer' style='position:absolute; z-index:100; display:none;width:"+(selectBoxWidth)+"px;"+XselectOptionLayerCss+"' onMouseOver=\"viewOptionLayer('"+ objId + "')\" onMouseOut=\"hideOptionLayer('"+ objId + "')\" >";
  newSelect += "  <div style='height:"+(selectBoxHeight+XselectBorder)+"px;' >"; //상단과 옵션 사이 Border 두께
  newSelect += "  </div>";
	newSelect += "	<div id='" + objId + "selectBoxOptionLayerDIV' style='width:" + (selectBoxWidth) + "px;overflow-y:auto; overflow-x:hidden;height:"+selHeight+"px;' >";
	for (var i=0 ; i < obj.options.length ; i++) {
		var nowValue = obj.options[i].value;
		var nowText = obj.options[i].text;
  newSelect += "    <div class='"+objId+"selectBoxOptions' id='"+objId+"selectBoxOptions"+i+"' style='height:"+(selectBoxHeight-1)+"px;cursor:pointer;"+XselectOptionsCss+"' onMouseOver=\"XselectBoxOver(this,'"+XselectBoxOverColor+"', '"+i+"');\" onMouseOut=\"XselectBoxOut(this,'"+XselectBoxOutColor+"', '"+i+"');\" onClick=\"selectThisValue('"+ objId + "'," + i + ",'" + nowValue + "','" + nowText + "','off');return false;\">";
  newSelect += "      <a href=\"javascript:selectThisValue('"+ objId + "'," + i + ",'" + nowValue + "','" + nowText + "','off')\" id='sel"+i+"' onfocus='this.blur()' style='"+XselectOptionLinkCss+"'>" + nowText + "</a>";
	newSelect += "				<input type='hidden' id='"+ objId + "SelectBoxOptionValue" + i + "' value='" + nowValue + "'>";
  newSelect += "    </div>";
	}
  newSelect += "  </div>";
  newSelect += "</div>";

  newSelect += "<div id='"+objId+"selectBoxSelected' style='width:"+selectBoxWidth+"px;height:"+selectBoxHeight+"px;position:absolute;z-index:0;"+XselectTopBoxCss+"'  >";
  newSelect += "  <div  id='" + objId + "selectBoxSelectedValue' style='float:left;width:" + (selectBoxWidth - downArrowSrcWidth - 5) + "px;height:" + (selectBoxHeight - XselectBorder) + "px;cursor:pointer;"+XselectTopBoxLeftCss+"' onClick=\"viewOptionLayer('"+ objId + "');\" >";  //수정
  newSelect += "  </div>";
  newSelect += "  <div id='"+objId+"selectBoxArrow' style='float:left;width:" + (downArrowSrcWidth) + "px;height:" + (selectBoxHeight) + "px;"+XselectTopBoxArrowCss+"' >";
  newSelect += "    <img src='" + downArrowSrc + "' width='" + downArrowSrcWidth + "' height='"+(downArrowSrcheight)+"px' border='0' style='vertical-align:middle;' onClick=\"viewOptionLayer('"+ objId + "');\" />";
  newSelect += "  </div>";
  newSelect += "</div>";
  newSelect += "<div id='"+objId + "selectBoxSelectedTop' onClick=\"viewOptionLayerClick('"+ objId + "');\" style='width:"+selectBoxWidth+"px;height:"+(selectBoxHeight+2)+"px;border:0px solid #DCDCDC;position:relative;z-index:1;cursor:pointer;'  onKeyDown='XselectBoxArrow(event.keyCode,\""+objId+"\",\"nochange\");' tabindex='"+XselectTabIndex+"' >";
  newSelect += "  <img src='"+Xspace+"' width='"+selectBoxWidth+"px' height='"+(selectBoxHeight+(XselectBorder*2))+"px' border='0' style='vertical-align:middle;cursor:pointer;postion:absolute;display:none;' onClick=\"viewOptionLayer('"+ objId + "');\" id='"+objId+"selectBoxSelectedTopCover1' onMouseOver=\"viewOptionLayer('"+ objId + "')\" onMouseOut=\"hideOptionLayer('"+ objId + "')\" />";
  newSelect += "  <img src='"+Xspace+"' width='"+selectBoxWidth+"px' height='"+(selectBoxHeight+(XselectBorder*2))+"px' border='0' style='vertical-align:middle;cursor:pointer;' onClick=\"viewOptionLayer('"+ objId + "');\" id='"+objId+"selectBoxSelectedTopCover2'/>";
  newSelect += "</div>";
  newSelect += "<input type='hidden' id='"+objId+"OverColor' value='"+XselectBoxOverColor+"' />";
  newSelect += "<input type='hidden' id='"+objId+"OutColor' value='"+XselectBoxOutColor+"' />";

  document.getElementById("Xselect_"+objId).innerHTML = newSelect; // Xselect InnerHTML
//  $("#Xselect_"+objId).html(newSelect); // Xselect InnerHTML

//선택값 활성화
	var haveSelectedValue = false;
	for (var i=0 ; i < obj.options.length ; i++) {
		if (obj.options[i].selected == true) {
			haveSelectedValue = true;
      selectThisValue(objId,i,obj.options[i].value,obj.options[i].text,"nochange")
//      console.log(objId,i,obj.options[i].value,obj.options[i].text,"off");
//			settingValue(objId,obj.options[i].text);
		}
	}
	if (!haveSelectedValue)       selectThisValue(objId,0,obj.options[0].value,obj.options[0].text,"nochange");
  XselectTabIndex =+ 1; //탭인덱스 증가
}

function fireEvent(element,event){
      if (document.createEventObject){
        var evt = document.createEventObject();
        return element.fireEvent('on'+event,evt)
    }
    else{
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(event, true, true ); // event type,bubbling,cancelable
        return !element.dispatchEvent(evt);
    }
}