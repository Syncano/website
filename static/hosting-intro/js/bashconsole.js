$(function() {
  const codebox = $('.js-codebox');
  const strings = [
    'pip install syncano-cli',
    'syncano login --instance-name YOUR_INSTANCE',
    'syncano hosting list',
    'syncano hosting list files',
    'syncano hosting publish BASE_DIR',
    'syncano hosting delete',
    'syncano hosting delete hosting/file/path',
    'syncano hosting update hosting/file/path local/file/path',
    'syncano hosting --domain staging publish BASE_DIR',
    'syncano hosting publish ./your/project/path/',
  ];

  codebox.typed({
    strings,
    loop: true
  });
});
