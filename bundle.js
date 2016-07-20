/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var mainData = __webpack_require__(2);
	var fixtures = __webpack_require__(3);

	describe('intergation test', function () {
	    var allItems;
	    var inputs;

	    beforeEach(function () {
	        allItems = fixtures.loadAllItems();

	        inputs = [
	            'ITEM000001',
	            'ITEM000001',
	            'ITEM000001',
	            'ITEM000001',
	            'ITEM000001',
	            'ITEM000003-2',
	            'ITEM000005',
	            'ITEM000005'
	        ];
	    });

	    it('print correct text', function () {

	        spyOn(console, 'log');

	        mainData.printReceipt(inputs);

	        var expectText =
	            '***<没钱赚商店>收据***\n' +
	            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
	            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
	            '名称：方便面，数量：2袋，单价：5.50(元)，小计：10.45(元)\n' +
	            '----------------------\n' +
	            '买二赠一商品：\n' +
	            '名称：雪碧，数量：1瓶\n' +
	            '名称：荔枝，数量：0斤\n' +
	            '----------------------\n' +
	            '总计：52.45(元)\n' +
	            '节省：3.55(元)\n' +
	            '**********************';

	        expect(console.log).toHaveBeenCalledWith(expectText);

	    });
	});

	describe('unit test', function () {

	    describe("buildCartItems", function () {
	        var allItems;
	        var inputs;

	        beforeEach(function () {
	            allItems = fixtures.loadAllItems();
	            inputs = [
	                'ITEM000001',
	                'ITEM000001',
	                'ITEM000001',
	                'ITEM000001',
	                'ITEM000001',
	                'ITEM000003-2',
	                'ITEM000005',
	                'ITEM000005'
	            ];
	        });

	        it("print a countItems array", function () {
	            var expectText = [
	                {
	                    item: {
	                        barcode: 'ITEM000001',
	                        name: '雪碧',
	                        unit: '瓶',
	                        price: 3.00
	                    },
	                    count: 5
	                },
	                {
	                    item: {
	                        barcode: 'ITEM000003',
	                        name: '荔枝',
	                        unit: '斤',
	                        price: 15.00
	                    },
	                    count: 2
	                },
	                {
	                    item: {
	                        barcode: 'ITEM000005',
	                        name: '方便面',
	                        unit: '袋',
	                        price: 5.50
	                    },
	                    count: 2
	                }
	            ];

	            expect(mainData.buildCartItems(inputs, allItems)).toEqual(expectText);
	        });
	    });

	    describe("buildReceiptItems", function () {
	        var cartItems;
	        var promotions;

	        beforeEach(function () {
	            promotions = fixtures.loadPromotions();
	            cartItems = [
	                {
	                    item: {
	                        barcode: 'ITEM000001',
	                        name: '雪碧',
	                        unit: '瓶',
	                        price: 3.00
	                    },
	                    count: 5
	                },
	                {
	                    item: {
	                        barcode: 'ITEM000003',
	                        name: '荔枝',
	                        unit: '斤',
	                        price: 15.00
	                    },
	                    count: 2
	                },
	                {
	                    item: {
	                        barcode: 'ITEM000005',
	                        name: '方便面',
	                        unit: '袋',
	                        price: 5.50
	                    },
	                    count: 2
	                }
	            ];
	        });

	        it("print a receiptItems array", function () {
	            var expectText = [
	                {
	                    cartItem: {
	                        item: {
	                            barcode: 'ITEM000001',
	                            name: '雪碧',
	                            unit: '瓶',
	                            price: 3.00
	                        },
	                        count: 5
	                    },
	                    saved: 3.00,
	                    subTotal: 12.00,
	                    saveCount: 1,
	                    promotionType: 'BUY_TWO_GET_ONE_FREE'
	                },
	                {
	                    cartItem: {
	                        item: {
	                            barcode: 'ITEM000003',
	                            name: '荔枝',
	                            unit: '斤',
	                            price: 15.00
	                        },
	                        count: 2
	                    },
	                    saved: 0.00,
	                    subTotal: 30.00,
	                    saveCount: 0,
	                    promotionType: 'BUY_TWO_GET_ONE_FREE'
	                },
	                {
	                    cartItem: {
	                        item: {
	                            barcode: 'ITEM000005',
	                            name: '方便面',
	                            unit: '袋',
	                            price: 5.50
	                        },
	                        count: 2
	                    },
	                    saved: 0.55,
	                    subTotal: 10.45,
	                    saveCount: 0,
	                    promotionType: '95_DISCOUNT'
	                }];

	            expect(mainData.buildReceiptItems(cartItems, promotions)).toEqual(expectText);
	        });
	    });

	    describe("buildReceipt", function () {
	        var receiptItems;

	        beforeEach(function () {
	            receiptItems = [
	                {
	                    cartItem: {
	                        item: {
	                            barcode: 'ITEM000001',
	                            name: '雪碧',
	                            unit: '瓶',
	                            price: 3.00
	                        },
	                        count: 5
	                    },
	                    saved: 3.00,
	                    subTotal: 12.00
	                },
	                {
	                    cartItem: {
	                        item: {
	                            barcode: 'ITEM000003',
	                            name: '荔枝',
	                            unit: '斤',
	                            price: 15.00
	                        },
	                        count: 2
	                    },
	                    saved: 0,
	                    subTotal: 30.00
	                },
	                {
	                    cartItem: {
	                        item: {
	                            barcode: 'ITEM000005',
	                            name: '方便面',
	                            unit: '袋',
	                            price: 5.50
	                        },
	                        count: 2
	                    },
	                    saved: 0.55,
	                    subTotal: 10.45
	                }];
	        });

	        it("print a receipt object", function () {
	            var expectText =
	            {
	                receiptItem: [
	                    {
	                        cartItem: {
	                            item: {
	                                barcode: 'ITEM000001',
	                                name: '雪碧',
	                                unit: '瓶',
	                                price: 3.00
	                            },
	                            count: 5
	                        },
	                        saved: 3.00,
	                        subTotal: 12.00
	                    },
	                    {
	                        cartItem: {
	                            item: {
	                                barcode: 'ITEM000003',
	                                name: '荔枝',
	                                unit: '斤',
	                                price: 15.00
	                            },
	                            count: 2
	                        },
	                        saved: 0,
	                        subTotal: 30.00
	                    },
	                    {
	                        cartItem: {
	                            item: {
	                                barcode: 'ITEM000005',
	                                name: '方便面',
	                                unit: '袋',
	                                price: 5.50
	                            },
	                            count: 2
	                        },
	                        saved: 0.55,
	                        subTotal: 10.45
	                    }],
	                savedTotal: 3.55,
	                total: 52.45
	            };

	            expect(mainData.buildReceipt(receiptItems)).toEqual(expectText);
	        });
	    });

	    describe("buildPromotionType", function () {
	        var receiptItems = [
	            {
	                cartItem: {
	                    item: {
	                        barcode: 'ITEM000001',
	                        name: '雪碧',
	                        unit: '瓶',
	                        price: 3.00
	                    },
	                    count: 5
	                },
	                saved: 3.00,
	                subTotal: 12.00,
	                saveCount: 1,
	                promotionType: 'BUY_TWO_GET_ONE_FREE'
	            },
	            {
	                cartItem: {
	                    item: {
	                        barcode: 'ITEM000003',
	                        name: '荔枝',
	                        unit: '斤',
	                        price: 15.00
	                    },
	                    count: 2
	                },
	                saved: 0.00,
	                subTotal: 30.00,
	                saveCount: 0,
	                promotionType: 'BUY_TWO_GET_ONE_FREE'
	            },
	            {
	                cartItem: {
	                    item: {
	                        barcode: 'ITEM000005',
	                        name: '方便面',
	                        unit: '袋',
	                        price: 5.50
	                    },
	                    count: 2
	                },
	                saved: 0.55,
	                subTotal: 10.45,
	                saveCount: 0,
	                promotionType: '95_DISCOUNT'
	            }];

	        it("print a promotion text", function () {
	            var expectText =
	                '----------------------\n' +
	                '买二赠一商品：\n' +
	                '名称：雪碧，数量：1瓶\n' +
	                '名称：荔枝，数量：0斤\n';

	            expect(mainData.promotionsText(receiptItems)).toEqual(expectText);
	        });
	    });
	});


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var fixtures = __webpack_require__(3);

	/*
	 启动 pos 机
	 */
	function printReceipt(inputs) {
	    var allItems = fixtures.loadAllItems();
	    var cartItems = buildCartItems(inputs, allItems);

	    var promotions = fixtures.loadPromotions();
	    var receiptItems = buildReceiptItems(cartItems, promotions);


	    var receipt = buildReceipt(receiptItems);
	    var receiptText = buildReceiptText(receipt, receiptItems);

	    console.log(receiptText);
	}

	/*
	 通过条形码查找对应的商品信息
	 */
	function findItem(barcode, items) {
	    for (var i = 0; i < items.length; i++) {
	        var item = items[i];
	        if (barcode === item.barcode)
	            return item;
	    }
	}

	/*
	 查找购物车商品信息
	 */
	function findCartItem(item, cartItems, count) {
	    for (var i = 0; i < cartItems.length; i++) {
	        if (item === cartItems[i].item) {
	            cartItems[i].count += count;

	            return cartItems;
	        }
	    }
	    cartItems.push({item: item, count: count});

	    return cartItems;
	}

	/*
	 构建购物车商品信息
	 */
	function buildCartItems(inputs, allItems) {
	    var cartItems = [];

	    inputs.forEach(function (input) {
	        var str = input.split("-");
	        var barcode = str[0];
	        var count = parseInt(str[1] || 1);
	        var item = findItem(barcode, allItems);
	        cartItems = findCartItem(item, cartItems, count);
	    });

	    return cartItems;
	}

	/*
	 查找促销类型
	 */
	function findPromotionType(barcode, promotions) {
	    for (var i = 0; i < promotions.length; i++) {
	        var promotion = promotions[i];
	        if (isBarcodeExist(barcode, promotion.barcodes)) {

	            return promotion.type;
	        }
	    }
	}

	/*
	 通过条形码判断是否是促销商品
	 */
	function isBarcodeExist(barcode, barcodes) {
	    for (var i = 0; i < barcodes.length; i++) {
	        if (barcodes[i] == barcode)

	            return true;
	    }
	    return false;
	}

	/*
	 小计购物车单品价格
	 */
	function buildReceiptItems(cartItems, promotions) {
	    var receiptItems = [];

	    cartItems.forEach(function (cartItem) {
	        var saved = 0;
	        var saveCount = 0;
	        var subTotal = cartItem.count * cartItem.item.price;
	        var promotionType = findPromotionType(cartItem.item.barcode, promotions);

	        if (promotionType === 'BUY_TWO_GET_ONE_FREE') {
	            saveCount = parseInt(cartItem.count / 3);
	            saved = saveCount * cartItem.item.price;
	            subTotal -= saved;
	        }

	        if (promotionType === '95_DISCOUNT') {
	            saved = subTotal * 0.05;
	            subTotal -= saved;
	        }

	        receiptItems.push({
	            cartItem: cartItem,
	            saved: saved,
	            subTotal: subTotal,
	            saveCount: saveCount,
	            promotionType: promotionType
	        });
	    });

	    return receiptItems;
	}

	/*
	 计算所有商品的总价和节省价
	 */
	function buildReceipt(receiptItems) {
	    var receipt;
	    var total = 0;
	    var savedTotal = 0;

	    receiptItems.forEach(function (receiptItem) {
	        total += receiptItem.subTotal;
	        savedTotal += receiptItem.saved;
	    });
	    receipt = {receiptItem: receiptItems, savedTotal: savedTotal, total: total};

	    return receipt;
	}

	/*
	 构建小票基本信息
	 */
	function buildReceiptText(receipt, receiptItems) {

	    return '***<没钱赚商店>收据***\n' + text(receipt) + (promotionsText(receiptItems) || '') + '----------------------\n' +
	        '总计：' + formatPrice(receipt.total) + '(元)\n' + '节省：' + formatPrice(receipt.savedTotal) + '(元)\n' + '**********************';
	}

	/*
	 构建小票商品信息
	 */
	function text(receipt) {
	    var text = '';
	    var receiptItems = receipt.receiptItem;

	    receiptItems.forEach(function (receiptItem) {
	        var cartItem = receiptItem.cartItem;
	        text += '名称：' + cartItem.item.name + '，数量：' + receiptItem.cartItem.count + cartItem.item.unit + '，单价：' + formatPrice(cartItem.item.price) + '(元)，小计：' + formatPrice(receiptItem.subTotal) + '(元)\n';
	    });

	    return text;
	}

	/*
	 “买二赠一”的优惠信息
	 */
	function promotionsText(receiptItems) {
	    var text = '';
	    var title = '';

	    receiptItems.forEach(function (receiptItem) {
	        var item = receiptItem.cartItem.item;

	        if (receiptItem.promotionType == 'BUY_TWO_GET_ONE_FREE') {
	            title = (receiptItem.promotionType) ? ('----------------------\n买二赠一商品：\n') : '';

	            text += '名称：' + item.name + '，数量：' + receiptItem.saveCount + item.unit + '\n';
	        }
	    });
	    text = title + text;
	    return text;
	}

	/*
	 价格输出格式化
	 */
	function formatPrice(price) {

	    return price.toFixed(2);
	}

	module.exports = {
	    buildCartItems: buildCartItems,
	    buildReceiptItems: buildReceiptItems,
	    buildReceipt: buildReceipt,
	    printReceipt: printReceipt,
	    promotionsText: promotionsText
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	function loadAllItems() {
	    return [
	        {
	            barcode: 'ITEM000000',
	            name: '可口可乐',
	            unit: '瓶',
	            price: 6.00
	        },
	        {
	            barcode: 'ITEM000001',
	            name: '雪碧',
	            unit: '瓶',
	            price: 3.00
	        },
	        {
	            barcode: 'ITEM000002',
	            name: '苹果',
	            unit: '斤',
	            price: 5.50
	        },
	        {
	            barcode: 'ITEM000003',
	            name: '荔枝',
	            unit: '斤',
	            price: 15.00
	        },
	        {
	            barcode: 'ITEM000004',
	            name: '电池',
	            unit: '个',
	            price: 2.00
	        },
	        {
	            barcode: 'ITEM000005',
	            name: '方便面',
	            unit: '袋',
	            price: 5.50
	        }
	    ];
	}

	function loadPromotions() {
	    return [
	        {
	            type: 'BUY_TWO_GET_ONE_FREE',
	            barcodes: [
	                'ITEM000001',
	                'ITEM000003',
	            ]
	        },
	        {
	            type: '95_DISCOUNT',
	            barcodes: [
	                'ITEM000001',
	                'ITEM000005'
	            ]
	        }
	    ];
	}

	module.exports = {
	    loadAllItems: loadAllItems,
	    loadPromotions: loadPromotions
	};


/***/ }
/******/ ]);