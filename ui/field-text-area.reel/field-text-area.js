/**
 * @module ui/field-text-area.reel
 */
var Component = require("mod/ui/component").Component;

/**
 * @class FieldTextArea
 * @extends Component
 */
exports.FieldTextArea = Component.specialize(/** @lends FieldTextArea# */ {
    enabled: {
        value: true
    }
});
