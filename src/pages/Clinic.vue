<template>
  <div style="height: 45vw;">
    <div class="central" style="width: 100%;  flex-direction: column;">
      <span style="display:flex;" class="span-primary cardiologist">{{specialties}}</span>
      <span style="display:flex;" class="span-secondary choose-one-clinic">Te amo</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      specialties: "Cardiologista"
    };
  },
    specialties: "te amo",
}
</script>

<style>
.cardiologist {
  margin-left: 5vw;
  margin-top: 17vw;
  font-size: 3vw;
  font-weight: normal;
  text-decoration-line: underline;
}
.choose-one-clinic {
  margin-left: 5vw;
  font-size: 3vw;
  font-weight: bold;
}
.central {
  display: flex;
}
</style>

