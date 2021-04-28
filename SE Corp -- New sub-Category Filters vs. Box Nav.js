var UXD_610 = {
    config: {
    },

    selectors: {
        productTypesList: '.filter__list',
        resultContainer: '.pes-filter-results-container',
        observerSelector: '.products-list',
    },

    getNodes: function () {
        this.nodes = {
            productTypesList: document.querySelector(this.selectors.productTypesList),
            resultContainer: document.querySelector(this.selectors.resultContainer),
            observerSelector: document.querySelector(this.selectors.observerSelector),
        };
    },

    createBoxNavigationBlock: function () {
        if (this.nodes.productTypesList.children) {
            this.nodes.productList = this.nodes.productTypesList.children;
            var boxNavigationWrapper = document.createElement('section');
            var productList = this.nodes.productTypesList.children;
            for (var i = 0; i < productList.length; i++) {
                console.log(productList[i].dataset.filterValue);
                boxNavigationWrapper.appendChild(this.createCardEl(productList[i].dataset.filterValue,
                    'https://raw.githubusercontent.com/MashaLarchenko/A-B_testing/test1/assets/SECORP/' + i + '.GIF'));
            }
            boxNavigationWrapper.classList.add('boxNavigation_container');
            this.nodes.resultContainer.before(boxNavigationWrapper);
        }

    },

    createCardEl: function (content, image) {
        var boxNavigationCard = document.createElement('div');
        var img = document.createElement('img');
        var description = document.createElement('p');
        boxNavigationCard.classList.add('boxNavigation_item');
        img.src = image;
        description.innerHTML = content;
        boxNavigationCard.appendChild(img);
        boxNavigationCard.appendChild(description);
        console.log(boxNavigationCard, 'boxNavigationCard');
        return boxNavigationCard;
    },


    // setObserver: function () {
    //     console.log('OBS');
    //     var createBoxNavigationBlock = this.createBoxNavigationBlock.bind(this);
    //     var observer = new MutationObserver(createBoxNavigationBlock);
    //     observer.observe(this.nodes.productTypesList, {
    //         attributes: true,
    //         childList: true,
    //         subtree: true
    //     });
    // },

    init: function () {
        if (document.readyState !== 'loading') {
            this.getNodes();
            this.createBoxNavigationBlock();
            // this.setObserver();
        } else {
            var _this = this;
            window.addEventListener('load', function () {
                _this.getNodes();
                _this.createBoxNavigationBlock();
                // _this.setObserver();
            });
        }
    },
};

UXD_610.init();
