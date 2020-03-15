<template>
  <div class="box1">
    <span class="d-flex fourth-class title-box">{{titulo}}</span>
    <div class="d-flex">
      <img class="icon" src="../images/card.svg" alt />
      <span class="secondary-class text-box" style="font-size: 1.4vw;">{{message}}</span>
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.box1 {
  background-color: #ffffff;
  width: 100%;
  display: column;
  height: 100%;
}

.title-box {
  padding: 3vw 31vw 0vw 7vw;
  font-size: 3vw;
  margin-bottom: 3vw;
}

.icon {
  width: 10vw;
  margin-left: 7.5vw;
  margin-right: 4vw;
  height: 10vw;
}

.text-box {
  width: 90%;
  padding-right: 6%;
}
</style>

