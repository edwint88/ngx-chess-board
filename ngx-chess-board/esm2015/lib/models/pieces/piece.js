/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/piece.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class Piece {
    /**
     * @param {?} point
     * @param {?} color
     * @param {?} constant
     * @param {?} relValue
     * @param {?} board
     */
    constructor(point, color, constant, relValue, board) {
        this.checkPoints = [];
        this.color = color;
        this.constant = constant;
        this.point = point;
        this.relValue = relValue;
        this.board = board;
    }
}
if (false) {
    /** @type {?} */
    Piece.prototype.point;
    /** @type {?} */
    Piece.prototype.color;
    /** @type {?} */
    Piece.prototype.constant;
    /** @type {?} */
    Piece.prototype.checkPoints;
    /** @type {?} */
    Piece.prototype.relValue;
    /** @type {?} */
    Piece.prototype.board;
    /**
     * @abstract
     * @return {?}
     */
    Piece.prototype.getPossibleMoves = function () { };
    /**
     * @abstract
     * @return {?}
     */
    Piece.prototype.getPossibleCaptures = function () { };
    /**
     * @abstract
     * @return {?}
     */
    Piece.prototype.getCoveredFields = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hlc3MtYm9hcmQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL3BpZWNlcy9waWVjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU1BLE1BQU0sT0FBZ0IsS0FBSzs7Ozs7Ozs7SUFRdkIsWUFDSSxLQUFZLEVBQ1osS0FBWSxFQUNaLFFBQXVCLEVBQ3ZCLFFBQWdCLEVBQ2hCLEtBQVk7UUFUaEIsZ0JBQVcsR0FBWSxFQUFFLENBQUM7UUFXdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztDQU9KOzs7SUExQkcsc0JBQWE7O0lBQ2Isc0JBQWE7O0lBQ2IseUJBQXdCOztJQUN4Qiw0QkFBMEI7O0lBQzFCLHlCQUFpQjs7SUFDakIsc0JBQWE7Ozs7O0lBZ0JiLG1EQUFxQzs7Ozs7SUFFckMsc0RBQXdDOzs7OztJQUV4QyxtREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdFBpZWNlIH0gZnJvbSAnLi4vLi4vcGllY2UtZGVjb3JhdG9yL2Fic3RyYWN0LXBpZWNlJztcclxuaW1wb3J0IHsgUGllY2VDb25zdGFudCB9IGZyb20gJy4uLy4uL3V0aWxzL3VuaWNvZGUtY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuLi9ib2FyZCc7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9jb2xvcic7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wb2ludCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGllY2UgaW1wbGVtZW50cyBBYnN0cmFjdFBpZWNlIHtcclxuICAgIHBvaW50OiBQb2ludDtcclxuICAgIGNvbG9yOiBDb2xvcjtcclxuICAgIGNvbnN0YW50OiBQaWVjZUNvbnN0YW50O1xyXG4gICAgY2hlY2tQb2ludHM6IFBvaW50W10gPSBbXTtcclxuICAgIHJlbFZhbHVlOiBudW1iZXI7XHJcbiAgICBib2FyZDogQm9hcmQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcG9pbnQ6IFBvaW50LFxyXG4gICAgICAgIGNvbG9yOiBDb2xvcixcclxuICAgICAgICBjb25zdGFudDogUGllY2VDb25zdGFudCxcclxuICAgICAgICByZWxWYWx1ZTogbnVtYmVyLFxyXG4gICAgICAgIGJvYXJkOiBCb2FyZFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29uc3RhbnQgPSBjb25zdGFudDtcclxuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XHJcbiAgICAgICAgdGhpcy5yZWxWYWx1ZSA9IHJlbFZhbHVlO1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBnZXRQb3NzaWJsZU1vdmVzKCk6IFBvaW50W107XHJcblxyXG4gICAgYWJzdHJhY3QgZ2V0UG9zc2libGVDYXB0dXJlcygpOiBQb2ludFtdO1xyXG5cclxuICAgIGFic3RyYWN0IGdldENvdmVyZWRGaWVsZHMoKTogUG9pbnRbXTsgLy8gendyYWNhIGxpc3RlIHB1bmt0b3cga3RvcmUgc2EgcHVzdGUgbHViIGlzdG5pZWplIG5hIG5pY2ggcGlvbmVrIHRlZ28gc2FtZWdvIGtvbG9ydVxyXG59XHJcbiJdfQ==