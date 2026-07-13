/*
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

document.body.classList.remove('is-preload');

window.portfolioReady = window.portfolioReady || Promise.resolve();

window.portfolioReady.then(function() {
	(function($) {
		var $window = $(window);
		var $wrapper = $('#wrapper');
		var $header = $('#header');

		breakpoints({
			xlarge: [ '1281px', '1680px' ],
			large: [ '981px', '1280px' ],
			medium: [ '737px', '980px' ],
			small: [ '481px', '736px' ],
			xsmall: [ '361px', '480px' ],
			xxsmall: [ null, '360px' ]
		});

		if (browser.name === 'ie') {
			var flexboxFixTimeoutId;

			$window.on('resize.flexbox-fix', function() {
				clearTimeout(flexboxFixTimeoutId);

				flexboxFixTimeoutId = setTimeout(function() {
					if ($wrapper.prop('scrollHeight') > $window.height())
						$wrapper.css('height', 'auto');
					else
						$wrapper.css('height', '100vh');
				}, 250);
			}).triggerHandler('resize.flexbox-fix');
		}

		var $nav = $header.children('nav');
		var $navItems = $nav.find('li');

		if ($navItems.length % 2 === 0) {
			$nav.addClass('use-middle');
			$navItems.eq($navItems.length / 2).addClass('is-middle');
		}

		window.PanelLifecycle.init($, {
			header: '#header',
			footer: '#footer',
			main: '#main'
		});
	})(jQuery);
});
