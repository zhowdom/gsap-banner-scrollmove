const sections = document.querySelectorAll('div')
gsap.registerPlugin(ScrollTrigger)

sections.forEach(section => {
  gsap.fromTo(
    section,
    { 
      backgroundPositionY: `-${window.innerHeight / 2}px` 
    },
    { 
      backgroundPositionY: `${window.innerHeight / 2}px`,
      // duration: 3,
      easa: 'none',
      scrollTrigger: {
        trigger: section,
        scrub: true // 使动画不是与时间变化播放，而是与浏览器滚动条相关联。
      }
    },
  )
})