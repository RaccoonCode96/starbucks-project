// Youtube Iframe 영상 제어
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
	new YT.Player('player', {
		videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
		playerVars: {
			autoplay: true, // 자동 재생 유무
			loop: true, // 반복 재생 유무
			playlist: 'An6LvWQuj_8', // 반복 재생할 유튜브 영상 ID 목록
		},
		events: {
			onReady: function (event) {
				event.target.mute();
			},
		},
	});
}
