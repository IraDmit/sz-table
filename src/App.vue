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
import { mapActions } from "vuex";
export default {
  components: { AppFilters, AppTable },
  data() {
    return {
      paymentsList: null,
    };
  },
  async created() {
    this.paymentsList = await fetchData();
    this.fetchDesignations()
  },
  methods: {
    ...mapActions(["fetchDesignations"]),
  },
};
</script>

<style lang="scss" scoped></style>
