/**
 * @module ui/main.reel
 */
var Component = require("mod/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize({
    options: {
        value: [
            {
                "value": "option1",
                "label": "Option 1"
            },
            {
                "value": "optimal",
                "label": "Optimal"
            },
            {
                "value": "virtualization",
                "label": "Virtualization"
            },
            {
                "value": "backups",
                "label": "Backups"
            },
            {
                "value": "media",
                "label": "Media"
            }
        ]
    },

    selected: {
        value: [
            "optimal", "backups"
        ]
    }
});
