$(function() {
  const codebox = $('.js-codebox');
  const strings = [
    'yarn add syncano-cli',
    'syncano-cli init',
    'syncano-cli hosting add <name>',
    'syncano-cli hosting delete <name>',
    'syncano-cli hosting list',
    'syncano-cli hosting files <name>',
    'syncano-cli hosting sync <name>'
  ];

  codebox.typed({
    strings,
    loop: true
  });
});
