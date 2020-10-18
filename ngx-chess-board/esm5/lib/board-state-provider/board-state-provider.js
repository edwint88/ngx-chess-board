/**
 * @fileoverview added by tsickle
 * Generated from: lib/board-state-provider/board-state-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject } from 'rxjs';
var BoardStateProvider = /** @class */ (function () {
    function BoardStateProvider() {
        this.statesSubject$ = new BehaviorSubject([]);
    }
    Object.defineProperty(BoardStateProvider.prototype, "states", {
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
    BoardStateProvider.prototype.addMove = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.states = tslib_1.__spread(this.states, [state]);
    };
    /**
     * @return {?}
     */
    BoardStateProvider.prototype.getStates = /**
     * @return {?}
     */
    function () {
        return this.states;
    };
    /**
     * @return {?}
     */
    BoardStateProvider.prototype.pop = /**
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
    BoardStateProvider.prototype.isEmpty = /**
     * @return {?}
     */
    function () {
        return this.states.length === 0;
    };
    /**
     * @return {?}
     */
    BoardStateProvider.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.states = [];
    };
    /**
     * @return {?}
     */
    BoardStateProvider.prototype.getLastState = /**
     * @return {?}
     */
    function () {
        return this.states[this.getLastStateIndex()];
    };
    /**
     * @return {?}
     */
    BoardStateProvider.prototype.getLastStateIndex = /**
     * @return {?}
     */
    function () {
        return this.states.length - 1;
    };
    return BoardStateProvider;
}());
export { BoardStateProvider };
if (false) {
    /** @type {?} */
    BoardStateProvider.prototype.statesSubject$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQtc3RhdGUtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hlc3MtYm9hcmQvIiwic291cmNlcyI6WyJsaWIvYm9hcmQtc3RhdGUtcHJvdmlkZXIvYm9hcmQtc3RhdGUtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd2QztJQUFBO1FBQ0ksbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBZSxFQUFFLENBQUMsQ0FBQztJQXVDM0QsQ0FBQztJQXJDRyxzQkFBSSxzQ0FBTTs7OztRQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNyQyxDQUFDOzs7OztRQUVELFVBQVcsTUFBb0I7WUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BSkE7Ozs7O0lBTUQsb0NBQU87Ozs7SUFBUCxVQUFRLEtBQWlCO1FBQ3JCLElBQUksQ0FBQyxNQUFNLG9CQUFPLElBQUksQ0FBQyxNQUFNLEdBQUUsS0FBSyxFQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELHNDQUFTOzs7SUFBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsZ0NBQUc7OztJQUFIOztZQUNVLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLEtBQUssU0FBUyxFQUFuQixDQUFtQixFQUFDLENBQUM7UUFDakUsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELG9DQUFPOzs7SUFBUDtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxrQ0FBSzs7O0lBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQseUNBQVk7OztJQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELDhDQUFpQjs7O0lBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQzs7OztJQXZDRyw0Q0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQm9hcmRTdGF0ZSB9IGZyb20gJy4vYm9hcmQtc3RhdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvYXJkU3RhdGVQcm92aWRlciB7XHJcbiAgICBzdGF0ZXNTdWJqZWN0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Qm9hcmRTdGF0ZVtdPihbXSk7XHJcblxyXG4gICAgZ2V0IHN0YXRlcygpOiBCb2FyZFN0YXRlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlc1N1YmplY3QkLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0ZXMoc3RhdGVzOiBCb2FyZFN0YXRlW10pIHtcclxuICAgICAgICB0aGlzLnN0YXRlc1N1YmplY3QkLm5leHQoc3RhdGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRNb3ZlKHN0YXRlOiBCb2FyZFN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSBbLi4udGhpcy5zdGF0ZXMsIHN0YXRlXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0ZXMoKTogQm9hcmRTdGF0ZVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcG9wKCk6IEJvYXJkU3RhdGUge1xyXG4gICAgICAgIGNvbnN0IGxhc3RTdGF0ZSA9IHRoaXMuZ2V0TGFzdFN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSB0aGlzLnN0YXRlcy5maWx0ZXIoKHN0YXRlKSA9PiBzdGF0ZSAhPT0gbGFzdFN0YXRlKTtcclxuICAgICAgICByZXR1cm4gbGFzdFN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRW1wdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVzLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnN0YXRlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZXNbdGhpcy5nZXRMYXN0U3RhdGVJbmRleCgpXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0U3RhdGVJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlcy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==