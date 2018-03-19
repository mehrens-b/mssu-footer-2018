$(document).ready(function(){var mobileMenu=$('#mobile-menu');Resizr.onMobile(function(){$('#header-nav').hide();$('#___gcse_0').prependTo(mobileMenu);});Resizr.onTablet(function(){$('#header-nav').hide();$('#___gcse_0').prependTo(mobileMenu);});Resizr.onDesktop(function(){$('#___gcse_0').appendTo($('#search'));});var tweetList=$('#tweet-list');if(tweetList.length){tweetList.ticker({speed:0.20,htmlFeed:true,fadeInSpeed:600,controls:false,displayType:'fade',pauseOnItems:5000,titleText:'<a href="https://twitter.com/mosolions" class="twitter-icon"><i class="fa fa-twitter"></i></a>'});}
$('.main-slider').slick({dots:false,arrows:true,infinite:true,autoplay:true,autoplaySpeed:5000,swipeToSlide:true,speed:400});var newsSlider=$('.news-slider');if(newsSlider.length){newsSlider.slick({arrows:true,infinite:true,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:568,settings:{slidesToShow:1,slidesToScroll:1}}]});}
$('ul.tabs').each(function(){var $active,$content,$links=$(this).find('a');$active=$($links.filter('[href="'+location.hash+'"]')[0]||$links[0]);$active.addClass('active');$content=$($active[0].hash);$links.not($active).each(function(){$(this.hash).hide();});$(this).on('click','a',function(e){$active.removeClass('active');$content.hide();$active=$(this);$content=$(this.hash);window.history.pushState(null, null, this.hash);$active.addClass('active');$content.show();e.preventDefault();});});FastClick.attach(document.body);function getRandomInt(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
function addTextPoint(pointsOfPride, point){
	var randomInt=getRandomInt(0,1);
	var alternate=randomInt==1;
	pointsOfPride.append(
		'<div class="point point-text' +(alternate? ' point-alternate"':'')+'"' +
                ' data-point-type="' + point['point-type'] + '"' +
                ' data-point-standout="' + point['point-standout'] + '"' +
                ' data-point-body="' + point['point-body'] + '">' +
					'<p class="point-standout">'+point['point-standout']+'</p>'+
						'<p class="point-body">'+point['point-body']+'</p>'+'</div>'
	);
}
function addBadgePoint(pointsOfPride, point) {
        var badgePointDiv = '';
        badgePointDiv += '<div class="point point-badge" data-point-type="' + point['point-type'] + '"';
        badgePointDiv += '     data-point-image-url="' + point['point-image-url'] + '">';
        badgePointDiv += '<span class="point-helper"></span>';
        if (typeof point['point-link-href'] != 'undefined') {
            badgePointDiv += '<a href="' + point['point-link-href'] + '">';
        }
        badgePointDiv += '<img src="' + point['point-image-url'] + '" class="point-image"></img>';
        if (typeof point['point-link-href'] != 'undefined') {
            badgePointDiv += '</a>';
        }
        badgePointDiv += '</div>';

        pointsOfPride.append(badgePointDiv);
    }
    function addPointOfPride(pointsOfPride, point) {
        if (point['point-type'] === "text") {
            addTextPoint(pointsOfPride, point);
        } else if (point['point-type'] === "badge") {
            addBadgePoint(pointsOfPride, point);
        }
    }

							 
$.getJSON("points-of-pride.json",function(data){var pointsOfPrideContainer = $('#points-of-pride');var pointsOfPride=data['points-of-pride'];var numOfPointsToDisplay=5;var pointsToDisplay=[];while(pointsToDisplay.length<numOfPointsToDisplay){var randomNumber=getRandomInt(0,pointsOfPride.length-1);var point=pointsOfPride[randomNumber];var found=false;for(var i=0;i<pointsToDisplay.length;i++){if(pointsToDisplay[i]==point){found=true;break;}}
if(!found){pointsToDisplay[pointsToDisplay.length]=point;}}
$.each(pointsToDisplay,function(i,point){addPointOfPride(pointsOfPrideContainer, point);});});
function getPointObjectFromElement(elem) {
        var pointType = elem.data('point-type');
        var point = {'point-type': pointType};

        if (pointType == 'text') {
            point['point-standout'] = elem.data('point-standout');
            point['point-body'] = elem.data('point-body');
        } else if (pointType == 'badge') {
            point['point-image-url'] = elem.data('point-image-url');
        }

        return point;
    }

    /**
     * Compare two point objects. If the points are not of the same type,
     * returns false. Otherwise, compares the points based on point type and
     * returns true if all of their attributes are equal.
     */
    function comparePoints(point1, point2) {
        if (point1['point-type'] != point2['point-type']) {
            return false;
        }

        if (point1['point-type'] == 'text') {
            return point1['point-standout'] == point2['point-standout'] && point1['point-body'] == point2['point-body'];
        } else if (point1['point-type'] == 'badge') {
            return point1['point-image-url'] == point2['point-image-url'];
        }
    }
							 
							 function showRemainingPoints(){$.getJSON("points-of-pride.json",function(data){
								 var pointsOfPrideContainer = $('#points-of-pride');
								 var pointsOfPride=data['points-of-pride'];
								 var currentPointsList=[];
								 var currentPointsElements=pointsOfPrideContainer.children('.point');
								 currentPointsElements.each(function(){
									 var elem=$(this);
									 var point=getPointObjectFromElement(elem);
									 currentPointsList.push(point);
								 });
								 $.each(pointsOfPride,function(i,point){
									 var found=false;
									 $.each(currentPointsList,function(i,currentPoint){
										 if(comparePoints(point, currentPoint)){
											 found=true;
											 return false;
										 }
									 });
									 if(!found){
										 addPointOfPride(pointsOfPrideContainer, point);
									 }});});}
$('#complete-list').click(function(){var container=$('.points-of-pride-container');container.fadeTo(500,0,function(){$(this).addClass('all-points');showRemainingPoints();});container.fadeTo(500,1);$(this).hide();});$(window).resize(function(){var width=$(this).width();if(width==768){$('#header-nav').hide();}else if(width>768){$('#header-nav').show();}});});
$(document).ready(function(){$('.news-slider-item').contents() .filter(function() {return this.nodeType == 3 && this.wholeText.replace(/[ \t\n]/g,'');}).wrap('<p/>');
})
