(function() {
	var dataFiles = {
		profile: 'data/profile.json',
		skills: 'data/skills.json',
		experience: 'data/experience.json',
		projects: 'data/projects.json'
	};

	function fetchJson(path) {
		return fetch(path, { cache: 'no-cache' }).then(function(response) {
			if (!response.ok)
				throw new Error(path + ' returned ' + response.status);

			return response.json();
		});
	}

	function el(tag, attrs, children) {
		var node = document.createElement(tag);

		Object.keys(attrs || {}).forEach(function(key) {
			if (key === 'className')
				node.className = attrs[key];
			else if (key === 'text')
				node.textContent = attrs[key];
			else
				node.setAttribute(key, attrs[key]);
		});

		(children || []).forEach(function(child) {
			if (child === null || typeof child === 'undefined')
				return;

			if (typeof child === 'string')
				node.appendChild(document.createTextNode(child));
			else
				node.appendChild(child);
		});

		return node;
	}

	function list(items) {
		return el('ul', {}, (items || []).map(function(item) {
			return el('li', { text: item });
		}));
	}

	function link(label, url) {
		return el('a', {
			href: url,
			target: url.indexOf('http') === 0 ? '_blank' : '_self',
			rel: url.indexOf('http') === 0 ? 'noopener noreferrer' : ''
		}, [label]);
	}

	function renderHeader(profile) {
		var heading = document.querySelector('#header h1');
		var intro = document.querySelector('#header .inner');
		var navList = document.querySelector('#header nav ul');

		if (heading)
			heading.textContent = profile.name;

		if (intro) {
			intro.innerHTML = '';
			intro.appendChild(el('h1', { text: profile.name }));
			intro.appendChild(el('p', { text: profile.bio }));
			intro.appendChild(el('p', {}, [
				'Contact: ',
				link(profile.email, 'mailto:' + profile.email),
				' · ',
				link('LinkedIn', profile.linkedin),
				' · ',
				link('GitHub', profile.github)
			]));
		}

		if (navList) {
			navList.innerHTML = '';
			navList.style.display = 'flex';
			navList.style.flexDirection = 'row';
			navList.style.justifyContent = 'center';
			navList.style.alignItems = 'center';

			[
				['About', '#about'],
				['Experience', '#experience'],
				['Skills', '#skills'],
				['Projects', '#projects']
			].forEach(function(item) {
				navList.appendChild(el('li', {}, [
					el('a', { href: item[1], text: item[0] })
				]));
			});
		}
	}

	function renderAbout(profile) {
		var children = [
			el('h2', { className: 'major', text: 'About' }),
			el('p', { text: profile.bio }),
			el('h3', { text: 'Education' })
		];

		(profile.education || []).forEach(function(entry) {
			children.push(el('h4', { text: entry.institution }));
			children.push(el('p', { text: entry.degree + ' · Expected graduation: ' + entry.graduation }));
		});

		children.push(el('h3', { text: 'GPA' }));
		children.push(el('p', { text: profile.gpa }));
		children.push(el('h3', { text: 'Scholarships' }));
		children.push(list(profile.scholarships));
		children.push(el('h3', { text: 'Relevant Coursework' }));
		children.push(list(profile.coursework));

		return el('article', { id: 'about' }, children);
	}

	function renderExperience(experience) {
		var children = [
			el('h2', { className: 'major', text: 'Experience' })
		];

		if (!experience || experience.length === 0) {
			children.push(el('p', { text: 'Experience details are pending resume source text.' }));
			return el('article', { id: 'experience' }, children);
		}

		experience.forEach(function(role) {
			children.push(el('h3', { text: role.title }));
			children.push(el('p', { text: [role.company, role.location, role.dates].filter(Boolean).join(' · ') }));

			if (role.bullets && role.bullets.length > 0)
				children.push(list(role.bullets));
			else
				children.push(el('p', { text: 'Resume bullets pending exact source text.' }));
		});

		return el('article', { id: 'experience' }, children);
	}

	function titleFromKey(key) {
		return key
			.split('_')
			.map(function(part) {
				return part.charAt(0).toUpperCase() + part.slice(1);
			})
			.join(' ');
	}

	function renderSkills(skills) {
		var children = [
			el('h2', { className: 'major', text: 'Skills' })
		];

		Object.keys(skills || {}).forEach(function(category) {
			children.push(el('h3', { text: titleFromKey(category) }));
			children.push(list(skills[category]));
		});

		return el('article', { id: 'skills' }, children);
	}

	function renderProject(project) {
		var children = [
			el('h3', { text: project.title }),
			el('p', { text: 'Status: ' + project.status })
		];

		(project.image_paths || []).forEach(function(path) {
			children.push(el('span', { className: 'image main' }, [
				el('img', { src: path, alt: project.title })
			]));
		});

		(project.description || []).forEach(function(paragraph) {
			children.push(el('p', { text: paragraph }));
		});

		if (project.tech_stack && project.tech_stack.length > 0) {
			children.push(el('h4', { text: 'Tech Stack' }));
			children.push(list(project.tech_stack));
		}

		if (project.relevance_tags && project.relevance_tags.length > 0) {
			children.push(el('h4', { text: 'Relevance Tags' }));
			children.push(list(project.relevance_tags));
		}

		if (project.links && project.links.length > 0) {
			children.push(el('h4', { text: 'Links' }));
			children.push(el('ul', {}, project.links.map(function(item) {
				return el('li', {}, [link(item.label, item.url)]);
			})));
		}

		return el('section', { className: 'project-entry', id: project.slug }, children);
	}

	function renderProjects(projects) {
		var children = [
			el('h2', { className: 'major', text: 'Projects' })
		];

		(projects || []).forEach(function(project) {
			children.push(renderProject(project));
		});

		return el('article', { id: 'projects' }, children);
	}

	function renderFooter(profile) {
		var footer = document.querySelector('#footer');

		if (!footer)
			return;

		footer.innerHTML = '';
		footer.appendChild(el('p', {}, [
			link(profile.email, 'mailto:' + profile.email),
			' · ',
			link('LinkedIn', profile.linkedin),
			' · ',
			link('GitHub', profile.github)
		]));
		footer.appendChild(el('p', { className: 'copyright' }, [
			'Design: ',
			link('HTML5 UP', 'https://html5up.net')
		]));
	}

	function render(data) {
		var main = document.getElementById('main');

		if (!main)
			return;

		renderHeader(data.profile);
		renderFooter(data.profile);

		main.innerHTML = '';
		main.appendChild(renderAbout(data.profile));
		main.appendChild(renderExperience(data.experience));
		main.appendChild(renderSkills(data.skills));
		main.appendChild(renderProjects(data.projects));
	}

	window.portfolioReady = Promise
		.all([
			fetchJson(dataFiles.profile),
			fetchJson(dataFiles.skills),
			fetchJson(dataFiles.experience),
			fetchJson(dataFiles.projects)
		])
		.then(function(results) {
			render({
				profile: results[0],
				skills: results[1],
				experience: results[2],
				projects: results[3]
			});
		})
		.catch(function(error) {
			var main = document.getElementById('main');

			if (main) {
				main.innerHTML = '';
				main.appendChild(el('article', { id: 'content-error' }, [
					el('h2', { className: 'major', text: 'Content Error' }),
					el('p', { text: 'Unable to load portfolio data: ' + error.message })
				]));
			}

			return null;
		});
})();
