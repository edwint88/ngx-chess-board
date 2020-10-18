/**
 * @fileoverview added by tsickle
 * Generated from: lib/board-state-provider/move-state-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject } from 'rxjs';
var MoveStateProvider = /** @class */ (function () {
    function MoveStateProvider() {
        this.statesSubject$ = new BehaviorSubject([]);
    }
    Object.defineProperty(MoveStateProvider.prototype, "states", {
        get: /**
         * @return {?}
         */
        function () {
            return this.statesSubject$.value;
        },
        set: /**
         * @param {?} states
         * @return {?}
         */
        function (states) {
            this.statesSubject$.next(states);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    MoveStateProvider.prototype.addMove = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.states = tslib_1.__spread(this.states, [state]);
    };
    /**
     * @return {?}
     */
    MoveStateProvider.prototype.getStates = /**
     * @return {?}
     */
    function () {
        return this.states;
    };
    /**
     * @return {?}
     */
    MoveStateProvider.prototype.pop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var lastState = this.getLastState();
        this.states = this.states.filter((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state !== lastState; }));
        return lastState;
    };
    /**
     * @return {?}
     */
    MoveStateProvider.prototype.isEmpty = /**
     * @return {?}
     */
    function () {
        return this.states.length === 0;
    };
    /**
     * @return {?}
     */
    MoveStateProvider.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.states = [];
    };
    /**
     * @return {?}
     */
    MoveStateProvider.prototype.getLastState = /**
     * @return {?}
     */
    function () {
        return this.states[this.getLastStateIndex()];
    };
    /**
     * @return {?}
     */
    MoveStateProvider.prototype.getLastStateIndex = /**
     * @return {?}
     */
    function () {
        return this.states.length - 1;
    };
    return MoveStateProvider;
}());
export { MoveStateProvider };
if (false) {
    /** @type {?} */
    MoveStateProvider.prototype.statesSubject$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS1zdGF0ZS1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9ib2FyZC1zdGF0ZS1wcm92aWRlci9tb3ZlLXN0YXRlLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdkM7SUFBQTtRQUNJLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQWUsRUFBRSxDQUFDLENBQUM7SUF1QzNELENBQUM7SUFyQ0csc0JBQUkscUNBQU07Ozs7UUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDckMsQ0FBQzs7Ozs7UUFFRCxVQUFXLE1BQW9CO1lBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUpBOzs7OztJQU1ELG1DQUFPOzs7O0lBQVAsVUFBUSxLQUFpQjtRQUNyQixJQUFJLENBQUMsTUFBTSxvQkFBTyxJQUFJLENBQUMsTUFBTSxHQUFFLEtBQUssRUFBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxxQ0FBUzs7O0lBQVQ7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELCtCQUFHOzs7SUFBSDs7WUFDVSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxLQUFLLFNBQVMsRUFBbkIsQ0FBbUIsRUFBQyxDQUFDO1FBQ2pFLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxtQ0FBTzs7O0lBQVA7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsaUNBQUs7OztJQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHdDQUFZOzs7SUFBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCw2Q0FBaUI7OztJQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7Ozs7SUF2Q0csMkNBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEJvYXJkU3RhdGUgfSBmcm9tICcuL2JvYXJkLXN0YXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlU3RhdGVQcm92aWRlciB7XHJcbiAgICBzdGF0ZXNTdWJqZWN0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Qm9hcmRTdGF0ZVtdPihbXSk7XHJcblxyXG4gICAgZ2V0IHN0YXRlcygpOiBCb2FyZFN0YXRlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlc1N1YmplY3QkLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0ZXMoc3RhdGVzOiBCb2FyZFN0YXRlW10pIHtcclxuICAgICAgICB0aGlzLnN0YXRlc1N1YmplY3QkLm5leHQoc3RhdGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRNb3ZlKHN0YXRlOiBCb2FyZFN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSBbLi4udGhpcy5zdGF0ZXMsIHN0YXRlXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0ZXMoKTogQm9hcmRTdGF0ZVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcG9wKCk6IEJvYXJkU3RhdGUge1xyXG4gICAgICAgIGNvbnN0IGxhc3RTdGF0ZSA9IHRoaXMuZ2V0TGFzdFN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSB0aGlzLnN0YXRlcy5maWx0ZXIoKHN0YXRlKSA9PiBzdGF0ZSAhPT0gbGFzdFN0YXRlKTtcclxuICAgICAgICByZXR1cm4gbGFzdFN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRW1wdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVzLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnN0YXRlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZXNbdGhpcy5nZXRMYXN0U3RhdGVJbmRleCgpXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0U3RhdGVJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlcy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==