// Changes resolution of window based on client information that are passed in test_settings.
// Splits string from config by x value and parses it as int.

export function command(client) {
  const clientInfo = client.globals.test_settings.resolution;
  const [horizontal, vertical] = clientInfo.split('x').map((dim) => parseInt(dim, 10));

  return this.resizeWindow(horizontal, vertical);
};
