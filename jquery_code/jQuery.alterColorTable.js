;(function($){
    $.fn.extend({
        "alterBgColor": function(options){
            //设置默认值
            options = $.extend({
            odd: "odd",      //偶数行样式
            even: "even",    //奇数行样式
            selected: "selected"    //选中行样式
            }, options);
            //this表示在匹配的元素内查找，防止将页面中的全部table都隔行变色
            $("tbody>tr:odd", this).addClass(options.odd);
            $("tbody>tr:even", this).addClass(options.even);
            $("tbody>tr", this).click(function (e) { 
            //判断当前是否选中
            var hasSelected = $(this).hasClass(options.selected);
            //若选中，移出selected类，否则加上selected类
            $(this)[hasSelected?"removeClass":"addClass"](options.selected)
                //查找内部的checkbox，设置对应的属性
                .find(":checkbox").attr("checked", !hasSelected);    
            });
            //若单选框默认是选择的，则高亮
            $("tbody>tr:hasClass(:checked)", this).addClass(options.selected);
            //返回this，使方法可链
            return this; 
        }
    })
})(jQuery);

;(function($){
    $.extend($.expr[":"], {
        between: function( a, i, m ){
            //将传进来的m[3]以逗号为分隔符，转成一个数组
            var temp = m[3].split(",");
            //“temp[0] - 0” 将字符串转换成了数字
            return temp[0] - 0 < i && i < temp[1] - 0;
        }
    })
})(jQuery)

// 使用例子
// $("#table2").alterBgColor()                     //应用插件
//             .find("th").css("color", "red");    //可以链式操作