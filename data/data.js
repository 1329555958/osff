/**
 * Created by weichunhe on 2015/12/30.
 */
var data = [{
    id: 1,
    name: '后台管理',
    url: null,
    children: [
        {
            id: 11,
            name: '菜单配置',
            url: '#/menu',
            children: null
        },
        {
            id: 11,
            name: '接口配置',
            url: '#/interface',
            children: null
        }
    ]
}];
console.log(JSON.stringify(data, function (key, val) {
    return val;
}, '  '));