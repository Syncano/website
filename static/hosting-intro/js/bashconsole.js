$(function() {
  const codebox = $('.js-codebox');
  const strings = [
    'npm install -g syncano-cli',
    'syncano-cli init',
    'syncano-cli hosting add [hosting_path]',
    'syncano-cli hosting delete <name>',
    'syncano-cli hosting list',
    'syncano-cli hosting files <hosting-name>',
    'syncano-cli hosting sync <hosting-name>'
  ];

  codebox.typed({
    strings,
    loop: true
  });
});
