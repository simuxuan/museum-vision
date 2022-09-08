<template>
  <div>{{env}}</div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
  computed: {
    env() {
        return process.env.NODE_ENV
    }
  },
};
</script>

<style></style>
