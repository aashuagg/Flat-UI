Package.describe({
  summary: "Flat UI Free - Design Framework, with less files"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
	'less/flat-ui.less',
	'js/application.js'
  ], 'client');
});

