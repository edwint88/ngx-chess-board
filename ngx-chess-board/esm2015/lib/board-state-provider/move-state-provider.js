/**
 * @fileoverview added by tsickle
 * Generated from: lib/board-state-provider/move-state-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
export class MoveStateProvider {
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
    MoveStateProvider.prototype.statesSubject$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS1zdGF0ZS1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9ib2FyZC1zdGF0ZS1wcm92aWRlci9tb3ZlLXN0YXRlLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd2QyxNQUFNLE9BQU8saUJBQWlCO0lBQTlCO1FBQ0ksbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBZSxFQUFFLENBQUMsQ0FBQztJQXVDM0QsQ0FBQzs7OztJQXJDRyxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsTUFBb0I7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBaUI7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsU0FBUztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsR0FBRzs7Y0FDTyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFDLENBQUM7UUFDakUsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELE9BQU87UUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDSjs7O0lBdkNHLDJDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBCb2FyZFN0YXRlIH0gZnJvbSAnLi9ib2FyZC1zdGF0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTW92ZVN0YXRlUHJvdmlkZXIge1xyXG4gICAgc3RhdGVzU3ViamVjdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEJvYXJkU3RhdGVbXT4oW10pO1xyXG5cclxuICAgIGdldCBzdGF0ZXMoKTogQm9hcmRTdGF0ZVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZXNTdWJqZWN0JC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdGVzKHN0YXRlczogQm9hcmRTdGF0ZVtdKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXNTdWJqZWN0JC5uZXh0KHN0YXRlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTW92ZShzdGF0ZTogQm9hcmRTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGVzID0gWy4uLnRoaXMuc3RhdGVzLCBzdGF0ZV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGVzKCk6IEJvYXJkU3RhdGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHBvcCgpOiBCb2FyZFN0YXRlIHtcclxuICAgICAgICBjb25zdCBsYXN0U3RhdGUgPSB0aGlzLmdldExhc3RTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVzID0gdGhpcy5zdGF0ZXMuZmlsdGVyKChzdGF0ZSkgPT4gc3RhdGUgIT09IGxhc3RTdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VtcHR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlcy5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0U3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVzW3RoaXMuZ2V0TGFzdFN0YXRlSW5kZXgoKV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdFN0YXRlSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZXMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxufVxyXG4iXX0=