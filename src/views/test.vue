<template>
  <div>
    <input type="text" v-model="msgg">
    <button @click="dianwo">dianwo</button>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 1
    }
  },
  computed: {
    msgg: {
      get() {
        return this.msg
      },
      set(newvalue) {
        this.msgg = newvalue
      }
    }
  },
  methods: {
    dianwo() {
      this.msg = this.msg + 1
    }
  }
}
</script>

<style>

</style>