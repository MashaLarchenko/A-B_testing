//var2

var UXD_619 = {
    config: {
        "title": 'Contact Sales',
        "description": 'Start your sales inquiry',
    },

    selectors: {
        cardsList: '.cards-list',
        productContainer: 'product-cards-wrapper'
    },

    getNodes: function () {
        this.nodes = {
            cardsList: null,
            productContainer: document.querySelector(this.selectors.productContainer),
        };
    },

    createAdversitingBlock: function () {
        this.nodes.cardsList = this.nodes.productContainer ? this.nodes.productContainer.shadowRoot.childNodes[0].childNodes[1].childNodes[8] : null;
        var adversitingContainer = document.createElement('div');
        var adversitingContent = document.createElement('div');
        adversitingContainer.classList.add('adversiting_container');
        adversitingContent.classList.add('adversiting_content');
        var _this = this;
      
        var img  = document.createElement('img');
     	  img.src = 'https://html5css.ru/css/img_lights.jpg';
      	img.style.width = '50%';
      	img.style.heigth = '200px';

        var title = this.createEl('h3', "adversiting_title", _this.config.title,
            'font-size: 16px; color: #333; line-height: 20px;'
        );

        var description = this.createEl('p', "adversiting_description", _this.config.description,
            'font-size: 30px; color: #333; line-height: 35px; text-align: center; margin: 0 0 15px 0;'
        );

        var button = this.createEl('button', "adversiting_btn", 'Contact now >',
        'font-size: 18px; height: 40px; color: #fff; background: #42b4e6; border: none; border-radius: 2px; padding: 5px 40px;'
    );
      
        adversitingContainer.style.cssText = 'width: 100%; display: flex; flex-direction: row;justify-content: space-around; align-items: center; padding: 15px;';
        adversitingContent.style.cssText = 'display: flex; flex-direction: column; align-self: flex-end; align-items: flex-start;';
        adversitingContainer.appendChild(img); 
        adversitingContainer.appendChild(adversitingContent); 
        adversitingContent.appendChild(title);
        adversitingContent.appendChild(description);
        adversitingContent.appendChild(button);

        return this.nodes.cardsList ? _this.nodes.cardsList.after(adversitingContainer) : null;
    },

    createEl: function (tag, className, content, style) {
        var elem = document.createElement(tag);
        elem.classList.add(className);
        elem.innerHTML = content;
        elem.style.cssText = style;
        return elem;
    },

    setObserver: function () {
        var createAdversitingBlock = this.createAdversitingBlock.bind(this);
        var observer = new MutationObserver(createAdversitingBlock);
        observer.observe(this.nodes.productContainer, {
            attributes: true,
            childList: true,
            subtree: true
        });
    },

    init: function () {
        if (document.readyState !== 'loading') {
            this.getNodes();
            this.createAdversitingBlock();
            this.setObserver();
        } else {
            var _this = this;
            window.addEventListener('load', function () {
                _this.getNodes();
                _this.createAdversitingBlock();
                _this.setObserver();
            });
        }
    },
};

UXD_619.init();

//var 3

var UXD_619 = {
    config: {
        "title": 'Contact Sales',
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
            'font-family: "Helvetica"; font-size: 30px; color: #ffffff; margin: 5px;'
        );

        var description = this.createEl('p', "adversiting_description", _this.config.description,
            'font-family: "Helvetica"; font-size: 14px; color: #e7e6e6;text-align: center; line-height: 20px;'
        );

        var button = this.createEl('button', "adversiting_btn", 'Contact now',
            'font-family: "Helvetica"; font-size: 18px;color: #ffffff; line-height: 32px; height: 30px; background: #42b4e6; border: none; border-radius: 2px;'
        );

        adversitingContainer.style.cssText = 'width: 100%; display: flex; flex-direction: column; align-items: center; padding: 15px;background: url(https://html5css.ru/css/img_lights.jpg) no-repeat; background-size: cover;';
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

//var3.2

var UXD_619 = {
    config: {
        "title": 'Contact Sales',
        "description": 'Start your sales inquiry online and an expert in your country will connect with you.',
    },

    selectors: {
        cardsList: '.cards-list',
        productContainer: 'product-cards-wrapper'
    },

    getNodes: function () {
        this.nodes = {
            cardsList: null,
            productContainer: document.querySelector(this.selectors.productContainer),
        };
    },

    createAdversitingBlock: function () {
        this.nodes.cardsList = this.nodes.productContainer ? this.nodes.productContainer.shadowRoot.childNodes[0].childNodes[1].childNodes[8] : null;
        var adversitingContainer = document.createElement('div');
        adversitingContainer.classList.add('adversiting_container');
        var _this = this;

        var title = this.createEl('h3', "adversiting_title", _this.config.title,
            'font-family: "Helvetica"; font-size: 30px; color: #ffffff; margin: 5px;'
        );

        var description = this.createEl('p', "adversiting_description", _this.config.description,
            'font-family: "Helvetica"; font-size: 14px; color: #e7e6e6;text-align: center; line-height: 20px;'
        );

        var button = this.createEl('button', "adversiting_btn", 'Contact now',
            'font-family: "Helvetica"; font-size: 18px;color: #ffffff; line-height: 32px; padding: 5px 40px; background: #42b4e6; border: none; border-radius: 2px;'
        );

        adversitingContainer.style.cssText = 'width: 100%; display: flex; flex-direction: column; align-items: center; padding: 15px;background: url(https://html5css.ru/css/img_lights.jpg) no-repeat; background-size: cover;';
        adversitingContainer.appendChild(title);
        adversitingContainer.appendChild(description);
        adversitingContainer.appendChild(button);
        return this.nodes.cardsList ? _this.nodes.cardsList.after(adversitingContainer) : null;
    },

    createEl: function (tag, className, content, style) {
        var elem = document.createElement(tag);
        elem.classList.add(className);
        elem.innerHTML = content;
        elem.style.cssText = style;
        return elem;
    },

    setObserver: function () {
        var createAdversitingBlock = this.createAdversitingBlock.bind(this);
        var observer = new MutationObserver(createAdversitingBlock);
        observer.observe(this.nodes.productContainer, {
            attributes: true,
            childList: true,
            subtree: true
        });
    },

    init: function () {
        if (document.readyState !== 'loading') {
            this.getNodes();
            this.createAdversitingBlock();
            this.setObserver();
        } else {
            var _this = this;
            window.addEventListener('load', function () {
                _this.getNodes();
                _this.createAdversitingBlock();
                _this.setObserver();
            });
        }
    },
};

UXD_619.init();