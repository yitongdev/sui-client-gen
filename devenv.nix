{
  pkgs,
  lib,
  config,
  ...
}:

{
  languages.rust.enable = true;
  languages.javascript = {
    enable = true;
    bun.enable = true;
  };
}
