// Play/pause videos only when visible; keep autoplay muted/inline.
(function(){
  const vids = Array.from(document.querySelectorAll('.reseda-page video'));
  if(!('IntersectionObserver' in window)){ vids.forEach(v => v.play && v.play()); return; }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(({isIntersecting, target})=>{
      if(isIntersecting){ target.play().catch(()=>{}); }
      else { target.pause(); }
    });
  }, { threshold: .35 });
  vids.forEach(v => io.observe(v));
})();
