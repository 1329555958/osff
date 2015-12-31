/**
 * Created by weichunhe on 2015/12/29.
 */
define('config', function () {
    var config = {};

    config.views_base_path = '/asset/views'; //视图根目录
    config.view_suffix = '.html'; //视图后缀
    config.load_interface_url = '/data/interface.json'; //加载接口数据的url

    return config;
});