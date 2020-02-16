<template>
  <div style="height: 45vw;">
    <div class="central w-100" style="flex-direction: column;">
      <span class="d-flex span-primary name-specialties">{{specialties}}</span>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      specialties: this.$route.params.nameSpecialties
    };
  }
}
</script>

<style>
.name-specialties {
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

