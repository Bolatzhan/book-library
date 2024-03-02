import { MainView } from './views/main/main.js';

class App {
	routes = [
		{ path: "", view: MainView }
	];
	appState = {
		favorites: []
	};

	constructor() {
		//  обработчик события hashchange окна браузера,
		// который будет вызывать метод routes объекта App при изменении хэша в URL
		window.addEventListener('hashchange', this.route.bind(this));
		// Метод bind(this) используется, чтобы привязать контекст this к методу routes.
		this.route();
	}

	route() {
		if (this.currentView) {
			this.currentView.destroy();
		}
		const view = this.routes.find(r => r.path == location.hash).view;
		this.currentView = new view(this.appState);
		this.currentView.render();
	}
}

new App();