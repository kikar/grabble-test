class MainController {
  /** @ngInject */
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  $onInit() {
    this.blocks = [
      {
        type: "text",
        title: "This is a title",
        body: "This is body text"
      },
      {
        type: "products",
        products: [167687, 168012]
      },
      {
        type: "text",
        title: "Title of final text block",
        body: "This is body text again"
      }
    ];
  }

  editBlock(block) {
    const modal = this.$uibModal.open({
      component: 'blockModal',
      resolve: {
        block: () => {
          return angular.copy(block);
        }
      }
    });

    modal.result
    .then(updatedBlock => {
      angular.copy(updatedBlock, block);
    });
  }

  removeBlock(index) {
    this.blocks.splice(index, 1);
  }

  addBlock(type) {
    const modal = this.$uibModal.open({
      component: 'blockModal',
      resolve: {
        block: () => {
          return {
            type
          };
        }
      }
    });

    modal.result
    .then(result => {
      console.log('Close', result);
    }, reason => {
      console.log('Dismiss', reason);
    });
  }
}

export const main = {
  template: require('./main.html'),
  controller: MainController
};
