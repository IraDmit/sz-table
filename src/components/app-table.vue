<template>
  <div class="table table-hover">
    <table-head class="row" />
    <table-item
      v-for="(payment, idx) in paymentsList"
      :key="`payment${idx}`"
      :payment="payment"
    />
  </div>
</template>

<script>
import TableHead from "./table/table-head.vue";
import tableItem from "./table/table-item.vue";
export default {
  components: {
    TableHead,
    tableItem,
  },
  props: {
    paymentsList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
