<template>
  <div class="row">
    <div class="col p-3 d-flex justify-content-start">
      {{ payment.client }}
    </div>
    <div class="col p-3 d-flex justify-content-start">
      {{ payment.contract }}
    </div>
    <div class="col p-3 d-flex justify-content-start">
      {{ getTypeById(payment.type_id) }}
    </div>
    <div class="col p-3 d-flex justify-content-start">
      {{ payment.date }}
    </div>
    <div class="col p-3 d-flex justify-content-start">
      {{ payment.summ }}
    </div>
    <div class="col p-3 d-flex justify-content-start">
      {{ getSourceById(payment.source_id) }}
    </div>
    <div class="col p-3 d-flex justify-content-center">
      <span :class="getClass" class="status">
        {{ getStatusById(payment.status_id) }}
      </span>
    </div>
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
    getClass() {
      if (this.payment.status_id === 1) {
        return "grey";
      } else if (this.payment.status_id === 2) {
        return "orange";
      } else if (this.payment.status_id === 3) {
        return "green";
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
.status {
  color: #fff;
  border-radius: 8px;
  max-height: 120px;
  display: flex;
  align-items: center;
  &.grey {
    background-color: #6c757d;
  }

  &.orange {
    background-color: #fd7e14;
  }

  &.green {
    background-color: #28a745;
  }
}
</style>
