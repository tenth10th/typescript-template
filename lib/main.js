function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
console.log(greeter(user));
function curry(fn) {
    var arity = fn.length;
    return function $curry() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var _fn;
        if (args.length < arity) {
            var _$curry;
            return (_$curry = $curry).bind.apply(_$curry, [
                null
            ].concat(_to_consumable_array(args)));
        }
        return (_fn = fn).call.apply(_fn, [
            null
        ].concat(_to_consumable_array(args)));
    };
}
var matcher = curry(function(what, s) {
    return s.match(what);
});
var hasLetterR = matcher(/r/g);
console.log([
    "rock and/or roll",
    "smooth jazz"
].filter(hasLetterR));
export { };
