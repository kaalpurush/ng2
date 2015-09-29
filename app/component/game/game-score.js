var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var game_info_1 = require('./game-info');
var progressbar_1 = require('../vendor/progressbar/progressbar');
var GameScore = (function () {
    function GameScore(gameInfo) {
        this.gameInfo = gameInfo;
    }
    GameScore = __decorate([
        angular2_1.Component({
            selector: 'game-score'
        }),
        angular2_1.View({
            templateUrl: './app/component/game/game-score.html',
            directives: [progressbar_1.Progressbar, angular2_1.NgFor],
        }),
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [game_info_1.GameInfo])
    ], GameScore);
    return GameScore;
})();
exports.GameScore = GameScore;
//# sourceMappingURL=game-score.js.map