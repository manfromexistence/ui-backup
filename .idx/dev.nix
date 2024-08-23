{ pkgs, ... }: {

  # NOTE: This is an excerpt of a complete Nix configuration example.
  # For more information about the dev.nix file in IDX, see
  # https://developers.google.com/idx/guides/customize-idx-env

  # Enable previews and customize configuration
  idx.previews = {
    enable = true;
    packages = [
      pkgs.pnpm
      pkgs.nodejs_latest
      # pkgs.bun
    ];
    previews = {
      # The following object sets web previews
      web = {
        command = [
          "pnpm"
          "run"
          "ui"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
          "--disable-host-check"
        ];
        manager = "web";
      };
      # The following object sets Android previews
      # Note that this is supported only on FLutter workspaces
      #   android = {
      #     manager = "flutter";
      #   };
    };
  };
}
