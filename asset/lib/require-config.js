/**
 * Created by weichunhe on 2015/12/29.
 */

(function (_t) {
    var min_suffix = _t.UGLIFY ? '-min' : '', //是否使用压缩文件
        ROOT = '/asset/',
        BASE = ROOT + 'js/',
        LIB = ROOT + 'lib/',
        BOWER_ROOT = ROOT + 'bower_components/';
    var config = {
        baseUrl: BASE
        , paths: {
            jquery: BOWER_ROOT + 'AdminLTE/plugins/jQuery/jQuery-2.1.4.min'
            , angular: BOWER_ROOT + 'angular/angular.min'
            , route: BOWER_ROOT + 'angular-ui-router/release/angular-ui-router.min'
            , lodash: BOWER_ROOT + 'lodash/lodash.min'
            , bootstrap: BOWER_ROOT + 'AdminLTE/bootstrap/js/bootstrap.min'
            , extend: LIB + 'angular-extend'
            , base: LIB + 'base'
        }
        , shim: {
            angular: {
                deps: ['jquery']
            },
            route: {
                deps: ['angular']
            },
            bootstrap: {
                deps: ['jquery']
            },
            extend: {
                deps: ['angular']
            },
            base: {
                deps: ['route', 'lodash', 'bootstrap', 'extend']
            }
        }
    };

    requirejs.config(config);
})(this);
