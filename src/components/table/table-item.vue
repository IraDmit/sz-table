<template>
  <div class="row">
    <template v-for="(val, key, idx) in payment">
      <div
        class="col p-3 d-flex justify-content-center"
        v-if="key !== 'id'"
        :key="'key' + idx"
      >
        {{ val }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    payment: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
