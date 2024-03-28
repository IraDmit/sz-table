<template>
  <div class="filter">
    <h6>{{ title }}</h6>
    <select class="form-select" placeholder="Все платежи" v-model="filterValue">
      <option selected :value="false">{{ placeholder }}</option>
      <option
        :value="source.id"
        v-for="(source, idx) in getSources"
        :key="`source${idx}`"
      >
        {{ source.title }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
  watch: {
    filterValue() {
      const params = this.filterValue ? `?source_id=${this.filterValue}` : "";
      this.$emit("updateFilter", params);
    },
  },
  data() {
    return {
      filterValue: null,
    };
  },
  computed: {
    ...mapGetters(["getSources"]),
  },
};
</script>

<style lang="scss" scoped></style>
