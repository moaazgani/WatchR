# WatchR Product and Design Source

WatchR is a watch-together web app inspired by Watch2gether and Rave. Users create or join rooms, watch videos in sync, and chat in real time.

## Product Feel

- Instagram-like responsive interface and familiar social interactions.
- X/Twitter-like monochrome feed density, hierarchy, dividers, and whitespace.
- Mobile-first React and Tailwind CSS implementation.

## Design System

- Strictly monochrome: black, white, and light gray only.
- Dark mode by default with a near-black `#0A0A0A` background.
- No accent colors and no gradients.
- Buttons use black/white contrast and invert on press instead of changing color.
- Use `9999px` full pills/circles for avatars, icons, and buttons.
- Use `16px` radius for cards/modals and `12px` for inputs.
- Use bold, tight sans-serif typography similar to Inter.
- Keep layouts clean, dense, spacious, and divider-led.

## Brand

- The logo is a bold, geometric standalone `R` mark.
- It must work as a small navigation icon, avatar replacement, and prominent login/splash mark.

## Navigation

- Icon-only sections: Home, Rooms, Search, Notifications, and Chat.
- Use outline icons by default and filled icons for the active state.
- Active state uses a subtle white underline or dot, never an accent color.
- Below `768px`: fixed bottom navigation, five evenly spaced icons, safe-area padding.
- From `1024px`: fixed full-height vertical sidebar on the left.
- The header is always visible.

## Header

- Persistent black/white top bar with a thin bottom border and no shadow.
- Left side: WatchR `R` logo mark.
- Right side: circular user profile picture and a prominent circular `+` action for creating a room.

## Core Screens

1. Login and signup with a prominent `R` mark and minimal monochrome fields.
2. Home feed showing active or trending rooms with thumbnails, names, and live viewer counts.
3. Rooms list for created and joined rooms, including the host-room action.
4. Watch room with a large synced video player and live chat.
5. Search for users and rooms with an icon-first, minimal-text aesthetic.
6. Notifications with an icon, one-line message, and right-aligned timestamp.

## Watch Room Responsiveness

- Desktop: fixed chat sidebar beside the video player.
- Mobile: collapsible chat drawer.
- Build mobile-first with breakpoints at `768px` and `1024px`.

## Working Rules

- Work directly from this brief and inspect the current file before editing.
- Make the smallest focused change that solves the request.
- Avoid unnecessary exploration, rewrites, explanations, and repeated checks.
- Validate the touched file once after editing, then report briefly.
