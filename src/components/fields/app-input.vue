<template>
  <div class="">
    <h6>{{ title }}</h6>
    <input type="date" class="form-control" id="inputDate" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "title",
    },
    placeholder: {
      type: String,
      default: "placeholder",
    },
  },
};
</script>

<style lang="scss" scoped></style>
