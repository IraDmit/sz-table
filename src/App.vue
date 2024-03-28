<template>
  <div class="app container">
    <h1>Список платежей</h1>
    <button
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      @click="isOpen = true"
    >
      Добавить платеж
    </button>
    <app-filters @updateFilter="updateFilter" />
    <app-table :paymentsList="paymentsList" />
    <ModalPayment v-if="isOpen" />
  </div>
</template>

<script>
import AppFilters from "./components/app-filters.vue";
import AppTable from "./components/app-table.vue";
import ModalPayment from "./components/modals/modal-payment.vue";
import { fetchData } from "./services";
import { mapActions, mapGetters } from "vuex";
import { sorting } from "./sorts";
export default {
  components: { AppFilters, AppTable, ModalPayment },
  data() {
    return {
      paymentsList: null,
      isOpen: false,
    };
  },
  computed: {
    ...mapGetters(["getSortingInfo"]),
  },
  watch: {
    getSortingInfo: {
      handler() {
        sorting(
          this.paymentsList,
          this.getSortingInfo.type,
          this.getSortingInfo.field
        );
      },
      deep: true,
    },
  },
  async created() {
    this.paymentsList = await fetchData();
    this.fetchDesignations();
  },
  methods: {
    ...mapActions(["fetchDesignations"]),
    async updateFilter(filter) {
      this.paymentsList = await fetchData(filter);
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  position: relative;
}
</style>
