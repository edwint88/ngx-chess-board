/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/piece.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
Piece = /** @class */ (function () {
    function Piece(point, color, constant, relValue, board) {
        this.checkPoints = [];
        this.color = color;
        this.constant = constant;
        this.point = point;
        this.relValue = relValue;
        this.board = board;
    }
    return Piece;
}());
/**
 * @abstract
 */
export { Piece };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hlc3MtYm9hcmQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL3BpZWNlcy9waWVjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU1BOzs7O0lBUUksZUFDSSxLQUFZLEVBQ1osS0FBWSxFQUNaLFFBQXVCLEVBQ3ZCLFFBQWdCLEVBQ2hCLEtBQVk7UUFUaEIsZ0JBQVcsR0FBWSxFQUFFLENBQUM7UUFXdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQU9MLFlBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDOzs7Ozs7O0lBMUJHLHNCQUFhOztJQUNiLHNCQUFhOztJQUNiLHlCQUF3Qjs7SUFDeEIsNEJBQTBCOztJQUMxQix5QkFBaUI7O0lBQ2pCLHNCQUFhOzs7OztJQWdCYixtREFBcUM7Ozs7O0lBRXJDLHNEQUF3Qzs7Ozs7SUFFeEMsbURBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RQaWVjZSB9IGZyb20gJy4uLy4uL3BpZWNlLWRlY29yYXRvci9hYnN0cmFjdC1waWVjZSc7XHJcbmltcG9ydCB7IFBpZWNlQ29uc3RhbnQgfSBmcm9tICcuLi8uLi91dGlscy91bmljb2RlLWNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi4vYm9hcmQnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4vY29sb3InO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcG9pbnQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBpZWNlIGltcGxlbWVudHMgQWJzdHJhY3RQaWVjZSB7XHJcbiAgICBwb2ludDogUG9pbnQ7XHJcbiAgICBjb2xvcjogQ29sb3I7XHJcbiAgICBjb25zdGFudDogUGllY2VDb25zdGFudDtcclxuICAgIGNoZWNrUG9pbnRzOiBQb2ludFtdID0gW107XHJcbiAgICByZWxWYWx1ZTogbnVtYmVyO1xyXG4gICAgYm9hcmQ6IEJvYXJkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHBvaW50OiBQb2ludCxcclxuICAgICAgICBjb2xvcjogQ29sb3IsXHJcbiAgICAgICAgY29uc3RhbnQ6IFBpZWNlQ29uc3RhbnQsXHJcbiAgICAgICAgcmVsVmFsdWU6IG51bWJlcixcclxuICAgICAgICBib2FyZDogQm9hcmRcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnN0YW50ID0gY29uc3RhbnQ7XHJcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xyXG4gICAgICAgIHRoaXMucmVsVmFsdWUgPSByZWxWYWx1ZTtcclxuICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgZ2V0UG9zc2libGVNb3ZlcygpOiBQb2ludFtdO1xyXG5cclxuICAgIGFic3RyYWN0IGdldFBvc3NpYmxlQ2FwdHVyZXMoKTogUG9pbnRbXTtcclxuXHJcbiAgICBhYnN0cmFjdCBnZXRDb3ZlcmVkRmllbGRzKCk6IFBvaW50W107IC8vIHp3cmFjYSBsaXN0ZSBwdW5rdG93IGt0b3JlIHNhIHB1c3RlIGx1YiBpc3RuaWVqZSBuYSBuaWNoIHBpb25layB0ZWdvIHNhbWVnbyBrb2xvcnVcclxufVxyXG4iXX0=