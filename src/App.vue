<template>
  <div class="app container">
    <h1>Список платежей</h1>
    <div class="btn btn-primary" @click="openModal">Добавить платеж</div>
    <app-filters @updateFilter="updateFilter" />
    <app-table :paymentsList="paymentsList" />
    <ModalPayment
      :showModal="showModal"
      @closeModal="closeModal"
      @updateData="updateData"
    />
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
      showModal: false,
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
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    updateData(newPayment) {
      this.paymentsList.push(newPayment);
      // setTimeout(async () => {
      //   this.paymentsList = await fetchData();
      // }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  position: relative;
}
</style>
