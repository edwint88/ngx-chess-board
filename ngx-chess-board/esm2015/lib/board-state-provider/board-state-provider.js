/**
 * @fileoverview added by tsickle
 * Generated from: lib/board-state-provider/board-state-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
export class BoardStateProvider {
    constructor() {
        this.statesSubject$ = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    get states() {
        return this.statesSubject$.value;
    }
    /**
     * @param {?} states
     * @return {?}
     */
    set states(states) {
        this.statesSubject$.next(states);
    }
    /**
     * @param {?} state
     * @return {?}
     */
    addMove(state) {
        this.states = [...this.states, state];
    }
    /**
     * @return {?}
     */
    getStates() {
        return this.states;
    }
    /**
     * @return {?}
     */
    pop() {
        /** @type {?} */
        const lastState = this.getLastState();
        this.states = this.states.filter((/**
         * @param {?} state
         * @return {?}
         */
        (state) => state !== lastState));
        return lastState;
    }
    /**
     * @return {?}
     */
    isEmpty() {
        return this.states.length === 0;
    }
    /**
     * @return {?}
     */
    clear() {
        this.states = [];
    }
    /**
     * @return {?}
     */
    getLastState() {
        return this.states[this.getLastStateIndex()];
    }
    /**
     * @return {?}
     */
    getLastStateIndex() {
        return this.states.length - 1;
    }
}
if (false) {
    /** @type {?} */
    BoardStateProvider.prototype.statesSubject$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQtc3RhdGUtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hlc3MtYm9hcmQvIiwic291cmNlcyI6WyJsaWIvYm9hcmQtc3RhdGUtcHJvdmlkZXIvYm9hcmQtc3RhdGUtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3ZDLE1BQU0sT0FBTyxrQkFBa0I7SUFBL0I7UUFDSSxtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFlLEVBQUUsQ0FBQyxDQUFDO0lBdUMzRCxDQUFDOzs7O0lBckNHLElBQUksTUFBTTtRQUNOLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFvQjtRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFpQjtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxHQUFHOztjQUNPLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUMsQ0FBQztRQUNqRSxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsT0FBTztRQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFlBQVk7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNKOzs7SUF2Q0csNENBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEJvYXJkU3RhdGUgfSBmcm9tICcuL2JvYXJkLXN0YXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCb2FyZFN0YXRlUHJvdmlkZXIge1xyXG4gICAgc3RhdGVzU3ViamVjdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEJvYXJkU3RhdGVbXT4oW10pO1xyXG5cclxuICAgIGdldCBzdGF0ZXMoKTogQm9hcmRTdGF0ZVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZXNTdWJqZWN0JC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdGVzKHN0YXRlczogQm9hcmRTdGF0ZVtdKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXNTdWJqZWN0JC5uZXh0KHN0YXRlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTW92ZShzdGF0ZTogQm9hcmRTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGVzID0gWy4uLnRoaXMuc3RhdGVzLCBzdGF0ZV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGVzKCk6IEJvYXJkU3RhdGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHBvcCgpOiBCb2FyZFN0YXRlIHtcclxuICAgICAgICBjb25zdCBsYXN0U3RhdGUgPSB0aGlzLmdldExhc3RTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVzID0gdGhpcy5zdGF0ZXMuZmlsdGVyKChzdGF0ZSkgPT4gc3RhdGUgIT09IGxhc3RTdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VtcHR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlcy5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0U3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVzW3RoaXMuZ2V0TGFzdFN0YXRlSW5kZXgoKV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdFN0YXRlSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZXMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxufVxyXG4iXX0=