<template>
  <div class="">
    <h6>{{ placeholder }}</h6>
    <input
      type="date"
      :placeholder="placeholder"
      class="form-control"
      id="inputDate"
      aria-describedby="emailHelp"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "placeholder",
    },
  },
};
</script>

<style lang="scss" scoped></style>
