<template>
  <div class="filter">
    <h6>{{ placeholder }}</h6>
    <select class="form-select" aria-label="Пример выбора по умолчанию">
      <option selected>{{ placeholder }}</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
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
