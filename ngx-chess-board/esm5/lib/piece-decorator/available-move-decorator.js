/**
 * @fileoverview added by tsickle
 * Generated from: lib/piece-decorator/available-move-decorator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { MoveUtils } from '../utils/move-utils';
import { PieceAbstractDecorator } from './piece-abstract-decorator';
var AvailableMoveDecorator = /** @class */ (function (_super) {
    tslib_1.__extends(AvailableMoveDecorator, _super);
    function AvailableMoveDecorator(piece, pointClicked, color, board) {
        var _this = _super.call(this, piece) || this;
        _this.pointClicked = pointClicked;
        _this.color = color;
        _this.board = board;
        return _this;
    }
    /**
     * @return {?}
     */
    AvailableMoveDecorator.prototype.getPossibleCaptures = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.piece
            .getPossibleCaptures()
            .filter((/**
         * @param {?} point
         * @return {?}
         */
        function (point) {
            return !MoveUtils.willMoveCauseCheck(_this.color, _this.pointClicked.row, _this.pointClicked.col, point.row, point.col, _this.board);
        }));
    };
    /**
     * @return {?}
     */
    AvailableMoveDecorator.prototype.getPossibleMoves = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.piece
            .getPossibleMoves()
            .filter((/**
         * @param {?} point
         * @return {?}
         */
        function (point) {
            return !MoveUtils.willMoveCauseCheck(_this.color, _this.pointClicked.row, _this.pointClicked.col, point.row, point.col, _this.board);
        }));
    };
    return AvailableMoveDecorator;
}(PieceAbstractDecorator));
export { AvailableMoveDecorator };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AvailableMoveDecorator.prototype.pointClicked;
    /**
     * @type {?}
     * @private
     */
    AvailableMoveDecorator.prototype.color;
    /**
     * @type {?}
     * @private
     */
    AvailableMoveDecorator.prototype.board;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhaWxhYmxlLW1vdmUtZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoZXNzLWJvYXJkLyIsInNvdXJjZXMiOlsibGliL3BpZWNlLWRlY29yYXRvci9hdmFpbGFibGUtbW92ZS1kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWhELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXBFO0lBQTRDLGtEQUFzQjtJQUs5RCxnQ0FBWSxLQUFvQixFQUFFLFlBQW1CLEVBQUUsS0FBWSxFQUFFLEtBQVk7UUFBakYsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FJZjtRQUhHLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztJQUN2QixDQUFDOzs7O0lBRUQsb0RBQW1COzs7SUFBbkI7UUFBQSxpQkFjQztRQWJHLE9BQU8sSUFBSSxDQUFDLEtBQUs7YUFDWixtQkFBbUIsRUFBRTthQUNyQixNQUFNOzs7O1FBQ0gsVUFBQyxLQUFLO1lBQ0YsT0FBQSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FDekIsS0FBSSxDQUFDLEtBQUssRUFDVixLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFDckIsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQ3JCLEtBQUssQ0FBQyxHQUFHLEVBQ1QsS0FBSyxDQUFDLEdBQUcsRUFDVCxLQUFJLENBQUMsS0FBSyxDQUNiO1FBUEQsQ0FPQyxFQUNSLENBQUM7SUFDVixDQUFDOzs7O0lBRUQsaURBQWdCOzs7SUFBaEI7UUFBQSxpQkFjQztRQWJHLE9BQU8sSUFBSSxDQUFDLEtBQUs7YUFDWixnQkFBZ0IsRUFBRTthQUNsQixNQUFNOzs7O1FBQ0gsVUFBQyxLQUFLO1lBQ0YsT0FBQSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FDekIsS0FBSSxDQUFDLEtBQUssRUFDVixLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFDckIsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQ3JCLEtBQUssQ0FBQyxHQUFHLEVBQ1QsS0FBSyxDQUFDLEdBQUcsRUFDVCxLQUFJLENBQUMsS0FBSyxDQUNiO1FBUEQsQ0FPQyxFQUNSLENBQUM7SUFDVixDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBM0NELENBQTRDLHNCQUFzQixHQTJDakU7Ozs7Ozs7SUExQ0csOENBQTRCOzs7OztJQUM1Qix1Q0FBcUI7Ozs7O0lBQ3JCLHVDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi4vbW9kZWxzL2JvYXJkJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi9tb2RlbHMvcGllY2VzL2NvbG9yJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9tb2RlbHMvcGllY2VzL3BvaW50JztcclxuaW1wb3J0IHsgTW92ZVV0aWxzIH0gZnJvbSAnLi4vdXRpbHMvbW92ZS11dGlscyc7XHJcbmltcG9ydCB7IEFic3RyYWN0UGllY2UgfSBmcm9tICcuL2Fic3RyYWN0LXBpZWNlJztcclxuaW1wb3J0IHsgUGllY2VBYnN0cmFjdERlY29yYXRvciB9IGZyb20gJy4vcGllY2UtYWJzdHJhY3QtZGVjb3JhdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBdmFpbGFibGVNb3ZlRGVjb3JhdG9yIGV4dGVuZHMgUGllY2VBYnN0cmFjdERlY29yYXRvciB7XHJcbiAgICBwcml2YXRlIHBvaW50Q2xpY2tlZDogUG9pbnQ7XHJcbiAgICBwcml2YXRlIGNvbG9yOiBDb2xvcjtcclxuICAgIHByaXZhdGUgYm9hcmQ6IEJvYXJkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBpZWNlOiBBYnN0cmFjdFBpZWNlLCBwb2ludENsaWNrZWQ6IFBvaW50LCBjb2xvcjogQ29sb3IsIGJvYXJkOiBCb2FyZCkge1xyXG4gICAgICAgIHN1cGVyKHBpZWNlKTtcclxuICAgICAgICB0aGlzLnBvaW50Q2xpY2tlZCA9IHBvaW50Q2xpY2tlZDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvc3NpYmxlQ2FwdHVyZXMoKTogUG9pbnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGllY2VcclxuICAgICAgICAgICAgLmdldFBvc3NpYmxlQ2FwdHVyZXMoKVxyXG4gICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHBvaW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICFNb3ZlVXRpbHMud2lsbE1vdmVDYXVzZUNoZWNrKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvaW50Q2xpY2tlZC5yb3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9pbnRDbGlja2VkLmNvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQucm93LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludC5jb2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zc2libGVNb3ZlcygpOiBQb2ludFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWVjZVxyXG4gICAgICAgICAgICAuZ2V0UG9zc2libGVNb3ZlcygpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAocG9pbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgIU1vdmVVdGlscy53aWxsTW92ZUNhdXNlQ2hlY2soXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9pbnRDbGlja2VkLnJvdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludENsaWNrZWQuY29sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludC5yb3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50LmNvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=