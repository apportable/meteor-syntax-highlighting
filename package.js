Package.describe({
  summary: 'Syntax highlighting with highlight.js'
});

Package.on_use(function (api) {
  api.add_files('highlight/highlight.pack.js', 'client');
  api.export('hljs', 'client');
});
