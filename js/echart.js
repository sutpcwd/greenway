$(function () {

    // $().ceshis1(0);
    // ceshi2();
    // ceshi3();
    // ceshi4();
    // ceshi5();
    //ceshi6();
    // ceshi7();
    // ceshi8()
    // echart_map();


    
        $.fn.ceshis1=function(value){
        var myChart = echarts.init(document.getElementById('ceshi'));

        var ydata = [{
            name: '林地',
            value: 10640,
            percent:52.68
        },
            {
                name: '草地',
                value: 643,
                percent:3.18
            },
            {
                name: '水体',
                value: 27,
                percent:0.13
            },
            {
                name: '裸地',
                value: 1237,
                percent:6.12
            },
            {
                name: '其他地类',
                value: 7652,
                percent:37.88
            },
        ];
        var ydata5 = [{
            name: '林地',
            value: 62.82,
            percent:23
        },
            {
                name: '草地',
                value: 3.96,
                percent:1
            },
            {
                name: '水体',
                value: 10.11,
                percent:4
            },
            {
                name: '裸地',
                value: 36.59,
                percent:14
            },
            {
                name: '其他地类',
                value: 156.12,
                percent:58
            },
        ];
        var ydata10 = [{
            name: '林地',
            value: 7.6735,
            percent:73
        },
            {
                name: '草地',
                value: 0.0681,
                percent:3.18
            },
            {
                name: '水体',
                value: 0.0241,
                percent:1
            },
            {
                name: '裸地',
                value: 0.8587,
                percent:8
            },
            {
                name: '其他地类',
                value: 1.9239,
                percent:17
            },
        ];
        var ydata16 = [{
            name: '林地',
            value: 7.4,
            percent:10
        },
            {
                name: '草地',
                value: 6.1,
                percent:8
            },
            {
                name: '水体',
                value: 0,
                percent:0
            },
            {
                name: '裸地',
                value: 20.800,
                percent:27
            },
            {
                name: '其他地类',
                value: 41.40,
                percent:55
            },
        ];
        var color = ['#4ac7f5','#25f3e6','#fdb301',"#8d7fec", "#ffff43", "#cf9ef1"]
        var xdata = ['林地', "草地", "水体", "裸地", '其他',];
        var weatherIcons = {
            'a':'./images/10.png',
            'b':'./images/11.png',
            'c':'./images/12.png',
            'd':'./images/13.png',
            'e':'./images/14.png',
        };

        // option = {
        //     /*backgroundColor: "rgba(255,255,255,1)",*/
        //     color: color,
        //     // legend: {
        //     //     orient: "vartical",
        //     //     x: "left",
        //     //     top: "center",
        //     //     left: "83%",
        //     //     bottom: "0%",
        //     //     data: xdata,
        //     //     itemWidth: 8,
        //     //     itemHeight: 8,
        //     //     textStyle: {
        //     //         color: '#fff'
        //     //     },
        //     //     /*itemGap: 16,*/
        //     //     /*formatter:function(name){
        //     //       var oa = option.series[0].data;
        //     //       var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value+oa[4].value + oa[5].value + oa[6].value + oa[7].value+oa[8].value + oa[9].value ;
        //     //       for(var i = 0; i < option.series[0].data.length; i++){
        //     //           if(name==oa[i].name){
        //     //               return ' '+name + '    |    ' + oa[i].value + '    |    ' + (oa[i].value/num * 100).toFixed(2) + '%';
        //     //           }
        //     //       }
        //     //     }*/

        //     //     formatter: function(name) {
        //     //         return '' + name
        //     //     }
        //     // },
        //     legend:{
        //         show:false
        //     },
        //     series: [{
        //         type: 'bar',
        //         // name:'',
        //         // clockwise: false, //饼图的扇区是否是顺时针排布
        //         // minAngle: 2, //最小的扇区角度（0 ~ 360）
        //         // radius: ["20%", "60%"],
        //         // center: ["45%", "45%"],
        //         // avoidLabelOverlap: false,
        //         // itemStyle: { //图形样式
        //         //     normal: {
        //         //         borderColor: '#ffffff',
        //         //         borderWidth: 1,
        //         //     },
        //         // },
        //         label: {
        //             normal: {
        //                 show: true,
        //                 // position: 'outside',
        //                 // formatter: '{text|{b}}\n{c} ({d}%)',
        //                 formatter:'{c}\n({b})',
        //                 fontSize: 15,
        //                 rich: {
        //                     v: {
        //                         color: "#fff",
        //                         fontSize: 18,
        //                         align: 'center',
        //                         verticalAlign: 'middle',
        //                         padding: 8
        //                     },
        //                     value: {
        //                         color: "#8693F3",
        //                         fontSize: 20,
        //                         align: 'center',
        //                         verticalAlign: 'middle',
        //                     },
        //                 }
        //             },
        //             emphasis: {
        //                 show: false,
        //                 textStyle: {
        //                     fontSize: 24,
        //                 }
        //             }
        //         },
        //         data: ydata,
        //         // tooltip:{show:false}
        //     }]
        // };
        if(value== 0){
        option = {
            yAxis: {
                type: 'category',
                data: ['a', "b", "c", "d", 'e',],
                axisLabel: {
                    formatter: function (value) {
                        return '{' + value + '| }';
                    },
                    // margin: 20,
                    rich: {
                        value: {
                            lineHeight: 30,
                            align: 'center'
                        },
                        a: {
                            height: 25,
                            align: 'center',
                            backgroundColor: {
                                image: weatherIcons.a
                            }
                        },
                        b: {
                            height: 25,
                            align: 'center',
                            backgroundColor: {
                                image: weatherIcons.b
                            }
                        },
                        c: {
                            height: 25,
                            align: 'center',
                            backgroundColor: {
                                image: weatherIcons.c
                            }
                        },
                        d: {
                            height: 25,
                            align: 'center',
                            backgroundColor: {
                                image: weatherIcons.d
                            }
                        },
                        e: {
                            height: 25,
                            align: 'center',
                            backgroundColor: {
                                image: weatherIcons.e
                            }
                        },
                    }
                }
            },
            xAxis: {
                type: 'value'
            },
            series: [{
                data: ydata,
                type: 'bar',
                name:'11',
                label:{
                    normal: {
                        show: true,
                        position:'right',
                        color: '#fff',
                        textBorderWidth: 2,
                        // formatter:'{c} {a}{b}',
                        formatter:function(value){
                            console.log(value)
                            return value.data.name+'-'+value.data.value+'公顷'+'\n（'+value.data.percent+'%)'
                        }
                    }
                }
            }],
            color:color,
        };
        myChart.setOption(option);
        }else if(value == 5){
            option = {
                yAxis: {
                    type: 'category',
                    data: ['a', "b", "c", "d", 'e',],
                    axisLabel: {
                        formatter: function (value) {
                            return '{' + value + '| }';
                        },
                        // margin: 20,
                        rich: {
                            value: {
                                lineHeight: 30,
                                align: 'center'
                            },
                            a: {
                                height: 25,
                                align: 'center',
                                backgroundColor: {
                                    image: weatherIcons.a
                                }
                            },
                            b: {
                                height: 25,
                                align: 'center',
                                backgroundColor: {
                                    image: weatherIcons.b
                                }
                            },
                            c: {
                                height: 25,
                                align: 'center',
                                backgroundColor: {
                                    image: weatherIcons.c
                                }
                            },
                            d: {
                                height: 25,
                                align: 'center',
                                backgroundColor: {
                                    image: weatherIcons.d
                                }
                            },
                            e: {
                                height: 25,
                                align: 'center',
                                backgroundColor: {
                                    image: weatherIcons.e
                                }
                            },
                        }
                    }
                },
                xAxis: {
                    type: 'value'
                },
                series: [{
                    data: ydata5,
                    type: 'bar',
                    name:'11',
                    label:{
                        normal: {
                            show: true,
                            position:'right',
                            color: '#fff',
                            textBorderWidth: 2,
                            // formatter:'{c} {a}{b}',
                            formatter:function(value){
                                console.log(value)
                                return value.data.name+'-'+value.data.value+'公顷'+'\n（'+value.data.percent+'%)'
                            }
                        }
                    }
                }],
                color:color,
            };
            myChart.setOption(option);
        }else if(value == 10){
            option = {
                yAxis: {
                    type: 'category',
                    data: ['a', "b", "c", "d", 'e',],
                    axisLabel: {
                        formatter: function (value) {
                            return '{' + value + '| }';
                        },
                        // margin: 20,
                        rich: {
                            value: {
                                lineHeight: 30,
                                align: 'center'
                            },
                            a: {
                                height: 25,
                                align: 'center',
                                backgroundColor: {
                                    image: weatherIcons.a
                                }
                            },
                            b: {
                                height: 25,
                                align: 'center',
                                backgroundColor: {
                                    image: weatherIcons.b
                                }
                            },
                            c: {
                                height: 25,
                                align: 'center',
                                backgroundColor: {
                                    image: weatherIcons.c
                                }
                            },
                            d: {
                                height: 25,
                                align: 'center',
                                backgroundColor: {
                                    image: weatherIcons.d
                                }
                            },
                            e: {
                                height: 25,
                                align: 'center',
                                backgroundColor: {
                                    image: weatherIcons.e
                                }
                            },
                        }
                    }
                },
                xAxis: {
                    type: 'value'
                },
                series: [{
                    data: ydata10,
                    type: 'bar',
                    name:'11',
                    label:{
                        normal: {
                            show: true,
                            position:'right',
                            color: '#fff',
                            textBorderWidth: 2,
                            // formatter:'{c} {a}{b}',
                            formatter:function(value){
                                console.log(value)
                                return value.data.name+'-'+value.data.value+'公顷'+'\n（'+value.data.percent+'%)'
                            }
                        }
                    }
                }],
                color:color,
            };
            myChart.setOption(option);
        }else if( value == 16){
            option = {
                yAxis: {
                    type: 'category',
                    data: ['a', "b", "c", "d", 'e',],
                    axisLabel: {
                        formatter: function (value) {
                            return '{' + value + '| }';
                        },
                        // margin: 20,
                        rich: {
                            value: {
                                lineHeight: 30,
                                align: 'center'
                            },
                            a: {
                                height: 25,
                                align: 'center',
                                backgroundColor: {
                                    image: weatherIcons.a
                                }
                            },
                            b: {
                                height: 25,
                                align: 'center',
                                backgroundColor: {
                                    image: weatherIcons.b
                                }
                            },
                            c: {
                                height: 25,
                                align: 'center',
                                backgroundColor: {
                                    image: weatherIcons.c
                                }
                            },
                            d: {
                                height: 25,
                                align: 'center',
                                backgroundColor: {
                                    image: weatherIcons.d
                                }
                            },
                            e: {
                                height: 25,
                                align: 'center',
                                backgroundColor: {
                                    image: weatherIcons.e
                                }
                            },
                        }
                    }
                },
                xAxis: {
                    type: 'value'
                },
                series: [{
                    data: ydata16,
                    type: 'bar',
                    name:'11',
                    label:{
                        normal: {
                            show: true,
                            position:'right',
                            color: '#fff',
                            textBorderWidth: 2,
                            // formatter:'{c} {a}{b}',
                            formatter:function(value){
                                console.log(value)
                                return value.data.name+'-'+value.data.value+'公顷'+'\n（'+value.data.percent+'%)'
                            }
                        }
                    }
                }],
                color:color,
            };
            myChart.setOption(option);
        }
        // setTimeout(function() {
        //     myChart.on('mouseover', function(params) {
        //         if (params.name == ydata[0].name) {
        //             myChart.dispatchAction({
        //                 type: 'highlight',
        //                 seriesIndex: 0,
        //                 dataIndex: 0
        //             });
        //         } else {
        //             myChart.dispatchAction({
        //                 type: 'downplay',
        //                 seriesIndex: 0,
        //                 dataIndex: 0
        //             });
        //         }
        //     });

        //     myChart.on('mouseout', function(params) {
        //         myChart.dispatchAction({
        //             type: 'highlight',
        //             seriesIndex: 0,
        //             dataIndex: 0
        //         });
        //     });
        //     myChart.dispatchAction({
        //         type: 'highlight',
        //         seriesIndex: 0,
        //         dataIndex: 0
        //     });
        // }, 1000);

        myChart.currentIndex = -1;

        // setInterval(function () {
        //     var dataLen = option.series[0].data.length;
        //     // 取消之前高亮的图形
        //     myChart.dispatchAction({
        //         type: 'downplay',
        //         seriesIndex: 0,
        //         dataIndex: myChart.currentIndex
        //     });
        //     myChart.currentIndex = (myChart.currentIndex + 1) % dataLen;
        //     // 高亮当前图形
        //     myChart.dispatchAction({
        //         type: 'highlight',
        //         seriesIndex: 0,
        //         dataIndex: myChart.currentIndex
        //     });
        // }, 1000);

        // 使用刚指定的配置项和数据显示图表。
        /*myChart.setOption(option);*/
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echart_map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('ceshi8'));

        var chinaGeoCoordMap = {
            '黑龙江': [127.9688, 45.368],
            '内蒙古': [110.3467, 41.4899],
            "吉林": [125.8154, 44.2584],
            '北京市': [116.4551, 40.2539],
            "辽宁": [123.1238, 42.1216],
            "河北": [114.4995, 38.1006],
            "天津": [117.4219, 39.4189],
            "山西": [112.3352, 37.9413],
            "陕西": [109.1162, 34.2004],
            "甘肃": [103.5901, 36.3043],
            "宁夏": [106.3586, 38.1775],
            "青海": [101.4038, 36.8207],
            "新疆": [87.9236, 43.5883],
            "西藏": [91.11, 29.97],
            "四川": [103.9526, 30.7617],
            "重庆": [108.384366, 30.439702],
            "山东": [117.1582, 36.8701],
            "河南": [113.4668, 34.6234],
            "江苏": [118.8062, 31.9208],
            "安徽": [117.29, 32.0581],
            "湖北": [114.3896, 30.6628],
            "浙江": [119.5313, 29.8773],
            "福建": [119.4543, 25.9222],
            "江西": [116.0046, 28.6633],
            "湖南": [113.0823, 28.2568],
            "贵州": [106.6992, 26.7682],
            "云南": [102.9199, 25.4663],
            "广东": [113.12244, 23.009505],
            "广西": [108.479, 23.1152],
            "海南": [110.3893, 19.8516],
            '上海': [121.4648, 31.2891]
        };
        var chinaDatas = [
            [{
                name: '黑龙江',
                value: 0
            }],	[{
                name: '内蒙古',
                value: 0
            }],	[{
                name: '吉林',
                value: 0
            }],	[{
                name: '辽宁',
                value: 0
            }],	[{
                name: '河北',
                value: 0
            }],	[{
                name: '天津',
                value: 0
            }],	[{
                name: '山西',
                value: 0
            }],	[{
                name: '陕西',
                value: 0
            }],	[{
                name: '甘肃',
                value: 0
            }],	[{
                name: '宁夏',
                value: 0
            }],	[{
                name: '青海',
                value: 0
            }],	[{
                name: '新疆',
                value: 0
            }],[{
                name: '西藏',
                value: 0
            }],	[{
                name: '四川',
                value: 0
            }],	[{
                name: '重庆',
                value: 0
            }],	[{
                name: '山东',
                value: 0
            }],	[{
                name: '河南',
                value: 0
            }],	[{
                name: '江苏',
                value: 0
            }],	[{
                name: '安徽',
                value: 0
            }],	[{
                name: '湖北',
                value: 0
            }],	[{
                name: '浙江',
                value: 0
            }],	[{
                name: '福建',
                value: 0
            }],	[{
                name: '江西',
                value: 0
            }],	[{
                name: '湖南',
                value: 0
            }],	[{
                name: '贵州',
                value: 0
            }],[{
                name: '广西',
                value: 0
            }],	[{
                name: '海南',
                value: 0
            }],	[{
                name: '上海',
                value: 1
            }]
        ];

        var convertData = function(data) {
            var res = [];
            for(var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = chinaGeoCoordMap[dataItem[0].name];
                var toCoord = [116.4551,40.2539];
                if(fromCoord && toCoord) {
                    res.push([{
                        coord: fromCoord,
                        value: dataItem[0].value
                    }, {
                        coord: toCoord,
                    }]);
                }
            }
            return res;
        };
        var series = [];
        [['北京市', chinaDatas]].forEach(function(item, i) {
            console.log(item)
            series.push({
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 4, //箭头指向速度，值越小速度越快
                        trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                        symbol: 'arrow', //箭头图标
                        symbolSize: 5, //图标大小
                    },
                    lineStyle: {
                        normal: {
                            width: 1, //尾迹线条宽度
                            opacity: 1, //尾迹线条透明度
                            curveness: .3 //尾迹线条曲直度
                        }
                    },
                    data: convertData(item[1])
                }, {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: { //涟漪特效
                        period: 4, //动画时间，值越小速度越快
                        brushType: 'stroke', //波纹绘制方式 stroke, fill
                        scale: 4 //波纹圆环最大限制，值越大波纹越大
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right', //显示位置
                            offset: [5, 0], //偏移设置
                            formatter: function(params){//圆环显示文字
                                return params.data.name;
                            },
                            fontSize: 13
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    symbol: 'circle',
                    symbolSize: function(val) {
                        return 5+ val[2] * 5; //圆环大小
                    },
                    itemStyle: {
                        normal: {
                            show: false,
                            color: '#f00'
                        }
                    },
                    data: item[1].map(function(dataItem) {
                        return {
                            name: dataItem[0].name,
                            value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                        };
                    }),
                },
                //被攻击点
                {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        period: 4,
                        brushType: 'stroke',
                        scale: 4
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            //offset:[5, 0],
                            color: '#0f0',
                            formatter: '{b}',
                            textStyle: {
                                color: "#0f0"
                            }
                        },
                        emphasis: {
                            show: true,
                            color: "#f60"
                        }
                    },
                    symbol: 'pin',
                    symbolSize: 50,
                    data: [{
                        name: item[0],
                        value: chinaGeoCoordMap[item[0]].concat([10]),
                    }],
                }
            );
        });

        option = {
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(166, 200, 76, 0.82)',
                borderColor: '#FFFFCC',
                showDelay: 0,
                hideDelay: 0,
                enterable: true,
                transitionDuration: 0,
                extraCssText: 'z-index:100',
                formatter: function(params, ticket, callback) {
                    //根据业务自己拓展要显示的内容
                    var res = "";
                    var name = params.name;
                    var value = params.value[params.seriesIndex + 1];
                    res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                    return res;
                }
            },
            /*backgroundColor:"#013954",*/
            visualMap: { //图例值控制
                min: 0,
                max: 1,
                calculable: true,
                show: false,
                color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
                textStyle: {
                    color: '#fff'
                }
            },
            geo: {
                map: 'china',
                zoom: 1.2,
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true, //是否允许缩放
                itemStyle: {
                    normal: {
                        color: 'rgba(51, 69, 89, .5)', //地图背景色
                        borderColor: '#516a89', //省市边界线00fcff 516a89
                        borderWidth: 1
                    },
                    emphasis: {
                        color: 'rgba(37, 43, 61, .5)' //悬浮背景
                    }
                }
            },
            series: series
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

    }
    // function ceshi2() {
    //     var myChart = echarts.init($("#ceshi2")[0]);
    //     option = {
    //         /*backgroundColor: '#05163B',*/
    //         tooltip: {
    //             trigger: 'axis'
    //         },
    //         toolbox: {
    //             show: true,
    //             feature: {
    //                 mark: {
    //                     show: true
    //                 },
    //                 dataView: {
    //                     show: true,
    //                     readOnly: false
    //                 },
    //                 magicType: {
    //                     show: true,
    //                     type: ['line', 'bar']
    //                 },
    //                 restore: {
    //                     show: true
    //                 },
    //                 saveAsImage: {
    //                     show: true
    //                 }
    //             }
    //         },
    //         grid: {
    //             top: 'middle',
    //             left: '3%',
    //             right: '4%',
    //             bottom: '3%',
    //             top: '10%',
    //             containLabel: true
    //         },
    //         legend: {
    //             data: ['植被平均高度', '植被树冠面积', '植被占比', '林地面积'],
    //             textStyle: {
    //                 color: "#fff"
    //             }

    //         },
    //         xAxis: [{
    //             type: 'category',
    //             data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月',
    //                 '12月'
    //             ],
    //             axisLabel: {
    //                 show: true,
    //                 textStyle: {
    //                     color: "#ebf8ac" //X轴文字颜色
    //                 }
    //             },
    //             axisLine: {
    //                 lineStyle: {
    //                     color: '#01FCE3'
    //                 }
    //             },
    //         }],
    //         yAxis: [{
    //             type: 'value',
    //             name: '面积',
    //             axisLabel: {
    //                 formatter: '{value}平方公里 ',
    //                 textStyle: {
    //                     color: "#2EC7C9" //X轴文字颜色
    //                 }
    //             },
    //             axisLine: {
    //                 lineStyle: {
    //                     color: '#01FCE3'
    //                 }
    //             },
    //         },
    //             {
    //                 type: 'value',
    //                 name: '百分比',
    //                 axisLabel: {
    //                     formatter: '{value}% ',
    //                     textStyle: {
    //                         color: "#2EC7C9" //X轴文字颜色
    //                     }
    //                 }
    //             }
    //         ],
    //         series: [

    //             {
    //                 name: '植被平均高度',
    //                 type: 'bar',
    //                 itemStyle: {
    //                     normal: {
    //                         barBorderRadius: 5,
    //                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                             offset: 0,
    //                             color: "#00FFE3"
    //                         },
    //                             {
    //                                 offset: 1,
    //                                 color: "#4693EC"
    //                             }
    //                         ])
    //                     }
    //                 },
    //                 data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    //             },
    //             {
    //                 name: '植被树冠面积',
    //                 type: 'bar',
    //                 itemStyle: {
    //                     normal: {
    //                         barBorderRadius: 5,
    //                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                             offset: 0,
    //                             color: "#C1B2EA"
    //                         },
    //                             {
    //                                 offset: 1,
    //                                 color: "#8362C6"
    //                             }
    //                         ])
    //                     }
    //                 },
    //                 data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
    //             },
    //             {
    //                 name: '植被占比',
    //                 type: 'line',
    //                 yAxisIndex: 1,
    //                 data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
    //                 lineStyle: {
    //                     normal: {
    //                         width: 5,
    //                         color: {
    //                             type: 'linear',

    //                             colorStops: [{
    //                                 offset: 0,
    //                                 color: '#AAF487' // 0% 处的颜色
    //                             },
    //                                 {
    //                                     offset: 0.4,
    //                                     color: '#47D8BE' // 100% 处的颜色
    //                                 }, {
    //                                     offset: 1,
    //                                     color: '#47D8BE' // 100% 处的颜色
    //                                 }
    //                             ],
    //                             globalCoord: false // 缺省为 false
    //                         },
    //                         shadowColor: 'rgba(71,216,190, 0.5)',
    //                         shadowBlur: 10,
    //                         shadowOffsetY: 7
    //                     }
    //                 },
    //                 itemStyle: {
    //                     normal: {
    //                         color: '#AAF487',
    //                         borderWidth: 10,
    //                         /*shadowColor: 'rgba(72,216,191, 0.3)',
    //                          shadowBlur: 100,*/
    //                         borderColor: "#AAF487"
    //                     }
    //                 },
    //                 smooth: true,
    //             },
    //             {
    //                 name: '林地面积',
    //                 type: 'line',
    //                 yAxisIndex: 1,
    //                 data: [4.0, 3.2, 2.3, 5.5, 4.3, 11.2, 15.3, 22.4, 21.0, 13.5, 12.0, 10.2],
    //                 lineStyle: {
    //                     normal: {
    //                         width: 5,
    //                         color: {
    //                             type: 'linear',

    //                             colorStops: [{
    //                                 offset: 0,
    //                                 color: '#F8B854' // 0% 处的颜色
    //                             },
    //                                 {
    //                                     offset: 0.4,
    //                                     color: '#DE801C' // 100% 处的颜色
    //                                 }, {
    //                                     offset: 1,
    //                                     color: '#DE801C' // 100% 处的颜色
    //                                 }
    //                             ],
    //                             globalCoord: false // 缺省为 false
    //                         },
    //                         shadowColor: 'rgba(71,216,190, 0.5)',
    //                         shadowBlur: 10,
    //                         shadowOffsetY: 7
    //                     }
    //                 },
    //                 itemStyle: {
    //                     normal: {
    //                         color: '#F7AD3E',
    //                         borderWidth: 10,
    //                         /*shadowColor: 'rgba(72,216,191, 0.3)',
    //                          shadowBlur: 100,*/
    //                         borderColor: "#F7AD3E"
    //                     }
    //                 },
    //                 smooth: true,
    //             }
    //         ]
    //     };


    //     myChart.setOption(option);
    //     window.addEventListener('resize', function () {myChart.resize();})

    // }

    $.fn.ceshi3=function(value){
        var myChart = echarts.init($("#ceshi3")[0]);
        /**
         * 图标所需数据
         */
        var data = {
            0:{
            value: 20.2,
            text: ['高覆盖度','中覆盖度','低覆盖度'],
            color: ['#4ac7f5','#25f3e6','#ffff43'],
            xAxis: ['草地覆盖度'],
            values: ['46','20','34'],
            },
            5:{
            value: 20.2,
            text: ['高覆盖度','中覆盖度','低覆盖度'],
            color: ['#4ac7f5','#25f3e6','#ffff43'],
            xAxis: ['草地覆盖度'],
            values: ['21','30','49'],
            },
            10:{
            value: 20.2,
            text: ['高覆盖度','中覆盖度','低覆盖度'],
            color: ['#4ac7f5','#25f3e6','#ffff43'],
            xAxis: ['草地覆盖度'],
            values: ['48','15','37'],
            },
            16:{
            value: 20.2,
            text: ['高覆盖度','中覆盖度','低覆盖度'],
            color: ['#4ac7f5','#25f3e6','#ffff43'],
            xAxis: ['草地覆盖度'],
            values: ['36','42','22'],
            },
            
        }

        var seriesData = {
            type: 'pie',
            radius: ['35', '45'],

            center: [50  + '%', '40%'],
            hoverAnimation: false,
            label: {
                normal: {
                    position: 'center',
                    
                },
            },
            data: []
        };
        var titleData = [{
            text: '草地覆盖度',
            left: 50  - .5 + '%',
            top: '70%',
            
            textAlign: 'center',
            textStyle: {
                fontSize: '18',
                color: '#ffffff',
                fontWeight: '400',
                
            },
        }];
        data[value].values.forEach(function(item, index) {
            console.log(item)
            seriesData.data.push({
                    value: item,
                    name: data[value].text[index],
                    itemStyle: {
                        normal: {
                            color: data[value].color[index],
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position:'outside',
                            formatter: '{b}\n({d}%)',

                        }
                    }
                },
                )
        })

////////////////////////////////////////

        // let value = data.value || 0
        option = {
            /*backgroundColor: '#fff',*/
            title: titleData,
            series: seriesData,
        }

        myChart.setOption(option);
        window.addEventListener('resize', function () {myChart.resize();})

    }
//     function ceshi4() {
//         var myChart = echarts.init($("#ceshi4")[0]);
//         /**
//          * 图标所需数据
//          */
//         var data = {
//             value: 20.2,
//             text: '-',
//             color: '#25f3e6',
//             xAxis: ['总体覆盖度'],
//             values: ['46'],
//         }

//         var seriesData = []
//         var titleData = []
//         data.values.forEach(function(item, index) {
//             titleData.push({
//                 text: data.xAxis[index],
//                 left: 50 * (index + 1) - .5 + '%',
//                 top: '60%',

//                 textAlign: 'center',
//                 textStyle: {
//                     fontSize: '12',
//                     color: '#ffffff',
//                     fontWeight: '400',
//                 },
//             })
//             seriesData.push({
//                 type: 'pie',
//                 radius: ['35', '45'],
//                 center: [50 * (index + 1) + '%', '30%'],
//                 hoverAnimation: false,
//                 label: {
//                     normal: {
//                         position: 'center'
//                     },
//                 },
//                 data: [{
//                     value: item,
//                     name: data.text,
//                     itemStyle: {
//                         normal: {
//                             color: data.color,
//                         }
//                     },
//                     label: {
//                         normal: {
//                             show: false,
//                         }
//                     }
//                 },
//                     {
//                         value: 100 - item,
//                         name: '占位',
//                         tooltip: {
//                             show: false
//                         },
//                         itemStyle: {
//                             normal: {
//                                 color: '#edf1f4',
//                             }
//                         },
//                         label: {
//                             normal: {
//                                 formatter: item + '',
//                                 textStyle: {
//                                     fontSize: 36,
//                                     color: data.color
//                                 }
//                             },

//                         }
//                     }
//                 ]
//             })
//         })

// ////////////////////////////////////////

//         let value = data.value || 0
//         option = {
//             /*backgroundColor: '#fff',*/
//             title: titleData,
//             series: seriesData
//         }

//         myChart.setOption(option);
//         window.addEventListener('resize', function () {myChart.resize();})

//     }
$.fn.ceshi5=function(value){
        var myChart = echarts.init($("#ceshi5")[0]);
        /**
         * 图标所需数据
         */
        var data = {
            0:{
            value: 20.2,
            text: ['高层植被','中层植被','低层植被'],
            color: ['#4ac7f5','#25f3e6','#ffff43'],
            xAxis: ['植被覆盖度'],
            values: ['16','34','54'],
            },
            5:{
            value: 20.2,
            text: ['高层植被','中层植被','低层植被'],
            color: ['#4ac7f5','#25f3e6','#ffff43'],
            xAxis: ['植被覆盖度'],
            values: ['11','30','59'],
            },
            10:{
            value: 20.2,
            text: ['高层植被','中层植被','低层植被'],
            color: ['#4ac7f5','#25f3e6','#ffff43'],
            xAxis: ['植被覆盖度'],
            values: ['58','25','17'],
            },
            16:{
            value: 20.2,
            text: ['高层植被','中层植被','低层植被'],
            color: ['#4ac7f5','#25f3e6','#ffff43'],
            xAxis: ['植被覆盖度'],
            values: ['16','52','32'],
            },
        }

        var seriesData = {
            type: 'pie',
            radius: ['35', '45'],

            center: [50  + '%', '40%'],
            hoverAnimation: false,
            label: {
                normal: {
                    position: 'center',
                    
                },
            },
            data: []
        };
        var titleData = [{
            text: '树高分层',
            left: 50  - .5 + '%',
            top: '70%',
            
            textAlign: 'center',
            textStyle: {
                fontSize: '18',
                color: '#ffffff',
                fontWeight: '400',
                
            },
        }];
        data[value].values.forEach(function(item, index) {
            console.log(item)
            seriesData.data.push({
                    value: item,
                    name: data[value].text[index],
                    itemStyle: {
                        normal: {
                            color: data[value].color[index],
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position:'outside',
                            formatter: '{b}\n({d}%)',
                        }
                    }
                },
                )
        })

        

////////////////////////////////////////

        // let value = data.value || 0
        option = {
            /*backgroundColor: '#fff',*/
            title: titleData,
            series: seriesData
        }

        myChart.setOption(option);
        window.addEventListener('resize', function () {myChart.resize();})

    }

//     function ceshi6() {
//         var myChart = echarts.init($("#ceshi6")[0]);

//         var data = [110, 20, 36, 10, 50, 80, 100, 60];
//         var sum = 0;
//         var percentdata = [];
//         for (var i = 0; i < data.length; i++) {
//             sum += data[i];
//         };
//         for (var j = 0; j < data.length; j++) {
//             percentdata.push((((data[j] / sum) * 100).toFixed(2)));
//         };
// // console.log(percentdata);
//         option = {
//             color: ['#0035f9', '#f36f8a', '#ffff43', '#25f3e6'],
//             grid: {
//                 left: '8%',
//                 right: '10%',
//                 top: '12%',
//                 bottom: '18%',
//                 containLabel: true
//             },
//             yAxis: {
//                 data: ["白菜", "西红柿", "茄子",
//                     "辣椒", "大蒜", "莴笋", "洋芋",
//                     "藕",
//                 ],
//                 axisTick: {
//                     show: false
//                 },
//                 axisLabel: {
//                     formatter: '{value} ',
//                     textStyle: {
//                         color: "#2EC7C9" //X轴文字颜色
//                     }
//                 },
//                 axisLine: {
//                     lineStyle: {
//                         color: '#01FCE3'
//                     }
//                 },

//             },

//             xAxis: [{
//                 axisTick: {
//                     show: false
//                 },
//                 type: 'value',
//                 // max: 100,
//                 splitNumber: 5,
//                 axisLabel: {
//                     formatter: '{value}%',
//                     show: true,
//                     textStyle: {
//                         color: "#ebf8ac" //X轴文字颜色
//                     }
//                 },
//                 axisLine: {
//                     lineStyle: {
//                         color: '#01FCE3'
//                     }
//                 },
//             }],
//             series: [{
//                 name: '销量',
//                 type: 'bar',
//                 itemStyle: {
//                     normal: {
//                         barBorderRadius: 5,
//                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: "#25f3e6"
//                         },
//                             {
//                                 offset: 1,
//                                 color: "#4693EC"
//                             }
//                         ])
//                     }
//                 },
//                 barWidth: '55%',
//                 label: {
//                     normal: {
//                         show: true,
//                         position: 'right',
//                         formatter: '{c}%',
//                         textStyle: {
//                             color: '#ffffff'
//                         }
//                     }
//                 },
//                 data: percentdata
//             }]
//         };

//         myChart.setOption(option);
//         window.addEventListener('resize', function () {myChart.resize();})
//     }

    // function ceshi7() {
    //     var myChart = echarts.init($("#ceshi7")[0]);
    //     /*    var giftImageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAPKUlEQVR4nO2d0XEbOQyGVYJLUAnXQdRB3IG3g7gDq4OkA28HTgdiB3YHUgdSB989YJXodJItESDB3cU347mZPJwAkD8JglxysQiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCaQMsgW/Ayw1/34B/vG2eCsA/d8Z+6W3zpAEegO/AK/COjvfh//MUDfc1w0D0ZBj7n0hbPnj7NmqGhvlh0ChfsR0abentcysMsf85xKYk70gbL719Hg3IaLUp3DCfNdiTdww8QGbpJ8oPSNfYzDX2NzE0ztapcc7ZI/nz5NMARBgvg88tsCWE8hdkim2lcc7ZAy/eMSoFbQnjnC1zFgpSCdm4NsHtvAMr75hZAaxoZ7b+ig1zq0AiC8Ax8pMRp11IOvXmHMNcfnrHrzhIdcRrEWjFOyMc0ZAZe+sbOjXvTLXiBTzSbr57L3ug847prQCdd8AM2QOP3jE1hWk10CnNT/vIBt8U6bxjawLTbaAjr94xvgbTj33zA9SnMP0GOtKcSIjYtw3zaaAjzTQU84v9L++Y3wXTXXN8hbtImJ84jnTesb8JpFpViw/gN7Ae/h6RTbDHk3/rgVTRps4x9s8V/UxIbD+L/W+kjWrRdnUL2ecoWco9II3ySMaGHdKAv4BdQRvBYZ8E2ecoyQ6J3SrDtgekzXqkDUuxp+V9EsptAiaMRwekwUrNLFsq7rgjHXBbyJexxf7d0lYzkNHFmg8Kn4FCZpUSjfVW0u4zH0ocH0nUiX2JFKytRTv20/sBeK7sQ4f99L+qYLf1mu9A5XUUsnayjn07x4GwPZX7gVMeiaQqlrPJtoK9W0N7E06HMZFB1nI22Xj48T+wrZz03v4sFosFspi0Yl3QzrWhnX0pO+/w5wHb2HfePi2wq1r13r6cgt1ezp4CozLSmaxi31nbpwE7kRSdwW9xxKoT9a6OXMHQv3UB26xmj87aNguwE0nn6cTWwIHezYEbwKahTGcR7GaPtqo9Z2ATe59ZBJvR9cPF+DvBZuFuVpXDZvZIVvaUAhkILBbunYfxG6XRB1re9TwBaShtGdJsJEM/cx8YyafDSHVLG/vftY1eKg2GyvscWrDZb1DX5rHZc2r7zNIZ2FRKl2MyeBSp1TnoUy11zo8+L687mhqBPtWqNyCjP3O1qmasIehnzr2BDdrF+dIgFNVBjqVoqHNGC8nHNaQqhhYCOcKtITvNQp9e9YahqA76Gbz8ugt9Lj6q/Pcc9CNZ9lSPPrVt53xSBugrp+X7Hroc+FDcwAqg+54kew2AbvbaGYbADXQVrfL7PujWH31xAyuAbh8iex2Cbv0xqqrhNdAN0KmGgRpGnV4dQb8WyPkaUrv2G3V6dQRlil/aOG0VZxSbU7eAbqpfZfyeZu0zidR2sTAZKJYljdM00ij3Pq6BrqLSZfyeZoGe7CPgB7o9kVVJwzS59yg3qK6hjMW69d9rGXTFinJrsWikv6Ab0dcZv6eJfWcfAT+UsVjPzzAH0KWbfcbvaUbNlX0E/KDVfqg0bBIVrCPoBJIyfk+z5lnZR8APdBuG65KGaQSyKmaYA4RA3FDGfl3SsBDIgLKRUsbvhUAGmOgMUs4wBwiBuEGr/bBZwxwgBOIGrfZDpWF9McMcIATiBrqK3rqkYVU7RcvUjgUhkD80GwuUh/SKGeYAIRAXaPks1mCghlVR4ypCCMQFWj7NOxioOSjW9EVl90AIxAV0z2yUPzCL7oMV37tSDSEE4gK6j8b6GgZqNmlgIkdOCIFUB/19CF0NI7UfTbXxboMSQiDVQX+bZ50P9tA/grmqYmhBCIFURRlvqPnBHvr3CEc/iygbLGX83twFslH4DzVPcmBzN29XzeACEAKpBjYvCSxrG629K7XIy0u1IARSBWQw1l63Wv8+BGxUPdpUixBIFdDfAw1e2Qo2T/e+uhivhBBIcYBXhc9Hdp4OaE73ntK5OZEJIZCiYPd68trTCYuXl450bo5kQAikGMAPha+n+L+khe1b3aNJtwiBFAGbtOpIG/cRY/PQ4pEN3qq/AUIgpiDZyEbh4znt3OSJfpfznD2Nn9lS+pwyfm+yAkHOWFk8a92uz+h31y+xodEnwwiBqEH2ODYKv67R3mcV2L1pfYlXGmtkQiDZDLHbKPz5jA9aTdGxedP6M7ZIhcP9rQtCIPfa/w/wgv6N98840EDf+BRsdthvYY+MQi+IaL5V/tOUIlNGXDUC8YrPC9JG1uuLa3T2PboAlFmPTImUEVONQOZAe+uOz0D/4P2USRnxDIFcp7fvwRUgRHKNlBHLEMhlevueWxFCJJdIGXEMgfyf3r7HOkCI5JyUEcMQyH8Z15rjK6hX3RoDKSN+IZC/dPY9tAGQWrj2wocpkDJiFwKRvtP2PocWZMddczv3FEgZcZu7QH7T6g55CZCd6LnOJikjXnMVyI4GTgK4gXxPUvJ4SoukjDjNTSAHJvboUjZI2jUnoaSMGM1FIAekL8wnnboVRCjPTD/1ShmxmbpAdkjbhzBuAal49UxzVkkZ8ZiiQA7Iub1pV6ZKg4jlGalkTEEwKSMGUxDIAWnDZ0IU5UBSsRWy+bge/nqkE43h7+5dYGSk9bb71r/+pF26oa0idQqCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAjGw3BY8RvwhNz/+oLcAL8ZyV/uYUVvu2/9e+VvuzwhbRWHFUuBHHf/AbxR7yLkkqSMGEzhuPseacMmbugfNYgoXpmGIM5JGfGYgkDO2SNtHGK5BSR1+kHZNyRaIGXEZooCOWWLtH2kYucgwnhhmrPFJVJGjKYukCN7pC+EUBaLxYJ5CeNIyojTXARyZA+8FOhy4wD5DHPr2wZupIx4zU0gR7bM6eI4JJ168425OykjbnMVyJE3pp52IZWprW+cmyBlxG7uAgHpO9OseBHPH5ySMuIXAvlLZ99DHUFq3cFfUkYMQyD/5bVAV60PIY5LpIw4hkD+z7hFQojjGikjliGQy4xTJIQ4PiNlxDMEcp1xiQQ5eRpcJ2XENATyOeN41JN61aoD0mnWyGXIq8p/zwrbU0ZcNQLxis96sLvWheOdfY82BNnnKHlsZEcjN4MjnSCXlPF7GoGs7CNwt/3HG/p3Cj++Yk8DfeMiyA75eyHHexpo5FMIgWQzxK5X+PMZ77S4406ZdUcClt6+XYIQiBpgqfTrGm2tR9B1lkscgEdvvz5D6XPK+L3JCeQI8Ij9OmXl7dcfsE2tEi1OkWcQAjEFSdEtZ5N3b58Wi8WfZ5yt6L39uRVCIEXAdm2y9nbmAbuqVefqzJ0QAikGdlsFezyzEexmj87NiUwIgRQF3T7TKWtPJyxmj97NAQWEQIqDTbq19zLeYhpMLsYbQAikCkq/j3QehmsrVwdGUK26BiGQKiDrXG0JuG5FC9ng0dJVNdoYQiDVwCZbWdY0WLtrnqoZWwhCIFVR+g81d9fRX7ywqmZsIQiBVEUZb4BtLUO16VWqYmhhlA2WMn5v1gJZLExmkWUNI7X5YNNnrG6FEEh1kDNbGroaRmpq07viBlaCEIgL6L4n6WsYqCnvtnUMWQEhEBfQFYjKl3sVxk2toUIgDqBMs0obp1qgFzWuMoRA3FDEAUou1KncKVqmdiwIgfyh2VigO73bFzPMAUIgbqArFK1LGqYRSDnDHCAE4gat9sNmDXOAEIgbtNoPlYZNYoPwCCEQN9BVstYlDdMIZFXMMAcIgbihjP26pGExgwwoGyll/F4IZADdcad1ScPazP0cQCeQPuP3NJWblX0E/KDVftisYQ6gu1RgnfF7mtg/FwiBG8pYrEsapukUv4sZ5kDtRqr9ey0D/G4yFujSijZuujMC3Zqgy/g9Td6d7CPgB7oDs6uShmk/lhrtJQ3noLvyaJXxe5rByefqmwIglzhoWJY2UMMkKlnIWxca7h4o0HeMNt/NuBNaPs07GKhJLfriBlYA3XrgoPhdzfU3k1ioo6vmfdQwUPPByiSmenSXVmQXK9AtTutcWlAYdKlt+Q/20H8XPOo0C/3tGtkjOfr7aleGoagOY+h76HPhTXEjC4JuFAfFWgD92qc3DEV1gI3S/zpFIuBDaeiqiqHGoK/iZa8/TmzQXsO5NAhFddDP3OXXHyfGaqf6Ue6JoB/BegMbNItUGOkMjv4u6HpFCmzu5h1VVQV9/gsGpVb0aRaMbB2IzVshy9pGa3PxfXWjM8HmJa2doT07g9iPYtMWGRC0sU8ehmuOPhwZRaqFPrUCwxkTmxG1+VQLGZgsHojtvBzQjmQAry7G3wjwauCj6Vso2LyZAfOI/c7TAYtZBBptKEP/1gVs0+zmn9JZ22YBNuLw9w+bWQQaEwnww8ivIi9pYTeLgHcnOgM7cey8fbEcZUEC4754xK6BoOD3B9i+Ue8+QCGifzX0qfP2abFYmLzbcMo7TtUtpIE2hr7sKCx47GZwEN9dBiikWmWxID+SPPy4CDa1+VP2wI/KPjxh86z1KasKdmt3mM/ZA0+l7T7z4Qf2sW/reD/6dwsv8U7hToZ0sE0B26t9Yox+T+oSG+rE3nLWONLmMxvoz2hdYwN8N7b1O2WEARVSqzNfHrBNtU7ZMK7Y1ztzdS/IERSrysol9sgi7jt5X+V9B35iP52fU316xz7NPWeLxO5bhm0PSOxfKRv7A62fzsDmzNKtvANvwMvw9x34Nvz3+G9vlButLtE5xt6yovgVG6TDv/B57EukUNcYxxkz6jZUS/QNxF572nesdN6xvwvKLNpbpveO+RHmJ5I2F+VfwXwaqveO9TlE7McB059Jeu8YX4Ppi2ScM8c5THdN0nvH9iuY7gDVecfWFKS6VbIEXJMDI2ogZICaUuzHUa26F2SfpNRmYi0+aO0Yww0g+yRTiP3SO5bFYbzT/i8aOG2cC7JhN9rYe8evKsiIZnkKuCQ7RnpV0SWQM1BjmU0SI5yxzUDy41LniLQcmNjbGqcg35O0ujbZMaJ1XnFoSygHpPOMNp26FSTtakkoIYzPQITilXp9DL8/eWFcYvDdK/VKhDBuB6l4PVdosB2ycF16+9wKQ+x/UX5G/0DaeOnt86hB0oDHodG0gvlAdpi7aJivQcTSDTGziP0vpC1nOUtXY2i4FZI/f/W3Ys6VEGOQCuQ9sV962xwEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEhfkXXd8sgNU9RcEAAAAASUVORK5CYII=";
    //         */option = {
    //         /*backgroundColor: '#031845',*/
    //         tooltip: {
    //             trigger: 'item',
    //             formatter: "{a} <br/>{b}: {c} ({d}%)",

    //         },
    //         graphic: {
    //             elements: [{
    //                 type: 'image',
    //                 style: {
    //                     /*image: giftImageUrl,*/
    //                     width: 50,
    //                     height: 50
    //                 },
    //                 left: 'center',
    //                 top: 'center'
    //             }]
    //         },
    //         title: {
    //             text: '产量分析',
    //             left: 'center',
    //             top: '10%',
    //             padding: [24, 0],
    //             textStyle: {
    //                 color: '#fff',
    //                 fontSize: 18,
    //                 align: 'center'
    //             }
    //         },
    //         legend: {

    //             orient: 'horizontal',
    //             icon: 'circle',
    //             bottom: -40,
    //             x: 'center',
    //             data: ['一号大棚', '二号大棚', '三号大棚', '四号大棚', '五号大棚', '六号大棚', '七号大棚'],
    //             textStyle: {
    //                 color: '#fff'
    //             }
    //         },
    //         series: [{
    //             name: '产量',
    //             type: 'pie',
    //             radius: ['25%', '35%'],
    //             color: ['#00FFFF', '#44EAB1', '#7BDD43', '#FEBE12', '#EBEC2F', '#FF7C44', '#FA3E5F', '#6635EF', '#FFAFDA'],
    //             labelLine: {
    //                 normal: {
    //                     show: true,
    //                     length: 10,
    //                     length2: 10,
    //                     lineStyle: {
    //                         width: 1
    //                     }
    //                 }
    //             },
    //             label: {
    //                 normal: {
    //                     formatter: '{c|{c}}\n{hr|}\n{d|{d}%}',
    //                     rich: {
    //                         b: {
    //                             fontSize: 12,
    //                             color: '#12EABE',
    //                             align: 'left',
    //                             padding: 4
    //                         },
    //                         hr: {
    //                             borderColor: '#12EABE',
    //                             width: '80%',
    //                             borderWidth: 2,
    //                             height: 0
    //                         },
    //                         d: {
    //                             fontSize: 12,
    //                             color: '#fff',
    //                             align: 'left',
    //                             padding: 4
    //                         },
    //                         c: {
    //                             fontSize: 12,
    //                             color: '#fff',
    //                             align: 'left',
    //                             padding: 4
    //                         }
    //                     }
    //                 }
    //             },
    //             data: [{
    //                 value: 100,
    //                 name: '一号大棚'
    //             },
    //                 {
    //                     value: 100,
    //                     name: '二号大棚'
    //                 },
    //                 {
    //                     value: 100,
    //                     name: '三号大棚'
    //                 },
    //                 {
    //                     value: 100,
    //                     name: '四号大棚'
    //                 },
    //                 {
    //                     value: 100,
    //                     name: '五号大棚'
    //                 },
    //                 {
    //                     value: 100,
    //                     name: '六号大棚'
    //                 },
    //                 {
    //                     value: 100,
    //                     name: '七号大棚'
    //                 },

    //             ]
    //         }
    //         ]
    //     };
    //     myChart.currentIndex = -1;
    //     myChart.setOption(option);
    //     console.log(option.series[0].data[0]);
    //     setInterval(function () {
    //         var dataLen = option.series[0].data.length;
    //         // 取消之前高亮的图形
    //         myChart.dispatchAction({
    //             type: 'downplay',
    //             seriesIndex: 0,
    //             dataIndex: myChart.currentIndex
    //         });
    //         myChart.currentIndex = (myChart.currentIndex + 1) % dataLen;
    //         // 高亮当前图形
    //         myChart.dispatchAction({
    //             type: 'highlight',
    //             seriesIndex: 0,
    //             dataIndex: myChart.currentIndex
    //         });
    //     }, 1000);





    //     window.addEventListener('resize', function () {myChart.resize();})
    // }

    $.fn.ceshi8=function(value){
        var myChart = echarts.init($("#ceshi2")[0]);
        var myChart2 = echarts.init($("#ceshi2_1")[0]);
        var pathSymbols = {
            reindeer: 'path://M-22.788,24.521c2.08-0.986,3.611-3.905,4.984-5.892 c-2.686,2.782-5.047,5.884-9.102,7.312c-0.992,0.005-0.25-2.016,0.34-2.362l1.852-0.41c0.564-0.218,0.785-0.842,0.902-1.347 c2.133-0.727,4.91-4.129,6.031-6.194c1.748-0.7,4.443-0.679,5.734-2.293c1.176-1.468,0.393-3.992,1.215-6.557 c0.24-0.754,0.574-1.581,1.008-2.293c-0.611,0.011-1.348-0.061-1.959-0.608c-1.391-1.245-0.785-2.086-1.297-3.313 c1.684,0.744,2.5,2.584,4.426,2.586C-8.46,3.012-8.255,2.901-8.04,2.824c6.031-1.952,15.182-0.165,19.498-3.937 c1.15-3.933-1.24-9.846-1.229-9.938c0.008-0.062-1.314-0.004-1.803-0.258c-1.119-0.771-6.531-3.75-0.17-3.33 c0.314-0.045,0.943,0.259,1.439,0.435c-0.289-1.694-0.92-0.144-3.311-1.946c0,0-1.1-0.855-1.764-1.98 c-0.836-1.09-2.01-2.825-2.992-4.031c-1.523-2.476,1.367,0.709,1.816,1.108c1.768,1.704,1.844,3.281,3.232,3.983 c0.195,0.203,1.453,0.164,0.926-0.468c-0.525-0.632-1.367-1.278-1.775-2.341c-0.293-0.703-1.311-2.326-1.566-2.711 c-0.256-0.384-0.959-1.718-1.67-2.351c-1.047-1.187-0.268-0.902,0.521-0.07c0.789,0.834,1.537,1.821,1.672,2.023 c0.135,0.203,1.584,2.521,1.725,2.387c0.102-0.259-0.035-0.428-0.158-0.852c-0.125-0.423-0.912-2.032-0.961-2.083 c-0.357-0.852-0.566-1.908-0.598-3.333c0.4-2.375,0.648-2.486,0.549-0.705c0.014,1.143,0.031,2.215,0.602,3.247 c0.807,1.496,1.764,4.064,1.836,4.474c0.561,3.176,2.904,1.749,2.281-0.126c-0.068-0.446-0.109-2.014-0.287-2.862 c-0.18-0.849-0.219-1.688-0.113-3.056c0.066-1.389,0.232-2.055,0.277-2.299c0.285-1.023,0.4-1.088,0.408,0.135 c-0.059,0.399-0.131,1.687-0.125,2.655c0.064,0.642-0.043,1.768,0.172,2.486c0.654,1.928-0.027,3.496,1,3.514 c1.805-0.424,2.428-1.218,2.428-2.346c-0.086-0.704-0.121-0.843-0.031-1.193c0.221-0.568,0.359-0.67,0.312-0.076 c-0.055,0.287,0.031,0.533,0.082,0.794c0.264,1.197,0.912,0.114,1.283-0.782c0.15-0.238,0.539-2.154,0.545-2.522 c-0.023-0.617,0.285-0.645,0.309,0.01c0.064,0.422-0.248,2.646-0.205,2.334c-0.338,1.24-1.105,3.402-3.379,4.712 c-0.389,0.12-1.186,1.286-3.328,2.178c0,0,1.729,0.321,3.156,0.246c1.102-0.19,3.707-0.027,4.654,0.269 c1.752,0.494,1.531-0.053,4.084,0.164c2.26-0.4,2.154,2.391-1.496,3.68c-2.549,1.405-3.107,1.475-2.293,2.984 c3.484,7.906,2.865,13.183,2.193,16.466c2.41,0.271,5.732-0.62,7.301,0.725c0.506,0.333,0.648,1.866-0.457,2.86 c-4.105,2.745-9.283,7.022-13.904,7.662c-0.977-0.194,0.156-2.025,0.803-2.247l1.898-0.03c0.596-0.101,0.936-0.669,1.152-1.139 c3.16-0.404,5.045-3.775,8.246-4.818c-4.035-0.718-9.588,3.981-12.162,1.051c-5.043,1.423-11.449,1.84-15.895,1.111 c-3.105,2.687-7.934,4.021-12.115,5.866c-3.271,3.511-5.188,8.086-9.967,10.414c-0.986,0.119-0.48-1.974,0.066-2.385l1.795-0.618 C-22.995,25.682-22.849,25.035-22.788,24.521z',
            plane: 'path://M1.112,32.559l2.998,1.205l-2.882,2.268l-2.215-0.012L1.112,32.559z M37.803,23.96 c0.158-0.838,0.5-1.509,0.961-1.904c-0.096-0.037-0.205-0.071-0.344-0.071c-0.777-0.005-2.068-0.009-3.047-0.009 c-0.633,0-1.217,0.066-1.754,0.18l2.199,1.804H37.803z M39.738,23.036c-0.111,0-0.377,0.325-0.537,0.924h1.076 C40.115,23.361,39.854,23.036,39.738,23.036z M39.934,39.867c-0.166,0-0.674,0.705-0.674,1.986s0.506,1.986,0.674,1.986 s0.672-0.705,0.672-1.986S40.102,39.867,39.934,39.867z M38.963,38.889c-0.098-0.038-0.209-0.07-0.348-0.073 c-0.082,0-0.174,0-0.268-0.001l-7.127,4.671c0.879,0.821,2.42,1.417,4.348,1.417c0.979,0,2.27-0.006,3.047-0.01 c0.139,0,0.25-0.034,0.348-0.072c-0.646-0.555-1.07-1.643-1.07-2.967C37.891,40.529,38.316,39.441,38.963,38.889z M32.713,23.96 l-12.37-10.116l-4.693-0.004c0,0,4,8.222,4.827,10.121H32.713z M59.311,32.374c-0.248,2.104-5.305,3.172-8.018,3.172H39.629 l-25.325,16.61L9.607,52.16c0,0,6.687-8.479,7.95-10.207c1.17-1.6,3.019-3.699,3.027-6.407h-2.138 c-5.839,0-13.816-3.789-18.472-5.583c-2.818-1.085-2.396-4.04-0.031-4.04h0.039l-3.299-11.371h3.617c0,0,4.352,5.696,5.846,7.5 c2,2.416,4.503,3.678,8.228,3.87h30.727c2.17,0,4.311,0.417,6.252,1.046c3.49,1.175,5.863,2.7,7.199,4.027 C59.145,31.584,59.352,32.025,59.311,32.374z M22.069,30.408c0-0.815-0.661-1.475-1.469-1.475c-0.812,0-1.471,0.66-1.471,1.475 s0.658,1.475,1.471,1.475C21.408,31.883,22.069,31.224,22.069,30.408z M27.06,30.408c0-0.815-0.656-1.478-1.466-1.478 c-0.812,0-1.471,0.662-1.471,1.478s0.658,1.477,1.471,1.477C26.404,31.885,27.06,31.224,27.06,30.408z M32.055,30.408 c0-0.815-0.66-1.475-1.469-1.475c-0.808,0-1.466,0.66-1.466,1.475s0.658,1.475,1.466,1.475 C31.398,31.883,32.055,31.224,32.055,30.408z M37.049,30.408c0-0.815-0.658-1.478-1.467-1.478c-0.812,0-1.469,0.662-1.469,1.478 s0.656,1.477,1.469,1.477C36.389,31.885,37.049,31.224,37.049,30.408z M42.039,30.408c0-0.815-0.656-1.478-1.465-1.478 c-0.811,0-1.469,0.662-1.469,1.478s0.658,1.477,1.469,1.477C41.383,31.885,42.039,31.224,42.039,30.408z M55.479,30.565 c-0.701-0.436-1.568-0.896-2.627-1.347c-0.613,0.289-1.551,0.476-2.73,0.476c-1.527,0-1.639,2.263,0.164,2.316 C52.389,32.074,54.627,31.373,55.479,30.565z',
            rocket: 'path://M-244.396,44.399c0,0,0.47-2.931-2.427-6.512c2.819-8.221,3.21-15.709,3.21-15.709s5.795,1.383,5.795,7.325C-237.818,39.679-244.396,44.399-244.396,44.399z M-260.371,40.827c0,0-3.881-12.946-3.881-18.319c0-2.416,0.262-4.566,0.669-6.517h17.684c0.411,1.952,0.675,4.104,0.675,6.519c0,5.291-3.87,18.317-3.87,18.317H-260.371z M-254.745,18.951c-1.99,0-3.603,1.676-3.603,3.744c0,2.068,1.612,3.744,3.603,3.744c1.988,0,3.602-1.676,3.602-3.744S-252.757,18.951-254.745,18.951z M-255.521,2.228v-5.098h1.402v4.969c1.603,1.213,5.941,5.069,7.901,12.5h-17.05C-261.373,7.373-257.245,3.558-255.521,2.228zM-265.07,44.399c0,0-6.577-4.721-6.577-14.896c0-5.942,5.794-7.325,5.794-7.325s0.393,7.488,3.211,15.708C-265.539,41.469-265.07,44.399-265.07,44.399z M-252.36,45.15l-1.176-1.22L-254.789,48l-1.487-4.069l-1.019,2.116l-1.488-3.826h8.067L-252.36,45.15z',
            train: 'path://M67.335,33.596L67.335,33.596c-0.002-1.39-1.153-3.183-3.328-4.218h-9.096v-2.07h5.371 c-4.939-2.07-11.199-4.141-14.89-4.141H19.72v12.421v5.176h38.373c4.033,0,8.457-1.035,9.142-5.176h-0.027 c0.076-0.367,0.129-0.751,0.129-1.165L67.335,33.596L67.335,33.596z M27.999,30.413h-3.105v-4.141h3.105V30.413z M35.245,30.413 h-3.104v-4.141h3.104V30.413z M42.491,30.413h-3.104v-4.141h3.104V30.413z M49.736,30.413h-3.104v-4.141h3.104V30.413z  M14.544,40.764c1.143,0,2.07-0.927,2.07-2.07V35.59V25.237c0-1.145-0.928-2.07-2.07-2.07H-9.265c-1.143,0-2.068,0.926-2.068,2.07 v10.351v3.105c0,1.144,0.926,2.07,2.068,2.07H14.544L14.544,40.764z M8.333,26.272h3.105v4.141H8.333V26.272z M1.087,26.272h3.105 v4.141H1.087V26.272z M-6.159,26.272h3.105v4.141h-3.105V26.272z M-9.265,41.798h69.352v1.035H-9.265V41.798z',
            ship: 'path://M16.678,17.086h9.854l-2.703,5.912c5.596,2.428,11.155,5.575,16.711,8.607c3.387,1.847,6.967,3.75,10.541,5.375 v-6.16l-4.197-2.763v-5.318L33.064,12.197h-11.48L20.43,15.24h-4.533l-1.266,3.286l0.781,0.345L16.678,17.086z M49.6,31.84 l0.047,1.273L27.438,20.998l0.799-1.734L49.6,31.84z M33.031,15.1l12.889,8.82l0.027,0.769L32.551,16.1L33.031,15.1z M22.377,14.045 h9.846l-1.539,3.365l-2.287-1.498h1.371l0.721-1.352h-2.023l-0.553,1.037l-0.541-0.357h-0.34l0.359-0.684h-2.025l-0.361,0.684 h-3.473L22.377,14.045z M23.695,20.678l-0.004,0.004h0.004V20.678z M24.828,18.199h-2.031l-0.719,1.358h2.029L24.828,18.199z  M40.385,34.227c-12.85-7.009-25.729-14.667-38.971-12.527c1.26,8.809,9.08,16.201,8.213,24.328 c-0.553,4.062-3.111,0.828-3.303,7.137c15.799,0,32.379,0,48.166,0l0.066-4.195l1.477-7.23 C50.842,39.812,45.393,36.961,40.385,34.227z M13.99,35.954c-1.213,0-2.195-1.353-2.195-3.035c0-1.665,0.98-3.017,2.195-3.017 c1.219,0,2.195,1.352,2.195,3.017C16.186,34.604,15.213,35.954,13.99,35.954z M23.691,20.682h-2.02l-0.588,1.351h2.023 L23.691,20.682z M19.697,18.199l-0.721,1.358h2.025l0.727-1.358H19.697z',
            car: 'path://M49.592,40.883c-0.053,0.354-0.139,0.697-0.268,0.963c-0.232,0.475-0.455,0.519-1.334,0.475 c-1.135-0.053-2.764,0-4.484,0.068c0,0.476,0.018,0.697,0.018,0.697c0.111,1.299,0.697,1.342,0.931,1.342h3.7 c0.326,0,0.628,0,0.861-0.154c0.301-0.196,0.43-0.772,0.543-1.78c0.017-0.146,0.025-0.336,0.033-0.56v-0.01 c0-0.068,0.008-0.154,0.008-0.25V41.58l0,0C49.6,41.348,49.6,41.09,49.592,40.883L49.592,40.883z M6.057,40.883 c0.053,0.354,0.137,0.697,0.268,0.963c0.23,0.475,0.455,0.519,1.334,0.475c1.137-0.053,2.762,0,4.484,0.068 c0,0.476-0.018,0.697-0.018,0.697c-0.111,1.299-0.697,1.342-0.93,1.342h-3.7c-0.328,0-0.602,0-0.861-0.154 c-0.309-0.18-0.43-0.772-0.541-1.78c-0.018-0.146-0.027-0.336-0.035-0.56v-0.01c0-0.068-0.008-0.154-0.008-0.25V41.58l0,0 C6.057,41.348,6.057,41.09,6.057,40.883L6.057,40.883z M49.867,32.766c0-2.642-0.344-5.224-0.482-5.507 c-0.104-0.207-0.766-0.749-2.271-1.773c-1.522-1.042-1.487-0.887-1.766-1.566c0.25-0.078,0.492-0.224,0.639-0.241 c0.326-0.034,0.345,0.274,1.023,0.274c0.68,0,2.152-0.18,2.453-0.48c0.301-0.303,0.396-0.405,0.396-0.672 c0-0.268-0.156-0.818-0.447-1.146c-0.293-0.327-1.541-0.49-2.273-0.585c-0.729-0.095-0.834,0-1.022,0.121 c-0.304,0.189-0.32,1.919-0.32,1.919l-0.713,0.018c-0.465-1.146-1.11-3.452-2.117-5.269c-1.103-1.979-2.256-2.599-2.737-2.754 c-0.474-0.146-0.904-0.249-4.131-0.576c-3.298-0.344-5.922-0.388-8.262-0.388c-2.342,0-4.967,0.052-8.264,0.388 c-3.229,0.336-3.66,0.43-4.133,0.576s-1.633,0.775-2.736,2.754c-1.006,1.816-1.652,4.123-2.117,5.269L9.87,23.109 c0,0-0.008-1.729-0.318-1.919c-0.189-0.121-0.293-0.225-1.023-0.121c-0.732,0.104-1.98,0.258-2.273,0.585 c-0.293,0.327-0.447,0.878-0.447,1.146c0,0.267,0.094,0.379,0.396,0.672c0.301,0.301,1.773,0.48,2.453,0.48 c0.68,0,0.697-0.309,1.023-0.274c0.146,0.018,0.396,0.163,0.637,0.241c-0.283,0.68-0.24,0.524-1.764,1.566 c-1.506,1.033-2.178,1.566-2.271,1.773c-0.139,0.283-0.482,2.865-0.482,5.508s0.189,5.02,0.189,5.86c0,0.354,0,0.976,0.076,1.565 c0.053,0.354,0.129,0.697,0.268,0.966c0.232,0.473,0.447,0.516,1.334,0.473c1.137-0.051,2.779,0,4.477,0.07 c1.135,0.043,2.297,0.086,3.33,0.11c2.582,0.051,1.826-0.379,2.928-0.36c1.102,0.016,5.447,0.196,9.424,0.196 c3.976,0,8.332-0.182,9.423-0.196c1.102-0.019,0.346,0.411,2.926,0.36c1.033-0.018,2.195-0.067,3.332-0.11 c1.695-0.062,3.348-0.121,4.477-0.07c0.886,0.043,1.103,0,1.332-0.473c0.132-0.269,0.218-0.611,0.269-0.966 c0.086-0.592,0.078-1.213,0.078-1.565C49.678,37.793,49.867,35.408,49.867,32.766L49.867,32.766z M13.219,19.735 c0.412-0.964,1.652-2.9,2.256-3.244c0.145-0.087,1.426-0.491,4.637-0.706c2.953-0.198,6.217-0.276,7.73-0.276 c1.513,0,4.777,0.078,7.729,0.276c3.201,0.215,4.502,0.611,4.639,0.706c0.775,0.533,1.842,2.28,2.256,3.244 c0.412,0.965,0.965,2.858,0.861,3.116c-0.104,0.258,0.104,0.388-1.291,0.275c-1.387-0.103-10.088-0.216-14.185-0.216 c-4.088,0-12.789,0.113-14.184,0.216c-1.395,0.104-1.188-0.018-1.291-0.275C12.254,22.593,12.805,20.708,13.219,19.735 L13.219,19.735z M16.385,30.511c-0.619,0.155-0.988,0.491-1.764,0.482c-0.775,0-2.867-0.353-3.314-0.371 c-0.447-0.017-0.842,0.302-1.076,0.362c-0.23,0.06-0.688-0.104-1.377-0.318c-0.688-0.216-1.092-0.155-1.316-1.094 c-0.232-0.93,0-2.264,0-2.264c1.488-0.068,2.928,0.069,5.621,0.826c2.693,0.758,4.191,2.213,4.191,2.213 S17.004,30.357,16.385,30.511L16.385,30.511z M36.629,37.293c-1.23,0.164-6.386,0.207-8.794,0.207c-2.412,0-7.566-0.051-8.799-0.207 c-1.256-0.164-2.891-1.67-1.764-2.865c1.523-1.627,1.24-1.576,4.701-2.023C24.967,32.018,27.239,32,27.834,32 c0.584,0,2.865,0.025,5.859,0.404c3.461,0.447,3.178,0.396,4.699,2.022C39.521,35.623,37.887,37.129,36.629,37.293L36.629,37.293z  M48.129,29.582c-0.232,0.93-0.629,0.878-1.318,1.093c-0.688,0.216-1.145,0.371-1.377,0.319c-0.231-0.053-0.627-0.371-1.074-0.361 c-0.448,0.018-2.539,0.37-3.313,0.37c-0.772,0-1.146-0.328-1.764-0.481c-0.621-0.154-0.966-0.154-0.966-0.154 s1.49-1.464,4.191-2.213c2.693-0.758,4.131-0.895,5.621-0.826C48.129,27.309,48.361,28.643,48.129,29.582L48.129,29.582z',
            run: 'path://M13.676,32.955c0.919-0.031,1.843-0.008,2.767-0.008v0.007c0.827,0,1.659,0.041,2.486-0.019 c0.417-0.028,1.118,0.325,1.14-0.545c0.014-0.637-0.156-1.279-0.873-1.367c-1.919-0.241-3.858-0.233-5.774,0.019 c-0.465,0.062-0.998,0.442-0.832,1.069C12.715,32.602,13.045,32.977,13.676,32.955z M14.108,29.013 c1.47-0.007,2.96-0.122,4.414,0.035c1.792,0.192,3.1-0.412,4.273-2.105c-3.044,0-5.882,0.014-8.719-0.01 c-0.768-0.005-1.495,0.118-1.461,1C12.642,28.731,13.329,29.014,14.108,29.013z M23.678,36.593c-0.666-0.69-1.258-1.497-2.483-1.448 c-2.341,0.095-4.689,0.051-7.035,0.012c-0.834-0.014-1.599,0.177-1.569,1.066c0.031,0.854,0.812,1.062,1.636,1.043 c1.425-0.033,2.852-0.01,4.278-0.01v-0.01c1.562,0,3.126,0.008,4.691-0.005C23.614,37.239,24.233,37.174,23.678,36.593z  M32.234,42.292h-0.002c-1.075,0.793-2.589,0.345-3.821,1.048c-0.359,0.193-0.663,0.465-0.899,0.799 c-1.068,1.623-2.052,3.301-3.117,4.928c-0.625,0.961-0.386,1.805,0.409,2.395c0.844,0.628,1.874,0.617,2.548-0.299 c1.912-2.573,3.761-5.197,5.621-7.814C33.484,42.619,33.032,42.387,32.234,42.292z M43.527,28.401 c-0.688-1.575-2.012-0.831-3.121-0.895c-1.047-0.058-2.119,1.128-3.002,0.345c-0.768-0.677-1.213-1.804-1.562-2.813 c-0.45-1.305-1.495-2.225-2.329-3.583c2.953,1.139,4.729,0.077,5.592-1.322c0.99-1.61,0.718-3.725-0.627-4.967 c-1.362-1.255-3.414-1.445-4.927-0.452c-1.933,1.268-2.206,2.893-0.899,6.11c-2.098-0.659-3.835-1.654-5.682-2.383 c-0.735-0.291-1.437-1.017-2.293-0.666c-2.263,0.927-4.522,1.885-6.723,2.95c-1.357,0.658-1.649,1.593-1.076,2.638 c0.462,0.851,1.643,1.126,2.806,0.617c0.993-0.433,1.994-0.857,2.951-1.374c1.599-0.86,3.044-0.873,4.604,0.214 c1.017,0.707,0.873,1.137,0.123,1.849c-1.701,1.615-3.516,3.12-4.933,5.006c-1.042,1.388-0.993,2.817,0.255,4.011 c1.538,1.471,3.148,2.869,4.708,4.315c0.485,0.444,0.907,0.896-0.227,1.104c-1.523,0.285-3.021,0.694-4.538,1.006 c-1.109,0.225-2.02,1.259-1.83,2.16c0.223,1.07,1.548,1.756,2.687,1.487c3.003-0.712,6.008-1.413,9.032-2.044 c1.549-0.324,2.273-1.869,1.344-3.115c-0.868-1.156-1.801-2.267-2.639-3.445c-1.964-2.762-1.95-2.771,0.528-5.189 c1.394-1.357,1.379-1.351,2.437,0.417c0.461,0.769,0.854,1.703,1.99,1.613c2.238-0.181,4.407-0.755,6.564-1.331 C43.557,30.447,43.88,29.206,43.527,28.401z',
            walk: 'path://M29.902,23.275c1.86,0,3.368-1.506,3.368-3.365c0-1.859-1.508-3.365-3.368-3.365 c-1.857,0-3.365,1.506-3.365,3.365C26.537,21.769,28.045,23.275,29.902,23.275z M36.867,30.74c-1.666-0.467-3.799-1.6-4.732-4.199 c-0.932-2.6-3.131-2.998-4.797-2.998s-7.098,3.894-7.098,3.894c-1.133,1.001-2.1,6.502-0.967,6.769 c1.133,0.269,1.266-1.533,1.934-3.599c0.666-2.065,3.797-3.466,3.797-3.466s0.201,2.467-0.398,3.866 c-0.599,1.399-1.133,2.866-1.467,6.198s-1.6,3.665-3.799,6.266c-2.199,2.598-0.6,3.797,0.398,3.664 c1.002-0.133,5.865-5.598,6.398-6.998c0.533-1.397,0.668-3.732,0.668-3.732s0,0,2.199,1.867c2.199,1.865,2.332,4.6,2.998,7.73 s2.332,0.934,2.332-0.467c0-1.401,0.269-5.465-1-7.064c-1.265-1.6-3.73-3.465-3.73-5.265s1.199-3.732,1.199-3.732 c0.332,1.667,3.335,3.065,5.599,3.399C38.668,33.206,38.533,31.207,36.867,30.74z'
        };
        data = {
            0:{
                0:['林地面积\n\n1.064公顷', '植被覆盖度\n\n53%',],
                1:['树高平均值\n\n5m','树冠面积\n\n2公顷' ]
            },
            5:{
                0:['林地面积\n\n62.82公顷', '植被覆盖度\n\n24%',  ],
                1:['树高平均值\n\n3.4m','树冠面积\n\n72.62公顷' ]
            },
            10:{
                0:['林地面积\n\n7.6735公顷', '植被覆盖度\n\n74%', ],
                1:['树高平均值\n\n5.07m','树冠面积\n\n7.9735公顷' ]
            },
            16:{
                0:['林地面积\n\n7.4公顷', '植被覆盖度\n\n18%', ],
                1:['树高平均值\n\n2.06m','树冠面积\n\n8.4728公顷' ]
            },
        }
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                },
                formatter: function (params) {
                    return params[0].name + ': ' + params[0].value;
                }
            },
            xAxis: {
                data: data[value][0],
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                    color: '#61d2f7',
                    fontSize:'18'
                },
            },
            yAxis: {
                splitLine: {show: false},
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {show: false}
            },
            color: ['#e54035'],
            series: [
            {
                name: 'glyph',
                type: 'pictorialBar',
                //barGap: '-100%',
                // symbolPosition: 'start',
                symbolSize: 50,
                symbolOffset: [0, '-40%'],
                data: [{
                    value: 12,
                    symbol: 'image://./images/1.png',
                    symbolSize: [50, 50],
                    name:'1'
                }, {
                    value: 12,
                    symbol: 'image://./images/2.png',
                    symbolSize: [50, 50]
                }]
            }]
        };
        option2 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                },
                formatter: function (params) {
                    return params[0].name + ': ' + params[0].value;
                }
            },
            xAxis: {
                data: data[value][1],
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                    color: '#61d2f7',
                    fontSize:'18'
                },
            },
            yAxis: {
                splitLine: {show: false},
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {show: false}
            },
            color: ['#e54035'],
            series: [
            {
                name: 'glyph',
                type: 'pictorialBar',
                //barGap: '-100%',
                // symbolPosition: 'start',
                symbolSize: 50,
                symbolOffset: [0, '-40%'],
                data: [{
                    value: 18,
                    symbol: 'image://./images/3.png',
                    symbolSize: [50, 50]
                }, {
                    value: 12,
                    symbol: 'image://./images/6.png',
                    symbolSize: [50, 50]
                }]
            }]
        };
        myChart.setOption(option)
        myChart2.setOption(option2)
    }


    $().ceshis1(0)
    $().ceshi3(0)
    $().ceshi5(0)
    $().ceshi8(0)


})



