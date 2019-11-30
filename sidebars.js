/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  "javascript": {
    "1. Basic Concepts": [
      "javascript/1.basic/js-engine",
      "javascript/1.basic/scope",
      "javascript/1.basic/execute-context",
    ],
    "2. Memory Management": [
      "javascript/2.memory/memory-space",
      "javascript/2.memory/memory-check",
      "javascript/2.memory/old-new-space",
      "javascript/2.memory/reference-counting",
      "javascript/2.memory/memory-leak",
      "javascript/2.memory/gc-optimization",
    ],
    "3. Closure": [
      "javascript/3.closure/closure-external",
      "javascript/3.closure/closure-internal",
      "javascript/3.closure/closure-issues",
      "javascript/3.closure/closure-application",
      "javascript/3.closure/summary-test",
    ],
    "4. Function": [
      "javascript/4.function/function-overview",
      "javascript/4.function/context-this",
      "javascript/4.function/function-params",
      "javascript/4.function/constructor",
      "javascript/4.function/iife",
      "javascript/4.function/chained-call",
    ],
    "5. Typing": [
      "javascript/5.typing/is-type",
      "javascript/5.typing/type-conversion",
      "javascript/5.typing/equal",
      "javascript/5.typing/clone",
      "javascript/5.typing/data-binding",
    ],
    "6. Modules": [
      "javascript/6.modules/amd-cmd-umd",
      "javascript/6.modules/es6-module",
      "javascript/6.modules/import()",
      "javascript/6.modules/browser-import",
      "javascript/6.modules/babel",
    ],
    "7. Reference Type": [
      "javascript/7.reference-type/array",
      "javascript/7.reference-type/object",
      "javascript/7.reference-type/regex",
      "javascript/7.reference-type/date",
      "javascript/7.reference-type/set-map",
    ],
    "8. Object Oriented Programming": [
      "javascript/8.object-oriented-programming/constructor",
      "javascript/8.object-oriented-programming/create-instance",
      "javascript/8.object-oriented-programming/prototype-chain",
      "javascript/8.object-oriented-programming/inherit",
      "javascript/8.object-oriented-programming/class",
      "javascript/8.object-oriented-programming/super",
    ],
    "9. Async Programming": [
      "javascript/9.async-programming/macro-micro-task",
      "javascript/9.async-programming/event-loop",
      "javascript/9.async-programming/timer",
      "javascript/9.async-programming/callback",
      "javascript/9.async-programming/promise",
      "javascript/9.async-programming/async-await",
    ],
    "10. Reactive Programming": [
      "javascript/10.reactive-programming/race-condition",
    ],
    "11. Performance": [
      "javascript/11.performance-optimization/debounce",
      "javascript/11.performance-optimization/throttle",
      "javascript/11.performance-optimization/memoization",
      "javascript/11.performance-optimization/tco",
    ],
    "Appendix": [
      "javascript/appendix1-references",
      "javascript/appendix2-related-websites"
    ]
  },
  "html": {
    "Preface": [
      "html/preface/overview",
      "html/preface/note",
    ],
    "Tags": [
      "html/tag/html-structure",
      "html/tag/head-info",
      "html/tag/section-divisions",
      "html/tag/text",
      "html/tag/link",
      "html/tag/image",
      "html/tag/list",
      "html/tag/form",
      "html/tag/table",
      "html/tag/object-iframe",
      "html/tag/html5-new-tags",
    ]
  },
  "css": {
    "1. Visual Formatting Model": [
      "css/1.visual-formatting-model/basic-concept",
      "css/1.visual-formatting-model/box-model",
      "css/1.visual-formatting-model/normal-flow",
      "css/1.visual-formatting-model/float",
      "css/1.visual-formatting-model/position",
      "css/1.visual-formatting-model/z-index",
    ],
    "2. Unit & Font": [
      "css/2.unit-font/px",
      "css/2.unit-font/percentage",
      "css/2.unit-font/em",
      "css/2.unit-font/rem",
      "css/2.unit-font/viewport",
      "css/2.unit-font/font",
    ],
    "3. Layout": [
      "css/3.layout/flex",
      "css/3.layout/grid",
      "css/3.layout/cols",
      "css/3.layout/rows",
    ],
    "4. Center": [
      "css/4.center/horizontal-center",
      "css/4.center/vertical-middle",
      "css/4.center/horizontal-vertical-center",
    ],
    "5. Animation & Effects": [
      "css/5.animation/bezier-curve",
      "css/5.animation/transition",
      "css/5.animation/animation",
    ],
    "6. Responsive Design": [
      "css/6.responsive-design/media-query",
      "css/6.responsive-design/responsive-adaptive",
    ],
    "Appendix": [
      "css/appendix/related-websites"
    ]
  },
  "web": {
    "1. HTTP": [
      "web/1.http/http-connection",
      "web/1.http/http-status",
      "web/1.http/http-cache",
      "web/1.http/http1.1",
      "web/1.http/http2",
      "web/1.http/https",
    ],
    "2. Cross Domain": [
      "web/2.cross-domain/same-origin-policy",
      "web/2.cross-domain/jsonp",
      "web/2.cross-domain/cors",
      "web/2.cross-domain/websocket"
    ],
    "3. Data Transmission": [
      "web/3.data-transmission/url",
      "web/3.data-transmission/json",
      "web/3.data-transmission/ajax",
      "web/3.data-transmission/fetch",
      "web/3.data-transmission/form",
      "web/3.data-transmission/file",
    ],
    "4. Browser": [
      "web/4.browser/window",
      "web/4.browser/navigator",
      "web/4.browser/rendering-engine",
    ],
    "5. Render & Load": [
      "web/5.render-load/page-rendering",
      "web/5.render-load/script",
      "web/5.render-load/reflow-repaint",
      "web/5.render-load/DOMContentLoaded",
    ],
    "6. Cross Document": [
      "web/6.cross-document/iframe",
      "web/6.cross-document/postMassage",
    ],
    "7. Router": [
      "web/7.rooter/hash-rooter",
      "web/7.rooter/history-rooter",
    ],
    "8. DOM": [
      "web/8.dom/node",
      "web/8.dom/node-crud",
      "web/8.dom/event-system",
      "web/8.dom/event-object",
      "web/8.dom/event-type",
    ],
    "9. Graphics & Effects": [
      "web/9.graphics-effects/js-animation",
      "web/9.graphics-effects/canvas",
      "web/9.graphics-effects/webgl",
    ],
    "10. Offline & Storage": [
      "web/10.offline-storage/webstorage",
      "web/10.offline-storage/IndexedDB",
      "web/10.offline-storage/web-SQL",
      "web/10.offline-storage/service-workers",
      "web/10.offline-storage/summary"
    ],
    "11. Web Security": [
      "web/11.web-security/cookie",
      "web/11.web-security/session",
      "web/11.web-security/OAuth",
      "web/11.web-security/JWT",
      "web/11.web-security/CSRF",
      "web/11.web-security/XSS"
    ],
    "12. Web Performance": [
      "web/12.web-optimize/pic-optimize",
      "web/12.web-optimize/lazy-loading",
      "web/12.web-optimize/http-cache",
      "web/12.web-optimize/webworker",
    ],
  },
  "react": {
    "1. Basis": [
      "react/1.basic/jsx",
      "react/1.basic/lifecycle",
      "react/1.basic/state",
      "react/1.basic/communication",
      "react/1.basic/category",
      "react/1.basic/event",
      "react/1.basic/style"
    ],
    "2. Advanced": [
      "react/2.advanced/render-props",
      "react/2.advanced/hoc",
      "react/2.advanced/hook",
      "react/2.advanced/context",
      "react/2.advanced/portal",
    ],
    "3. Optimization": [
      "react/3.optimization/performance",
      "react/3.optimization/pure-component",
      "react/3.optimization/memo",
      "react/3.optimization/code-splitting",
      "react/3.optimization/suspense",
    ],
    "4. Three Main Components": [
      "react/4.three-components/container-component",
      "react/4.three-components/presentational-component",
      "react/4.three-components/ui-component",
    ],
    "5. State Management": [
      "react/5.state-management/redux",
      "react/5.state-management/store",
      "react/5.state-management/action",
      "react/5.state-management/middleware",
      "react/5.state-management/reducer",
      "react/5.state-management/selector",
      "react/5.state-management/model"
    ],
    "6. Router Management": [
      "react/6.router-management/router",
      "react/6.router-management/route",
      "react/6.router-management/link"
    ],
    "7. Test": [
      "react/7.test/test-category",
      "react/7.test/unit-test",
      "react/7.test/component-test",
      "react/7.test/state-test"
    ],
    "8. Security": [
      "react/8.security/security-guide"
    ],
    "Appendix": [
      "react/appendix/references",
      "react/appendix/related-websites"
    ]
  },
  "design-patterns": {
    '3. Design Patterns': [
      'design-patterns/3.behavior-pattern/observer',
      'design-patterns/3.behavior-pattern/pub-sub',
    ]
  },
  "algorithm": {
    "1. Array": [
      "algorithm/1.array/duplicated-number-in-array",
      "algorithm/1.array/inverse-pairs",
    ],
    "2. Stack & Queue": [
      "algorithm/3.stack-queue/min-stack",
    ],
    "4. LinkedList": [
      "algorithm/4.linkedlist/merge-two-sorted-lists",
    ],
    "5. Binary Tree": [
      "algorithm/5.binary-tree/build-tree",
      "algorithm/5.binary-tree/mirror-tree",
      "algorithm/5.binary-tree/subtree",
      "algorithm/5.binary-tree/maximum-depth-of-binary-tree",
      "algorithm/5.binary-tree/balanced-binary-tree",
    ],
    "8. Sort": [
      "algorithm/8.sort/merged-sort",
      "algorithm/8.sort/quick-sort",
    ],
    "9. Search": [
      {
        type: 'category',
        label: 'Binary Search',
        items: [
          "algorithm/9.search/number-same-as-index",
          "algorithm/9.search/number-in-sorted-array",
          "algorithm/9.search/missing-number",
        ],
      },
      {
        type: 'category',
        label: 'BST',
        items: [
          "algorithm/9.search/k-node-in-bst",
        ],
      },
      {
        type: 'category',
        label: 'Hash Table',
        items: [
          "algorithm/9.search/first-unique-character",
        ],
      },
    ],
    "10. Back Tracking": [
      "algorithm/10.back-tracking/permutation",
      "algorithm/10.back-tracking/combination",
      "algorithm/10.back-tracking/n-queens",
    ],
    "11. Bit Operation": [
      "algorithm/11.bit-operation/single-number",
    ],
    "12. Reverse & Rotate": [
      "algorithm/12.reverse/reverse-linked-list",
      "algorithm/12.reverse/rotate-string",
      "algorithm/12.reverse/reverse-integer",
    ],
    "13. Math": [
      "algorithm/13.math/powx-n",
    ]
  },
  docs: {
    Docusaurus: ['doc1', 'doc2', 'doc3'],
    Features: ['mdx'],
  },
};
