var UXD_619 = {
    config: {
        "title": 'Contact sales',
        "description": 'Start your sales inquiry online and an expert in your country will connect with you.',
    },

    selectors: {
        cardsList: '.cards-list',
        container: 'product-cards-wrapper'
    },

    getNodes: function () {
        this.nodes = {
            cardsList:  document.querySelector('product-cards-wrapper').shadowRoot.childNodes[0].childNodes[1].childNodes[9],
            container: document.querySelector('product-cards-wrapper').shadowRoot.childNodes[0].childNodes[1],
        };
    },

    createAdversitingBlock: function () {
        var adversitingContainer = document.createElement('div');
        adversitingContainer.classList.add('adversiting_container');
        var _this = this;

        var content = '<h3 class="adversiting_title">' + _this.config.title + '</h3>' +
            '<p class="adversiting_description">' + _this.config.description + '</p>' +
            '<button class="adversiting_btn"> Contact now </button>';

        adversitingContainer.innerHTML = content;
        _this.nodes.cardsList.after(adversitingContainer);
    },

    init: function () {
        if (document.readyState !== 'loading') {
            this.getNodes();
            this.createAdversitingBlock();
        } else {
            var _this = this;
            window.addEventListener('load', function () {
                _this.getNodes();
                _this.createAdversitingBlock();
            });
        }
    },
};

UXD_619.init();


// var UXD_619 = {
//     config: {
//         "title": 'Contact sales',
//         "description": 'Start your sales inquiry online and an expert in your country will connect with you.',
//     },

//     selectors: {
//         cardsList: '.cards-list',
//         container: 'product-cards-wrapper'
//     },

//     getNodes: function () {
//         this.nodes = {
//             cardsList:  document.querySelector('product-cards-wrapper').shadowRoot.childNodes[0].childNodes[1].childNodes[9],
//             container: document.querySelector('product-cards-wrapper').shadowRoot.childNodes[0].childNodes[1],
//         };
//     },

//     createAdversitingBlock: function () {
//         var adversitingContainer = document.createElement('div');
//         adversitingContainer.classList.add('adversiting_container');
//         var _this = this;

//         var content = '<h3 class="adversiting_title">' + _this.config.title + '</h3>' +
//             '<p class="adversiting_description">' + _this.config.description + '</p>' +
//             '<button class="adversiting_btn"> Contact now </button>';

//         adversitingContainer.innerHTML = content;
//         console.log(_this.nodes.cardsList);
//         _this.nodes.cardsList.after(adversitingContainer);
//     },

//     // addBlockToPage: function () {
//     //     console.log(this.nodes, 'THIS');
//     //     var observer = new MutationObserver(this.createAdversitingBlock);
//     //     observer.observe(this.nodes.cardsList, {
//     //         childList: true,
//     //         subtree: true
//     //     });
//     // },

//     init: function () {
//         if (document.readyState !== 'loading') {
//             this.getNodes();
//             this.createAdversitingBlock();
//         } else {
//             var _this = this;
//             window.addEventListener('load', function () {
//                 _this.getNodes();
//                 _this.createAdversitingBlock();
//             });
//         }
//     },
// };

// UXD_619.init();
