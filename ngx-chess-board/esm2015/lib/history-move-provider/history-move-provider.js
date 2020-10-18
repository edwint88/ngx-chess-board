/**
 * @fileoverview added by tsickle
 * Generated from: lib/history-move-provider/history-move-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
export class HistoryMoveProvider {
    constructor() {
        this.historyMovesSubject$ = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    get historyMoves() {
        return this.historyMovesSubject$.value;
    }
    /**
     * @param {?} states
     * @return {?}
     */
    set historyMoves(states) {
        this.historyMovesSubject$.next(states);
    }
    /**
     * @param {?} historyMove
     * @return {?}
     */
    addMove(historyMove) {
        this.historyMoves = [...this.historyMoves, historyMove];
    }
    /**
     * @return {?}
     */
    pop() {
        /** @type {?} */
        const lastHistoryMove = this.getLastMove();
        this.historyMoves = this.historyMoves.filter((/**
         * @param {?} state
         * @return {?}
         */
        (state) => state !== lastHistoryMove));
        return lastHistoryMove;
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.historyMoves;
    }
    /**
     * @return {?}
     */
    clear() {
        this.historyMoves = [];
    }
    /**
     * @return {?}
     */
    getLastMove() {
        return this.historyMoves[this.getLastMoveIndex()];
    }
    /**
     * @return {?}
     */
    getLastMoveIndex() {
        return this.historyMoves.length - 1;
    }
}
if (false) {
    /** @type {?} */
    HistoryMoveProvider.prototype.historyMovesSubject$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS1tb3ZlLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoZXNzLWJvYXJkLyIsInNvdXJjZXMiOlsibGliL2hpc3RvcnktbW92ZS1wcm92aWRlci9oaXN0b3J5LW1vdmUtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3ZDLE1BQU0sT0FBTyxtQkFBbUI7SUFBaEM7UUFDSSx5QkFBb0IsR0FBRyxJQUFJLGVBQWUsQ0FBZ0IsRUFBRSxDQUFDLENBQUM7SUFxQ2xFLENBQUM7Ozs7SUFuQ0csSUFBSSxZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsSUFBSSxZQUFZLENBQUMsTUFBcUI7UUFDbEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxXQUF3QjtRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxHQUFHOztjQUNPLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNOzs7O1FBQ3hDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssZUFBZSxFQUN2QyxDQUFDO1FBQ0YsT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELE1BQU07UUFDRixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDWixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0o7OztJQXJDRyxtREFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSGlzdG9yeU1vdmUgfSBmcm9tICcuL2hpc3RvcnktbW92ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSGlzdG9yeU1vdmVQcm92aWRlciB7XHJcbiAgICBoaXN0b3J5TW92ZXNTdWJqZWN0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SGlzdG9yeU1vdmVbXT4oW10pO1xyXG5cclxuICAgIGdldCBoaXN0b3J5TW92ZXMoKTogSGlzdG9yeU1vdmVbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlzdG9yeU1vdmVzU3ViamVjdCQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhpc3RvcnlNb3ZlcyhzdGF0ZXM6IEhpc3RvcnlNb3ZlW10pIHtcclxuICAgICAgICB0aGlzLmhpc3RvcnlNb3Zlc1N1YmplY3QkLm5leHQoc3RhdGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRNb3ZlKGhpc3RvcnlNb3ZlOiBIaXN0b3J5TW92ZSkge1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeU1vdmVzID0gWy4uLnRoaXMuaGlzdG9yeU1vdmVzLCBoaXN0b3J5TW92ZV07XHJcbiAgICB9XHJcblxyXG4gICAgcG9wKCk6IEhpc3RvcnlNb3ZlIHtcclxuICAgICAgICBjb25zdCBsYXN0SGlzdG9yeU1vdmUgPSB0aGlzLmdldExhc3RNb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5oaXN0b3J5TW92ZXMgPSB0aGlzLmhpc3RvcnlNb3Zlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgIChzdGF0ZSkgPT4gc3RhdGUgIT09IGxhc3RIaXN0b3J5TW92ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RIaXN0b3J5TW92ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlzdG9yeU1vdmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeU1vdmVzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdE1vdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlzdG9yeU1vdmVzW3RoaXMuZ2V0TGFzdE1vdmVJbmRleCgpXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0TW92ZUluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhpc3RvcnlNb3Zlcy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==