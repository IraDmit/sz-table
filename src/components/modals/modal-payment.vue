<template>
  <div class="modal-backdrop" v-if="showModal">
    <div class="modal" :class="{ show: showModal }">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Добавление нового платежа</h5>
            <div class="btn-close" @click="$emit('closeModal')"></div>
          </div>
          <form class="modal-body" @submit.prevent="submitForm" ref="form">
            <div class="mb-3 field">
              <label for="client" class="form-label"
                ><span>*</span>Клиент</label
              >
              <input
                type="text"
                class="form-control"
                id="client"
                v-model="formData.client"
                placeholder="Введите ФИО"
                :class="{ 'is-invalid': !isFieldValid('client') && showError }"
                required
              />
              <div class="error" v-if="!isFieldValid('client') && showError">
                Пожалуйста, введите клиента
              </div>
            </div>
            <div class="mb-3 field">
              <label for="contractNumber" class="form-label"
                ><span>*</span>Договор №</label
              >
              <input
                type="text"
                class="form-control"
                id="contractNumber"
                v-model="formData.contract"
                placeholder="Введите номер договора"
                :class="{
                  'is-invalid': !isFieldValid('contract') && showError,
                }"
                required
              />
              <div class="error" v-if="!isFieldValid('contract') && showError">
                Пожалуйста, введите номер договора
              </div>
            </div>
            <div class="mb-3 field">
              <label for="paymentType" class="form-label"
                ><span>*</span>Тип оплаты</label
              >
              <select
                class="form-select"
                id="paymentType"
                :class="{ 'is-invalid': !isFieldValid('type_id') && showError }"
                v-model="formData.type_id"
                required
              >
                <option :value="null" selected>Не выбрано</option>
                <option
                  :value="type.id"
                  v-for="(type, idx) in getTypes"
                  :key="'type' + idx"
                >
                  {{ type.title }}
                </option>
              </select>
              <div class="error" v-if="!isFieldValid('type_id') && showError">
                Пожалуйста, выберите тип оплаты
              </div>
            </div>
            <div class="mb-3 field">
              <label for="paymentDate" class="form-label"
                ><span>*</span>Дата оплаты</label
              >
              <input
                type="date"
                class="form-control"
                id="paymentDate"
                :class="{ 'is-invalid': !isFieldValid('date') && showError }"
                v-model="formData.date"
                required
              />
              <div class="error" v-if="!isFieldValid('date') && showError">
                Пожалуйста, введите дату оплаты
              </div>
            </div>
            <div class="mb-3 field">
              <label for="paymentAmount" class="form-label"
                ><span>*</span>Сумма оплаты</label
              >
              <input
                type="number"
                class="form-control"
                :class="{ 'is-invalid': !isFieldValid('summ') && showError }"
                id="paymentAmount"
                v-model="formData.summ"
                placeholder="Введите сумму"
                required
              />
              <div class="error" v-if="!isFieldValid('summ') && showError">
                Пожалуйста, введите сумму оплаты
              </div>
            </div>
            <div class="mb-3 field">
              <label for="paymentSource" class="form-label"
                ><span>*</span>Источник платежа</label
              >
              <select
                class="form-select"
                id="paymentSource"
                :class="{
                  'is-invalid': !isFieldValid('source_id') && showError,
                }"
                v-model="formData.source_id"
                required
              >
                <option :value="null" selected>Не выбрано</option>
                <option
                  :value="source.id"
                  v-for="(source, idx) in getSources"
                  :key="'source' + idx"
                >
                  {{ source.title }}
                </option>
              </select>
              <div class="error" v-if="!isFieldValid('source_id') && showError">
                Пожалуйста, выберите источник платежа
              </div>
            </div>
            <div class="mb-3 field">
              <label for="status" class="form-label"
                ><span>*</span>Статус</label
              >
              <select
                class="form-select"
                id="status"
                :class="{
                  'is-invalid': !isFieldValid('status_id') && showError,
                }"
                v-model="formData.status_id"
                required
              >
                <option :value="null">Не оплачено</option>

                <option
                  :value="status.id"
                  v-for="(status, idx) in getStatuses"
                  :key="'status' + idx"
                >
                  {{ status.title }}
                </option>
              </select>
              <div class="error" v-if="!isFieldValid('status_id') && showError">
                Пожалуйста, выберите статус
              </div>
            </div>
          </form>
          <div class="modal-footer d-flex justify-content-between">
            <div class="btn btn-secondary" @click="$emit('closeModal')">
              Отменить
            </div>
            <div
              class="btn btn-primary"
              :disabled="!isFormValid"
              @click="submitForm"
            >
              Добавить оплату
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { sendData } from "../../services";
export default {
  props: {
    showModal: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      showError: false,
      formData: {
        client: "",
        contract: "",
        type_id: null,
        date: "",
        summ: "",
        status_id: null,
        source_id: null,
      },
    };
  },
  computed: {
    ...mapGetters(["getTypes", "getStatuses", "getSources"]),
    isFormValid() {
      return Object.values(this.formData).every((value) => value !== "");
    },
  },
  methods: {
    submitForm() {
      this.showError = true;
      if (this.isFormValid) {
        const data = sendData(this.formData);
        this.showError = false;
        this.$emit("updateData", data);
        this.$emit("closeModal");
        this.clearForm();
      }
    },
    isFieldValid(fieldName) {
      return !!this.formData[fieldName];
    },
    clearForm() {
      Object.keys(this.formData).forEach((key) => {
        this.formData[key] = null;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;

  .field {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
    padding: 10px;

    .form-label {
      span {
        color: #ff3333;
      }

      text-align: end;
    }
  }

  .error {
    color: #ff3333;
    grid-column: 1 / span 2;

    position: absolute;
    bottom: -20%;

    right: 0;
  }
}

.modal.show {
  display: block;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1040;
}
</style>
