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
		host: 'localhost',
		port: 5280,
		path: '/http-bind/'
	},
	// App setting
	app: {
		port: process.env.OPENSHIFT_INTERNAL_PORT,
		hostname: process.env.OPENSHIFT_INTERNAL_IP
	}
};

module.exports = config;
