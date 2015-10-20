var Alphabet = (function () {
    function Alphabet() {
    }
    Alphabet.get = function (index, position) {
        if (typeof this.alphabets[index - 1][position] === 'undefined')
            return this.alphabets[index - 1][2];
        return this.alphabets[index - 1][position];
    };
    Alphabet.getAll = function (position) {
        return this.alphabets.map(function (v) { return v.slice(position, position + 1).reduce(function (v) { return v; }); });
    };
    Alphabet.getLetter = function (index, position) {
        return this.get(index, position).letter;
    };
    Alphabet.getAllLetters = function (position) {
        return this.getAll(position).map(function (v) { return v.letter; });
    };
    Alphabet.getPositions = function (index) {
        return this.alphabets[index - 1];
    };
    Alphabet.getIndexForCode = function (code) {
        var result = null;
        this.alphabets.every(function (f, i) {
            f.every(function (s) {
                if (s.code == code) {
                    result = i;
                    return false;
                }
                return true;
            });
            if (result)
                return false;
            return true;
        });
        return result;
    };
    Alphabet.getRandomExcept = function (count, index) {
        var alphabets = this.alphabets.filter(function (v, i) { return index.indexOf(i) < 0; });
        var random = this.randomDistinct(count, alphabets.length);
        return alphabets.filter(function (v, i) {
            return random.indexOf(i) > -1;
        });
    };
    Alphabet.random = function (array) {
        return array[Math.floor(Math.random() * array.length)];
    };
    Alphabet.randomDistinct = function (count, to, from) {
        if (to === void 0) { to = 20; }
        if (from === void 0) { from = 0; }
        var random = [];
        if (to - from < count)
            return null;
        while (random.length < count) {
            var n = Math.floor(Math.random() * (to - from)) + from;
            if (random.indexOf(n) < 0)
                random.push(n);
        }
        return random;
    };
    Alphabet.POSITION = { SELF: 0, ISOLATED: 1, END: 2, MIDDLE: 3, START: 4 };
    Alphabet.alphabets = [
        [{ "code": "0623", "letter": "أ" }, { "code": "FE83", "letter": "أ" }, { "code": "FE84", "letter": "ـأ‎" }],
        [{ "code": "0628", "letter": "ب" }, { "code": "FE8F", "letter": "ﺏ" }, { "code": "FE90", "letter": "ـب" }, { "code": "FE92", "letter": "ـبـ" }, { "code": "FE91", "letter": "بـ" }],
        [{ "code": "062A", "letter": "ت" }, { "code": "FE95", "letter": "ﺕ" }, { "code": "FE96", "letter": "ـت" }, { "code": "FE98", "letter": "ـتـ‎" }, { "code": "FE97", "letter": "تـ‎" }],
        [{ "code": "062B", "letter": "ث" }, { "code": "FE99", "letter": "ﺙ" }, { "code": "FE9A", "letter": "ـث" }, { "code": "FE9C", "letter": "ـثـ‎" }, { "code": "FE9B", "letter": "ثـ‎" }],
        [{ "code": "062C", "letter": "ج" }, { "code": "FE9D", "letter": "ﺝ" }, { "code": "FE9E", "letter": "ـج" }, { "code": "FEA0", "letter": "ـجـ" }, { "code": "FE9F", "letter": "جـ‎" }],
        [{ "code": "062D", "letter": "ح" }, { "code": "FEA1", "letter": "ﺡ" }, { "code": "FEA2", "letter": "ـح‎" }, { "code": "FEA4", "letter": "ـحـ" }, { "code": "FEA3", "letter": "حـ" }],
        [{ "code": "062E", "letter": "خ" }, { "code": "FEA5", "letter": "ﺥ" }, { "code": "FEA6", "letter": "ـخ‎" }, { "code": "FEA8", "letter": "ـخـ" }, { "code": "FEA7", "letter": "خـ‎" }],
        [{ "code": "062F", "letter": "د" }, { "code": "FEA9", "letter": "ﺩ" }, { "code": "FEAA", "letter": "ـد" }],
        [{ "code": "0630", "letter": "ذ" }, { "code": "FEAB", "letter": "ﺫ‎" }, { "code": "FEAC", "letter": "ـذ" }],
        [{ "code": "0631", "letter": "ر" }, { "code": "FEAD", "letter": "ﺭ" }, { "code": "FEAE", "letter": "ـر‎" }],
        [{ "code": "0632", "letter": "ز" }, { "code": "FEAF", "letter": "ﺯ‎" }, { "code": "FEB0", "letter": "ـز" }],
        [{ "code": "0633", "letter": "س" }, { "code": "FEB1", "letter": "ﺱ" }, { "code": "FEB2", "letter": "ـس" }, { "code": "FEB4", "letter": "ـسـ" }, { "code": "FEB3", "letter": "سـ" }],
        [{ "code": "0634", "letter": "ش" }, { "code": "FEB5", "letter": "ﺵ" }, { "code": "FEB6", "letter": "ـش‎" }, { "code": "FEB8", "letter": "ـشـ‎" }, { "code": "FEB7", "letter": "شـ‎" }],
        [{ "code": "0635", "letter": "ص" }, { "code": "FEB9", "letter": "ﺹ" }, { "code": "FEBA", "letter": "ـص" }, { "code": "FEBC", "letter": "ـصـ" }, { "code": "FEBB", "letter": "صـ" }],
        [{ "code": "0636", "letter": "ض" }, { "code": "FEBD", "letter": "ﺽ" }, { "code": "FEBE", "letter": "ـض" }, { "code": "FEC0", "letter": "ـضـ‎" }, { "code": "FEBF", "letter": "ضـ‎" }],
        [{ "code": "0637", "letter": "ط" }, { "code": "FEC1", "letter": "ﻁ" }, { "code": "FEC2", "letter": "ـط" }, { "code": "FEC4", "letter": "ـطـ" }, { "code": "FEC3", "letter": "طـ" }],
        [{ "code": "0638", "letter": "ظ" }, { "code": "FEC5", "letter": "ﻅ" }, { "code": "FEC6", "letter": "ـظ" }, { "code": "FEC8", "letter": "ـظـ" }, { "code": "FEC7", "letter": "ظـ" }],
        [{ "code": "0639", "letter": "ع" }, { "code": "FEC9", "letter": "ﻉ" }, { "code": "FECA", "letter": "ـع" }, { "code": "FECC", "letter": "ـعـ‎" }, { "code": "FECB", "letter": "عـ" }],
        [{ "code": "063A", "letter": "غ‎" }, { "code": "FECD", "letter": "ﻍ" }, { "code": "FECE", "letter": "ـغ" }, { "code": "FED0", "letter": "ـغـ" }, { "code": "FECF", "letter": "غـ" }],
        [{ "code": "0641", "letter": "ف" }, { "code": "FED1", "letter": "ف‎" }, { "code": "FED2", "letter": "ـف" }, { "code": "FED4", "letter": "ـفـ" }, { "code": "FED3", "letter": "فـ‎" }],
        [{ "code": "0642", "letter": "ق‎" }, { "code": "FED5", "letter": "ﻕ‎" }, { "code": "FED6", "letter": "ـق" }, { "code": "FED8", "letter": "ـقـ" }, { "code": "FED7", "letter": "قـ" }],
        [{ "code": "0643", "letter": "ك" }, { "code": "FED9", "letter": "ﻙ" }, { "code": "FEDA", "letter": "ـك" }, { "code": "FEDC", "letter": "ـكـ" }, { "code": "FEDB", "letter": "كـ" }],
        [{ "code": "0644", "letter": "ل‎" }, { "code": "FEDD", "letter": "ﻝ" }, { "code": "FEDE", "letter": "ـل" }, { "code": "FEE0", "letter": "ـلـ" }, { "code": "FEDF", "letter": "لـ" }],
        [{ "code": "0645", "letter": "م" }, { "code": "FEE1", "letter": "ﻡ" }, { "code": "FEE2", "letter": "ـم" }, { "code": "FEE4", "letter": "ـمـ‎" }, { "code": "FEE3", "letter": "مـ" }],
        [{ "code": "0646", "letter": "ن‎" }, { "code": "FEE5", "letter": "ن‎" }, { "code": "FEE6", "letter": "ـن" }, { "code": "FEE8", "letter": "ـنـ" }, { "code": "FEE7", "letter": "نـ‎" }],
        [{ "code": "0648", "letter": "و‎" }, { "code": "FEED", "letter": "ﻭ" }, { "code": "FEEE", "letter": "ـو" }],
        [{ "code": "0647", "letter": "ﻫ" }, { "code": "FEE9", "letter": "ﻩ" }, { "code": "FEEA", "letter": "ـه‎" }, { "code": "FEEC", "letter": "ـهـ" }, { "code": "FEEB", "letter": "هـ" }],
        [{ "code": "0622", "letter": "آ" }, { "code": "FE81", "letter": "ﺁ" }, { "code": "FE82", "letter": "ـآ‎" }],
        [{ "code": "064A", "letter": "ي" }, { "code": "FEF1", "letter": "ﻱ" }, { "code": "FEF2", "letter": "ـي" }, { "code": "FEF4", "letter": "ـيـ" }, { "code": "FEF3", "letter": "يـ‎" }],
        [{ "code": "0629", "letter": "ة" }, { "code": "FE93", "letter": "ﺓ" }, { "code": "FE94", "letter": "ـة‎" }],
        [{ "code": "0649", "letter": "ى" }, { "code": "FEEF", "letter": "ﻯ" }, { "code": "FEF0", "letter": "ـى" }]
    ];
    return Alphabet;
})();
exports.Alphabet = Alphabet;
//# sourceMappingURL=alphabet.js.map