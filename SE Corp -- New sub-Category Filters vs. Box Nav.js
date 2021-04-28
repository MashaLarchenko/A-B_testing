var UXD_619 = {
    config: {
    },

    selectors: {
        productTypesList: '.data-filter-value'
    },

    getNodes: function () {
        this.nodes = {
            productTypesList: document.querySelectorAll(this.selectors.poductTypesList),
        };
    },

    createAdversitingBlock: function () {
        var boxNavigationWrapper  = document.createElement('section');

        var productList = this.nodes.productTypesList;

        for(var i = 0; i > productList.length; i++) {

            this.createCardEl(productList.dataset.filterValue, '')
         
        }


        boxNavigationWrapper.classList.add('boxNavigation_container');
        var _this = this;

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

    createCardEl: function (content, image) {
        var boxNavigationCard  = document.createElement('div');
        var img = document.createElement('img');
        var description = document.createElement('p');
        img.src = image;
        description.innerHTML = content;
        boxNavigationCard.appendChild(img);
        boxNavigationCard.appendChild(description);

        return boxNavigationCard;
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
