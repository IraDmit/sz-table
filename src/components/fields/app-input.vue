<template>
  <div class="">
    <h6>{{ title }}</h6>
    <input
      type="date"
      class="form-control"
      id="inputDate"
      v-model="filterValue"
      @input="debounceSendFilter"
    />
  </div>
</template>

<script>
import debounce from "@/utils";
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
  computed: {
    debounceSendFilter() {
      return debounce(this.sendFilter);
    },
  },
  methods: {
    sendFilter() {
      this.$emit("updateParams", "date", this.filterValue);
    },
  },
};
</script>

<style lang="scss" scoped></style>
