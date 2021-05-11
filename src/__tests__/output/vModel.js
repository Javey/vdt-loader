(() => {
  "use strict";
  function index_esm_isNullOrUndefined(o) {
    return null == o;
  }
  var index_esm_toString = Object.prototype.toString,
    index_esm_isArray =
      Array.isArray ||
      function (arr) {
        return "[object Array]" === index_esm_toString.call(arr);
      };
  function index_esm_isInvalid(o) {
    return null === o || !1 === o || !0 === o || void 0 === o;
  }
  function index_esm_isStringOrNumber(o) {
    var type = typeof o;
    return "string" === type || "number" === type;
  }
  Object.prototype.hasOwnProperty;
  var hasDocumentAvailable = "undefined" != typeof document;
  Object.prototype.toString;
  var VNode = (function () {
    return function (
      type,
      tag,
      childrenType,
      children,
      className,
      props,
      key,
      ref
    ) {
      (this.dom = null),
        (this.type = type),
        (this.tag = tag),
        (this.childrenType = childrenType),
        (this.children = children),
        (this.className = className),
        (this.props = props),
        (this.key = void 0 === key ? null : key),
        (this.ref = void 0 === ref ? null : ref),
        (this.transition = null),
        (this.position = null),
        (this.newPosition = null);
    };
  })();
  function createElementVNode(
    type,
    tag,
    children,
    childrenType,
    className,
    props,
    key,
    ref
  ) {
    index_esm_isNullOrUndefined(childrenType) && (childrenType = 1);
    var vNode = new VNode(
      type,
      tag,
      childrenType,
      children,
      className,
      props,
      key,
      ref
    );
    return (
      0 === childrenType &&
        (function (vNode, children) {
          var newChildren,
            newChildrenType = 1;
          if (index_esm_isInvalid(children)) newChildren = children;
          else if (index_esm_isStringOrNumber(children))
            (newChildrenType = 16), (newChildren = children);
          else if (index_esm_isArray(children)) {
            for (
              var len = children.length, reference = { index: 0 }, i = 0;
              i < len;
              i++
            ) {
              var n = children[i];
              if (index_esm_isInvalid(n) || index_esm_isArray(n)) {
                (newChildren = newChildren || children.slice(0, i)),
                  _normalizeVNodes(children, newChildren, i, reference);
                break;
              }
              if (index_esm_isStringOrNumber(n))
                (newChildren = newChildren || children.slice(0, i)).push(
                  applyKey(createTextVNode(n), reference)
                );
              else {
                0;
                var key = n.key,
                  type = n.type,
                  needsCloning = (24576 & type) > 0,
                  isNullOrUndefinedKey = index_esm_isNullOrUndefined(key),
                  isPrefixed = (32768 & type) > 0;
                needsCloning || isNullOrUndefinedKey || isPrefixed
                  ? ((newChildren = newChildren || children.slice(0, i)),
                    (needsCloning || isPrefixed) && (n = directClone(n)),
                    (isNullOrUndefinedKey || isPrefixed) &&
                      applyKey(n, reference),
                    newChildren.push(n))
                  : newChildren && newChildren.push(n),
                  (n.type |= 16384);
              }
              reference.index++;
            }
            newChildrenType =
              0 === (newChildren = newChildren || children).length ? 1 : 8;
          } else
            (newChildren = children),
              24576 & children.type && (newChildren = directClone(children)),
              (newChildren.type |= 16384),
              (newChildrenType = 2);
          (vNode.children = newChildren),
            (vNode.childrenType = newChildrenType);
        })(vNode, children),
      vNode
    );
  }
  function createTextVNode(text, key) {
    return new VNode(1, null, 1, text, null, null, key, null);
  }
  function directClone(vNode) {
    var newVNode,
      type = -8193 & vNode.type,
      props = vNode.props;
    if (0 == (4096 & type))
      newVNode = new VNode(
        type,
        vNode.tag,
        vNode.childrenType,
        vNode.children,
        vNode.className,
        props,
        vNode.key,
        vNode.ref
      );
    else {
      var childrenType = vNode.childrenType;
      newVNode = new VNode(
        type,
        vNode.tag,
        childrenType,
        2 === childrenType
          ? directClone(vNode.children)
          : vNode.children.map(directClone),
        null,
        null,
        vNode.key,
        null
      );
    }
    return (newVNode.transition = vNode.transition), newVNode;
  }
  function applyKey(vNode, reference) {
    return (vNode.key = "$" + reference.index), (vNode.type |= 32768), vNode;
  }
  function _normalizeVNodes(vNodes, result, index, reference) {
    for (var len = vNodes.length; index < len; index++) {
      var n = vNodes[index];
      if (!index_esm_isInvalid(n)) {
        if (index_esm_isArray(n)) {
          _normalizeVNodes(n, result, 0, reference);
          continue;
        }
        if (index_esm_isStringOrNumber(n))
          n = applyKey(createTextVNode(n), reference);
        else {
          0;
          var type = n.type,
            isPrefixed = (32768 & type) > 0;
          (24576 & type || isPrefixed) && (n = directClone(n)),
            (n.type |= n.Normalized),
            (index_esm_isNullOrUndefined(n.key) || isPrefixed) &&
              applyKey(n, reference);
        }
        result.push(n);
      }
      reference.index++;
    }
  }
  if (hasDocumentAvailable && (document.body, window.Node)) {
    var index_esm_prototype = Node.prototype;
    (index_esm_prototype.$EV = null),
      (index_esm_prototype.$V = null),
      (index_esm_prototype.$M = null),
      (index_esm_prototype.$TV = null),
      (index_esm_prototype.$FV = null),
      (index_esm_prototype.$VA = null),
      (index_esm_prototype.$TC = void 0),
      (index_esm_prototype.$TD = void 0),
      (index_esm_prototype._enterCb = void 0),
      (index_esm_prototype._leaveCb = void 0),
      (index_esm_prototype._moveCb = void 0);
  }
  function setTextModel(component, event) {
    var target = event.target;
    component.set(target.$M, target.value);
  }
  Object.getPrototypeOf;
  !(function ($props, $blocks) {
    var data, event;
    $blocks || ($blocks = {}),
      $props || ($props = {}),
      createElementVNode(64, "input", null, 1, null, {
        "$model:value": "a",
        "ev-$model:input":
          ((data = this),
          (event = setTextModel),
          "function" == typeof event ? { data: data, event: event } : null),
        value: this.get("a"),
      });
  })();
})();
