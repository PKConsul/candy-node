var config = {
	// Candy settings
	// See http://candy-chat.github.com/candy/#configuration
	candy: {
		core: { debug: false, autojoin: ['candy_demo@conference.swissjabber.ch'] },
		view: { resources: 'candy/res/' },
		// Args passed to Candy.Core.connect();
		connect: ['demo.swissjabber.ch']
	},
	// HTTP-Bind settings
	http_bind: {
		host: 'dev.openflex.net',
		port: 80,
		path: '/candy/http-bind/'
	},
	// App setting
	app: {
		port: process.env.OPENSHIFT_INTERNAL_PORT || 8080,
		hostname: process.env.OPENSHIFT_INTERNAL_IP || "localhost"
	}
};

module.exports = config;
