var $myDiv = $('<div id="wrapper"></div>');
var $welcome = $('<h3>Hey, I am </h3>').attr({
	style: 'position:absolute; top:39%; zindex:2'
});


var $myName = $('<h1>Swapnil</h1>').attr({
	color: 'white',
	style: 'position:absolute; top:44%; z-index:2;'
})
  
var $aEle = $('<a class="nav-link js-scroll-trigger" href="#about"></a>').attr({
	style: 'position:absolute; zindex:3;top:55%;'
});

var $testButton = $('<input/>').attr({
	type: 'button',
	name: 'btn1',
	value: 'Find Out More',
	id: 'testButton',
	style: 'background-color: #FF6424; color: white;padding: 10px 20px;margin: 8px 0; border: none; cursor: pointer;'
});

$('body').append($myDiv);
$($myDiv).append($myName);
$($myDiv).append($welcome);
$($myDiv).append($aEle);
$($aEle).append($testButton);

