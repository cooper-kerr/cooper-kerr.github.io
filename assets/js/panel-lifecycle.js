(function() {
	function initPanelLifecycle($, options) {
		options = options || {};

		var $window = $(window);
		var $body = $('body');
		var $header = $(options.header || '#header');
		var $footer = $(options.footer || '#footer');
		var $main = $(options.main || '#main');
		var $mainArticles = $main.children('article');
		var delay = options.delay || 325;
		var locked = false;

		function showArticle(id, initial) {
			var $article = $mainArticles.filter('#' + id);

			if ($article.length === 0)
				return;

			if (locked || initial === true) {
				$body.addClass('is-switching');
				$body.addClass('is-article-visible');
				$mainArticles.removeClass('active');
				$header.hide();
				$footer.hide();
				$main.show();
				$article.show();
				$article.addClass('active');
				locked = false;

				setTimeout(function() {
					$body.removeClass('is-switching');
				}, initial ? 1000 : 0);

				return;
			}

			locked = true;

			if ($body.hasClass('is-article-visible')) {
				var $currentArticle = $mainArticles.filter('.active');

				$currentArticle.removeClass('active');

				setTimeout(function() {
					$currentArticle.hide();
					$article.show();

					setTimeout(function() {
						$article.addClass('active');
						$window.scrollTop(0).triggerHandler('resize.flexbox-fix');

						setTimeout(function() {
							locked = false;
						}, delay);
					}, 25);
				}, delay);
			}
			else {
				$body.addClass('is-article-visible');

				setTimeout(function() {
					$header.hide();
					$footer.hide();
					$main.show();
					$article.show();

					setTimeout(function() {
						$article.addClass('active');
						$window.scrollTop(0).triggerHandler('resize.flexbox-fix');

						setTimeout(function() {
							locked = false;
						}, delay);
					}, 25);
				}, delay);
			}
		}

		function hideArticle(addState) {
			var $article = $mainArticles.filter('.active');

			if (!$body.hasClass('is-article-visible'))
				return;

			if (addState === true)
				history.pushState(null, null, '#');

			if (locked) {
				$body.addClass('is-switching');
				$article.removeClass('active');
				$article.hide();
				$main.hide();
				$footer.show();
				$header.show();
				$body.removeClass('is-article-visible');
				locked = false;
				$body.removeClass('is-switching');
				$window.scrollTop(0).triggerHandler('resize.flexbox-fix');

				return;
			}

			locked = true;
			$article.removeClass('active');

			setTimeout(function() {
				$article.hide();
				$main.hide();
				$footer.show();
				$header.show();

				setTimeout(function() {
					$body.removeClass('is-article-visible');
					$window.scrollTop(0).triggerHandler('resize.flexbox-fix');

					setTimeout(function() {
						locked = false;
					}, delay);
				}, 25);
			}, delay);
		}

		function currentHashId() {
			if (location.hash === '' || location.hash === '#')
				return '';

			return location.hash.substring(1);
		}

		$main._show = showArticle;
		$main._hide = hideArticle;

		$mainArticles.each(function() {
			var $this = $(this);

			$('<div class="close" role="button" tabindex="0">Close</div>')
				.appendTo($this)
				.on('click', function() {
					location.hash = '';
				})
				.on('keyup', function(event) {
					if (event.keyCode === 13 || event.keyCode === 32)
						location.hash = '';
				});

			$this.on('click', function(event) {
				event.stopPropagation();
			});
		});

		$body.on('click', function() {
			if ($body.hasClass('is-article-visible'))
				hideArticle(true);
		});

		$window.on('keyup', function(event) {
			if (event.keyCode === 27 && $body.hasClass('is-article-visible'))
				hideArticle(true);
		});

		$window.on('hashchange', function(event) {
			var id = currentHashId();

			if (!id) {
				event.preventDefault();
				event.stopPropagation();
				hideArticle();
			}
			else if ($mainArticles.filter('#' + id).length > 0) {
				event.preventDefault();
				event.stopPropagation();
				showArticle(id);
			}
			else {
				event.preventDefault();
				event.stopPropagation();
				hideArticle();
			}
		});

		if ('scrollRestoration' in history) {
			history.scrollRestoration = 'manual';
		}
		else {
			var oldScrollPos = 0;
			var scrollPos = 0;
			var $htmlbody = $('html,body');

			$window
				.on('scroll', function() {
					oldScrollPos = scrollPos;
					scrollPos = $htmlbody.scrollTop();
				})
				.on('hashchange', function() {
					$window.scrollTop(oldScrollPos);
				});
		}

		$main.hide();
		$mainArticles.hide();

		if (currentHashId()) {
			if (document.readyState === 'complete')
				showArticle(currentHashId(), true);
			else
				$window.on('load', function() {
					showArticle(currentHashId(), true);
				});
		}
	}

	window.PanelLifecycle = {
		init: initPanelLifecycle
	};
})();
