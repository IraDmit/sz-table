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
            <component
              :is="field.component"
              v-for="(field, idx) in fieldsList"
              :key="'field' + idx"
              :placeholder="field.placeholder"
              :options="field.options"
              :title="field.title"
              :errorText="field.errorText"
              :type="field.type"
              :showError="showError"
              :name="field.name"
              :clear-value="clearValues"
              @updateValue="updateValue"
            ></component>
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
import ModalInput from "../dinamic-form/fields/modal-input.vue";
import ModalSelect from "../dinamic-form/fields/modal-select.vue";
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
      formData: {},
    };
  },
  computed: {
    ...mapGetters(["getTypes", "getStatuses", "getSources"]),

    fieldsList() {
      return [
        {
          component: ModalInput,
          title: "Клиент",
          placeholder: "Введите ФИО",
          errorText: "Пожалуйста, введите клиента",
          type: "text",
          name: "client",
        },
        {
          component: ModalInput,
          title: "Договор №",
          placeholder: "Введите номер договора",
          errorText: "Пожалуйста, введите номер договора",
          type: "text",
          name: "contract",
        },
        {
          component: ModalSelect,
          title: "Тип оплаты",
          placeholder: "Не выбрано",
          errorText: "Пожалуйста, выберите тип оплаты",
          options: this.getTypes,
          name: "type_id",
        },
        {
          component: ModalInput,
          title: "Дата оплаты",
          errorText: "Пожалуйста, введите дату оплаты",
          type: "date",
          name: "date",
        },
        {
          component: ModalInput,
          title: "Сумма оплаты",
          placeholder: "Введите сумму",
          errorText: "Пожалуйста, введите сумму оплаты",
          type: "number",
          name: "summ",
        },
        {
          component: ModalSelect,
          title: "Источник платежа",
          placeholder: "Не выбрано",
          errorText: "Пожалуйста, выберите источник платежа",
          options: this.getSources,
          name: "source_id",
        },
        {
          component: ModalSelect,
          title: "Статус",
          placeholder: "Не оплачено",
          errorText: "Пожалуйста, выберите статус",
          options: this.getStatuses,
          name: "status_id",
        },
      ];
    },
    isFormValid() {
      if (!Object.keys(this.formData).length) return false;
      return Object.values(this.formData).every((value) => !!value);
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
        this.clearValues = true;
        setTimeout(() => {
          this.clearValues = false;
        }, 300);
      }
    },
    clearForm() {
      Object.keys(this.formData).forEach((key) => {
        this.formData[key] = null;
      });
    },
    updateValue(key, newValue) {
      this.$set(this.formData, key, newValue);
      // this.formData[key] = newValue;
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
