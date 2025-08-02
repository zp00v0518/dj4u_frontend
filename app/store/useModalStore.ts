import { defineStore } from "pinia";
import { useModal, type UseModalReturnType } from "vue-final-modal";
import { defineAsyncComponent } from "vue";

interface IModals extends Record<string, Maybe<UseModalReturnType<any>>> {
  AuthForm: Maybe<UseModalReturnType<any>>;
  "forgot-pass": Maybe<UseModalReturnType<any>>;
  "reset-pass": Maybe<UseModalReturnType<any>>;
  "sign-up": Maybe<UseModalReturnType<any>>;
}

interface IModalStoreState {
  modals: IModals;
  openingModals: string[];
  sameComponent: Record<string, string>;
}

export default defineStore("modalStore", {
  state: (): IModalStoreState => {
    return {
      modals: {
        AuthForm: undefined,
        "forgot-pass": undefined,
        "reset-pass": undefined,
        "sign-up": undefined,
      },
      openingModals: [],
      sameComponent: {},
    };
  },

  actions: {
    async openModal(
      modalName: string,
      attrs: Record<string, any> = {},
    ): Promise<void> {
      this.openingModals.push(modalName);

      this.modals[modalName] = undefined;
      if (!this.modals[modalName]) {
        const modalComponent = defineAsyncComponent(
          () =>
            import(
              `../components/modals/${
                this.sameComponent[modalName] || modalName
              }.vue`
            ),
        );
        this.modals[modalName] = useModal({
          component: modalComponent,
          attrs: {
            ...attrs,
          },
        });
      } else {
        this.modals[modalName].patchOptions({
          attrs: Object.assign({}, this.modals[modalName].options.attrs, attrs),
        });
      }
      this.modals[modalName].open();
      this.openingModals = this.openingModals.filter(
        (item) => item !== modalName,
      );
    },

    async closeModal(modalName: string): Promise<void> {
      this.modals[modalName]?.close();
    },
  },
});
