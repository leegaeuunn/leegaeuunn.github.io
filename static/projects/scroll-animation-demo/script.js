/*
  스크롤 진행도 계산:
  - prog: 장면 전체 진행도 0~1
  - p   : 사람 등장 (0.0~0.65 구간을 0~1로 매핑)
  - q   : 접시/팔 퇴장 (0.65~1.0 구간을 0~1로 매핑)
*/
(function(){
    const scene = document.getElementById('scene1');
    const root  = document.documentElement;
  
    const clamp01 = v => Math.max(0, Math.min(1, v));
    let ticking = false;
  
    function update(){
      ticking = false;
  
      const rect  = scene.getBoundingClientRect();
      const vh    = window.innerHeight || 1;
      const start = window.scrollY + rect.top;
      const end   = start + rect.height - vh;
      const denom = Math.max(1, end - start);
      const prog  = clamp01((window.scrollY - start) / denom);
  
      // 컷 분할 포인트
      const split = 0.7;
      const personStop = 0.4;  // 사람이 멈추는 지점 (0.4 = 40%)
  
      // 사람은 0~personStop 구간에서만 움직임
      const p = clamp01(prog / personStop);
      const q = clamp01((prog - split) / (1 - split));
  
      root.style.setProperty('--prog', prog.toFixed(4));
      root.style.setProperty('--p', p.toFixed(4));
      root.style.setProperty('--q', q.toFixed(4));
    }
  
    function onScroll(){
      if(!ticking){
        requestAnimationFrame(update);
        ticking = true;
      }
    }
  
    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', onScroll);
    update(); // 초기 렌더
  })();
