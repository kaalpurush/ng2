var CustomValidators;
(function (CustomValidators) {
    var TypeValidators = (function () {
        function TypeValidators() {
        }
        TypeValidators.tel = function (control) {
            if (!control.value.match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)) {
                return { tel: true };
            }
        };
        TypeValidators.email = function (control) {
            if (!control.value.match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)) {
                return { email: true };
            }
        };
        return TypeValidators;
    })();
    CustomValidators.TypeValidators = TypeValidators;
})(CustomValidators || (CustomValidators = {}));
module.exports = CustomValidators;
//# sourceMappingURL=custom_validators.js.map