/**
 * Require.js Config
 *
 * Use this common config file across all pages. In your html template, use this loading scheme:
 *
 * <script src="js/lib/require.js"></script>
 * <script>
 *   require(['js/app/config.js'], function (config) {
 *     require(['js/app/controllers/PageSpecificController.js']);
 *   });
 * </script>
 */
requirejs.config({
    "baseUrl": "/js/app",
    "paths": {
        "jquery":               "http://code.jquery.com/jquery-2.0.3.min",
        "bootstrap":            "../lib/bootstrap",
        "PageSpecificView":     "views/PageSpecificView",
        "PageSpecificModel":    "models/PageSpecificModel"
    },
    "shim": {
        "bootstrap": {
            "deps": ["jquery"]
        }
    }
});