/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/my-nfts",{

/***/ "./pages/my-nfts.js":
/*!**************************!*\
  !*** ./pages/my-nfts.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyAssets; }\n/* harmony export */ });\n/* harmony import */ var _Users_mauriceknecht_Desktop_nft_marketplace_kryptobirdz_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_mauriceknecht_Desktop_nft_marketplace_kryptobirdz_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mauriceknecht_Desktop_nft_marketplace_kryptobirdz_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_mauriceknecht_Desktop_nft_marketplace_kryptobirdz_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../artifacts/contracts/NFT.sol/NFT.json */ \"./artifacts/contracts/NFT.sol/NFT.json\");\n/* harmony import */ var _artifacts_contracts_KBMarket_sol_KBMarket_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../artifacts/contracts/KBMarket.sol/KBMarket.json */ \"./artifacts/contracts/KBMarket.sol/KBMarket.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/mauriceknecht/Desktop/nft-marketplace-kryptobirdz/pages/my-nfts.js\",\n    _s = $RefreshSig$();\n\n// we want to load the users nfts and display\n\n\n\n\n\n\n\nfunction MyAssets() {\n  _s();\n\n  var _this = this;\n\n  // array of nfts\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      nfts = _useState[0],\n      setNFts = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('not-loaded'),\n      loadingState = _useState2[0],\n      setLoadingState = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    loadNFTs();\n  }, []);\n\n  function loadNFTs() {\n    return _loadNFTs.apply(this, arguments);\n  }\n\n  function _loadNFTs() {\n    _loadNFTs = (0,_Users_mauriceknecht_Desktop_nft_marketplace_kryptobirdz_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_mauriceknecht_Desktop_nft_marketplace_kryptobirdz_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {\n      var web3Modal, connection, provider, signer, marketContract, tokenContract, data, tokens;\n      return _Users_mauriceknecht_Desktop_nft_marketplace_kryptobirdz_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())();\n              _context2.next = 3;\n              return web3Modal.connect();\n\n            case 3:\n              connection = _context2.sent;\n              provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(connection); // we need to know who the message.sender is \n\n              signer = provider.getSigner();\n              marketContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_6__.nftmarketaddress, Market.abi, signer);\n              tokenContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_6__.nftaddress, _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_7__.abi, provider);\n              _context2.next = 10;\n              return marketContract.fetchMyNFTs();\n\n            case 10:\n              data = _context2.sent;\n              _context2.next = 13;\n              return Promise.all(data.map( /*#__PURE__*/function () {\n                var _ref = (0,_Users_mauriceknecht_Desktop_nft_marketplace_kryptobirdz_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_mauriceknecht_Desktop_nft_marketplace_kryptobirdz_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(i) {\n                  var tokenUri, meta, price, item;\n                  return _Users_mauriceknecht_Desktop_nft_marketplace_kryptobirdz_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          _context.next = 2;\n                          return tokenContract.tokenURI(i.tokenId);\n\n                        case 2:\n                          tokenUri = _context.sent;\n                          _context.next = 5;\n                          return axios__WEBPACK_IMPORTED_MODULE_4___default().get(tokenUri);\n\n                        case 5:\n                          meta = _context.sent;\n                          price = ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.utils.formatUnits(i.price.toString(), 'ether');\n                          item = {\n                            price: price,\n                            tokenId: i.tokenId.toNumber(),\n                            seller: i.seller,\n                            owner: i.owner,\n                            image: meta.data.image\n                          };\n                          return _context.abrupt(\"return\", item);\n\n                        case 9:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n\n                return function (_x) {\n                  return _ref.apply(this, arguments);\n                };\n              }()));\n\n            case 13:\n              tokens = _context2.sent;\n              setNfts(tokens);\n              setLoadingState('loaded');\n\n            case 16:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _loadNFTs.apply(this, arguments);\n  }\n\n  if (loadingState === 'loaded' && !nfts.length) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n    className: \"px-20 py-7 text-4x1\",\n    children: \"You do not own any NFTs currently :(\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 57\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"flex justify-center\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"px-4\",\n      style: {\n        maxWidth: '1600px'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4\",\n        children: nfts.map(function (nft, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"border shadow rounded-x1 overflow-hidden\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n              src: nft.image\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              className: \"p-4\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                style: {\n                  height: '64px'\n                },\n                className: \"text-3x1 font-semibold\",\n                children: nft.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: {\n                  height: '72px',\n                  overflow: 'hidden'\n                },\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                  className: \"text-gray-400\",\n                  children: nft.description\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 66,\n                  columnNumber: 25\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 23\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              className: \"p-4 bg-black\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"text-3x-1 mb-4 font-bold text-white\",\n                children: [nft.price, \" ETH\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 25\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 21\n            }, _this)]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 17\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MyAssets, \"HTwEWQ12E87N2/ThZYbqikB0WEU=\");\n\n_c = MyAssets;\n\nvar _c;\n\n$RefreshReg$(_c, \"MyAssets\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXktbmZ0cy5qcz8yN2NhIl0sIm5hbWVzIjpbIk15QXNzZXRzIiwidXNlU3RhdGUiLCJuZnRzIiwic2V0TkZ0cyIsImxvYWRpbmdTdGF0ZSIsInNldExvYWRpbmdTdGF0ZSIsInVzZUVmZmVjdCIsImxvYWRORlRzIiwid2ViM01vZGFsIiwiV2ViM01vZGFsIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJwcm92aWRlciIsImV0aGVycyIsInNpZ25lciIsImdldFNpZ25lciIsIm1hcmtldENvbnRyYWN0IiwibmZ0bWFya2V0YWRkcmVzcyIsIk1hcmtldCIsImFiaSIsInRva2VuQ29udHJhY3QiLCJuZnRhZGRyZXNzIiwiTkZUIiwiZmV0Y2hNeU5GVHMiLCJkYXRhIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImkiLCJ0b2tlblVSSSIsInRva2VuSWQiLCJ0b2tlblVyaSIsImF4aW9zIiwibWV0YSIsInByaWNlIiwidG9TdHJpbmciLCJpdGVtIiwidG9OdW1iZXIiLCJzZWxsZXIiLCJvd25lciIsImltYWdlIiwidG9rZW5zIiwic2V0TmZ0cyIsImxlbmd0aCIsIm1heFdpZHRoIiwibmZ0IiwiaGVpZ2h0IiwibmFtZSIsIm92ZXJmbG93IiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQy9CO0FBRCtCLGtCQUVUQywrQ0FBUSxDQUFDLEVBQUQsQ0FGQztBQUFBLE1BRTFCQyxJQUYwQjtBQUFBLE1BRXBCQyxPQUZvQjs7QUFBQSxtQkFHT0YsK0NBQVEsQ0FBQyxZQUFELENBSGY7QUFBQSxNQUcxQkcsWUFIMEI7QUFBQSxNQUdaQyxlQUhZOztBQUtqQ0Msa0RBQVMsQ0FBQyxZQUFLO0FBQ2JDLFlBQVE7QUFDVCxHQUZRLEVBRU4sRUFGTSxD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QUFBQSwwQkFDRUQsR0FBRyxDQUFDRTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFHSTtBQUFLLHFCQUFLLEVBQUU7QUFBQ0Qsd0JBQU0sRUFBQyxNQUFSO0FBQWdCRSwwQkFBUSxFQUFDO0FBQXpCLGlCQUFaO0FBQUEsdUNBQ0U7QUFBRywyQkFBUyxFQUFDLGVBQWI7QUFBQSw0QkFBOEJILEdBQUcsQ0FBQ0k7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBU0k7QUFBSyx1QkFBUyxFQUFDLGNBQWY7QUFBQSxxQ0FDSTtBQUFHLHlCQUFTLEVBQUMscUNBQWI7QUFBQSwyQkFBb0RKLEdBQUcsQ0FBQ1gsS0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFUSjtBQUFBLGFBQVVOLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETztBQUFBLFNBQVQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlCRDs7R0FqRXVCNUIsUTs7S0FBQUEsUSIsImZpbGUiOiIuL3BhZ2VzL215LW5mdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIHdlIHdhbnQgdG8gbG9hZCB0aGUgdXNlcnMgbmZ0cyBhbmQgZGlzcGxheVxuXG5pbXBvcnQge2V0aGVyc30gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJ1xuXG5pbXBvcnQgeyBuZnRhZGRyZXNzLCBuZnRtYXJrZXRhZGRyZXNzIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5pbXBvcnQgTkZUIGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZULnNvbC9ORlQuanNvbidcbmltcG9ydCBLQk1hcmtldCBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL0tCTWFya2V0LnNvbC9LQk1hcmtldC5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFzc2V0cygpIHtcbiAgICAvLyBhcnJheSBvZiBuZnRzXG4gIGNvbnN0IFtuZnRzLCBzZXRORnRzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbG9hZGluZ1N0YXRlLCBzZXRMb2FkaW5nU3RhdGVdID0gdXNlU3RhdGUoJ25vdC1sb2FkZWQnKVxuXG4gIHVzZUVmZmVjdCgoKT0+IHtcbiAgICBsb2FkTkZUcygpXG4gIH0sIFtdKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRORlRzKCkge1xuICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKVxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbilcbiAgICAvLyB3ZSBuZWVkIHRvIGtub3cgd2hvIHRoZSBtZXNzYWdlLnNlbmRlciBpcyBcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgXG4gICAgY29uc3QgbWFya2V0Q29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG5mdG1hcmtldGFkZHJlc3MsIE1hcmtldC5hYmksIHNpZ25lcilcbiAgICBjb25zdCB0b2tlbkNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChuZnRhZGRyZXNzLCBORlQuYWJpLCBwcm92aWRlcilcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgbWFya2V0Q29udHJhY3QuZmV0Y2hNeU5GVHMoKVxuICAgIFxuICAgIGNvbnN0IHRva2VucyA9IGF3YWl0IFByb21pc2UuYWxsKGRhdGEubWFwKGFzeW5jIGkgPT4ge1xuICAgICAgY29uc3QgdG9rZW5VcmkgPSBhd2FpdCB0b2tlbkNvbnRyYWN0LnRva2VuVVJJKGkudG9rZW5JZClcbiAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCBheGlvcy5nZXQodG9rZW5VcmkpXG4gICAgICBsZXQgcHJpY2UgPSBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoaS5wcmljZS50b1N0cmluZygpLCAnZXRoZXInKVxuICAgICAgbGV0IGl0ZW0gPSB7XG4gICAgICAgIHByaWNlLFxuICAgICAgICB0b2tlbklkOiBpLnRva2VuSWQudG9OdW1iZXIoKSxcbiAgICAgICAgc2VsbGVyOiBpLnNlbGxlcixcbiAgICAgICAgb3duZXI6IGkub3duZXIsXG4gICAgICAgIGltYWdlOiBtZXRhLmRhdGEuaW1hZ2UsXG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbVxuICAgIH0pKVxuICAgIHNldE5mdHModG9rZW5zKVxuICAgIHNldExvYWRpbmdTdGF0ZSgnbG9hZGVkJykgXG4gIH1cbiAgXG4gIGlmKGxvYWRpbmdTdGF0ZSA9PT0gJ2xvYWRlZCcgJiYgIW5mdHMubGVuZ3RoKSByZXR1cm4gKDxoMVxuICBjbGFzc05hbWU9J3B4LTIwIHB5LTcgdGV4dC00eDEnPllvdSBkbyBub3Qgb3duIGFueSBORlRzIGN1cnJlbnRseSA6KDwvaDE+KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweC00JyBzdHlsZT17e21heFdpZHRoOiAnMTYwMHB4J319PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00IHB0LTQnPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuZnRzLm1hcCgobmZ0LCBpKT0+KFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9J2JvcmRlciBzaGFkb3cgcm91bmRlZC14MSBvdmVyZmxvdy1oaWRkZW4nPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25mdC5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTQnPlxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2hlaWdodDonNjRweCd9fSBjbGFzc05hbWU9J3RleHQtM3gxIGZvbnQtc2VtaWJvbGQnPntcbiAgICAgICAgICAgICAgICAgICAgICBuZnQubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonNzJweCcsIG92ZXJmbG93OidoaWRkZW4nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAnPntuZnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC00IGJnLWJsYWNrJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC0zeC0xIG1iLTQgZm9udC1ib2xkIHRleHQtd2hpdGUnPntuZnQucHJpY2V9IEVUSDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/my-nfts.js\n");

/***/ })

});