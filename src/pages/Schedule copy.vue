  <template>
  <div>
    <b-button aria-keyshortcuts="PageDown">TESTE</b-button>
    <b-row>
      <b-col>
        <b-calendar
          block
          v-model="value"
          hide-header
          style="background-color: rgb(229, 105, 90); color: pink"
        ></b-calendar>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    teste() {
      /* eslint-disable */
      console.log(this.value);
      console.log(this.context);
    }
  }
};
</script>

<style scoped>
.b-calendar-inner {
  background-color: pink;
}
.b-calendar-nav {
  background-color: white !important;
}

button {
  background-color: pink;
  color: pink;
}
</style>