# Website media

The captures added in October 2026 use the real HyprFM development build
(`0.6.1-307-g395d460`) on a dedicated 1600 × 1000 headless Hyprland output.
The demo uses a disposable home, generated landscape wallpaper, and sample
code from the HyprFM repository's `scripts/demo-code/` directory.

## Captures

- `public/media/s/transparency-{off,on}.webp`: identical window, selection,
  wallpaper, and geometry. Only HyprFM transparency changes. Blur is provided
  by Hyprland, not a browser filter.
  The refreshed capture uses sharp wallpaper contours as a reference, with
  Hyprland blur enabled at `size = 12`, `passes = 4`. The wallpaper lines
  stay sharp outside the app and diffuse behind its translucent panels;
  foreground UI is never blurred.
- `public/media/l/transparency.mp4`: an eight-second real app recording,
  toggling transparency with Ctrl+Shift+B.
- `public/media/l/terminal.mp4`: a nine-second real app recording, opening
  the built-in terminal with F4 and running `git status --short`.
- `public/media/s/workflow-{code,terminal,git}.webp`: code previews, terminal,
  and Git status column. The Git demo has staged and untracked sample files.
- `public/media/s/workflow-git-detail.webp`: a crop of the Git screenshot,
  focusing on the file rows and status column.

MP4 recordings use H.264, yuv420p, 15 fps, no audio, and fast-start metadata.
JPEG poster images sit beside each clip. Screenshot originals are WebP at
1600 × 1000. Older media elsewhere on the site is retained.

## Earlier animation source

`overview/` contains the editable source for the earlier view-switching
animation. That animation has been removed from the website; the views
section uses the interactive screenshot picker.
