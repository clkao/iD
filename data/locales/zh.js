/*
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    THIS FILE IS GENERATED BY `make translations`. Don't make changes to it.

    Instead, edit the English strings in data/core.yaml, or contribute
    translations on https://www.transifex.com/projects/p/id-editor/.

    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
locale.zh = {
    "modes": {
        "add_area": {
            "title": "面",
            "description": "在地图上添加公园，建筑物，湖泊或其他面状区域。",
            "tail": "在地图上点击开始绘制一个区域，像一个公园，湖边，或建筑物。"
        },
        "add_line": {
            "title": "线",
            "description": "在地图上添加公路，街道，行人路，运河或其他线路。",
            "tail": "在地图上点击开始绘制道路，路径或路线。"
        },
        "add_point": {
            "title": "点",
            "description": "在地图上添加餐馆，古迹，邮箱或其他点。",
            "tail": "在地图上点击添加一个点。"
        },
        "browse": {
            "title": "浏览",
            "description": "平移和缩放地图。"
        }
    },
    "operations": {
        "add": {
            "annotation": {
                "point": "添加一个点。",
                "vertex": "给线添加一个节点。"
            }
        },
        "start": {
            "annotation": {
                "line": "开始一条线。",
                "area": "开始一个面。"
            }
        },
        "continue": {
            "annotation": {
                "line": "接着绘制一条线。",
                "area": "接着绘制一个面。"
            }
        },
        "cancel_draw": {
            "annotation": "取消绘图。"
        },
        "change_tags": {
            "annotation": "改变标签。"
        },
        "circularize": {
            "title": "圆",
            "key": "O",
            "annotation": {
                "line": "把线制作成圆形。",
                "area": "把面制作成圆形。"
            }
        },
        "orthogonalize": {
            "title": "直角化",
            "description": "边角直角化。",
            "key": "Q",
            "annotation": {
                "line": "线直角化。",
                "area": "面直角化。"
            }
        },
        "delete": {
            "title": "删除",
            "description": "从地图中删除此。",
            "annotation": {
                "point": "删除一个点。",
                "vertex": "删除线上一个结点。",
                "line": "删除一条点。",
                "area": "删除一个面。",
                "relation": "删除一个关系。",
                "multiple": "删除{n}个对象。"
            }
        },
        "connect": {
            "annotation": {
                "point": "连接线到一个点上。",
                "vertex": "连接线到另一条线上。",
                "line": "连接线到一条线上。",
                "area": "连接线到一个面上。"
            }
        },
        "disconnect": {
            "title": "断开",
            "description": "断开这些线。",
            "key": "D",
            "annotation": "断开线。"
        },
        "merge": {
            "title": "合并",
            "description": "合并这些线。",
            "key": "C",
            "annotation": "合并{n}条线。"
        },
        "move": {
            "title": "移动",
            "description": "移动到其他的位置。",
            "key": "M",
            "annotation": {
                "point": "移动一个点。",
                "vertex": "移动线上一个结点",
                "line": "移动一条线。",
                "area": "移动一个面。",
                "multiple": "移动多个对象。"
            }
        },
        "rotate": {
            "title": "旋转",
            "description": "绕其中心点旋转该对象。",
            "key": "R",
            "annotation": {
                "line": "旋转一条线。",
                "area": "旋转一个面。"
            }
        },
        "reverse": {
            "title": "反转",
            "description": "这条线走在相反的方向。",
            "key": "V",
            "annotation": "反转一条线。"
        },
        "split": {
            "title": "分割",
            "key": "X"
        }
    },
    "nothing_to_undo": "没有可撤消的。",
    "nothing_to_redo": "没有可重做的。",
    "just_edited": "你正在编辑的OpenStreetMap！",
    "browser_notice": "该编辑器支持Firefox、Chrome、Safari、Opera和Internet Explorer9及以上的浏览器。请升级您的浏览器或者使用Potlatch 2来编辑地图。",
    "view_on_osm": "在OSM上查看",
    "zoom_in_edit": "放大编辑地图",
    "logout": "退出",
    "report_a_bug": "报告bug",
    "commit": {
        "title": "保存更改",
        "description_placeholder": "简要说明你的贡献",
        "message_label": "提交说明",
        "upload_explanation": "{user}你上传的更新将会显示在所有使用OpenStreetMap数据的地图上。",
        "save": "保存",
        "cancel": "取消",
        "warnings": "警告",
        "modified": "修改的",
        "deleted": "删除的",
        "created": "创建的"
    },
    "contributors": {
        "list": "查看{users}的贡献",
        "truncated_list": "查看{users}和其他{count}个成员的贡献"
    },
    "geocoder": {
        "title": "查找位置",
        "placeholder": "查找位置",
        "no_results": "无法找到叫'{name}'的地方"
    },
    "geolocate": {
        "title": "显示我的位置"
    },
    "inspector": {
        "no_documentation_combination": "没有关于此标签组合的文档",
        "no_documentation_key": "没有关于此键的文档",
        "show_more": "显示更多",
        "new_tag": "新建标签",
        "editing_feature": "编辑{feature}",
        "additional": "附加标签",
        "choose": "选择对象的类型",
        "results": "{search}共有{n}个结果",
        "back_tooltip": "修改对象的类型"
    },
    "background": {
        "title": "背景",
        "description": "设置背景",
        "percent_brightness": "{opacity}% 亮度",
        "fix_misalignment": "修复错位",
        "reset": "重置"
    },
    "restore": {
        "heading": "您有未保存的更改",
        "description": "上次您有未保存的更改。你想恢复这些更改吗？",
        "restore": "恢复",
        "reset": "重置"
    },
    "save": {
        "title": "保存",
        "help": "保存更改到OpenStreetMap上，使其他用户可以看见。",
        "no_changes": "没有可以保存的更改。",
        "error": "保存发生错误",
        "uploading": "正在向OpenStreetMap上传更改。",
        "unsaved_changes": "您有未保存的更改"
    },
    "splash": {
        "welcome": "欢迎使用OpenStreetMap编辑器iD",
        "text": "这是开发版本{version}。欲了解更多信息，请参阅{website}，在{github}报告bug。",
        "walkthrough": "开始练习",
        "start": "现在编辑"
    },
    "source_switch": {
        "live": "live",
        "lose_changes": "您有未保存的更改。切换地图服务器会丢弃他们。你确定要切换服务器吗？",
        "dev": "dev"
    },
    "tag_reference": {
        "description": "描述",
        "on_wiki": "在wiki.osm.org查看{tag}",
        "used_with": "使用{type}"
    },
    "validations": {
        "untagged_line": "未标记的线",
        "untagged_area": "未标记的面",
        "many_deletions": "您正在删除{n}个对象。你确定你想这样做吗？所有的其他openstreetmap.org用户都将在地图上看不到这些数据。",
        "tag_suggests_area": "{tag}这个标签建议使用在面上，但是他不是一个面",
        "deprecated_tags": "已过时标签：{tags}"
    },
    "zoom": {
        "in": "放大",
        "out": "缩小"
    },
    "gpx": {
        "local_layer": "本地GPX文件",
        "drag_drop": "把GPX文件拖到页面上。"
    },
    "help": {
        "title": "帮助"
    },
    "intro": {
        "startediting": {
            "start": "开始制图！"
        }
    },
    "presets": {
        "fields": {
            "access": {
                "label": "通道",
                "types": {
                    "access": "普通",
                    "foot": "步行",
                    "motor_vehicle": "汽车",
                    "bicycle": "自行车",
                    "horse": "马匹"
                },
                "options": {
                    "yes": {
                        "title": "允许的"
                    },
                    "private": {
                        "title": "私人"
                    },
                    "designated": {
                        "title": "特定的"
                    },
                    "destination": {
                        "title": "目的地"
                    }
                }
            },
            "address": {
                "label": "地址",
                "placeholders": {
                    "housename": "房屋名称",
                    "number": "123",
                    "street": "街道",
                    "city": "城市"
                }
            },
            "aeroway": {
                "label": "类型"
            },
            "amenity": {
                "label": "类型"
            },
            "atm": {
                "label": "ATM"
            },
            "barrier": {
                "label": "类型"
            },
            "bicycle_parking": {
                "label": "类型"
            },
            "building": {
                "label": "建筑物"
            },
            "building_area": {
                "label": "建筑物"
            },
            "building_yes": {
                "label": "建筑物"
            },
            "capacity": {
                "label": "容量"
            },
            "collection_times": {
                "label": "收集时间"
            },
            "construction": {
                "label": "类型"
            },
            "country": {
                "label": "国家"
            },
            "crossing": {
                "label": "类型"
            },
            "cuisine": {
                "label": "美食"
            },
            "denomination": {
                "label": "教派"
            },
            "denotation": {
                "label": "意思"
            },
            "elevation": {
                "label": "海拔"
            },
            "emergency": {
                "label": "急诊"
            },
            "entrance": {
                "label": "类型"
            },
            "fax": {
                "label": "传真"
            },
            "fee": {
                "label": "费用"
            },
            "highway": {
                "label": "类型"
            },
            "historic": {
                "label": "类型"
            },
            "internet_access": {
                "label": "互联网接入",
                "options": {
                    "wlan": "无线网络",
                    "wired": "有线网络",
                    "terminal": "终端"
                }
            },
            "landuse": {
                "label": "类型"
            },
            "layer": {
                "label": "层"
            },
            "leisure": {
                "label": "类型"
            },
            "levels": {
                "label": "级别"
            },
            "man_made": {
                "label": "类型"
            },
            "maxspeed": {
                "label": "限速"
            },
            "name": {
                "label": "名称"
            },
            "natural": {
                "label": "自然"
            },
            "network": {
                "label": "网络"
            },
            "note": {
                "label": "备注"
            },
            "office": {
                "label": "类型"
            },
            "oneway": {
                "label": "单行"
            },
            "oneway_yes": {
                "label": "单行"
            },
            "opening_hours": {
                "label": "小时"
            },
            "operator": {
                "label": "经营者"
            },
            "parking": {
                "label": "类型"
            },
            "phone": {
                "label": "手机"
            },
            "place": {
                "label": "类型"
            },
            "power": {
                "label": "类型"
            },
            "railway": {
                "label": "类型"
            },
            "ref": {
                "label": "参考"
            },
            "religion": {
                "label": "宗教",
                "options": {
                    "christian": "基督教",
                    "muslim": "穆斯林",
                    "buddhist": "佛教",
                    "jewish": "犹太教",
                    "hindu": "印度教",
                    "shinto": "神道教",
                    "taoist": "道教"
                }
            },
            "service": {
                "label": "类型"
            },
            "shelter": {
                "label": "避难所"
            },
            "shop": {
                "label": "类型"
            },
            "source": {
                "label": "来源"
            },
            "sport": {
                "label": "运动"
            },
            "structure": {
                "label": "结构",
                "options": {
                    "bridge": "桥",
                    "tunnel": "隧道",
                    "embankment": "堤岸",
                    "cutting": "开凿"
                }
            },
            "supervised": {
                "label": "监督"
            },
            "surface": {
                "label": "表面"
            },
            "tourism": {
                "label": "类型"
            },
            "tracktype": {
                "label": "类型"
            },
            "water": {
                "label": "类型"
            },
            "waterway": {
                "label": "类型"
            },
            "website": {
                "label": "网站"
            },
            "wetland": {
                "label": "类型"
            },
            "wheelchair": {
                "label": "轮椅通道"
            },
            "wikipedia": {
                "label": "维基百科"
            },
            "wood": {
                "label": "类型"
            }
        },
        "presets": {
            "aeroway": {
                "name": "机场相关道路"
            },
            "aeroway/aerodrome": {
                "name": "机场",
                "terms": "飞机,机场,机场"
            },
            "aeroway/helipad": {
                "name": "直升机场",
                "terms": "直升机,直升机停机坪,直升机场"
            },
            "amenity": {
                "name": "便利设施"
            },
            "amenity/bank": {
                "name": "银行"
            },
            "amenity/bar": {
                "name": "酒吧"
            },
            "amenity/bench": {
                "name": "长凳"
            },
            "amenity/bicycle_parking": {
                "name": "自行车停放处"
            },
            "amenity/bicycle_rental": {
                "name": "自行车租赁处"
            },
            "amenity/cafe": {
                "name": "咖啡",
                "terms": "咖啡,茶,咖啡馆"
            },
            "amenity/cinema": {
                "name": "电影院"
            },
            "amenity/courthouse": {
                "name": "法院"
            },
            "amenity/embassy": {
                "name": "使馆"
            },
            "amenity/fast_food": {
                "name": "快餐"
            },
            "amenity/fire_station": {
                "name": "消防站"
            },
            "amenity/fuel": {
                "name": "加油站"
            },
            "amenity/grave_yard": {
                "name": "墓地"
            },
            "amenity/hospital": {
                "name": "医院"
            },
            "amenity/library": {
                "name": "图书馆"
            },
            "amenity/marketplace": {
                "name": "市场"
            },
            "amenity/parking": {
                "name": "停车场"
            },
            "amenity/pharmacy": {
                "name": "药房"
            },
            "amenity/place_of_worship": {
                "name": "礼拜场所"
            },
            "amenity/place_of_worship/christian": {
                "name": "教堂"
            },
            "amenity/place_of_worship/jewish": {
                "name": "犹太教堂",
                "terms": "犹太人,犹太教堂"
            },
            "amenity/place_of_worship/muslim": {
                "name": "清真寺",
                "terms": "穆斯林,清真寺"
            },
            "amenity/police": {
                "name": "警察局"
            },
            "amenity/post_box": {
                "name": "邮箱",
                "terms": "邮件投递,信箱,邮筒,邮箱"
            },
            "amenity/post_office": {
                "name": "邮局"
            },
            "amenity/pub": {
                "name": "酒馆"
            },
            "amenity/restaurant": {
                "name": "餐馆"
            },
            "amenity/school": {
                "name": "学校"
            },
            "amenity/swimming_pool": {
                "name": "游泳池"
            },
            "amenity/telephone": {
                "name": "电话"
            },
            "amenity/theatre": {
                "name": "剧院"
            },
            "amenity/toilets": {
                "name": "厕所"
            },
            "amenity/townhall": {
                "name": "市政府"
            },
            "amenity/university": {
                "name": "大学"
            },
            "barrier": {
                "name": "屏障"
            },
            "barrier/block": {
                "name": "街区"
            },
            "barrier/bollard": {
                "name": "短柱"
            },
            "barrier/cattle_grid": {
                "name": "家畜栅栏"
            },
            "barrier/city_wall": {
                "name": "城墙"
            },
            "barrier/ditch": {
                "name": "沟"
            },
            "barrier/entrance": {
                "name": "入口"
            },
            "barrier/fence": {
                "name": "篱笆"
            },
            "barrier/gate": {
                "name": "门"
            },
            "barrier/lift_gate": {
                "name": "电梯门"
            },
            "barrier/retaining_wall": {
                "name": "挡土墙"
            },
            "barrier/toll_booth": {
                "name": "收费站"
            },
            "barrier/wall": {
                "name": "墙"
            },
            "building": {
                "name": "建筑物"
            },
            "building/apartments": {
                "name": "酒店公寓"
            },
            "building/entrance": {
                "name": "入口"
            },
            "entrance": {
                "name": "入口"
            },
            "highway": {
                "name": "公路"
            },
            "highway/bridleway": {
                "name": "马道",
                "terms": "楼梯"
            },
            "highway/bus_stop": {
                "name": "公交车站"
            },
            "highway/crossing": {
                "name": "路口",
                "terms": "人行横道,斑马线"
            },
            "highway/cycleway": {
                "name": "自行车道"
            },
            "highway/footway": {
                "name": "人行道"
            },
            "highway/motorway": {
                "name": "高速公路"
            },
            "highway/motorway_link": {
                "name": "高速公路匝道"
            },
            "highway/path": {
                "name": "路"
            },
            "highway/primary": {
                "name": "主要道路"
            },
            "highway/primary_link": {
                "name": "主要道路匝道"
            },
            "highway/residential": {
                "name": "住宅区道路"
            },
            "highway/road": {
                "name": "未知道路"
            },
            "highway/secondary": {
                "name": "次要道路"
            },
            "highway/secondary_link": {
                "name": "次要道路匝道"
            },
            "highway/service": {
                "name": "辅助道路"
            },
            "highway/steps": {
                "name": "台阶",
                "terms": "楼梯"
            },
            "highway/tertiary": {
                "name": "三级道路"
            },
            "highway/tertiary_link": {
                "name": "三级道路匝道"
            },
            "highway/track": {
                "name": "小路"
            },
            "highway/traffic_signals": {
                "name": "红绿灯",
                "terms": "灯,刹车灯,交通灯"
            },
            "highway/trunk": {
                "name": "干线道路"
            },
            "highway/trunk_link": {
                "name": "干线道路匝道"
            },
            "highway/turning_circle": {
                "name": "环岛"
            },
            "highway/unclassified": {
                "name": "未分级的道路"
            },
            "historic": {
                "name": "历史遗迹"
            },
            "historic/archaeological_site": {
                "name": "考古遗址"
            },
            "historic/boundary_stone": {
                "name": "界桩"
            },
            "historic/castle": {
                "name": "城堡"
            },
            "historic/memorial": {
                "name": "纪念馆"
            },
            "historic/monument": {
                "name": "纪念碑"
            },
            "historic/ruins": {
                "name": "废墟"
            },
            "historic/wayside_cross": {
                "name": "路边的十字架"
            },
            "historic/wayside_shrine": {
                "name": "路边的神社"
            },
            "landuse": {
                "name": "土地用途"
            },
            "landuse/allotments": {
                "name": "社区花园"
            },
            "landuse/basin": {
                "name": "水池"
            },
            "landuse/cemetery": {
                "name": "墓地"
            },
            "landuse/commercial": {
                "name": "商业区"
            },
            "landuse/construction": {
                "name": "建筑物"
            },
            "landuse/farm": {
                "name": "农场"
            },
            "landuse/farmyard": {
                "name": "农场"
            },
            "landuse/forest": {
                "name": "森林"
            },
            "landuse/grass": {
                "name": "草坪"
            },
            "landuse/industrial": {
                "name": "工业区"
            },
            "landuse/meadow": {
                "name": "牧场"
            },
            "landuse/orchard": {
                "name": "果园"
            },
            "landuse/quarry": {
                "name": "采石场"
            },
            "landuse/residential": {
                "name": "住宅区"
            },
            "landuse/vineyard": {
                "name": "葡萄园"
            },
            "leisure": {
                "name": "休闲场所"
            },
            "leisure/garden": {
                "name": "花园"
            },
            "leisure/golf_course": {
                "name": "高尔夫球场"
            },
            "leisure/marina": {
                "name": "码头"
            },
            "leisure/park": {
                "name": "公园"
            },
            "leisure/pitch": {
                "name": "运动场所"
            },
            "leisure/pitch/american_football": {
                "name": "美式足球场"
            },
            "leisure/pitch/baseball": {
                "name": "棒球场"
            },
            "leisure/pitch/basketball": {
                "name": "篮球场"
            },
            "leisure/pitch/soccer": {
                "name": "足球场"
            },
            "leisure/pitch/tennis": {
                "name": "网球场"
            },
            "leisure/playground": {
                "name": "运动场"
            },
            "leisure/slipway": {
                "name": "下水滑道"
            },
            "leisure/stadium": {
                "name": "体育场"
            },
            "leisure/swimming_pool": {
                "name": "游泳池"
            },
            "man_made": {
                "name": "人造的"
            },
            "man_made/lighthouse": {
                "name": "灯塔"
            },
            "man_made/pier": {
                "name": "码头"
            },
            "man_made/survey_point": {
                "name": "测量点"
            },
            "man_made/water_tower": {
                "name": "水塔"
            },
            "natural": {
                "name": "自然"
            },
            "natural/bay": {
                "name": "海湾"
            },
            "natural/beach": {
                "name": "海滩"
            },
            "natural/cliff": {
                "name": "悬崖"
            },
            "natural/coastline": {
                "name": "海岸线",
                "terms": "岸"
            },
            "natural/glacier": {
                "name": "冰川"
            },
            "natural/grassland": {
                "name": "草原"
            },
            "natural/heath": {
                "name": "荒野"
            },
            "natural/peak": {
                "name": "山峰"
            },
            "natural/scrub": {
                "name": "灌木丛"
            },
            "natural/spring": {
                "name": "泉水"
            },
            "natural/tree": {
                "name": "树"
            },
            "natural/water": {
                "name": "水"
            },
            "natural/water/lake": {
                "name": "湖泊",
                "terms": "小湖,湖"
            },
            "natural/water/pond": {
                "name": "池塘"
            },
            "natural/water/reservoir": {
                "name": "水库"
            },
            "natural/wetland": {
                "name": "湿地"
            },
            "natural/wood": {
                "name": "树林"
            },
            "office": {
                "name": "办公室"
            },
            "other": {
                "name": "其他"
            },
            "other_area": {
                "name": "其他"
            },
            "place": {
                "name": "地点"
            },
            "place/city": {
                "name": "城市"
            },
            "place/hamlet": {
                "name": "小村庄"
            },
            "place/island": {
                "name": "岛屿"
            },
            "place/locality": {
                "name": "位置"
            },
            "place/town": {
                "name": "城镇"
            },
            "place/village": {
                "name": "村庄"
            },
            "power": {
                "name": "电力设施"
            },
            "power/generator": {
                "name": "发电厂"
            },
            "power/line": {
                "name": "电路线"
            },
            "power/pole": {
                "name": "电线杆"
            },
            "power/sub_station": {
                "name": "变电站"
            },
            "power/tower": {
                "name": "高压电塔"
            },
            "power/transformer": {
                "name": "变压器"
            },
            "railway": {
                "name": "铁路"
            },
            "railway/abandoned": {
                "name": "废弃的铁路"
            },
            "railway/disused": {
                "name": "废弃的铁路"
            },
            "railway/level_crossing": {
                "name": "平交路口"
            },
            "railway/monorail": {
                "name": "单轨铁路"
            },
            "railway/rail": {
                "name": "铁轨"
            },
            "railway/subway": {
                "name": "地铁"
            },
            "railway/subway_entrance": {
                "name": "地铁口"
            },
            "railway/tram": {
                "name": "电车",
                "terms": "电车"
            },
            "shop": {
                "name": "商店"
            },
            "shop/alcohol": {
                "name": "酒品店"
            },
            "shop/bakery": {
                "name": "面包店"
            },
            "shop/beauty": {
                "name": "美容店"
            },
            "shop/beverages": {
                "name": "饮料店"
            },
            "shop/bicycle": {
                "name": "自行车店"
            },
            "shop/books": {
                "name": "书店"
            },
            "shop/boutique": {
                "name": "精品店"
            },
            "shop/butcher": {
                "name": "肉贩"
            },
            "shop/car": {
                "name": "汽车经销商"
            },
            "shop/car_parts": {
                "name": "汽车配件店"
            },
            "shop/car_repair": {
                "name": "汽车修理店"
            },
            "shop/chemist": {
                "name": "药房"
            },
            "shop/clothes": {
                "name": "服装店"
            },
            "shop/computer": {
                "name": "电脑店"
            },
            "shop/confectionery": {
                "name": "糕饼"
            },
            "shop/convenience": {
                "name": "便利店"
            },
            "shop/deli": {
                "name": "熟食店"
            },
            "shop/department_store": {
                "name": "百货店"
            },
            "shop/doityourself": {
                "name": "DIY商店"
            },
            "shop/dry_cleaning": {
                "name": "干洗店"
            },
            "shop/electronics": {
                "name": "家电店"
            },
            "shop/fishmonger": {
                "name": "鱼贩"
            },
            "shop/florist": {
                "name": "花店"
            },
            "shop/furniture": {
                "name": "家具店"
            },
            "shop/garden_centre": {
                "name": "花店"
            },
            "shop/gift": {
                "name": "礼品店"
            },
            "shop/greengrocer": {
                "name": "蔬菜水果店"
            },
            "shop/hairdresser": {
                "name": "理发师"
            },
            "shop/hardware": {
                "name": "五金商店"
            },
            "shop/hifi": {
                "name": "音响店"
            },
            "shop/jewelry": {
                "name": "珠宝店"
            },
            "shop/kiosk": {
                "name": "报刊亭"
            },
            "shop/laundry": {
                "name": "洗衣店"
            },
            "shop/mall": {
                "name": "购物中心"
            },
            "shop/mobile_phone": {
                "name": "手机店"
            },
            "shop/motorcycle": {
                "name": "摩托车经销商"
            },
            "shop/music": {
                "name": "音乐店"
            },
            "shop/newsagent": {
                "name": "书报"
            },
            "shop/optician": {
                "name": "眼镜店"
            },
            "shop/outdoor": {
                "name": "户外店"
            },
            "shop/pet": {
                "name": "宠物店"
            },
            "shop/shoes": {
                "name": "鞋店"
            },
            "shop/sports": {
                "name": "体育用品店"
            },
            "shop/stationery": {
                "name": "文化用品店"
            },
            "shop/supermarket": {
                "name": "超级市场"
            },
            "shop/toys": {
                "name": "玩具店"
            },
            "shop/travel_agency": {
                "name": "旅行社"
            },
            "shop/tyres": {
                "name": "轮胎店"
            },
            "shop/vacant": {
                "name": "空置铺位"
            },
            "shop/variety_store": {
                "name": "杂货店"
            },
            "shop/video": {
                "name": "影像店"
            },
            "tourism": {
                "name": "旅游业"
            },
            "tourism/alpine_hut": {
                "name": "高山小屋"
            },
            "tourism/artwork": {
                "name": "艺术品"
            },
            "tourism/attraction": {
                "name": "旅游景点"
            },
            "tourism/camp_site": {
                "name": "露营区"
            },
            "tourism/caravan_site": {
                "name": "房车营地"
            },
            "tourism/chalet": {
                "name": "木屋"
            },
            "tourism/guest_house": {
                "name": "宾馆"
            },
            "tourism/hostel": {
                "name": "招待所"
            },
            "tourism/hotel": {
                "name": "旅馆"
            },
            "tourism/information": {
                "name": "信息板"
            },
            "tourism/motel": {
                "name": "汽车旅馆"
            },
            "tourism/museum": {
                "name": "博物馆"
            },
            "tourism/picnic_site": {
                "name": "郊游地点"
            },
            "tourism/theme_park": {
                "name": "主题公园"
            },
            "tourism/viewpoint": {
                "name": "景点"
            },
            "tourism/zoo": {
                "name": "动物园"
            },
            "waterway": {
                "name": "航道"
            },
            "waterway/canal": {
                "name": "运河"
            },
            "waterway/dam": {
                "name": "水坝"
            },
            "waterway/ditch": {
                "name": "沟渠"
            },
            "waterway/drain": {
                "name": "下水道"
            },
            "waterway/river": {
                "name": "河流"
            },
            "waterway/riverbank": {
                "name": "河堤"
            },
            "waterway/stream": {
                "name": "溪流"
            },
            "waterway/weir": {
                "name": "堤坝"
            }
        }
    }
};