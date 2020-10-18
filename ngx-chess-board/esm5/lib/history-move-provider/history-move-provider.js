/**
 * @fileoverview added by tsickle
 * Generated from: lib/history-move-provider/history-move-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject } from 'rxjs';
var HistoryMoveProvider = /** @class */ (function () {
    function HistoryMoveProvider() {
        this.historyMovesSubject$ = new BehaviorSubject([]);
    }
    Object.defineProperty(HistoryMoveProvider.prototype, "historyMoves", {
        get: /**
         * @return {?}
         */
        function () {
            return this.historyMovesSubject$.value;
        },
        set: /**
         * @param {?} states
         * @return {?}
         */
        function (states) {
            this.historyMovesSubject$.next(states);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} historyMove
     * @return {?}
     */
    HistoryMoveProvider.prototype.addMove = /**
     * @param {?} historyMove
     * @return {?}
     */
    function (historyMove) {
        this.historyMoves = tslib_1.__spread(this.historyMoves, [historyMove]);
    };
    /**
     * @return {?}
     */
    HistoryMoveProvider.prototype.pop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var lastHistoryMove = this.getLastMove();
        this.historyMoves = this.historyMoves.filter((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state !== lastHistoryMove; }));
        return lastHistoryMove;
    };
    /**
     * @return {?}
     */
    HistoryMoveProvider.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return this.historyMoves;
    };
    /**
     * @return {?}
     */
    HistoryMoveProvider.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.historyMoves = [];
    };
    /**
     * @return {?}
     */
    HistoryMoveProvider.prototype.getLastMove = /**
     * @return {?}
     */
    function () {
        return this.historyMoves[this.getLastMoveIndex()];
    };
    /**
     * @return {?}
     */
    HistoryMoveProvider.prototype.getLastMoveIndex = /**
     * @return {?}
     */
    function () {
        return this.historyMoves.length - 1;
    };
    return HistoryMoveProvider;
}());
export { HistoryMoveProvider };
if (false) {
    /** @type {?} */
    HistoryMoveProvider.prototype.historyMovesSubject$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS1tb3ZlLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoZXNzLWJvYXJkLyIsInNvdXJjZXMiOlsibGliL2hpc3RvcnktbW92ZS1wcm92aWRlci9oaXN0b3J5LW1vdmUtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd2QztJQUFBO1FBQ0kseUJBQW9CLEdBQUcsSUFBSSxlQUFlLENBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBcUNsRSxDQUFDO0lBbkNHLHNCQUFJLDZDQUFZOzs7O1FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDO1FBQzNDLENBQUM7Ozs7O1FBRUQsVUFBaUIsTUFBcUI7WUFDbEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDOzs7T0FKQTs7Ozs7SUFNRCxxQ0FBTzs7OztJQUFQLFVBQVEsV0FBd0I7UUFDNUIsSUFBSSxDQUFDLFlBQVksb0JBQU8sSUFBSSxDQUFDLFlBQVksR0FBRSxXQUFXLEVBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsaUNBQUc7OztJQUFIOztZQUNVLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNOzs7O1FBQ3hDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxLQUFLLGVBQWUsRUFBekIsQ0FBeUIsRUFDdkMsQ0FBQztRQUNGLE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxvQ0FBTTs7O0lBQU47UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELG1DQUFLOzs7SUFBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQsOENBQWdCOzs7SUFBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBdENELElBc0NDOzs7O0lBckNHLG1EQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIaXN0b3J5TW92ZSB9IGZyb20gJy4vaGlzdG9yeS1tb3ZlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIaXN0b3J5TW92ZVByb3ZpZGVyIHtcclxuICAgIGhpc3RvcnlNb3Zlc1N1YmplY3QkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxIaXN0b3J5TW92ZVtdPihbXSk7XHJcblxyXG4gICAgZ2V0IGhpc3RvcnlNb3ZlcygpOiBIaXN0b3J5TW92ZVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oaXN0b3J5TW92ZXNTdWJqZWN0JC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGlzdG9yeU1vdmVzKHN0YXRlczogSGlzdG9yeU1vdmVbXSkge1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeU1vdmVzU3ViamVjdCQubmV4dChzdGF0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE1vdmUoaGlzdG9yeU1vdmU6IEhpc3RvcnlNb3ZlKSB7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5TW92ZXMgPSBbLi4udGhpcy5oaXN0b3J5TW92ZXMsIGhpc3RvcnlNb3ZlXTtcclxuICAgIH1cclxuXHJcbiAgICBwb3AoKTogSGlzdG9yeU1vdmUge1xyXG4gICAgICAgIGNvbnN0IGxhc3RIaXN0b3J5TW92ZSA9IHRoaXMuZ2V0TGFzdE1vdmUoKTtcclxuICAgICAgICB0aGlzLmhpc3RvcnlNb3ZlcyA9IHRoaXMuaGlzdG9yeU1vdmVzLmZpbHRlcihcclxuICAgICAgICAgICAgKHN0YXRlKSA9PiBzdGF0ZSAhPT0gbGFzdEhpc3RvcnlNb3ZlXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gbGFzdEhpc3RvcnlNb3ZlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oaXN0b3J5TW92ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5TW92ZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0TW92ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oaXN0b3J5TW92ZXNbdGhpcy5nZXRMYXN0TW92ZUluZGV4KCldO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RNb3ZlSW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlzdG9yeU1vdmVzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcbn1cclxuIl19