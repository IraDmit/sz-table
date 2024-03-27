<template>
  <div class="container">
    <h1>Список платежей</h1>
    <div class="btn btn-primary">Добавить платеж</div>
    <app-filters />
    <app-table :paymentsList="paymentsList" />
  </div>
</template>

<script>
import AppFilters from "./components/app-filters.vue";
import AppTable from "./components/app-table.vue";
import { fetchData } from "./services";
export default {
  components: { AppFilters, AppTable },
  data() {
    return {
      paymentsList: null,
    };
  },
  async mounted() {
    this.paymentsList = await fetchData();
  },
};
</script>

<style lang="scss" scoped></style>
