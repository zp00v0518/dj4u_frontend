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
  modalsUrl: string[];
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
      modalsUrl: ["support"],
    };
  },

  actions: {
    async openModal(
      modalName: string,
      attrs: Record<string, any> = {},
    ): Promise<void> {
      this.openingModals.push(modalName);
      console.log(modalName);

      this.modals[modalName] = undefined;
      try {
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
              modalName,
              ...attrs,
            },
          });
        } else {
          this.modals[modalName].patchOptions({
            attrs: Object.assign(
              {},
              this.modals[modalName].options.attrs,
              attrs,
            ),
          });
        }
      } catch (error) {
        console.log(error);
      }

      this.modals[modalName].open();
      this.openingModals = this.openingModals.filter(
        (item) => item !== modalName,
      );
    },

    async closeModal(modalName: string): Promise<void> {
      await this.removeModalQuery(modalName);
      this.modals[modalName]?.close();
    },

    async removeModalQuery(modalName: string): Promise<void> {
      const router = useRouter();
      const { query, hash } = useRoute();
      const newQuery = { ...query, openModal: undefined };
      await router.replace({ hash, query: newQuery });
    },
  },
});
