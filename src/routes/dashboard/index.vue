<template>
  <div>
    <span :class="styles['jsAnimation']" v-for="item in items">
      jsAnimation{{styles['jsAnimation']}}
    </span>
  </div>
</template>

<script>
  import styles from './index.css';
  export default {
    data() {
      return {
        styles: styles,
        items: [1,2,3,4,5]
      }
    },
    mounted() {
      this.changeBack();
    },
    methods: {
      changeBack() {
        let dom = document.getElementsByClassName(this.styles.jsAnimation);
        let timer = [];
        function loop(index) {
          timer[index] = setInterval(() => {
            if(dom[index].style.opacity == '' || dom[index].style.left == '') {
              dom[index].style.opacity = 1;
            }
            if(dom[index].style.opacity == 0.7) {
              dom[index].style.animationPlayState = 'paused';
            }
            dom[index].style.opacity = parseFloat(dom[index].style.opacity) - 0.01;
            dom[index].style.left = dom[index].offsetLeft + 7 + 'px';
            if(dom[index].style.opacity == 0) {
              clearInterval(timer[index]);
              let parent = dom[index].parentNode;
              parent.removeChild(dom[index]);
            }
          }, 50) 
        }
        function bindEvent(index) {
          dom[index].onmouseover = () => {
            clearInterval(timer[index]);
            dom[index].style.animationPlayState = 'paused';
          }
          dom[index].onmouseout = () => {
            loop(index);
            dom[index].style.animationPlayState = 'running';
          }
        }
        let len = dom.length;
        let timer2 = setInterval(() => {
          if(len == 0) {
            clearInterval(timer2);
          } else {
            len--;
            bindEvent(len);
            loop(len);
          }
        },2500)
      }
    }
  }
</script>
