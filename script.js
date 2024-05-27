const levels = {
    1: [
        {
            question: "一",
            answers: [
                { text: "いち", correct: true },
                { text: "ろく", correct: false },
                { text: "なな", correct: false },
                { text: "しち", correct: false }
            ]
        },
        {
            question: "ニ",
            answers: [
                { text: "に", correct: true },
                { text: "さん", correct: false },
                { text: "ご", correct: false },
                { text: "じゅう", correct: false }
            ]
        },
        {
            question: "三",
            answers: [
                { text: "さん", correct: true },
                { text: "なな", correct: false },
                { text: "ろく", correct: false },
                { text: "いち", correct: false }
            ]
        },
        {
            question: "四",
            answers: [
                { text: "よん", correct: true },
                { text: "ご", correct: false },
                { text: "なな", correct: false },
                { text: "しち", correct: false }
            ]
        },
        {
            question: "五",
            answers: [
                { text: "ご", correct: true },
                { text: "なな", correct: false },
                { text: "さん", correct: false },
                { text: "ろく", correct: false }
            ]
        },
        {
            question: "飲む",
            answers: [
                { text: "のむ", correct: true },
                { text: "たべる", correct: false },
                { text: "いっぱい", correct: false },
                { text: "おなか", correct: false }
            ]
        },
        {
            question: "食べる",
            answers: [
                { text: "たべる", correct: true },
                { text: "のべる", correct: false },
                { text: "しょくじ", correct: false },
                { text: "しらべる", correct: false }
            ]
        },
        {
            question: "見る",
            answers: [
                { text: "みる", correct: true },
                { text: "しる", correct: false },
                { text: "うる", correct: false },
                { text: "ねる", correct: false }
            ]
        },
        {
            question: "休む",
            answers: [
                { text: "やすむ", correct: true },
                { text: "よむ", correct: false },
                { text: "すむ", correct: false },
                { text: "のむ", correct: false }
            ]
        },
        {
            question: "会う",
            answers: [
                { text: "あう", correct: true },
                { text: "きのう", correct: false },
                { text: "きゅう", correct: false },
                { text: "いう", correct: false }
            ]
        },
        {
            question: "日本",
            answers: [
                { text: "にほん", correct: true },
                { text: "ほんじつ", correct: false },
                { text: "かいしゃ", correct: false },
                { text: "しごと", correct: false }
            ]
        },
        {
            question: "待つ",
            answers: [
                { text: "まつ", correct: true },
                { text: "もつ", correct: false },
                { text: "とつ", correct: false },
                { text: "ぶつ", correct: false }
            ]
        },
        {
            question: "持つ",
            answers: [
                { text: "もつ", correct: true },
                { text: "とつ", correct: false },
                { text: "まつ", correct: false },
                { text: "よつ", correct: false }
            ]
        },
        {
            question: "電車",
            answers: [
                { text: "でんしゃ", correct: true },
                { text: "でんわ", correct: false },
                { text: "でんき", correct: false },
                { text: "じどうしゃ", correct: false }
            ]
        },
        {
            question: "話す",
            answers: [
                { text: "はなす", correct: true },
                { text: "いす", correct: false },
                { text: "なおす", correct: false },
                { text: "あす", correct: false }
            ]
        },
        {
            question: "川",
            answers: [
                { text: "かわ", correct: true },
                { text: "にわ", correct: false },
                { text: "あう", correct: false },
                { text: "とり", correct: false }
            ]
        },
        {
            question: "千",
            answers: [
                { text: "せん", correct: true },
                { text: "ひゃく", correct: false },
                { text: "まん", correct: false },
                { text: "いち", correct: false }
            ]
        },
        // Tambahkan lebih banyak soal untuk babak 1
    ],
    2: [
        {
            question: "六",
            answers: [
                { text: "ろく", correct: true },
                { text: "はち", correct: false },
                { text: "じゅう", correct: false },
                { text: "いち", correct: false }
            ]
        },
        {
            question: "七",
            answers: [
                { text: "なな／しち", correct: true },
                { text: "はち", correct: false },
                { text: "いち", correct: false },
                { text: "よん／し", correct: false }
            ]
        },
        {
            question: "八",
            answers: [
                { text: "はち", correct: true },
                { text: "ろく", correct: false },
                { text: "じゅう", correct: false },
                { text: "よん", correct: false }
            ]
        },
        {
            question: "九",
            answers: [
                { text: "きゅう", correct: true },
                { text: "じゅう", correct: false },
                { text: "はち", correct: false },
                { text: "ろく", correct: false }
            ]
        },
        {
            question: "十",
            answers: [
                { text: "じゅう", correct: true },
                { text: "なな", correct: false },
                { text: "はち", correct: false },
                { text: "いち", correct: false }
            ]
        },
        {
            question: "学校",
            answers: [
                { text: "がっこう", correct: true },
                { text: "がくせい", correct: false },
                { text: "だいがく", correct: false },
                { text: "りょこう", correct: false }
            ]
        },
        {
            question: "気持ち",
            answers: [
                { text: "きもち", correct: true },
                { text: "てんき", correct: false },
                { text: "こっち", correct: false },
                { text: "どっち", correct: false }
            ]
        },
        {
            question: "元気",
            answers: [
                { text: "てんき", correct: true },
                { text: "げんき", correct: false },
                { text: "でんき", correct: false },
                { text: "おき", correct: false }
            ]
        },
        {
            question: "言う",
            answers: [
                { text: "いう", correct: true },
                { text: "あう", correct: false },
                { text: "すう", correct: false },
                { text: "おす", correct: false }
            ]
        },
        {
            question: "午後",
            answers: [
                { text: "ごご", correct: true },
                { text: "ごぜん", correct: false },
                { text: "はん", correct: false },
                { text: "じかん", correct: false }
            ]
        },
        {
            question: "姉",
            answers: [
                { text: "あね", correct: true },
                { text: "あに", correct: false },
                { text: "いもうと", correct: false },
                { text: "おとうと", correct: false }
            ]
        },
        {
            question: "兄",
            answers: [
                { text: "あに", correct: true },
                { text: "あね", correct: false },
                { text: "いもうと", correct: false },
                { text: "おようと", correct: false }
            ]
        },
        {
            question: "妹",
            answers: [
                { text: "いもうと", correct: true },
                { text: "おとうと", correct: false },
                { text: "あに", correct: false },
                { text: "あね", correct: false }
            ]
        },
        {
            question: "弟",
            answers: [
                { text: "おとうと", correct: true },
                { text: "いもうと", correct: false },
                { text: "あに", correct: false },
                { text: "あね", correct: false }
            ]
        },
        {
            question: "兄弟",
            answers: [
                { text: "きょうだい", correct: true },
                { text: "りょうしん", correct: false },
                { text: "あにおとうと", correct: false },
                { text: "おにいさん", correct: false }
            ]
        },
        {
            question: "多い",
            answers: [
                { text: "おおい", correct: true },
                { text: "あい", correct: false },
                { text: "だい", correct: false },
                { text: "とおい", correct: false }
            ]
        },
        {
            question: "大きい",
            answers: [
                { text: "おおきい", correct: true },
                { text: "すきい", correct: false },
                { text: "さいきい", correct: false },
                { text: "まいきい", correct: false }
            ]
        },
        // Tambahkan lebih banyak soal untuk babak 2
    ],
    3: [
        {
            question: "女",
            answers: [
                { text: "おんな", correct: true },
                { text: "おとこ", correct: false },
                { text: "あに", correct: false },
                { text: "あね", correct: false }
            ]
        },
        {
            question: "安い",
            answers: [
                { text: "やすい", correct: true },
                { text: "たかい", correct: false },
                { text: "ちかい", correct: false },
                { text: "みじかい", correct: false }
            ]
        },
        {
            question: "右",
            answers: [
                { text: "みぎ", correct: true },
                { text: "ひだり", correct: false },
                { text: "あし", correct: false },
                { text: "くち", correct: false }
            ]
        },
        {
            question: "左",
            answers: [
                { text: "ひだり", correct: true },
                { text: "みぎ", correct: false },
                { text: "うえ", correct: false },
                { text: "した", correct: false }
            ]
        },
        {
            question: "雨",
            answers: [
                { text: "あめ", correct: true },
                { text: "うみ", correct: false },
                { text: "かさ", correct: false },
                { text: "かぎ", correct: false }
            ]
        },
        {
            question: "午前",
            answers: [
                { text: "ごぜん", correct: true },
                { text: "ごご", correct: false },
                { text: "はん", correct: false },
                { text: "ごまえ", correct: false }
            ]
        },
        {
            question: "〜語",
            answers: [
                { text: "ご", correct: true },
                { text: "ほん", correct: false },
                { text: "はなす", correct: false },
                { text: "よむ", correct: false }
            ]
        },
        {
            question: "口",
            answers: [
                { text: "くち", correct: true },
                { text: "まど", correct: false },
                { text: "こ", correct: false },
                { text: "おんな", correct: false }
            ]
        },
        {
            question: "行く",
            answers: [
                { text: "いく", correct: true },
                { text: "さく", correct: false },
                { text: "なく", correct: false },
                { text: "とく", correct: false }
            ]
        },
        {
            question: "高い",
            answers: [
                { text: "たかい", correct: true },
                { text: "やすい", correct: false },
                { text: "みじかい", correct: false },
                { text: "とおい", correct: false }
            ]
        },
        {
            question: "私",
            answers: [
                { text: "わたし", correct: true },
                { text: "あなた", correct: false },
                { text: "きみ", correct: false },
                { text: "ぼく", correct: false }
            ]
        },
        {
            question: "時計",
            answers: [
                { text: "とけい", correct: true },
                { text: "じかん", correct: false },
                { text: "いちがつ", correct: false },
                { text: "はん", correct: false }
            ]
        },
        {
            question: "漢字",
            answers: [
                { text: "かんじ", correct: true },
                { text: "すうじ", correct: false },
                { text: "じ", correct: false },
                { text: "ばんごう", correct: false }
            ]
        },
        {
            question: "月曜日",
            answers: [
                { text: "げつようび", correct: true },
                { text: "かようび", correct: false },
                { text: "もくようび", correct: false },
                { text: "どうよび", correct: false }
            ]
        },
        {
            question: "電気",
            answers: [
                { text: "でんき", correct: true },
                { text: "てんき", correct: false },
                { text: "でんしゃ", correct: false },
                { text: "じてんしゃ", correct: false }
            ]
        },
        {
            question: "火曜日",
            answers: [
                { text: "かようび", correct: true },
                { text: "もくようび", correct: false },
                { text: "ひようび", correct: false },
                { text: "すいようび", correct: false }
            ]
        },
        {
            question: "店",
            answers: [
                { text: "みせ", correct: true },
                { text: "あし", correct: false },
                { text: "あに", correct: false },
                { text: "あね", correct: false }
            ]
        },
        // Tambahkan lebih banyak soal untuk babak 3
    ],

    4: [
        {
            question: "駅",
            answers: [
                { text: "えき", correct: true },
                { text: "あたらしい", correct: false },
                { text: "やま", correct: false },
                { text: "にわ", correct: false }
            ]
        },
        {
            question: "円",
            answers: [
                { text: "えん", correct: true },
                { text: "かばん", correct: false },
                { text: "じ", correct: false },
                { text: "はん", correct: false }
            ]
        },
        {
            question: "火",
            answers: [
                { text: "ひ", correct: true },
                { text: "にち", correct: false },
                { text: "げつ", correct: false },
                { text: "つき", correct: false }
            ]
        },
        {
            question: "花",
            answers: [
                { text: "はな", correct: true },
                { text: "は", correct: false },
                { text: "みぎ", correct: false },
                { text: "ひだり", correct: false }
            ]
        },
        {
            question: "下",
            answers: [
                { text: "した", correct: true },
                { text: "うえ", correct: false },
                { text: "へた", correct: false },
                { text: "じょうず", correct: false }
            ]
        },
        {
            question: "耳",
            answers: [
                { text: "みみ", correct: true },
                { text: "め", correct: false },
                { text: "あし", correct: false },
                { text: "みせ", correct: false }
            ]
        },
        {
            question: "子供",
            answers: [
                { text: "こども", correct: true },
                { text: "おかし", correct: false },
                { text: "ぼうし", correct: false },
                { text: "よやく", correct: false }
            ]
        },
        {
            question: "山",
            answers: [
                { text: "やま", correct: true },
                { text: "かわ", correct: false },
                { text: "にわ", correct: false },
                { text: "みち", correct: false }
            ]
        },
        {
            question: "今",
            answers: [
                { text: "いま", correct: true },
                { text: "きょう", correct: false },
                { text: "まい", correct: false },
                { text: "にち", correct: false }
            ]
        },
        {
            question: "国",
            answers: [
                { text: "くに", correct: true },
                { text: "せかい", correct: false },
                { text: "ご", correct: false },
                { text: "にほん", correct: false }
            ]
        },
        {
            question: "水曜日",
            answers: [
                { text: "すいようび", correct: true },
                { text: "かようび", correct: false },
                { text: "げつようび", correct: false },
                { text: "にちようび", correct: false }
            ]
        },
        {
            question: "木曜日",
            answers: [
                { text: "もくようび", correct: true },
                { text: "にちようび", correct: false },
                { text: "かようび", correct: false },
                { text: "すいようび", correct: false }
            ]
        },
        {
            question: "金曜日",
            answers: [
                { text: "きんようび", correct: true },
                { text: "もくようび", correct: false },
                { text: "どようび", correct: false },
                { text: "かようび", correct: false }
            ]
        },
        {
            question: "土曜日",
            answers: [
                { text: "どようび", correct: true },
                { text: "どうようび", correct: false },
                { text: "もくようび", correct: false },
                { text: "きんようび", correct: false }
            ]
        },
        {
            question: "日曜日",
            answers: [
                { text: "にちようび", correct: true },
                { text: "げつようび", correct: false },
                { text: "かようび", correct: false },
                { text: "どうようび", correct: false }
            ]
        },
        {
            question: "入る",
            answers: [
                { text: "はいる", correct: true },
                { text: "いれる", correct: false },
                { text: "とる", correct: false },
                { text: "よる", correct: false }
            ]
        },
        {
            question: "買う",
            answers: [
                { text: "かう", correct: true },
                { text: "いう", correct: false },
                { text: "かいもの", correct: false },
                { text: "よう", correct: false }
            ]
        },
    ],

    
    5: [
        {
            question: "何",
            answers: [
                { text: "なに", correct: true },
                { text: "どこ", correct: false },
                { text: "おなじ", correct: false },
                { text: "かい", correct: false }
            ]
        },
        {
            question: "外",
            answers: [
                { text: "そと", correct: true },
                { text: "なか", correct: false },
                { text: "ちかい", correct: false },
                { text: "ちゅう", correct: false }
            ]
        },
        {
            question: "中",
            answers: [
                { text: "なか", correct: true },
                { text: "そと", correct: false },
                { text: "そば", correct: false },
                { text: "あいだ", correct: false }
            ]
        },
        {
            question: "上",
            answers: [
                { text: "うえ", correct: true },
                { text: "した", correct: false },
                { text: "なか", correct: false },
                { text: "ふく", correct: false }
            ]
        },
        {
            question: "前",
            answers: [
                { text: "まえ", correct: true },
                { text: "うしろ", correct: false },
                { text: "あいだ", correct: false },
                { text: "あね", correct: false }
            ]
        },
        {
            question: "週",
            answers: [
                { text: "しゅう", correct: true },
                { text: "みち", correct: false },
                { text: "まち", correct: false },
                { text: "かぜ", correct: false }
            ]
        },
        {
            question: "手",
            answers: [
                { text: "て", correct: true },
                { text: "ねる", correct: false },
                { text: "かく", correct: false },
                { text: "きく", correct: false }
            ]
        },
        {
            question: "会社",
            answers: [
                { text: "かいしゃ", correct: true },
                { text: "たかい", correct: false },
                { text: "ちかい", correct: false },
                { text: "しゃかい", correct: false }
            ]
        },
        {
            question: "車",
            answers: [
                { text: "くるま", correct: true },
                { text: "じどうしゃ", correct: false },
                { text: "じてんしゃ", correct: false },
                { text: "しゅう", correct: false }
            ]
        },
        {
            question: "時",
            answers: [
                { text: "じ", correct: true },
                { text: "ふん", correct: false },
                { text: "はん", correct: false },
                { text: "しゅう", correct: false }
            ]
        },
        {
            question: "勉強する",
            answers: [
                { text: "べんきょうする", correct: true },
                { text: "そうじする", correct: false },
                { text: "しょかいする", correct: false },
                { text: "せんたくする", correct: false }
            ]
        },
        {
            question: "大学",
            answers: [
                { text: "だいがく", correct: true },
                { text: "だいすき", correct: false },
                { text: "がいがく", correct: false },
                { text: "たいがく", correct: false }
            ]
        },
        {
            question: "高校",
            answers: [
                { text: "こうこう", correct: true },
                { text: "たかい", correct: false },
                { text: "やすい", correct: false },
                { text: "がっこう", correct: false }
            ]
        },
        {
            question: "朝",
            answers: [
                { text: "あさ", correct: true },
                { text: "よる", correct: false },
                { text: "ひる", correct: false },
                { text: "ばん", correct: false }
            ]
        },
        {
            question: "昼",
            answers: [
                { text: "ひる", correct: true },
                { text: "よる", correct: false },
                { text: "ばん", correct: false },
                { text: "ごはん", correct: false }
            ]
        },
        {
            question: "青い",
            answers: [
                { text: "あおい", correct: true },
                { text: "あかい", correct: false },
                { text: "みどりい", correct: false },
                { text: "ちかい", correct: false }
            ]
        },
        {
            question: "半",
            answers: [
                { text: "はん", correct: true },
                { text: "ばん", correct: false },
                { text: "ひかり", correct: false },
                { text: "よる", correct: false }
            ]
        },
    ],

    6: [
        {
            question: "後ろ",
            answers: [
                { text: "うしろ", correct: true },
                { text: "ごろ", correct: false },
                { text: "とろ", correct: false },
                { text: "すくろ", correct: false }
            ]
        },
        {
            question: "間",
            answers: [
                { text: "あいだ", correct: true },
                { text: "なか", correct: false },
                { text: "ちゅう", correct: false },
                { text: "となり", correct: false }
            ]
        },
        {
            question: "魚",
            answers: [
                { text: "さかな", correct: true },
                { text: "くろい", correct: false },
                { text: "つり", correct: false },
                { text: "あめ", correct: false }
            ]
        },
        {
            question: "お金",
            answers: [
                { text: "おかね", correct: true },
                { text: "おさけ", correct: false },
                { text: "おなか", correct: false },
                { text: "おみやげ", correct: false }
            ]
        },
        {
            question: "空",
            answers: [
                { text: "そら", correct: true },
                { text: "くも", correct: false },
                { text: "ゆき", correct: false },
                { text: "ふゆ", correct: false }
            ]
        },
        {
            question: "水",
            answers: [
                { text: "みず", correct: true },
                { text: "ひ", correct: false },
                { text: "もく", correct: false },
                { text: "き", correct: false }
            ]
        },
        {
            question: "人",
            answers: [
                { text: "ひと", correct: true },
                { text: "おんな", correct: false },
                { text: "あに", correct: false },
                { text: "あね", correct: false }
            ]
        },
        {
            question: "少ない",
            answers: [
                { text: "すくない", correct: true },
                { text: "こない", correct: false },
                { text: "ちかない", correct: false },
                { text: "みじかない", correct: false }
            ]
        },
        {
            question: "小さい",
            answers: [
                { text: "ちいさい", correct: true },
                { text: "ちさい", correct: false },
                { text: "こさい", correct: false },
                { text: "ぬさい", correct: false }
            ]
        },
        {
            question: "書く",
            answers: [
                { text: "かく", correct: true },
                { text: "きく", correct: false },
                { text: "よく", correct: false },
                { text: "ふく", correct: false }
            ]
        },
        {
            question: "夜",
            answers: [
                { text: "よる", correct: true },
                { text: "ばん", correct: false },
                { text: "ひる", correct: false },
                { text: "あさ", correct: false }
            ]
        },
        {
            question: "冬",
            answers: [
                { text: "ふゆ", correct: true },
                { text: "よる", correct: false },
                { text: "ばん", correct: false },
                { text: "あさ", correct: false }
            ]
        },
        {
            question: "春",
            answers: [
                { text: "はる", correct: true },
                { text: "あつい", correct: false },
                { text: "なつ", correct: false },
                { text: "ふゆ", correct: false }
            ]
        },
        {
            question: "秋",
            answers: [
                { text: "あき", correct: true },
                { text: "そら", correct: false },
                { text: "くも", correct: false },
                { text: "ひ", correct: false }
            ]
        },
        {
            question: "夏",
            answers: [
                { text: "なつ", correct: true },
                { text: "ひる", correct: false },
                { text: "とる", correct: false },
                { text: "する", correct: false }
            ]
        },
        {
            question: "分",
            answers: [
                { text: "ふん", correct: true },
                { text: "はん", correct: false },
                { text: "よる", correct: false },
                { text: "ひる", correct: false }
            ]
        },
        {
            question: "聞く",
            answers: [
                { text: "きく", correct: true },
                { text: "かく", correct: false },
                { text: "むく", correct: false },
                { text: "さく", correct: false }
            ]
        },
    ],

    7: [
        {
            question: "日",
            answers: [
                { text: "にち", correct: true },
                { text: "げつ", correct: false },
                { text: "つき", correct: false },
                { text: "め", correct: false }
            ]
        },
        {
            question: "月",
            answers: [
                { text: "つき", correct: true },
                { text: "ひ", correct: false },
                { text: "にち", correct: false },
                { text: "よる", correct: false }
            ]
        },
        {
            question: "年",
            answers: [
                { text: "ねん", correct: true },
                { text: "げつ", correct: false },
                { text: "しゅう", correct: false },
                { text: "きょう", correct: false }
            ]
        },
        {
            question: "古い",
            answers: [
                { text: "ふるい", correct: true },
                { text: "たかい", correct: false },
                { text: "ちかい", correct: false },
                { text: "おそい", correct: false }
            ]
        },
        {
            question: "新しい",
            answers: [
                { text: "あたらしい", correct: true },
                { text: "はやい", correct: false },
                { text: "しかしい", correct: false },
                { text: "つち", correct: false }
            ]
        },
        {
            question: "南",
            answers: [
                { text: "みなみ", correct: true },
                { text: "ひがし", correct: false },
                { text: "くち", correct: false },
                { text: "にし", correct: false }
            ]
        },
        {
            question: "北",
            answers: [
                { text: "きた", correct: true },
                { text: "にし", correct: false },
                { text: "まど", correct: false },
                { text: "ぐち", correct: false }
            ]
        },
        {
            question: "東",
            answers: [
                { text: "ひがし", correct: true },
                { text: "みなみ", correct: false },
                { text: "きた", correct: false },
                { text: "うみ", correct: false }
            ]
        },
        {
            question: "西",
            answers: [
                { text: "にし", correct: true },
                { text: "きた", correct: false },
                { text: "みなみ", correct: false },
                { text: "ひがし", correct: false }
            ]
        },
        {
            question: "生まれる",
            answers: [
                { text: "うまれる", correct: true },
                { text: "すわれる", correct: false },
                { text: "とまれる", correct: false },
                { text: "こまれる", correct: false }
            ]
        },
        {
            question: "先週",
            answers: [
                { text: "せんしゅう", correct: true },
                { text: "せんせい", correct: false },
                { text: "せんぱい", correct: false },
                { text: "せんげつ", correct: false }
            ]
        },
        {
            question: "今週",
            answers: [
                { text: "こんしゅう", correct: true },
                { text: "きょう", correct: false },
                { text: "いま", correct: false },
                { text: "つき", correct: false }
            ]
        },
        {
            question: "来週",
            answers: [
                { text: "らいしゅう", correct: true },
                { text: "せんしゅう", correct: false },
                { text: "みち", correct: false },
                { text: "らいねん", correct: false }
            ]
        },
        {
            question: "先月",
            answers: [
                { text: "せんげつ", correct: true },
                { text: "せんしゅう", correct: false },
                { text: "せんねん", correct: false },
                { text: "きょうねん", correct: false }
            ]
        },
        {
            question: "今月",
            answers: [
                { text: "こんげつ", correct: true },
                { text: "きょう", correct: false },
                { text: "きのう", correct: false },
                { text: "こんど", correct: false }
            ]
        },
        {
            question: "万",
            answers: [
                { text: "まん", correct: true },
                { text: "たかい", correct: false },
                { text: "せん", correct: false },
                { text: "ひゃく", correct: false }
            ]
        },
        {
            question: "名前",
            answers: [
                { text: "なまえ", correct: true },
                { text: "わたし", correct: false },
                { text: "ぼく", correct: false },
                { text: "ゆめい", correct: false }
            ]
        },
    ],

    8: [
        {
            question: "先",
            answers: [
                { text: "さき", correct: true },
                { text: "まえ", correct: false },
                { text: "せい", correct: false },
                { text: "とおい", correct: false }
            ]
        },
        {
            question: "先生",
            answers: [
                { text: "せんせい", correct: true },
                { text: "せんぱい", correct: false },
                { text: "みんな", correct: false },
                { text: "きょねん", correct: false }
            ]
        },
        {
            question: "足",
            answers: [
                { text: "あし", correct: true },
                { text: "みせ", correct: false },
                { text: "みせいん", correct: false },
                { text: "かいしゃ", correct: false }
            ]
        },
        {
            question: "来月",
            answers: [
                { text: "らいげつ", correct: true },
                { text: "せんげつ", correct: false },
                { text: "こんげつ", correct: false },
                { text: "いちがつ", correct: false }
            ]
        },
        {
            question: "去年",
            answers: [
                { text: "きょねん", correct: true },
                { text: "ことし", correct: false },
                { text: "らいねん", correct: false },
                { text: "せんねん", correct: false }
            ]
        },
        {
            question: "昨年",
            answers: [
                { text: "さくねん", correct: true },
                { text: "せんねん", correct: false },
                { text: "きのう", correct: false },
                { text: "あした", correct: false }
            ]
        },
        {
            question: "今年",
            answers: [
                { text: "ことし", correct: true },
                { text: "きょねん", correct: false },
                { text: "せんしゅう", correct: false },
                { text: "せんねん", correct: false }
            ]
        },
        {
            question: "来年",
            answers: [
                { text: "らいねん", correct: true },
                { text: "せんねん", correct: false },
                { text: "せんしゅう", correct: false },
                { text: "さくねん", correct: false }
            ]
        },
        {
            question: "働く",
            answers: [
                { text: "はたらく", correct: true },
                { text: "きく", correct: false },
                { text: "かく", correct: false },
                { text: "おく", correct: false }
            ]
        },
        {
            question: "服",
            answers: [
                { text: "ふく", correct: true },
                { text: "さく", correct: false },
                { text: "なつ", correct: false },
                { text: "どうぶつ", correct: false }
            ]
        },
        {
            question: "船",
            answers: [
                { text: "ふね", correct: true },
                { text: "ふく", correct: false },
                { text: "なつ", correct: false },
                { text: "はれ", correct: false }
            ]
        },
        {
            question: "店長",
            answers: [
                { text: "てんちょう", correct: true },
                { text: "ぶちょう", correct: false },
                { text: "しゃちょう", correct: false },
                { text: "かちょう", correct: false }
            ]
        },
        {
            question: "店員",
            answers: [
                { text: "てんいん", correct: true },
                { text: "かいしゃいん", correct: false },
                { text: "ねだん", correct: false },
                { text: "じょうぶ", correct: false }
            ]
        },
        {
            question: "会社員",
            answers: [
                { text: "かいしゃいん", correct: true },
                { text: "てんいん", correct: false },
                { text: "しゃかいいん", correct: false },
                { text: "しゃいん", correct: false }
            ]
        },
        {
            question: "絵",
            answers: [
                { text: "え", correct: true },
                { text: "とり", correct: false },
                { text: "ふく", correct: false },
                { text: "にわ", correct: false }
            ]
        },
        {
            question: "紙",
            answers: [
                { text: "かみ", correct: true },
                { text: "にわ", correct: false },
                { text: "とり", correct: false },
                { text: "かわ", correct: false }
            ]
        },
        {
            question: "顔",
            answers: [
                { text: "かお", correct: true },
                { text: "くち", correct: false },
                { text: "からだ", correct: false },
                { text: "かた", correct: false }
            ]
        },
        {
            question: "頭",
            answers: [
                { text: "あたま", correct: true },
                { text: "たまご", correct: false },
                { text: "やさい", correct: false },
                { text: "くだもの", correct: false }
            ]
        },
    ],

    9: [
        {
            question: "男",
            answers: [
                { text: "おとこ", correct: true },
                { text: "おんな", correct: false },
                { text: "あに", correct: false },
                { text: "あね", correct: false }
            ]
        },
        {
            question: "長い",
            answers: [
                { text: "ながい", correct: true },
                { text: "たかい", correct: false },
                { text: "ちかい", correct: false },
                { text: "みじかい", correct: false }
            ]
        },
        {
            question: "天気",
            answers: [
                { text: "てんき", correct: true },
                { text: "でんき", correct: false },
                { text: "げんき", correct: false },
                { text: "でんしゃ", correct: false }
            ]
        },
        {
            question: "昨日",
            answers: [
                { text: "きのう", correct: true },
                { text: "きょう", correct: false },
                { text: "あした", correct: false },
                { text: "さくねん", correct: false }
            ]
        },
        {
            question: "今日",
            answers: [
                { text: "きょう", correct: true },
                { text: "きのう", correct: false },
                { text: "あした", correct: false },
                { text: "せんしゅう", correct: false }
            ]
        },
        {
            question: "明日",
            answers: [
                { text: "あした", correct: true },
                { text: "きのう", correct: false },
                { text: "せんしゅう", correct: false },
                { text: "らいしゅう", correct: false }
            ]
        },
        {
            question: "明後日",
            answers: [
                { text: "げつようび", correct: true },
                { text: "かようび", correct: false },
                { text: "すいようび", correct: false },
                { text: "もくようび", correct: false }
            ]
        },
        {
            question: "物",
            answers: [
                { text: "もの", correct: true },
                { text: "かいもの", correct: false },
                { text: "ふく", correct: false },
                { text: "とり", correct: false }
            ]
        },
        {
            question: "体",
            answers: [
                { text: "からだ", correct: true },
                { text: "やすみ", correct: false },
                { text: "ほん", correct: false },
                { text: "あたま", correct: false }
            ]
        },
        {
            question: "教える",
            answers: [
                { text: "おしえる", correct: true },
                { text: "かえる", correct: false },
                { text: "ちがえる", correct: false },
                { text: "みえる", correct: false }
            ]
        },
        {
            question: "教室",
            answers: [
                { text: "きょうしつ", correct: true },
                { text: "へや", correct: false },
                { text: "きょしつ", correct: false },
                { text: "どうぶつ", correct: false }
            ]
        },
        {
            question: "部屋",
            answers: [
                { text: "へや", correct: true },
                { text: "みせ", correct: false },
                { text: "ぎんこう", correct: false },
                { text: "がっこう", correct: false }
            ]
        },
        {
            question: "東京",
            answers: [
                { text: "とうきょう", correct: true },
                { text: "おさか", correct: false },
                { text: "ほかいど", correct: false },
                { text: "きょうと", correct: false }
            ]
        },
        {
            question: "京都",
            answers: [
                { text: "きょうと", correct: true },
                { text: "ほっかいど", correct: false },
                { text: "おさか", correct: false },
                { text: "へや", correct: false }
            ]
        },
        {
            question: "公園",
            answers: [
                { text: "こうえん", correct: true },
                { text: "がいこく", correct: false },
                { text: "りゅうがく", correct: false },
                { text: "がくせい", correct: false }
            ]
        },
        {
            question: "事",
            answers: [
                { text: "こと", correct: true },
                { text: "て", correct: false },
                { text: "かく", correct: false },
                { text: "しょくじ", correct: false }
            ]
        },
        {
            question: "雲",
            answers: [
                { text: "くも", correct: true },
                { text: "ゆき", correct: false },
                { text: "ぶつ", correct: false },
                { text: "あね", correct: false }
            ]
        },
        {
            question: "仕事",
            answers: [
                { text: "しごと", correct: true },
                { text: "たかい", correct: false },
                { text: "ちかい", correct: false },
                { text: "かいしゃ", correct: false }
            ]
        },
    ],

    10: [
        {
            question: "土",
            answers: [
                { text: "つち", correct: true },
                { text: "みやげ", correct: false },
                { text: "あに", correct: false },
                { text: "あね", correct: false }
            ]
        },
        {
            question: "道",
            answers: [
                { text: "みち", correct: true },
                { text: "まち", correct: false },
                { text: "ちかい", correct: false },
                { text: "ひる", correct: false }
            ]
        },
        {
            question: "読む",
            answers: [
                { text: "よむ", correct: true },
                { text: "すむ", correct: false },
                { text: "なおむ", correct: false },
                { text: "こむ", correct: false }
            ]
        },
        {
            question: "肉",
            answers: [
                { text: "にく", correct: true },
                { text: "ぎゅう", correct: false },
                { text: "にゅう", correct: false },
                { text: "さかな", correct: false }
            ]
        },
        {
            question: "写真",
            answers: [
                { text: "しゃしん", correct: true },
                { text: "ばんごう", correct: false },
                { text: "へや", correct: false },
                { text: "しずおか", correct: false }
            ]
        },
        {
            question: "楽しい",
            answers: [
                { text: "たのしい", correct: true },
                { text: "あたらしい", correct: false },
                { text: "ほしい", correct: false },
                { text: "はずかしい", correct: false }
            ]
        },
        {
            question: "町",
            answers: [
                { text: "まち", correct: true },
                { text: "みち", correct: false },
                { text: "あに", correct: false },
                { text: "いなか", correct: false }
            ]
        },
        {
            question: "好き",
            answers: [
                { text: "すき", correct: true },
                { text: "さき", correct: false },
                { text: "おき", correct: false },
                { text: "なき", correct: false }
            ]
        },
        {
            question: "短い",
            answers: [
                { text: "みじかい", correct: true },
                { text: "あかい", correct: false },
                { text: "あつい", correct: false },
                { text: "とおい", correct: false }
            ]
        },
        {
            question: "明るい",
            answers: [
                { text: "あかるい", correct: true },
                { text: "しょるい", correct: false },
                { text: "くるい", correct: false },
                { text: "とるい", correct: false }
            ]
        },
        {
            question: "番号",
            answers: [
                { text: "ばんごう", correct: true },
                { text: "でんわ", correct: false },
                { text: "すうじ", correct: false },
                { text: "しゃしん", correct: false }
            ]
        },
        {
            question: "病気",
            answers: [
                { text: "びょうき", correct: true },
                { text: "びょういん", correct: false },
                { text: "いしゃ", correct: false },
                { text: "はいしゃ", correct: false }
            ]
        },
        {
            question: "病院",
            answers: [
                { text: "びょういん", correct: true },
                { text: "にく", correct: false },
                { text: "くすり", correct: false },
                { text: "やっきょく", correct: false }
            ]
        },
        {
            question: "薬",
            answers: [
                { text: "くすり", correct: true },
                { text: "びょうき", correct: false },
                { text: "おと", correct: false },
                { text: "おんがく", correct: false }
            ]
        },
        {
            question: "着る",
            answers: [
                { text: "きる", correct: true },
                { text: "くる", correct: false },
                { text: "しる", correct: false },
                { text: "かえる", correct: false }
            ]
        },
        {
            question: "上着",
            answers: [
                { text: "うわぎ", correct: true },
                { text: "じょうず", correct: false },
                { text: "へた", correct: false },
                { text: "くる", correct: false }
            ]
        },
        {
            question: "下着",
            answers: [
                { text: "したぎ", correct: true },
                { text: "かぎ", correct: false },
                { text: "きもの", correct: false },
                { text: "あね", correct: false }
            ]
        },
        {
            question: "着物",
            answers: [
                { text: "きもの", correct: true },
                { text: "たてもの", correct: false },
                { text: "くだもの", correct: false },
                { text: "きる", correct: false }
            ]
        },
    ],

    11: [
        {
            question: "白い",
            answers: [
                { text: "しろい", correct: true },
                { text: "くろい", correct: false },
                { text: "あおい", correct: false },
                { text: "ひゃく", correct: false }
            ]
        },
        {
            question: "黒い",
            answers: [
                { text: "くろい", correct: true },
                { text: "しろい", correct: false },
                { text: "ちかい", correct: false },
                { text: "おもい", correct: false }
            ]
        },
        {
            question: "赤い",
            answers: [
                { text: "あかい", correct: true },
                { text: "あおい", correct: false },
                { text: "あかちゃん", correct: false },
                { text: "からい", correct: false }
            ]
        },
        {
            question: "母",
            answers: [
                { text: "はは", correct: true },
                { text: "ちち", correct: false },
                { text: "りょうしん", correct: false },
                { text: "つま", correct: false }
            ]
        },
        {
            question: "父",
            answers: [
                { text: "ちち", correct: true },
                { text: "おとこ", correct: false },
                { text: "あに", correct: false },
                { text: "あね", correct: false }
            ]
        },
        {
            question: "百",
            answers: [
                { text: "ひゃく", correct: true },
                { text: "しろい", correct: false },
                { text: "まい", correct: false },
                { text: "あかい", correct: false }
            ]
        },
        {
            question: "字",
            answers: [
                { text: "じ", correct: true },
                { text: "がく", correct: false },
                { text: "がっこう", correct: false },
                { text: "だいがく", correct: false }
            ]
        },
        {
            question: "犬",
            answers: [
                { text: "いぬ", correct: true },
                { text: "ねこ", correct: false },
                { text: "うま", correct: false },
                { text: "とり", correct: false }
            ]
        },
        {
            question: "猫",
            answers: [
                { text: "ねこ", correct: true },
                { text: "ぶた", correct: false },
                { text: "とり", correct: false },
                { text: "かく", correct: false }
            ]
        },
        {
            question: "豚",
            answers: [
                { text: "ぶた", correct: true },
                { text: "うち", correct: false },
                { text: "かぞく", correct: false },
                { text: "きょうだい", correct: false }
            ]
        },
        {
            question: "両親",
            answers: [
                { text: "りょうしん", correct: true },
                { text: "おとこ", correct: false },
                { text: "あに", correct: false },
                { text: "きょうだい", correct: false }
            ]
        },
        {
            question: "馬",
            answers: [
                { text: "うま", correct: true },
                { text: "しま", correct: false },
                { text: "ねこ", correct: false },
                { text: "ぶた", correct: false }
            ]
        },
        {
            question: "鳥",
            answers: [
                { text: "とり", correct: true },
                { text: "しま", correct: false },
                { text: "ぶた", correct: false },
                { text: "ねこ", correct: false }
            ]
        },
        {
            question: "大人",
            answers: [
                { text: "おとな", correct: true },
                { text: "だいじん", correct: false },
                { text: "たいにん", correct: false },
                { text: "たいひと", correct: false }
            ]
        },
        {
            question: "海",
            answers: [
                { text: "うみ", correct: true },
                { text: "まいにち", correct: false },
                { text: "あさ", correct: false },
                { text: "いる", correct: false }
            ]
        },
        {
            question: "雪",
            answers: [
                { text: "ゆき", correct: true },
                { text: "あめ", correct: false },
                { text: "ふゆ", correct: false },
                { text: "くも", correct: false }
            ]
        },
        {
            question: "知る",
            answers: [
                { text: "しる", correct: true },
                { text: "ある", correct: false },
                { text: "きる", correct: false },
                { text: "する", correct: false }
            ]
        },
        {
            question: "消す",
            answers: [
                { text: "けす", correct: true },
                { text: "いす", correct: false },
                { text: "なおす", correct: false },
                { text: "むす", correct: false }
            ]
        },
        {
            question: "借りる",
            answers: [
                { text: "かりる", correct: true },
                { text: "たりる", correct: false },
                { text: "とまりる", correct: false },
                { text: "はいる", correct: false }
            ]
        },
    ],

    12: [
        {
            question: "木",
            answers: [
                { text: "き", correct: true },
                { text: "からだ", correct: false },
                { text: "やすみ", correct: false },
                { text: "つち", correct: false }
            ]
        },
        {
            question: "本",
            answers: [
                { text: "ほん", correct: true },
                { text: "からだ", correct: false },
                { text: "ちかい", correct: false },
                { text: "あかい", correct: false }
            ]
        },
        {
            question: "毎",
            answers: [
                { text: "まい", correct: true },
                { text: "あさ", correct: false },
                { text: "うみ", correct: false },
                { text: "ふね", correct: false }
            ]
        },
        {
            question: "来る",
            answers: [
                { text: "くる", correct: true },
                { text: "きる", correct: false },
                { text: "とまる", correct: false },
                { text: "する", correct: false }
            ]
        },
        {
            question: "友達",
            answers: [
                { text: "ともだち", correct: true },
                { text: "おとこ", correct: false },
                { text: "あに", correct: false },
                { text: "ちかい", correct: false }
            ]
        },
        {
            question: "目",
            answers: [
                { text: "め", correct: true },
                { text: "しろ", correct: false },
                { text: "じぶん", correct: false },
                { text: "にち", correct: false }
            ]
        },
        {
            question: "島",
            answers: [
                { text: "しま", correct: true },
                { text: "とり", correct: false },
                { text: "あに", correct: false },
                { text: "あね", correct: false }
            ]
        },
        {
            question: "自分",
            answers: [
                { text: "じぶん", correct: true },
                { text: "しろい", correct: false },
                { text: "わかる", correct: false },
                { text: "とおり", correct: false }
            ]
        },
        {
            question: "力",
            answers: [
                { text: "ちから", correct: true },
                { text: "つよい", correct: false },
                { text: "よわい", correct: false },
                { text: "みち", correct: false }
            ]
        },
        {
            question: "ご飯",
            answers: [
                { text: "ごはん", correct: true },
                { text: "ごしゅじん", correct: false },
                { text: "あさ", correct: false },
                { text: "ごちゅうもん", correct: false }
            ]
        },
        {
            question: "卵",
            answers: [
                { text: "たまご", correct: true },
                { text: "ふね", correct: false },
                { text: "はは", correct: false },
                { text: "あね", correct: false }
            ]
        },
        {
            question: "冷たい",
            answers: [
                { text: "つめたい", correct: true },
                { text: "さむい", correct: false },
                { text: "あつい", correct: false },
                { text: "たべたい", correct: false }
            ]
        },
        {
            question: "寒い",
            answers: [
                { text: "さむい", correct: true },
                { text: "からい", correct: false },
                { text: "あつい", correct: false },
                { text: "たべたい", correct: false }
            ]
        },
        {
            question: "暑い",
            answers: [
                { text: "あつい", correct: true },
                { text: "たかい", correct: false },
                { text: "ちかい", correct: false },
                { text: "みじかい", correct: false }
            ]
        },
        {
            question: "空気",
            answers: [
                { text: "くうき", correct: true },
                { text: "でんき", correct: false },
                { text: "そら", correct: false },
                { text: "げんき", correct: false }
            ]
        },
        {
            question: "お皿",
            answers: [
                { text: "おさら", correct: true },
                { text: "おちゃわん", correct: false },
                { text: "おみやげ", correct: false },
                { text: "おさけ", correct: false }
            ]
        },
        {
            question: "貸す",
            answers: [
                { text: "かす", correct: true },
                { text: "かりる", correct: false },
                { text: "おす", correct: false },
                { text: "いす", correct: false }
            ]
        },
        {
            question: "返す",
            answers: [
                { text: "かえす", correct: true },
                { text: "いす", correct: false },
                { text: "おす", correct: false },
                { text: "すす", correct: false }
            ]
        },
    ]
};

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const incorrectElement = document.getElementById('incorrect');
const maxScoreElement = document.getElementById('max-score');
const levelContainer = document.getElementById('level-container');
const quizContainer = document.getElementById('quiz-container');

let shuffledQuestions, currentQuestionIndex, currentLevel;
let score, incorrect;

function showLevelSelection() {
    levelContainer.classList.remove('hidden');
    scoreContainer.classList.add('hidden');
    quizContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
}

function startLevel(level) {
    currentLevel = level;
    shuffledQuestions = levels[level].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    incorrect = 0;
    nextButton.classList.add('hidden');
    scoreContainer.classList.add('hidden');
    levelContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    const levelInfo = document.getElementById('level-info');
    levelInfo.textContent = `Kanji ${currentLevel}`; // Menampilkan informasi babak
    questionContainer.textContent = question.question; // Menampilkan pertanyaan
    answerButtons.innerHTML = '';
    
    // Mengacak urutan jawaban
    const shuffledAnswers = question.answers.sort(() => Math.random() - 0.5);
    
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btnn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}




function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
        selectedButton.classList.add('correct');
        score += 5; // 1 soal bernilai 5 poin
    } else {
        selectedButton.classList.add('incorrect');
        // Menemukan tombol dengan jawaban yang benar dan mewarnainya hijau
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add('correct');
            }
        });
        incorrect += 1;
    }
    // Menonaktifkan semua tombol jawaban setelah dipilih
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hidden');
    } else {
        setTimeout(showScore, 1000); // Menampilkan skor setelah jeda 1 detik
    }
}



function showScore() {
    questionContainer.textContent = '';
    answerButtons.innerHTML = '';
    const totalQuestions = shuffledQuestions.length;
    const maxScore = totalQuestions * 5;
    scoreElement.textContent = `Skor Anda: ${score}/${maxScore}`;
    incorrectElement.textContent = `Jawaban Salah: ${incorrect}/${totalQuestions}`;
    maxScoreElement.textContent = `Poin Tertinggi yang Bisa Diperoleh: ${maxScore}`;
    scoreContainer.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    nextButton.classList.add('hidden');
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function backToLevels() {
    showLevelSelection();
}

nextButton.addEventListener('click', () => {
    nextQuestion();
});

document.addEventListener('DOMContentLoaded', () => {
    showLevelSelection();
});
