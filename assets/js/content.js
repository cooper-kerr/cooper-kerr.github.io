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

	function pillList(items, className) {
		return el('ul', { className: className || 'pill-list' }, (items || []).map(function(item) {
			return el('li', { text: item });
		}));
	}

	function link(label, url, isExternal) {
		if (!label || !url)
			return null;

		isExternal = typeof isExternal === 'boolean' ? isExternal : /^https?:\/\//i.test(url);

		return el('a', {
			href: url,
			target: isExternal ? '_blank' : '_self',
			rel: isExternal ? 'noopener noreferrer' : ''
		}, [label]);
	}

	function intersperse(nodes, separator) {
		return nodes.reduce(function(result, node, index) {
			if (!node)
				return result;

			if (result.length > 0)
				result.push(separator);

			result.push(node);
			return result;
		}, []);
	}

	function renderHeader(profile) {
		var heading = document.querySelector('#header h1');
		var intro = document.querySelector('#header .inner');
		var navList = document.querySelector('#header nav ul');

		if (heading)
			heading.textContent = profile.name;

		if (intro) {
			intro.innerHTML = '';
			intro.appendChild(el('p', { className: 'hero-kicker', text: 'Applied modeling / sports science / market analytics' }));
			intro.appendChild(el('h1', { text: profile.name }));
			intro.appendChild(el('p', { text: profile.bio }));
			intro.appendChild(el('div', { className: 'hero-stats' }, [
				el('span', {}, [
					el('strong', { text: '3.88' }),
					' GPA'
				]),
				el('span', {}, [
					el('strong', { text: '40k/day' }),
					' WebFit usage'
				]),
				el('span', {}, [
					el('strong', { text: '30k+' }),
					' records daily'
				])
			]));
			intro.appendChild(el('p', { className: 'hero-contact' }, [
				'Contact: '
			].concat(intersperse([
				link(profile.email, profile.email ? 'mailto:' + profile.email : ''),
				link('LinkedIn', profile.linkedin),
				link('GitHub', profile.github)
			], ' · '))));
		}

		if (navList) {
			navList.innerHTML = '';

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
			el('div', { className: 'section-grid' }, [
				el('div', { className: 'info-panel' }, [
					el('h3', { text: 'Education' })
				]),
				el('div', { className: 'info-panel' }, [
					el('h3', { text: 'GPA' }),
					el('p', { className: 'metric-large', text: profile.gpa })
				])
			])
		];

		var educationPanel = children[2].children[0];
		(profile.education || []).forEach(function(entry) {
			educationPanel.appendChild(el('h4', { text: entry.institution }));
			educationPanel.appendChild(el('p', { text: entry.degree + ' · Expected graduation: ' + entry.graduation }));
		});

		children.push(el('h3', { text: 'Scholarships' }));
		children.push(pillList(profile.scholarships));
		children.push(el('h3', { text: 'Relevant Coursework' }));
		children.push(pillList(profile.coursework));

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
			var roleChildren = [
				el('div', { className: 'role-heading' }, [
					el('h3', { text: role.title }),
					el('span', { className: 'role-dates', text: role.dates })
				]),
				el('p', { className: 'role-meta', text: [role.company, role.location].filter(Boolean).join(' · ') })
			];

			if (role.bullets && role.bullets.length > 0)
				roleChildren.push(list(role.bullets));
			else
				roleChildren.push(el('p', { text: 'Resume bullets pending exact source text.' }));

			children.push(el('section', { className: 'experience-entry' }, roleChildren));
		});

		return el('article', { id: 'experience' }, children);
	}

	function renderSkills(skills) {
		var children = [
			el('h2', { className: 'major', text: 'Skills' })
		];

		Object.keys(skills || {}).forEach(function(category) {
			children.push(el('section', { className: 'skill-group' }, [
				el('h3', { text: window.PortfolioData.titleFromKey(category) }),
				pillList(skills[category])
			]));
		});

		return el('article', { id: 'skills' }, children);
	}

	function renderProject(project) {
		var children = [
			el('div', { className: 'project-heading' }, [
				el('h3', { text: project.title }),
				el('span', { className: 'project-status ' + project.statusClass, text: project.statusLabel })
			])
		];

		(project.media || []).forEach(function(item) {
			children.push(el('figure', { className: 'project-figure' }, [
				el('span', { className: 'image main' }, [
					el('img', { src: item.src, alt: item.alt })
				]),
				item.caption ? el('figcaption', { text: item.caption }) : null
			]));
		});

		(project.description || []).forEach(function(paragraph) {
			children.push(el('p', { text: paragraph }));
		});

		if (project.techStack && project.techStack.length > 0) {
			children.push(el('div', { className: 'project-meta-group' }, [
				el('span', { className: 'project-meta-label', text: 'Tech stack' }),
				pillList(project.techStack, 'pill-list compact')
			]));
		}

		if (project.relevanceTags && project.relevanceTags.length > 0) {
			children.push(el('div', { className: 'project-meta-group' }, [
				el('span', { className: 'project-meta-label', text: 'Relevance' }),
				pillList(project.relevanceTags, 'pill-list compact')
			]));
		}

		if (project.links && project.links.length > 0) {
			children.push(el('div', { className: 'project-meta-group' }, [
				el('span', { className: 'project-meta-label', text: 'Links' }),
				el('ul', {}, project.links.map(function(item) {
					return el('li', {}, [link(item.label, item.url, item.isExternal)]);
				}))
			]));
		}

		return el('section', { className: 'project-entry', id: project.slug }, children);
	}

	function renderProjects(projects) {
		var children = [
			el('h2', { className: 'major', text: 'Projects' })
		];
		var groups = [
			{ key: 'sports', label: 'Sports' },
			{ key: 'other', label: 'Other' }
		];

		groups.forEach(function(group) {
			var groupProjects = (projects || []).filter(function(project) {
				return project.category === group.key;
			});

			if (groupProjects.length === 0)
				return;

			children.push(el('h3', { className: 'project-group-heading', text: group.label }));
			groupProjects.forEach(function(project) {
				children.push(renderProject(project));
			});
		});

		return el('article', { id: 'projects' }, children);
	}

	function renderFooter(profile) {
		var footer = document.querySelector('#footer');

		if (!footer)
			return;

		footer.innerHTML = '';
		footer.appendChild(el('p', {}, intersperse([
			link(profile.email, profile.email ? 'mailto:' + profile.email : ''),
			link('LinkedIn', profile.linkedin),
			link('GitHub', profile.github)
		], ' · ')));
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
			render(window.PortfolioData.normalize({
				profile: results[0],
				skills: results[1],
				experience: results[2],
				projects: results[3]
			}));
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
