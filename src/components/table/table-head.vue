<template>
  <div class="head-table">
    <div class="col d-flex">
      <span>Клиент</span>
      <div class="icons-filter d-flex">
        <img src="../../assets/img/arrow.svg" alt="arr" />
        <img src="../../assets/img/arrow.svg" alt="arr" class="rotate" />
      </div>
    </div>
    <div class="col">Договор №</div>
    <div class="col">
      Тип платежа
      <div class="icons-filter d-flex">
        <img src="../../assets/img/arrow.svg" alt="arr" />
        <img src="../../assets/img/arrow.svg" alt="arr" class="rotate" />
      </div>
    </div>
    <div class="col">
      Дата
      <div class="icons-filter d-flex">
        <img src="../../assets/img/arrow.svg" alt="arr" />
        <img src="../../assets/img/arrow.svg" alt="arr" class="rotate" />
      </div>
    </div>
    <div class="col">Сумма (руб)</div>
    <div class="col">Источник платежа</div>
    <div class="col">
      Статус
      <div class="icons-filter d-flex">
        <img src="../../assets/img/arrow.svg" alt="arr" />
        <img src="../../assets/img/arrow.svg" alt="arr" class="rotate" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
