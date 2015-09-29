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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var game_canvas_1 = require('./game-canvas');
var game_info_1 = require('./game-info');
var game_score_1 = require('./game-score');
var GameCenter = (function () {
    function GameCenter(gameInfo, searchComponents) {
        this.gameInfo = gameInfo;
        this.searchComponents = searchComponents;
        this.nextquestion = new angular2_1.EventEmitter();
    }
    GameCenter.prototype.onInit = function () {
        this.gameCanvas = this.searchComponents.first;
        this.gameInfo.startedAt = new Date();
        this.gameInfo.totalQuestion = 5;
    };
    GameCenter.prototype.nextQuestion = function () {
        this.gameCanvas.nextQuestion();
    };
    GameCenter.prototype.nextLevel = function () {
        this.gameCanvas.nextLevel();
    };
    GameCenter = __decorate([
        angular2_1.Component({
            selector: 'game-center',
            properties: ['type'],
        }),
        angular2_1.View({
            templateUrl: './app/component/game/game-center.html',
            directives: [angular2_1.bind(game_canvas_1.GameCanvas).toClass(game_canvas_1.GameCanvas), game_info_1.GameInfo, game_score_1.GameScore]
        }),
        __param(1, angular2_1.ViewQuery(game_canvas_1.GameCanvas)), 
        __metadata('design:paramtypes', [game_info_1.GameInfo, angular2_1.QueryList])
    ], GameCenter);
    return GameCenter;
})();
exports.GameCenter = GameCenter;
//# sourceMappingURL=game-center.js.map