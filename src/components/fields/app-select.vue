<template>
  <div class="filter">
    <h6>{{ title }}</h6>
    <select class="form-select" placeholder="Все платежи">
      <option selected>{{ placeholder }}</option>
      <option
        :value="source.source_id"
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
  computed: {
    ...mapGetters(["getSources"]),
  },
};
</script>

<style lang="scss" scoped></style>
