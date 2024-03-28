<template>
  <div class="head-table">
    <div class="col d-flex justify-content-start">
      <span>Клиент</span>
      <SortsActions :fieldSort="'client'" />
    </div>
    <div class="col d-flex justify-content-start">Договор №</div>
    <div class="col d-flex justify-content-start">
      Тип платежа
      <SortsActions :fieldSort="'type_id'" />
    </div>
    <div class="col d-flex justify-content-start">
      Дата
      <SortsActions :fieldSort="'date'" />
    </div>
    <div class="col d-flex justify-content-start">Сумма (руб)</div>
    <div class="col d-flex justify-content-start">Источник платежа</div>
    <div class="col d-flex justify-content-start">
      Статус
      <SortsActions :fieldSort="'status_id'" />
    </div>
  </div>
</template>
<script>
import SortsActions from "../sorts-actions/sorts-actions.vue";

export default {
  components: {
    SortsActions,
  },
};
</script>

<style lang="scss" scoped>
.col {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icons-filter {
  display: flex;
  flex-direction: column;

  img {
    height: 10px;
    width: 10px;
  }

  .rotate {
    transform: rotate(180deg);
  }
}
</style>
