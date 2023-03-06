<template >
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
  .loader-container {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    left: 0;
    background-color: #1111113f;
  }

  .loader {
    width: 200px;
    height: 200px;

    border-radius: 50%;
    border: 10px dotted #686868;
    animation-name: spin;
    animation-duration: 1500ms;
    animation-iteration-count: infinite;
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    margin-left: -100px;
  }

  @keyframes spin {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(360deg);
      }
  }
</style>