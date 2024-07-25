"use strict";

PetiteVue.createApp({
  currentStep: 1,
  currentYear: new Date().getFullYear(),
  formData: { keiken: "", todofuken: "", year: "", month: "", date: "" },
  todofuken: [
    { kbn: "北海道/東北", value: "北海道" },
    { kbn: "北海道/東北", value: "青森県" },
    { kbn: "北海道/東北", value: "岩手県" },
    { kbn: "北海道/東北", value: "宮城県" },
    { kbn: "北海道/東北", value: "秋田県" },
    { kbn: "北海道/東北", value: "山形県" },
    { kbn: "北海道/東北", value: "福島県" },
    { kbn: "関東", value: "茨城県" },
    { kbn: "関東", value: "栃木県" },
    { kbn: "関東", value: "群馬県" },
    { kbn: "関東", value: "埼玉県" },
    { kbn: "関東", value: "千葉県" },
    { kbn: "関東", value: "東京都" },
    { kbn: "関東", value: "神奈川県" },
    { kbn: "上信越/北陸", value: "新潟県" },
    { kbn: "上信越/北陸", value: "富山県" },
    { kbn: "上信越/北陸", value: "石川県" },
    { kbn: "上信越/北陸", value: "福井県" },
    { kbn: "上信越/北陸", value: "山梨県" },
    { kbn: "上信越/北陸", value: "長野県" },
    { kbn: "東海", value: "岐阜県" },
    { kbn: "東海", value: "静岡県" },
    { kbn: "東海", value: "愛知県" },
    { kbn: "東海", value: "三重県" },
    { kbn: "関西", value: "滋賀県" },
    { kbn: "関西", value: "京都府" },
    { kbn: "関西", value: "大阪府" },
    { kbn: "関西", value: "兵庫県" },
    { kbn: "関西", value: "奈良県" },
    { kbn: "関西", value: "和歌山県" },
    { kbn: "中国", value: "鳥取県" },
    { kbn: "中国", value: "島根県" },
    { kbn: "中国", value: "岡山県" },
    { kbn: "中国", value: "広島県" },
    { kbn: "中国", value: "山口県" },
    { kbn: "四国", value: "徳島県" },
    { kbn: "四国", value: "香川県" },
    { kbn: "四国", value: "愛媛県" },
    { kbn: "四国", value: "高知県" },
    { kbn: "九州/沖縄", value: "福岡県" },
    { kbn: "九州/沖縄", value: "佐賀県" },
    { kbn: "九州/沖縄", value: "長崎県" },
    { kbn: "九州/沖縄", value: "熊本県" },
    { kbn: "九州/沖縄", value: "大分県" },
    { kbn: "九州/沖縄", value: "宮崎県" },
    { kbn: "九州/沖縄", value: "鹿児島県" },
    { kbn: "九州/沖縄", value: "沖縄県" },
    { kbn: "海外", value: "その他（国外）" },
  ],

  init() {
    // アプリケーション起動時に行いたい処理
    this.formData["todofuken"] = "東京都";
    this.formData["year"] = this.currentYear - 30;
    this.formData["month"] = "1";
    this.formData["date"] = "1";
  },

  get todofukenUnique() {
    const uniqueObjects = this.todofuken.map((object) => object.kbn);
    return [...new Set(uniqueObjects)];
  },

  get yearSelectBox() {
    const yearsArray = [];
    for (let i = this.currentYear - 80; i <= this.currentYear; i++) {
      yearsArray.push(i);
    }
    return yearsArray;
  },

  todofukenArray(kbn) {
    return this.todofuken.filter((e) => e.kbn == kbn);
  },

  setFormData(kbn, val) {
    console.log(val);
    this.formData[kbn] = val;
  },
}).mount();
