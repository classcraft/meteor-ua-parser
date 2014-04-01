Package.describe({
  summary: "Meteor smart package for meteor-ua-parser."
})

Npm.depends({
  "ua-parser": "0.3.3"
});

Package.on_use(function (api, where) {
  api.add_files('ua-parser-server.js', 'server');
  api.export(['uaParser'], 'server');
});
