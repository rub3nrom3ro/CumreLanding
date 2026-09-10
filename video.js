(() => {
  const player = document.getElementById("law-video-player");
  const trigger = player?.querySelector(".law-video-trigger");
  if (!trigger) return;

  trigger.hidden = false;
  trigger.addEventListener("click", () => {
    const frame = document.createElement("iframe");
    frame.src = "https://www.youtube-nocookie.com/embed/BPu6XgmOBKk?autoplay=0&playsinline=1";
    frame.title = "Video explicativo sobre la ley — CumRe Arrendamiento";
    frame.allow = "encrypted-media; picture-in-picture; fullscreen";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.tabIndex = 0;
    player.replaceChildren(frame);
    frame.focus();
  }, { once: true });
})();