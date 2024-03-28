<template>
  <div class="row">
    <template v-for="(val, key, idx) in payment">
      <div
        class="col p-3 d-flex justify-content-start"
        v-if="key !== 'id'"
        :key="'key' + idx"
      >
        {{ getModifyValue(val, key) }}
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    payment: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters(["getSourceById", "getTypeById", "getStatusById"]),
  },
  methods: {
    getModifyValue(value, key) {
      if (!value) return;
      switch (key) {
        case "source_id":
          return this.getSourceById(value);
        case "type_id":
          return this.getTypeById(value);
        case "status_id":
          return this.getStatusById(value);
        default:
          return value;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
