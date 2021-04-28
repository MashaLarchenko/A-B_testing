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
            cardsList: document.querySelector(this.selectors.container).shadowRoot.childNodes[0].childNodes[1].childNodes[8],
            container: document.querySelector(this.selectors.container).shadowRoot.childNodes[0].childNodes[1],
        };
    },

    createAdversitingBlock: function () {
        var adversitingContainer = document.createElement('div');
        adversitingContainer.classList.add('adversiting_container');
        var _this = this;

        var title = this.createEl('h3', "adversiting_title", _this.config.title,
            'font-family: "Helvetica"; font-size: 16px; color: #ffffff;'
        );

        var description = this.createEl('p', "adversiting_description", _this.config.description,
            'font-family: "Helvetica"; font-size: 14px; color: #e7e6e6;text-align: center; line-height: 20px;'
        );

        var button = this.createEl('button', "adversiting_btn", 'Contact now',
            'font-family: "Helvetica"; font-size: 18px;color: #ffffff; line-height: 32px; height: 30px;background: #42b4e6; border-radius: 2px;'
        );
        adversitingContainer.style.cssText = 'width: 100%;display: flex;flex-direction: column; align-items: center;background-image: url("https://github.com/MashaLarchenko/A-B_testing/blob/test1/assets/Horizontal_Small_Image%20only-1x.png");';
        adversitingContainer.appendChild(title);
        adversitingContainer.appendChild(description);

        adversitingContainer.appendChild(button);

        _this.nodes.cardsList.after(adversitingContainer);
    },

    createEl: function (tag, className, content, style) {
        var elem = document.createElement(tag);
        elem.classList.add(className);
        elem.innerHTML = content;
        elem.style.cssText = style;
        return elem;
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


// work

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
//             cardsList:  document.querySelector(this.selectors.container).shadowRoot.childNodes[0].childNodes[1].childNodes[8],
//             container: document.querySelector(this.selectors.container).shadowRoot.childNodes[0].childNodes[1],
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
//         _this.nodes.cardsList.after(adversitingContainer);
//     },

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


// current version 619 

// var UXD_619 = {
//     config: {
//         "title": 'Contact Sales',
//         "description": 'Start your sales inquiry online and an expert in your country will connect with you.',
//     },

//     selectors: {
//         cardsList: '.cards-list',
//         container: 'product-cards-wrapper'
//     },

//     getNodes: function () {
//         this.nodes = {
//             cardsList: document.querySelector(this.selectors.container).shadowRoot.childNodes[0].childNodes[1].childNodes[8],
//             container: document.querySelector(this.selectors.container).shadowRoot.childNodes[0].childNodes[1],
//         };
//     },

//     createAdversitingBlock: function () {
//         var adversitingContainer = document.createElement('div');
//         adversitingContainer.classList.add('adversiting_container');
//         var _this = this;

//         var title = this.createEl('h3', "adversiting_title", _this.config.title,
//             'font-family: "Helvetica"; font-size: 30px; color: #ffffff; margin: 5px;'
//         );

//         var description = this.createEl('p', "adversiting_description", _this.config.description,
//             'font-family: "Helvetica"; font-size: 14px; color: #e7e6e6;text-align: center; line-height: 20px;'
//         );

//         var button = this.createEl('button', "adversiting_btn", 'Contact now',
//             'font-family: "Helvetica"; font-size: 18px;color: #ffffff; line-height: 32px; height: 30px; background: #42b4e6; border: none; border-radius: 2px;'
//         );
      
//         adversitingContainer.style.cssText = 'width: 100%; display: flex; flex-direction: column; align-items: center; padding: 15px; background-image:         url("https://github.com/MashaLarchenko/A-B_testing/blob/test1/assets/Horizontal_Small_Image%20only-1x.png");';
//         adversitingContainer.appendChild(title);
//         adversitingContainer.appendChild(description);

//         adversitingContainer.appendChild(button);

//         _this.nodes.cardsList.after(adversitingContainer);
//     },

//     createEl: function (tag, className, content, style) {
//         var elem = document.createElement(tag);
//         elem.classList.add(className);
//         elem.innerHTML = content;
//         elem.style.cssText = style;
//         return elem;
//     },

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
