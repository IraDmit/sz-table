<template>
  <div class="">
    <h6>{{ title }}</h6>
    {{ filterValue }}
    <input
      type="date"
      class="form-control"
      id="inputDate"
      v-model="filterValue"
      @input="sendFilter"
    />
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
  data() {
    return {
      filterValue: null,
    };
  },
  methods: {
    sendFilter() {
      const params = this.filterValue ? `?date=${this.filterValue}` : "";
      this.$emit("updateFilter", params);
    },
  },
};
</script>

<style lang="scss" scoped></style>
