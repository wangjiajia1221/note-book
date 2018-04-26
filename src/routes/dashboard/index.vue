<template>
  <div>
    <span :class="styles['dashboard']">
      dashboard{{styles['dashboard']}}
    </span>
  </div>
</template>

<script>
  import styles from './index.css';
  export default {
    data() {
      return {
        styles: styles,
        value: 1
      }
    },
    mounted() {
      this.changeBack();
    },
    methods: {
      changeBack() {
        let dom = document.getElementsByClassName(this.styles.dashboard);
        let timer;
        function loop() {
          timer = setInterval(() => {
            if(dom[0].style.opacity == '' || dom[0].style.left == '') {
              dom[0].style.opacity = 1;
            }
            if(dom[0].style.opacity == 0.7) {
              dom[0].style.animationPlayState = 'paused';
            }
            dom[0].style.opacity = parseFloat(dom[0].style.opacity) - 0.01;
            dom[0].style.left = dom[0].offsetLeft + 7 + 'px';
            if(dom[0].style.opacity == 0) {
              clearInterval(timer);
              let parent = dom[0].parentNode;
              parent.removeChild(dom[0]);
            }
          }, 50) 
        }
        loop();
        dom[0].onmouseover = () => {
          clearInterval(timer);
          dom[0].style.animationPlayState = 'paused';
        }
        dom[0].onmouseout = () => {
          loop();
          dom[0].style.animationPlayState = 'running';
        }
      }
    }
  }
</script>
