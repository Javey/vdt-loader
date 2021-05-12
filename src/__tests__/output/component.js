(() => {
  "use strict";
  /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
  var extendStatics = function (d, b) {
    return (extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (d, b) {
          d.__proto__ = b;
        }) ||
      function (d, b) {
        for (var p in b)
          Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
      })(d, b);
  };
  function tslib_es6_extends(d, b) {
    if ("function" != typeof b && null !== b)
      throw new TypeError(
        "Class extends value " + String(b) + " is not a constructor or null"
      );
    function __() {
      this.constructor = d;
    }
    extendStatics(d, b),
      (d.prototype =
        null === b
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __()));
  }
  var __assign = function () {
    return (__assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++)
          for (var p in (s = arguments[i]))
            Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
        return t;
      }).apply(this, arguments);
  };
  Object.create;
  Object.create;
  function isEventProp(propName) {
    return "ev-" === propName.substr(0, 3);
  }
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
  function isNull(o) {
    return null === o;
  }
  function index_esm_isUndefined(o) {
    return void 0 === o;
  }
  function index_esm_isFunction(o) {
    return "function" == typeof o;
  }
  function index_esm_isString(o) {
    return "string" == typeof o;
  }
  function index_esm_isObject(o) {
    return null !== o && "object" == typeof o;
  }
  var hasOwn = Object.prototype.hasOwnProperty,
    index_esm_EMPTY_OBJ = {};
  var hasDocumentAvailable = "undefined" != typeof document;
  function normalizeEventName(name) {
    return name.substr(3);
  }
  function setTextContent(dom, children) {
    dom.textContent = children;
  }
  function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
  }
  function insertOrAppend(parentDom, newNode, anchor) {
    isNull(anchor)
      ? parentDom.appendChild(newNode)
      : parentDom.insertBefore(newNode, anchor);
  }
  var REFERENCE = { value: !1 };
  function removeVNodeDom(vNode, parentDom) {
    var _loop_1 = function () {
      var type = vNode.type;
      if (3043 & type) {
        var transition = vNode.transition;
        if (index_esm_isNullOrUndefined(transition))
          removeChild(parentDom, vNode.dom);
        else {
          var dom_1 = vNode.dom;
          transition.leave(dom_1, function () {
            return removeChild(parentDom, dom_1);
          });
        }
        return { value: void 0 };
      }
      var children = vNode.children;
      if (8 & type) vNode = children.$lastInput;
      else if (16 & type) vNode = children;
      else if (4096 & type) {
        if (2 !== vNode.childrenType) {
          for (var i = 0; i < children.length; i++)
            removeVNodeDom(children[i], parentDom);
          return { value: void 0 };
        }
        vNode = children;
      }
    };
    do {
      var state_1 = _loop_1();
      if ("object" == typeof state_1) return state_1.value;
    } while (vNode);
  }
  function index_esm_findDomFromVNode(vNode, startEdge) {
    for (var type; vNode; ) {
      if (3043 & (type = vNode.type)) return vNode.dom;
      vNode = findChildVNode(vNode, startEdge, type);
    }
    return null;
  }
  function findChildVNode(vNode, startEdge, type) {
    var children = vNode.children;
    return 8 & type
      ? children.$lastInput
      : 4096 & type
      ? 2 === vNode.childrenType
        ? children
        : children[startEdge ? 0 : children.length - 1]
      : children;
  }
  function moveVNodeDom(vNode, parentDom, anchor) {
    do {
      var type = vNode.type;
      if (3043 & type) return void insertOrAppend(parentDom, vNode.dom, anchor);
      var children = vNode.children;
      if (8 & type) vNode = children.$lastInput;
      else if (16 & type) vNode = children;
      else if (4096 & type) {
        if (2 !== vNode.childrenType) {
          for (var i = 0; i < children.length; i++)
            moveVNodeDom(children[i], parentDom, anchor);
          return;
        }
        vNode = children;
      }
    } while (vNode);
  }
  function callAll(mountedQueue) {
    for (var i = 0; i < mountedQueue.length; i++) mountedQueue[i]();
  }
  var xlinkNS = "http://www.w3.org/1999/xlink",
    xmlNS = "http://www.w3.org/XML/1998/namespace",
    namespaces = {
      "xlink:href": xlinkNS,
      "xlink:arcrole": xlinkNS,
      "xlink:actuate": xlinkNS,
      "xlink:show": xlinkNS,
      "xlink:role": xlinkNS,
      "xlink:title": xlinkNS,
      "xlink:type": xlinkNS,
      "xml:base": xmlNS,
      "xml:lang": xmlNS,
      "xml:space": xmlNS,
    };
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
  function index_esm_createElementVNode(
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
  function createComponentVNode(type, tag, props, key, ref) {
    return (
      0 == (24 & type) &&
        (type = tag.prototype && tag.prototype.$render ? 8 : 16),
      new VNode(type, tag, 1, null, null, props, key, ref)
    );
  }
  function createTextVNode(text, key) {
    return new VNode(1, null, 1, text, null, null, key, null);
  }
  function index_esm_createVoidVNode() {
    return createTextVNode("", null);
  }
  function index_esm_createFragment(children, childrenType, key) {
    var fragment = index_esm_createElementVNode(
      4096,
      4096,
      children,
      childrenType,
      null,
      null,
      key,
      null
    );
    switch (fragment.childrenType) {
      case 1:
        (fragment.children = index_esm_createVoidVNode()),
          (fragment.childrenType = 2);
        break;
      case 16:
        (fragment.children = [createTextVNode(children)]),
          (fragment.childrenType = 4);
    }
    return fragment;
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
  function normalizeRoot(vNode, parentVNode) {
    var root;
    root = index_esm_isInvalid(vNode)
      ? index_esm_createVoidVNode()
      : index_esm_isStringOrNumber(vNode)
      ? createTextVNode(vNode, null)
      : index_esm_isArray(vNode)
      ? index_esm_createFragment(vNode, 0, null)
      : 8192 & vNode.type
      ? directClone(vNode)
      : vNode;
    var transition = parentVNode.transition;
    index_esm_isNullOrUndefined(transition) || (root.transition = transition);
    return root;
  }
  function isLinkEvent(o) {
    return !isNull(o) && "object" == typeof o;
  }
  function isSameLinkEvent(lastValue, nextValue) {
    return (
      isLinkEvent(lastValue) &&
      lastValue.event === nextValue.event &&
      lastValue.data === nextValue.data
    );
  }
  function wrapLinkEvent(nextValue) {
    var ev = nextValue.event;
    return function (e) {
      ev(nextValue.data, e);
    };
  }
  function getDelegatedEventObject(v) {
    return {
      "ev-click": v,
      "ev-dblclick": v,
      "ev-focusin": v,
      "ev-focusout": v,
      "ev-keydown": v,
      "ev-keypress": v,
      "ev-keyup": v,
      "ev-mousedown": v,
      "ev-mousemove": v,
      "ev-mouseup": v,
      "ev-touchend": v,
      "ev-touchmove": v,
      "ev-touchstart": v,
    };
  }
  var result,
    p,
    attachedEventCounts = getDelegatedEventObject(0),
    attachedEvents = getDelegatedEventObject(null),
    delegatedEvents = getDelegatedEventObject(!0);
  function updateOrAddDelegatedEvent(name, dom) {
    var eventsObject = dom.$EV;
    return (
      eventsObject || (eventsObject = dom.$EV = getDelegatedEventObject(null)),
      eventsObject[name] ||
        (1 == ++attachedEventCounts[name] &&
          (attachedEvents[name] = (function (name) {
            var attachedEvent = (function (name) {
              var isClick = "ev-click" === name || "ev-dblclick" === name;
              return function (event) {
                !(function (event, isClick, name, eventData) {
                  var dom = (function (event) {
                      return index_esm_isFunction(event.composedPath)
                        ? event.composedPath()[0]
                        : event.target;
                    })(event),
                    count = attachedEventCounts[name];
                  do {
                    if (isClick && dom.disabled) return;
                    var eventsObject = dom.$EV;
                    if (eventsObject) {
                      var currentEvent = eventsObject[name];
                      if (
                        currentEvent &&
                        ((eventData.dom = dom),
                        currentEvent.event
                          ? currentEvent.event(currentEvent.data, event)
                          : currentEvent(event),
                        0 == --count || event.cancelBubble)
                      )
                        return;
                    }
                    dom = dom.parentNode;
                  } while (!isNull(dom));
                })(
                  event,
                  isClick,
                  name,
                  (function (event) {
                    var eventData = { dom: document };
                    return (
                      (event.stopPropagation = stopPropagation),
                      Object.defineProperty(event, "currentTarget", {
                        configurable: !0,
                        get: function () {
                          return eventData.dom;
                        },
                      }),
                      eventData
                    );
                  })(event)
                );
              };
            })(name);
            return (
              document.addEventListener(
                normalizeEventName(name),
                attachedEvent
              ),
              attachedEvent
            );
          })(name))),
      eventsObject
    );
  }
  function unmountDelegatedEvent(name, dom) {
    var eventsObject = dom.$EV;
    return (
      eventsObject &&
        eventsObject[name] &&
        (0 == --attachedEventCounts[name] &&
          (document.removeEventListener(
            normalizeEventName(name),
            attachedEvents[name]
          ),
          (attachedEvents[name] = null)),
        (eventsObject[name] = null)),
      eventsObject
    );
  }
  function stopPropagation() {
    (this.cancelBubble = !0),
      this.stopImmediatePropagation && this.stopImmediatePropagation();
  }
  function applyValueSelect(nextProps, dom, mounting, vNode, isControlled) {
    var multiple = nextProps.multiple;
    index_esm_isNullOrUndefined(multiple) ||
      multiple === dom.multiple ||
      (dom.multiple = multiple);
    var index = nextProps.selectedIndex;
    if ((-1 === index && (dom.selectedIndex = -1), 1 !== vNode.childrenType)) {
      var value = nextProps.value;
      "number" == typeof index &&
        index > -1 &&
        dom.options[index] &&
        (value = dom.options[index].value),
        mounting &&
          index_esm_isNullOrUndefined(value) &&
          (value = nextProps.defaultValue),
        (!index_esm_isNullOrUndefined(value) || isControlled || multiple) &&
          ((REFERENCE.value = !1),
          updateChildOptions(vNode, value, REFERENCE),
          REFERENCE.value || (dom.selectedIndex = -1));
    }
  }
  function updateChildOptions(vNode, value, flag) {
    if ("option" === vNode.tag)
      !(function (vNode, value, flag) {
        var props = vNode.props || index_esm_EMPTY_OBJ,
          dom = vNode.dom;
        if (
          props.value === value ||
          (index_esm_isArray(value) && -1 !== value.indexOf(props.value))
        )
          (flag.value = !0), (dom.selected = !0);
        else if (index_esm_isNullOrUndefined(value)) {
          if (!index_esm_isNullOrUndefined(props.selected)) {
            var selected = props.selected || !1;
            selected && (flag.value = !0), (dom.selected = selected);
          }
        } else dom.selected = !1;
      })(vNode, value, flag);
    else {
      var children = vNode.children,
        type = vNode.type;
      if (8 & type);
      else if (16 & type);
      else if (2 === vNode.childrenType)
        updateChildOptions(children, value, flag);
      else if (12 & vNode.childrenType)
        for (var i = 0, len = children.length; i < len; ++i)
          updateChildOptions(children[i], value, flag);
    }
  }
  function processElement(type, vNode, dom, nextProps, mounting, isControlled) {
    64 & type
      ? (function (nextProps, dom) {
          var type = nextProps.type,
            value = nextProps.value,
            checked = nextProps.checked,
            multiple = nextProps.multiple,
            defaultValue = nextProps.defaultValue,
            hasValue = !index_esm_isNullOrUndefined(value);
          index_esm_isNullOrUndefined(multiple) ||
            multiple === dom.multiple ||
            (dom.multiple = multiple),
            index_esm_isNullOrUndefined(defaultValue) ||
              hasValue ||
              (dom.defaultValue = defaultValue + ""),
            (function (type) {
              return "checkbox" === type || "radio" === type;
            })(type)
              ? (hasValue && (dom.value = value),
                index_esm_isNullOrUndefined(checked) || (dom.checked = checked))
              : hasValue && dom.value !== value
              ? ((dom.defaultValue = value), (dom.value = value))
              : index_esm_isNullOrUndefined(checked) || (dom.checked = checked);
        })(nextProps, dom)
      : 128 & type
      ? applyValueSelect(nextProps, dom, mounting, vNode, isControlled)
      : 256 & type &&
        (function (nextProps, dom, mounting) {
          var value = nextProps.value,
            domValue = dom.value;
          if (index_esm_isNullOrUndefined(value)) {
            if (mounting) {
              var defaultValue = nextProps.defaultValue;
              index_esm_isNullOrUndefined(defaultValue) ||
                defaultValue === domValue ||
                ((dom.value = defaultValue), (dom.defaultValue = defaultValue));
            }
          } else
            domValue !== value &&
              ((dom.defaultValue = value), (dom.value = value));
        })(nextProps, dom, mounting);
  }
  function patchProp(
    prop,
    lastValue,
    nextValue,
    dom,
    isSVG,
    isFormElement,
    hasControlledValue
  ) {
    var value;
    switch (prop) {
      case "children":
      case "className":
      case "defaultValue":
      case "key":
      case "ref":
      case "multiple":
      case "selectedIndex":
      case "$blocks":
        break;
      case "autofocus":
      case "allowfullscreen":
      case "autoplay":
      case "capture":
      case "checked":
      case "controls":
      case "default":
      case "disabled":
      case "hidden":
      case "indeterminate":
      case "loop":
      case "muted":
      case "novalidte":
      case "open":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "selected":
        dom[prop] = !!nextValue;
        break;
      case "defaultChecked":
      case "value":
      case "volume":
        if ("value" === prop && ((dom.$VA = nextValue), isFormElement)) {
          hasControlledValue.value = !0;
          break;
        }
        (value = index_esm_isNullOrUndefined(nextValue) ? "" : nextValue),
          dom[prop] !== value && (dom[prop] = value);
        break;
      case "scrollLeft":
      case "scrollTop":
        (value = index_esm_isNullOrUndefined(nextValue) ? 0 : nextValue),
          dom[prop] !== value && (dom[prop] = value);
        break;
      case "innerHTML":
        dom.innerHTML = nextValue;
        break;
      case "style":
        !(function (lastValue, nextValue, dom) {
          if (index_esm_isNullOrUndefined(nextValue))
            dom.removeAttribute("style");
          else {
            var domStyle = dom.style;
            if (index_esm_isString(nextValue)) domStyle.cssText = nextValue;
            else {
              var style = void 0,
                value = void 0;
              if (
                index_esm_isNullOrUndefined(lastValue) ||
                index_esm_isString(lastValue)
              )
                for (style in nextValue)
                  (value = nextValue[style]),
                    domStyle.setProperty(style, value);
              else {
                for (style in nextValue)
                  (value = nextValue[style]) !== lastValue[style] &&
                    domStyle.setProperty(style, value);
                for (style in lastValue)
                  index_esm_isNullOrUndefined(nextValue[style]) &&
                    domStyle.removeProperty(style);
              }
            }
          }
          var display = dom.$TD;
          index_esm_isUndefined(display) || (dom.style.display = display);
        })(lastValue, nextValue, dom);
        break;
      case "$model:value":
        dom.$M = nextValue;
        break;
      case "trueValue":
        dom.$TV = nextValue;
        break;
      case "falseValue":
        dom.$FV = nextValue;
        break;
      case "ev-$model:change":
        patchModelEvent("change", lastValue, nextValue, dom);
        break;
      case "ev-$model:input":
        patchModelEvent("input", lastValue, nextValue, dom);
        break;
      default:
        delegatedEvents[prop]
          ? (function (name, lastEvent, nextEvent, dom) {
              if (index_esm_isFunction(nextEvent))
                updateOrAddDelegatedEvent(name, dom)[name] = nextEvent;
              else if (isLinkEvent(nextEvent)) {
                if (isSameLinkEvent(lastEvent, nextEvent)) return;
                updateOrAddDelegatedEvent(name, dom)[name] = nextEvent;
              } else unmountDelegatedEvent(name, dom);
            })(prop, lastValue, nextValue, dom)
          : isEventProp(prop)
          ? (function (name, lastValue, nextValue, dom) {
              if (isLinkEvent(nextValue)) {
                if (isSameLinkEvent(lastValue, nextValue)) return;
                nextValue = wrapLinkEvent(nextValue);
              }
              !(function (dom, eventName, handler) {
                var previousKey = "$" + eventName,
                  previousArgs = dom[previousKey];
                previousArgs &&
                  (dom.removeEventListener(previousArgs[0], previousArgs[1]),
                  (dom[previousKey] = null)),
                  index_esm_isFunction(handler) &&
                    (dom.addEventListener(eventName, handler),
                    (dom[previousKey] = [eventName, handler]));
              })(dom, normalizeEventName(name), nextValue);
            })(prop, lastValue, nextValue, dom)
          : index_esm_isNullOrUndefined(nextValue)
          ? dom.removeAttribute(prop)
          : isSVG && namespaces[prop]
          ? dom.setAttributeNS(namespaces[prop], prop, nextValue)
          : dom.setAttribute(prop, nextValue);
    }
  }
  function patchModelEvent(name, lastValue, nextValue, dom) {
    if (isLinkEvent(nextValue)) {
      if (isSameLinkEvent(lastValue, nextValue)) return;
      nextValue = wrapLinkEvent(nextValue);
    }
    !(function (dom, eventName, handler) {
      var previousKey = "$$model:" + eventName,
        previousEvent = dom[previousKey];
      previousEvent &&
        (dom.removeEventListener(eventName, previousEvent),
        (dom[previousKey] = null)),
        index_esm_isFunction(handler) &&
          (dom.addEventListener(eventName, handler),
          (dom[previousKey] = handler));
    })(dom, name, nextValue);
  }
  function mountRef(ref, value) {
    ref &&
      (index_esm_isFunction(ref)
        ? ref(value)
        : ref.__is_ref && (ref.value = value));
  }
  function unmountRef(ref) {
    mountRef(ref, null);
  }
  function mount(
    vNode,
    parentDom,
    parentComponent,
    isSVG,
    anchor,
    mountedQueue
  ) {
    var type = (vNode.type |= 8192);
    962 & type
      ? (function (
          vNode,
          parentDom,
          parentComponent,
          isSVG,
          anchor,
          mountedQueue
        ) {
          var type = vNode.type,
            props = vNode.props,
            className = vNode.className,
            childrenType = vNode.childrenType,
            tag = vNode.tag,
            transition = vNode.transition;
          isSVG = isSVG || (512 & type) > 0;
          var dom = (vNode.dom = (function (tag, isSVG) {
            if (isSVG)
              return document.createElementNS(
                "http://www.w3.org/2000/svg",
                tag
              );
            return document.createElement(tag);
          })(tag, isSVG));
          index_esm_isNullOrUndefined(className) ||
            "" === className ||
            (isSVG
              ? dom.setAttribute("class", className)
              : (dom.className = className));
          0;
          var children = vNode.children;
          if (16 === childrenType) setTextContent(dom, children);
          else if (1 !== childrenType) {
            var childrenIsSVG = isSVG && "foreignObject" !== tag;
            2 === childrenType
              ? (8192 & children.type &&
                  (vNode.children = children = directClone(children)),
                mount(
                  children,
                  dom,
                  parentComponent,
                  childrenIsSVG,
                  null,
                  mountedQueue
                ))
              : (8 !== childrenType && 4 !== childrenType) ||
                mountArrayChildren(
                  children,
                  dom,
                  parentComponent,
                  childrenIsSVG,
                  null,
                  mountedQueue
                );
          }
          index_esm_isNullOrUndefined(parentDom) ||
            insertOrAppend(parentDom, dom, anchor);
          index_esm_isNullOrUndefined(props) ||
            (function (vNode, type, props, dom, isSVG) {
              var isFormElement = (448 & type) > 0;
              for (var prop in ((REFERENCE.value = !1), props))
                patchProp(
                  prop,
                  null,
                  props[prop],
                  dom,
                  isSVG,
                  isFormElement,
                  REFERENCE
                );
              isFormElement &&
                processElement(type, vNode, dom, props, !0, REFERENCE.value);
            })(vNode, type, props, dom, isSVG);
          index_esm_isNullOrUndefined(transition) ||
            (transition.beforeEnter(dom),
            mountedQueue.push(function () {
              return transition.enter(dom);
            }));
          mountRef(vNode.ref, dom);
        })(vNode, parentDom, parentComponent, isSVG, anchor, mountedQueue)
      : 8 & type
      ? mountComponentClass(
          null,
          vNode,
          parentDom,
          parentComponent,
          isSVG,
          anchor,
          mountedQueue
        )
      : 16 & type
      ? (function (
          vNode,
          parentDom,
          parentComponent,
          isSVG,
          anchor,
          mountedQueue
        ) {
          0;
          mount(
            (vNode.children = normalizeRoot(
              vNode.tag(vNode.props || index_esm_EMPTY_OBJ),
              vNode
            )),
            parentDom,
            parentComponent,
            isSVG,
            anchor,
            mountedQueue
          );
        })(vNode, parentDom, parentComponent, isSVG, anchor, mountedQueue)
      : 1 & type
      ? (function (vNode, parentDom, anchor) {
          var dom = (vNode.dom = document.createTextNode(vNode.children));
          index_esm_isNullOrUndefined(parentDom) ||
            insertOrAppend(parentDom, dom, anchor);
        })(vNode, parentDom, anchor)
      : 4096 & type
      ? (function (
          vNode,
          parentDom,
          parentComponent,
          isSVG,
          anchor,
          mountedQueue
        ) {
          2 === vNode.childrenType
            ? mount(
                vNode.children,
                parentDom,
                parentComponent,
                isSVG,
                anchor,
                mountedQueue
              )
            : mountArrayChildren(
                vNode.children,
                parentDom,
                parentComponent,
                isSVG,
                anchor,
                mountedQueue
              );
        })(vNode, parentDom, parentComponent, isSVG, anchor, mountedQueue)
      : 32 & type &&
        (function (vNode, parentDom, anchor) {
          var dom = (vNode.dom = document.createComment(vNode.children));
          index_esm_isNullOrUndefined(parentDom) ||
            insertOrAppend(parentDom, dom, anchor);
        })(vNode, parentDom, anchor);
  }
  function mountComponentClass(
    lastVNode,
    vNode,
    parentDom,
    parentComponent,
    isSVG,
    anchor,
    mountedQueue
  ) {
    var instance = new vNode.tag(vNode.props, mountedQueue);
    (instance.$SVG = isSVG),
      (instance.$vNode = vNode),
      (instance.$parent = parentComponent),
      (vNode.children = instance),
      instance.$render(lastVNode, vNode, parentDom, anchor, mountedQueue),
      mountRef(vNode.ref, instance);
  }
  function mountArrayChildren(
    children,
    parentDom,
    parentComponent,
    isSVG,
    anchor,
    mountedQueue
  ) {
    for (var i = 0; i < children.length; i++) {
      var vNode = children[i];
      8192 & vNode.type && (children[i] = vNode = directClone(vNode)),
        mount(vNode, parentDom, parentComponent, isSVG, anchor, mountedQueue);
    }
  }
  function remove(vNode, parentDom) {
    unmount(vNode), removeVNodeDom(vNode, parentDom);
  }
  function unmount(vNode) {
    var type = vNode.type,
      children = vNode.children;
    if (962 & type) {
      var props = vNode.props;
      unmountRef(vNode.ref);
      var childrenType = vNode.childrenType;
      if (!index_esm_isNullOrUndefined(props))
        for (var prop in props)
          delegatedEvents[prop] && unmountDelegatedEvent(prop, vNode.dom);
      12 & childrenType
        ? unmountAllChildren(children)
        : 2 === childrenType && unmount(children);
    } else
      children &&
        (8 & type
          ? (children.$unmount(vNode, null), unmountRef(vNode.ref))
          : 16 & type
          ? unmount(children)
          : 4096 & type &&
            12 & vNode.childrenType &&
            unmountAllChildren(children));
  }
  function unmountAllChildren(children) {
    for (var i = 0, len = children.length; i < len; ++i) unmount(children[i]);
  }
  function clearDom(dom) {
    dom.textContent = "";
  }
  function removeAllChildren(children, dom, vNode) {
    unmountAllChildren(children),
      4096 & vNode.type ? removeVNodeDom(vNode, dom) : clearDom(dom);
  }
  function patch(
    lastVNode,
    nextVNode,
    parentDom,
    parentComponent,
    isSVG,
    anchor,
    mountedQueue
  ) {
    var nextType = (nextVNode.type |= 8192);
    lastVNode.type !== nextType || lastVNode.key !== nextVNode.key
      ? replaceWithNewNode(
          lastVNode,
          nextVNode,
          parentDom,
          parentComponent,
          isSVG,
          anchor,
          mountedQueue
        )
      : 8 & nextType
      ? (function (
          lastVNode,
          nextVNode,
          parentDom,
          parentComponent,
          isSVG,
          anchor,
          mountedQueue
        ) {
          var nextTag = nextVNode.tag;
          if (lastVNode.tag !== nextTag)
            unmount(lastVNode),
              mountComponentClass(
                lastVNode,
                nextVNode,
                parentDom,
                parentComponent,
                isSVG,
                anchor,
                mountedQueue
              );
          else {
            0;
            var instance = (nextVNode.children = lastVNode.children);
            if (index_esm_isNullOrUndefined(instance)) return;
            (instance.$mountedQueue = mountedQueue),
              (instance.$vNode = nextVNode),
              (instance.$parent = parentComponent),
              instance.$update(
                lastVNode,
                nextVNode,
                parentDom,
                anchor,
                mountedQueue,
                !1
              );
            var lastRef = lastVNode.ref,
              nextRef = nextVNode.ref;
            lastRef !== nextRef &&
              (unmountRef(lastRef), mountRef(nextRef, instance));
          }
        })(
          lastVNode,
          nextVNode,
          parentDom,
          parentComponent,
          isSVG,
          anchor,
          mountedQueue
        )
      : lastVNode.tag !== nextVNode.tag
      ? replaceWithNewNode(
          lastVNode,
          nextVNode,
          parentDom,
          parentComponent,
          isSVG,
          anchor,
          mountedQueue
        )
      : 962 & nextType
      ? (function (
          lastVNode,
          nextVNode,
          parentComponent,
          isSVG,
          nextType,
          mountedQueue
        ) {
          var dom = (nextVNode.dom = lastVNode.dom),
            lastProps = lastVNode.props || index_esm_EMPTY_OBJ,
            nextProps = nextVNode.props || index_esm_EMPTY_OBJ;
          (isSVG = isSVG || (512 & nextType) > 0), (REFERENCE.value = !1);
          var isFormElement = !1;
          if (lastProps !== nextProps) {
            if (nextProps !== index_esm_EMPTY_OBJ)
              for (var prop in ((isFormElement = (448 & nextType) > 0),
              nextProps)) {
                var lastValue = lastProps[prop],
                  nextValue = nextProps[prop];
                lastValue !== nextValue &&
                  patchProp(
                    prop,
                    lastValue,
                    nextValue,
                    dom,
                    isSVG,
                    isFormElement,
                    REFERENCE
                  );
              }
            if (lastProps !== index_esm_EMPTY_OBJ)
              for (var prop in lastProps)
                index_esm_isNullOrUndefined(nextProps[prop]) &&
                  !index_esm_isNullOrUndefined(lastProps[prop]) &&
                  patchProp(
                    prop,
                    lastProps[prop],
                    null,
                    dom,
                    isSVG,
                    isFormElement,
                    REFERENCE
                  );
          }
          var nextClassName = nextVNode.className;
          if (lastVNode.className !== nextClassName) {
            var transitionClassname = dom.$TC;
            index_esm_isNullOrUndefined(nextClassName)
              ? index_esm_isUndefined(transitionClassname)
                ? dom.removeAttribute("class")
                : (dom.className = Object.keys(transitionClassname).join(" "))
              : isSVG
              ? dom.setAttribute("class", nextClassName)
              : index_esm_isUndefined(transitionClassname)
              ? (dom.className = nextClassName)
              : (dom.className =
                  nextClassName +
                  " " +
                  Object.keys(transitionClassname).join(" "));
          }
          0;
          var nextChildren = nextVNode.children;
          patchChildren(
            lastVNode.childrenType,
            nextVNode.childrenType,
            lastVNode.children,
            nextChildren,
            dom,
            parentComponent,
            isSVG && "foreignObject" !== nextVNode.tag,
            null,
            lastVNode,
            mountedQueue
          ),
            isFormElement &&
              processElement(
                nextType,
                nextVNode,
                dom,
                nextProps,
                !1,
                REFERENCE.value
              );
          var lastRef = lastVNode.ref,
            nextRef = nextVNode.ref;
          lastRef !== nextRef && (unmountRef(lastRef), mountRef(nextRef, dom));
        })(lastVNode, nextVNode, parentComponent, isSVG, nextType, mountedQueue)
      : 16 & nextType
      ? (function (
          lastVNode,
          nextVNode,
          parentDom,
          parentComponent,
          isSVG,
          anchor,
          mountedQueue
        ) {
          0;
          var nextChildren = normalizeRoot(
            nextVNode.tag(nextVNode.props || index_esm_EMPTY_OBJ),
            nextVNode
          );
          patch(
            lastVNode.children,
            nextChildren,
            parentDom,
            parentComponent,
            isSVG,
            anchor,
            mountedQueue
          ),
            (nextVNode.children = nextChildren);
        })(
          lastVNode,
          nextVNode,
          parentDom,
          parentComponent,
          isSVG,
          anchor,
          mountedQueue
        )
      : 1 & nextType || 32 & nextType
      ? (function (lastVNode, nextVNode) {
          var nextText = nextVNode.children,
            dom = (nextVNode.dom = lastVNode.dom);
          nextText !== lastVNode.children && (dom.nodeValue = nextText);
        })(lastVNode, nextVNode)
      : 4096 & nextType &&
        patchChildren(
          lastVNode.childrenType,
          nextVNode.childrenType,
          lastVNode.children,
          nextVNode.children,
          parentDom,
          parentComponent,
          isSVG,
          anchor,
          lastVNode,
          mountedQueue
        );
  }
  function replaceWithNewNode(
    lastVNode,
    nextVNode,
    parentDom,
    parentComponent,
    isSVG,
    anchor,
    mountedQueue
  ) {
    8192 & lastVNode.type
      ? (unmount(lastVNode),
        nextVNode.type & lastVNode.type & 3043 &&
        index_esm_isUndefined(lastVNode.transition)
          ? (mount(nextVNode, null, parentComponent, isSVG, null, mountedQueue),
            (function (parentDom, newDom, lastDom) {
              parentDom.replaceChild(newDom, lastDom);
            })(parentDom, nextVNode.dom, lastVNode.dom))
          : (mount(
              nextVNode,
              parentDom,
              parentComponent,
              isSVG,
              index_esm_findDomFromVNode(lastVNode, !0),
              mountedQueue
            ),
            removeVNodeDom(lastVNode, parentDom)))
      : mount(
          nextVNode,
          parentDom,
          parentComponent,
          isSVG,
          anchor,
          mountedQueue
        );
  }
  function patchChildren(
    lastChildrenType,
    nextChildrenType,
    lastChildren,
    nextChildren,
    parentDom,
    parentComponent,
    isSVG,
    anchor,
    parentVNode,
    mountedQueue
  ) {
    switch (lastChildrenType) {
      case 2:
        switch (nextChildrenType) {
          case 2:
            patch(
              lastChildren,
              nextChildren,
              parentDom,
              parentComponent,
              isSVG,
              anchor,
              mountedQueue
            );
            break;
          case 1:
            remove(lastChildren, parentDom);
            break;
          case 16:
            unmount(lastChildren), setTextContent(parentDom, nextChildren);
            break;
          default:
            !(function (
              lastVNode,
              nextVNodes,
              parentDom,
              parentComponent,
              isSVG,
              mountedQueue
            ) {
              unmount(lastVNode),
                mountArrayChildren(
                  nextVNodes,
                  parentDom,
                  parentComponent,
                  isSVG,
                  index_esm_findDomFromVNode(lastVNode, !0),
                  mountedQueue
                ),
                removeVNodeDom(lastVNode, parentDom);
            })(
              lastChildren,
              nextChildren,
              parentDom,
              parentComponent,
              isSVG,
              mountedQueue
            );
        }
        break;
      case 1:
        switch (nextChildrenType) {
          case 2:
            mount(
              nextChildren,
              parentDom,
              parentComponent,
              isSVG,
              anchor,
              mountedQueue
            );
            break;
          case 1:
            break;
          case 16:
            setTextContent(parentDom, nextChildren);
            break;
          default:
            mountArrayChildren(
              nextChildren,
              parentDom,
              parentComponent,
              isSVG,
              anchor,
              mountedQueue
            );
        }
        break;
      case 16:
        switch (nextChildrenType) {
          case 2:
            clearDom(parentDom),
              mount(
                nextChildren,
                parentDom,
                parentComponent,
                isSVG,
                anchor,
                mountedQueue
              );
            break;
          case 1:
            clearDom(parentDom);
            break;
          case 16:
            !(function (lastChildren, nextChildren, parentDom) {
              lastChildren !== nextChildren &&
                ("" !== lastChildren
                  ? (parentDom.firstChild.nodeValue = nextChildren)
                  : setTextContent(parentDom, nextChildren));
            })(lastChildren, nextChildren, parentDom);
            break;
          default:
            clearDom(parentDom),
              mountArrayChildren(
                nextChildren,
                parentDom,
                parentComponent,
                isSVG,
                anchor,
                mountedQueue
              );
        }
        break;
      default:
        switch (nextChildrenType) {
          case 2:
            removeAllChildren(lastChildren, parentDom, parentVNode),
              mount(
                nextChildren,
                parentDom,
                parentComponent,
                isSVG,
                anchor,
                mountedQueue
              );
            break;
          case 1:
            removeAllChildren(lastChildren, parentDom, parentVNode);
            break;
          case 16:
            removeAllChildren(lastChildren, parentDom, parentVNode),
              setTextContent(parentDom, nextChildren);
            break;
          default:
            var lastLength = lastChildren.length,
              nextLength = nextChildren.length;
            0 === lastLength
              ? nextLength > 0 &&
                mountArrayChildren(
                  nextChildren,
                  parentDom,
                  parentComponent,
                  isSVG,
                  anchor,
                  mountedQueue
                )
              : 0 === nextLength
              ? removeAllChildren(lastChildren, parentDom, parentVNode)
              : 8 === nextChildrenType && 8 === lastChildrenType
              ? (function (
                  a,
                  b,
                  parentDom,
                  parentComponent,
                  isSVG,
                  aLength,
                  bLength,
                  anchor,
                  parentVNode,
                  mountedQueue
                ) {
                  var nextPos,
                    nextNode,
                    aEnd = aLength - 1,
                    bEnd = bLength - 1,
                    j = 0,
                    aNode = a[j],
                    bNode = b[j];
                  outer: {
                    for (; aNode.key === bNode.key; ) {
                      if (
                        (8192 & bNode.type &&
                          (b[j] = bNode = directClone(bNode)),
                        patch(
                          aNode,
                          bNode,
                          parentDom,
                          parentComponent,
                          isSVG,
                          anchor,
                          mountedQueue
                        ),
                        (a[j] = bNode),
                        ++j > aEnd || j > bEnd)
                      )
                        break outer;
                      (aNode = a[j]), (bNode = b[j]);
                    }
                    for (
                      aNode = a[aEnd], bNode = b[bEnd];
                      aNode.key === bNode.key;

                    ) {
                      if (
                        (8192 & bNode.type &&
                          (b[bEnd] = bNode = directClone(bNode)),
                        patch(
                          aNode,
                          bNode,
                          parentDom,
                          parentComponent,
                          isSVG,
                          anchor,
                          mountedQueue
                        ),
                        (a[aEnd] = bNode),
                        --bEnd,
                        j > --aEnd || j > bEnd)
                      )
                        break outer;
                      (aNode = a[aEnd]), (bNode = b[bEnd]);
                    }
                  }
                  if (j > aEnd) {
                    if (j <= bEnd)
                      for (
                        nextNode =
                          (nextPos = bEnd + 1) < bLength
                            ? index_esm_findDomFromVNode(b[nextPos], !0)
                            : null;
                        j <= bEnd;

                      )
                        8192 & (bNode = b[j]).type &&
                          (b[j] = bNode = directClone(bNode)),
                          ++j,
                          mount(
                            bNode,
                            parentDom,
                            parentComponent,
                            isSVG,
                            nextNode,
                            mountedQueue
                          );
                  } else if (j > bEnd)
                    for (; j <= aEnd; ) remove(a[j++], parentDom);
                  else
                    !(function (
                      a,
                      b,
                      aLength,
                      bLength,
                      aEnd,
                      bEnd,
                      j,
                      parentDom,
                      parentComponent,
                      isSVG,
                      anchor,
                      parentVNode,
                      mountedQueue
                    ) {
                      var aNode,
                        bNode,
                        nextPos,
                        i = 0,
                        aStart = j,
                        bStart = j,
                        aLeft = aEnd - j + 1,
                        bLeft = bEnd - j + 1,
                        sources = new Int32Array(bLeft + 1),
                        canRemoveWholeContent = aLeft === aLength,
                        moved = !1,
                        pos = 0,
                        patched = 0;
                      if (bLength < 4 || (aLeft | bLeft) < 32)
                        for (i = aStart; i <= aEnd; ++i)
                          if (((aNode = a[i]), patched < bLeft)) {
                            for (j = bStart; j <= bEnd; ++j)
                              if (((bNode = b[j]), aNode.key === bNode.key)) {
                                if (
                                  ((sources[j - bStart] = i + 1),
                                  canRemoveWholeContent)
                                )
                                  for (canRemoveWholeContent = !1; aStart < i; )
                                    remove(a[aStart++], parentDom);
                                pos > j ? (moved = !0) : (pos = j),
                                  8192 & bNode.type &&
                                    (b[j] = bNode = directClone(bNode)),
                                  patch(
                                    aNode,
                                    bNode,
                                    parentDom,
                                    parentComponent,
                                    isSVG,
                                    anchor,
                                    mountedQueue
                                  ),
                                  ++patched;
                                break;
                              }
                            !canRemoveWholeContent &&
                              j > bEnd &&
                              remove(aNode, parentDom);
                          } else
                            canRemoveWholeContent || remove(aNode, parentDom);
                      else {
                        var keyIndex = {};
                        for (i = bStart; i <= bEnd; ++i) keyIndex[b[i].key] = i;
                        for (i = aStart; i <= aEnd; ++i)
                          if (((aNode = a[i]), patched < bLeft))
                            if (void 0 !== (j = keyIndex[aNode.key])) {
                              if (canRemoveWholeContent)
                                for (canRemoveWholeContent = !1; aStart < i; )
                                  remove(a[aStart++], parentDom);
                              (sources[j - bStart] = i + 1),
                                pos > j ? (moved = !0) : (pos = j),
                                8192 & (bNode = b[j]).type &&
                                  (b[j] = bNode = directClone(bNode)),
                                patch(
                                  aNode,
                                  bNode,
                                  parentDom,
                                  parentComponent,
                                  isSVG,
                                  anchor,
                                  mountedQueue
                                ),
                                ++patched;
                            } else
                              canRemoveWholeContent || remove(aNode, parentDom);
                          else
                            canRemoveWholeContent || remove(aNode, parentDom);
                      }
                      if (canRemoveWholeContent)
                        removeAllChildren(a, parentDom, parentVNode),
                          mountArrayChildren(
                            b,
                            parentDom,
                            parentComponent,
                            isSVG,
                            anchor,
                            mountedQueue
                          );
                      else if (moved) {
                        var seq = (function (arr) {
                          var arrI = 0,
                            i = 0,
                            j = 0,
                            k = 0,
                            u = 0,
                            v = 0,
                            c = 0,
                            len = arr.length;
                          len > maxLen &&
                            ((maxLen = len),
                            (result = new Int32Array(len)),
                            (p = new Int32Array(len)));
                          for (; i < len; ++i)
                            if (0 !== (arrI = arr[i])) {
                              if (arr[(j = result[k])] < arrI) {
                                (p[i] = j), (result[++k] = i);
                                continue;
                              }
                              for (u = 0, v = k; u < v; )
                                arr[result[(c = (u + v) >> 1)]] < arrI
                                  ? (u = c + 1)
                                  : (v = c);
                              arrI < arr[result[u]] &&
                                (u > 0 && (p[i] = result[u - 1]),
                                (result[u] = i));
                            }
                          v = result[(u = k + 1) - 1];
                          var seq = new Int32Array(u);
                          for (; u-- > 0; )
                            (seq[u] = v), (v = p[v]), (result[u] = 0);
                          return seq;
                        })(sources);
                        for (j = seq.length - 1, i = bLeft - 1; i >= 0; i--)
                          0 === sources[i]
                            ? (8192 & (bNode = b[(pos = i + bStart)]).type &&
                                (b[pos] = bNode = directClone(bNode)),
                              mount(
                                bNode,
                                parentDom,
                                parentComponent,
                                isSVG,
                                (nextPos = pos + 1) < bLength
                                  ? index_esm_findDomFromVNode(b[nextPos], !0)
                                  : null,
                                mountedQueue
                              ))
                            : j < 0 || i !== seq[j]
                            ? moveVNodeDom(
                                (bNode = b[(pos = i + bStart)]),
                                parentDom,
                                (nextPos = pos + 1) < bLength
                                  ? index_esm_findDomFromVNode(b[nextPos], !0)
                                  : anchor
                              )
                            : --j;
                      } else if (patched !== bLeft)
                        for (i = bLeft - 1; i >= 0; --i)
                          0 === sources[i] &&
                            (8192 & (bNode = b[(pos = i + bStart)]).type &&
                              (b[pos] = bNode = directClone(bNode)),
                            mount(
                              bNode,
                              parentDom,
                              parentComponent,
                              isSVG,
                              (nextPos = pos + 1) < bLength
                                ? index_esm_findDomFromVNode(b[nextPos], !0)
                                : anchor,
                              mountedQueue
                            ));
                    })(
                      a,
                      b,
                      aLength,
                      bLength,
                      aEnd,
                      bEnd,
                      j,
                      parentDom,
                      parentComponent,
                      isSVG,
                      anchor,
                      parentVNode,
                      mountedQueue
                    );
                })(
                  lastChildren,
                  nextChildren,
                  parentDom,
                  parentComponent,
                  isSVG,
                  lastLength,
                  nextLength,
                  anchor,
                  parentVNode,
                  mountedQueue
                )
              : (function (
                  lastChildren,
                  nextChildren,
                  parentDom,
                  parentComponent,
                  isSVG,
                  lastChildrenLength,
                  nextChildrenLength,
                  anchor,
                  mountedQueue
                ) {
                  for (
                    var nextChild,
                      lastChild,
                      commonLength =
                        lastChildrenLength > nextChildrenLength
                          ? nextChildrenLength
                          : lastChildrenLength,
                      i = 0;
                    i < commonLength;
                    ++i
                  )
                    (nextChild = nextChildren[i]),
                      (lastChild = lastChildren[i]),
                      8192 & nextChild.type &&
                        (nextChild = nextChildren[i] = directClone(nextChild)),
                      patch(
                        lastChild,
                        nextChild,
                        parentDom,
                        parentComponent,
                        isSVG,
                        anchor,
                        mountedQueue
                      ),
                      (lastChildren[i] = nextChild);
                  if (lastChildrenLength < nextChildrenLength)
                    for (i = commonLength; i < nextChildrenLength; ++i)
                      8192 & (nextChild = nextChildren[i]).type &&
                        (nextChild = nextChildren[i] = directClone(nextChild)),
                        mount(
                          nextChild,
                          parentDom,
                          parentComponent,
                          isSVG,
                          anchor,
                          mountedQueue
                        );
                  else if (lastChildrenLength > nextChildrenLength)
                    for (i = commonLength; i < lastChildrenLength; ++i)
                      remove(lastChildren[i], parentDom);
                })(
                  lastChildren,
                  nextChildren,
                  parentDom,
                  parentComponent,
                  isSVG,
                  lastLength,
                  nextLength,
                  anchor,
                  mountedQueue
                );
        }
    }
  }
  var maxLen = 0;
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
  var compile;
  Object.getPrototypeOf;
  function get(object, path) {
    if (hasOwn.call(object, path) || !index_esm_isString(path))
      return object[path];
    for (
      var pathArray = castPath(path), length = pathArray.length, index = 0;
      !index_esm_isNullOrUndefined(object) && index < length;

    )
      object = object[pathArray[index++]];
    return index && index === length ? object : void 0;
  }
  function set(object, path, value) {
    var changeTraces = [];
    if (hasOwn.call(object, path))
      return (
        changeTraces.push({
          path: path,
          newValue: value,
          oldValue: object[path],
        }),
        (object[path] = value),
        changeTraces
      );
    for (
      var pathArray = castPath(path),
        length = pathArray.length,
        lastIndex = length - 1,
        index = -1,
        nested = object,
        prefix = "";
      !index_esm_isNullOrUndefined(nested) && ++index < length;

    ) {
      var key = pathArray[index],
        oldValue = nested[key],
        newValue = value;
      index !== lastIndex &&
        (newValue = index_esm_isObject(oldValue)
          ? clone(oldValue)
          : reIsIndex.test(pathArray[index + 1])
          ? []
          : {}),
        (nested[key] = newValue),
        (nested = nested[key]),
        (prefix += key),
        changeTraces.push({
          path: prefix,
          newValue: newValue,
          oldValue: oldValue,
        }),
        (prefix += ".");
    }
    return changeTraces;
  }
  var castPathCache = {},
    rePropName = /[^\.\[\]]+/g,
    reIsIndex = /^(?:0|[1-9]\d*)$/;
  function castPath(path) {
    return castPathCache[path]
      ? castPathCache[path]
      : (castPathCache[path] = path.match(rePropName));
  }
  function clone(object) {
    return index_esm_isArray(object) ? object.slice() : __assign({}, object);
  }
  var nextTick =
      "undefined" != typeof Promise
        ? function (callback) {
            return Promise.resolve().then(function () {
              return callback();
            });
          }
        : function (callback) {
            return window.setTimeout(callback, 0);
          },
    microTaskPending = !1,
    QUEUE = [];
  function renderSyncComponnet(
    component,
    lastVNode,
    nextVNode,
    parentDom,
    anchor,
    mountedQueue
  ) {
    (component.$blockRender = !0),
      index_esm_isFunction(component.beforeMount) &&
        component.beforeMount(lastVNode, nextVNode),
      (component.$blockRender = !1);
    var vNode = normalizeRoot(
        component.$template(index_esm_EMPTY_OBJ, component.get("$blocks")),
        nextVNode
      ),
      lastInput = null;
    !isNull(lastVNode) && (lastInput = lastVNode.children.$lastInput)
      ? patch(
          lastInput,
          vNode,
          parentDom,
          component,
          component.$SVG,
          anchor,
          mountedQueue
        )
      : mount(
          vNode,
          parentDom,
          component,
          component.$SVG,
          anchor,
          mountedQueue
        ),
      (component.$lastInput = vNode),
      mountedQueue.push(function () {
        component.$mount(lastVNode, nextVNode), callAllQueue(component);
      }),
      (component.$rendered = !0);
  }
  function renderAsyncComponent(
    component,
    lastVNode,
    nextVNode,
    parentDom,
    anchor,
    mountedQueue
  ) {
    var key;
    isNull(lastVNode) &&
      ((lastVNode = nextVNode),
      mount(
        (component.$lastInput = new VNode(
          32,
          null,
          1,
          "async",
          null,
          null,
          key,
          null
        )),
        parentDom,
        component,
        component.$SVG,
        anchor,
        mountedQueue
      ));
    component.on("$inited", function () {
      renderSyncComponnet(
        component,
        lastVNode,
        nextVNode,
        parentDom,
        anchor,
        (mountedQueue = [])
      ),
        callAll(mountedQueue);
    });
  }
  function updateSyncComponent(
    component,
    lastVNode,
    nextVNode,
    parentDom,
    anchor,
    mountedQueue,
    force
  ) {
    (component.$blockRender = !0),
      force ||
        (function (component, lastProps, nextProps, defaultProps) {
          if (
            (lastProps || (lastProps = index_esm_EMPTY_OBJ),
            nextProps || (nextProps = index_esm_EMPTY_OBJ),
            lastProps !== nextProps)
          ) {
            var changeTraces = [],
              props = component.props;
            if (nextProps !== index_esm_EMPTY_OBJ)
              for (var prop in nextProps) {
                var lastValue = rollbackToDefault(
                    prop,
                    lastProps[prop],
                    defaultProps
                  ),
                  nextValue = rollbackToDefault(
                    prop,
                    nextProps[prop],
                    defaultProps
                  );
                lastValue !== nextValue &&
                  index_runtime_esm_patchProp(
                    component,
                    props,
                    prop,
                    lastValue,
                    nextValue,
                    changeTraces
                  );
              }
            if (lastProps !== index_esm_EMPTY_OBJ)
              for (var prop in lastProps)
                index_esm_isUndefined(lastProps[prop]) ||
                  hasOwn.call(nextProps, prop) ||
                  index_runtime_esm_patchProp(
                    component,
                    props,
                    prop,
                    lastProps[prop],
                    defaultProps[prop],
                    null
                  );
            triggerReceiveEvents(component, changeTraces);
          }
        })(component, lastVNode.props, nextVNode.props, component.$defaults),
      index_esm_isFunction(component.beforeUpdate) &&
        component.beforeUpdate(lastVNode, nextVNode),
      (component.$blockRender = !1);
    var vNode = normalizeRoot(
      component.$template(index_esm_EMPTY_OBJ, component.get("$blocks")),
      nextVNode
    );
    patch(
      component.$lastInput,
      vNode,
      parentDom,
      component,
      component.$SVG,
      anchor,
      mountedQueue
    ),
      (component.$lastInput = vNode),
      index_esm_isFunction(component.updated) &&
        mountedQueue.push(function () {
          component.updated(lastVNode, nextVNode);
        });
  }
  function componentInited(component, triggerReceiveEvents) {
    (component.$inited = !0),
      isNull(triggerReceiveEvents) || triggerReceiveEvents(),
      component.trigger("$inited");
  }
  function index_runtime_esm_mountProps(component, nextProps) {
    var props = component.props,
      changeTraces = [];
    for (var prop in nextProps) {
      var nextValue = nextProps[prop];
      if (!index_esm_isUndefined(nextValue)) {
        var lastValue = props[prop];
        lastValue !== nextValue &&
          index_runtime_esm_patchProp(
            component,
            props,
            prop,
            lastValue,
            nextValue,
            changeTraces
          );
      }
    }
    return function () {
      return triggerReceiveEvents(component, changeTraces);
    };
  }
  function index_runtime_esm_patchProp(
    component,
    props,
    prop,
    lastValue,
    nextValue,
    changeTraces
  ) {
    isEventProp(prop)
      ? (props[prop] = nextValue)
      : ((props[prop] = nextValue),
        isNull(changeTraces) ||
          changeTraces.push({
            path: prop,
            newValue: nextValue,
            oldValue: lastValue,
          }));
  }
  function callModelEvent(component, path, newValue) {
    var modelEvent = component.props["ev-$model:" + path];
    modelEvent && modelEvent(newValue);
  }
  function triggerReceiveEvents(component, changeTraces) {
    for (var i = 0; i < changeTraces.length; i++) {
      var _a = changeTraces[i],
        path = _a.path,
        newValue = _a.newValue,
        oldValue = _a.oldValue;
      component.trigger("$receive:" + path, newValue, oldValue);
    }
  }
  function rerender() {
    var component = void 0;
    for (microTaskPending = !1; (component = QUEUE.shift()); )
      if (!component.$unmounted) {
        var mountedQueue = [],
          vNode = component.$vNode;
        component.$update(
          vNode,
          vNode,
          index_esm_findDomFromVNode(component.$lastInput, !0).parentNode,
          null,
          mountedQueue,
          !0
        ),
          callAll(mountedQueue),
          callAllQueue(component);
      }
  }
  function callAllQueue(component) {
    var queue = component.$queue;
    if (queue) {
      for (var i = 0; i < queue.length; i++) queue[i].call(component);
      component.$queue = null;
    }
  }
  function rollbackToDefault(prop, value, defaultProps) {
    return index_esm_isUndefined(value) ? defaultProps[prop] : value;
  }
  var Component = (function (_super) {
    function Component(props, mountedQueue) {
      var _this = _super.call(this) || this;
      (_this.refs = {}),
        (_this.$SVG = !1),
        (_this.$vNode = null),
        (_this.$lastInput = null),
        (_this.$blockRender = !1),
        (_this.$queue = null),
        (_this.$parent = null),
        (_this.$inited = !1),
        (_this.$rendered = !1),
        (_this.$mounted = !1),
        (_this.$unmounted = !1),
        (_this.$mountedQueue = mountedQueue);
      var template = _this.constructor.template;
      index_esm_isFunction(template)
        ? (_this.$template = template)
        : (_this.$template = compile(template)),
        (_this.$defaults = _this.defaults()),
        (_this.props = __assign({}, _this.$defaults));
      var triggerReceiveEvents = null;
      if (
        (isNull(props) ||
          (triggerReceiveEvents = index_runtime_esm_mountProps(_this, props)),
        index_esm_isFunction(_this.init))
      ) {
        var ret = _this.init(props);
        if (ret && ret.then)
          return (
            ret.then(
              function () {
                return componentInited(_this, triggerReceiveEvents);
              },
              function (err) {
                componentInited(_this, triggerReceiveEvents);
              }
            ),
            _this
          );
      }
      return componentInited(_this, triggerReceiveEvents), _this;
    }
    return (
      tslib_es6_extends(Component, _super),
      (Component.prototype.defaults = function () {
        return index_esm_EMPTY_OBJ;
      }),
      (Component.prototype.set = function (key, value, options) {
        var _a;
        if (
          (index_esm_isObject(key)
            ? (options = value)
            : (((_a = {})[key] = value), (key = _a)),
          index_esm_isUndefined(options) || !options.silent)
        )
          !(function (component, newProps) {
            var props = component.props,
              changeTracesGroup = [];
            for (var propName in newProps) {
              var lastValue = get(props, propName),
                nextValue = newProps[propName];
              lastValue !== nextValue &&
                changeTracesGroup.push(set(props, propName, nextValue));
            }
            var changesLength = changeTracesGroup.length;
            if (changesLength > 0) {
              for (var i = 0; i < changesLength; i++)
                for (
                  var changeTraces = changeTracesGroup[i],
                    j = changeTraces.length - 1;
                  j > -1;
                  j--
                ) {
                  var _a = changeTraces[j],
                    path = _a.path,
                    newValue = _a.newValue,
                    oldValue = _a.oldValue;
                  callModelEvent(component, path, newValue),
                    component.trigger("$change:" + path, newValue, oldValue);
                }
              component.forceUpdate(function () {
                for (var i = 0; i < changesLength; i++)
                  for (
                    var changeTraces = changeTracesGroup[i],
                      j = changeTraces.length - 1;
                    j > -1;
                    j--
                  ) {
                    var _a = changeTraces[j],
                      path = _a.path,
                      newValue = _a.newValue,
                      oldValue = _a.oldValue;
                    component.trigger("$changed:" + path, newValue, oldValue);
                  }
              });
            }
          })(this, key);
        else for (var propName in key) set(this.props, propName, key[propName]);
      }),
      (Component.prototype.get = function (key) {
        return index_esm_isUndefined(key) ? this.props : get(this.props, key);
      }),
      (Component.prototype.forceUpdate = function (callback) {
        this.$unmounted ||
          (function (component, callback) {
            component.$inited
              ? component.$blockRender
                ? index_esm_isFunction(callback) &&
                  component.$mountedQueue.push(callback)
                : (-1 === QUEUE.indexOf(component) && QUEUE.push(component),
                  microTaskPending ||
                    ((microTaskPending = !0), nextTick(rerender)),
                  index_esm_isFunction(callback) &&
                    (component.$queue || (component.$queue = [])).push(
                      callback
                    ))
              : index_esm_isFunction(callback) &&
                (component.$queue || (component.$queue = [])).push(callback);
          })(this, callback);
      }),
      (Component.prototype.trigger = function (name) {
        for (var args = [], _i = 1; _i < arguments.length; _i++)
          args[_i - 1] = arguments[_i];
        var propEvent = this.props["ev-" + name];
        index_esm_isFunction(propEvent) &&
          !this.$unmounted &&
          propEvent.apply(this, args),
          _super.prototype.trigger.call(this, name, args);
      }),
      (Component.prototype.watch = function (key, callback) {
        this.on("$change:" + key, callback),
          this.on("$receive:" + key, callback);
      }),
      (Component.prototype.$render = function (
        lastVNode,
        nextVNode,
        parentDom,
        anchor,
        mountedQueue
      ) {
        this.$inited
          ? renderSyncComponnet(
              this,
              lastVNode,
              nextVNode,
              parentDom,
              anchor,
              mountedQueue
            )
          : renderAsyncComponent(
              this,
              lastVNode,
              nextVNode,
              parentDom,
              anchor,
              mountedQueue
            );
      }),
      (Component.prototype.$mount = function (lastVNode, nextVNode) {
        (this.$mounted = !0),
          index_esm_isFunction(this.mounted) &&
            this.mounted(lastVNode, nextVNode);
      }),
      (Component.prototype.$update = function (
        lastVNode,
        nextVNode,
        parentDom,
        anchor,
        mountedQueue,
        force
      ) {
        this.$inited
          ? updateSyncComponent(
              this,
              lastVNode,
              nextVNode,
              parentDom,
              anchor,
              mountedQueue,
              force
            )
          : (function (
              component,
              lastVNode,
              nextVNode,
              parentDom,
              anchor,
              mountedQueue,
              force
            ) {
              component.on("$inited", function () {
                updateSyncComponent(
                  component,
                  lastVNode,
                  nextVNode,
                  parentDom,
                  anchor,
                  (mountedQueue = []),
                  force
                ),
                  callAll(mountedQueue);
              });
            })(
              this,
              lastVNode,
              nextVNode,
              parentDom,
              anchor,
              mountedQueue,
              force
            );
      }),
      (Component.prototype.$unmount = function (vNode, nextVNode) {
        index_esm_isFunction(this.beforeUnmount) &&
          this.beforeUnmount(vNode, nextVNode),
          unmount(this.$lastInput),
          (this.$unmounted = !0),
          this.off(),
          index_esm_isFunction(this.unmounted) &&
            this.unmounted(vNode, nextVNode);
      }),
      Component
    );
  })(
    (function () {
      function Event() {
        (this.$events = {}), (this.$blockAddEvent = !1);
      }
      return (
        (Event.prototype.on = function (name, callback) {
          var events = this.$events;
          (events[name] || (events[name] = [])).push(callback);
        }),
        (Event.prototype.off = function (name, callback) {
          if (index_esm_isUndefined(name)) this.$events = {};
          else {
            var callbacks = this.$events[name];
            if (!index_esm_isUndefined(callbacks))
              if (index_esm_isUndefined(callback)) this.$events[name] = void 0;
              else
                for (var i = 0; i < callbacks.length; i++)
                  if (callbacks[i] === callback) {
                    callbacks.splice(i, 1);
                    break;
                  }
          }
        }),
        (Event.prototype.trigger = function (name, args) {
          var callbacks = this.$events[name];
          if (!index_esm_isUndefined(callbacks)) {
            callbacks = callbacks.slice();
            for (var i = 0; i < callbacks.length; i++)
              callbacks[i].apply(this, args);
          }
        }),
        Event
      );
    })()
  );
  Boolean;
  var $props, $blocks, props, key, ref;
  compile = function () {};
  class TestComponent extends Component {}
  $blocks || ($blocks = {}),
    $props || ($props = {}),
    createComponentVNode(4, TestComponent, props, key, ref);
})();
