<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="195.792" viewBox="1206 163 200 195.792">
    <g data-name="Group 5">
      <path d="M1285.68 260.896v54.545-54.545Z" stroke-linejoin="round" stroke-linecap="round" stroke-width="15" stroke="orange" fill="transparent" data-name="Path 1"/>
      <path d="M1326.32 315.441V163.035" stroke-linejoin="round" stroke-linecap="round" stroke-width="15" stroke="green" fill="transparent" data-name="Line 1"/>
      <path d="M1326.32 260.88H1406" stroke-linejoin="round" stroke-linecap="round" stroke-width="15" stroke="red" fill="transparent" data-name="Line 2"/>
      <path class="black" d="m1206 260.88 79.696.182h0l-.017-84.124-.185-13.938C1240.1 172.46 1206 212.696 1206 260.896s34.102 88.435 79.494 97.896" stroke-linejoin="round" stroke-linecap="round" stroke-width="15" stroke="black" fill="transparent" data-name="Path 2"/>
      <path class="yellow" d="M1365.001 180.148c24.856 18.193 40.999 47.585 40.999 80.748 0 48.2-34.102 88.435-79.494 97.896" stroke-linejoin="round" stroke-linecap="round" stroke-width="15" stroke="yellow" fill="transparent" data-name="Path 4"/>
    </g>
  </svg>
</template>

<style>

svg {
  margin: 20px;
}
.black, .yellow {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 4s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 100;
  }
}
</style>


<script>
// var path = document.querySelector('.path');
// var length = path.getTotalLength();
</script>