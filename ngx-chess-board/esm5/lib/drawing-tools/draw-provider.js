/**
 * @fileoverview added by tsickle
 * Generated from: lib/drawing-tools/draw-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject } from 'rxjs';
var DrawProvider = /** @class */ (function () {
    function DrawProvider() {
        this.arrowsSubject$ = new BehaviorSubject([]);
        this.circlesSubject$ = new BehaviorSubject([]);
        this.arrows$ = this.arrowsSubject$.asObservable();
        this.circles$ = this.circlesSubject$.asObservable();
    }
    Object.defineProperty(DrawProvider.prototype, "circles", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.circlesSubject$.value;
        },
        set: /**
         * @private
         * @param {?} circles
         * @return {?}
         */
        function (circles) {
            this.circlesSubject$.next(circles);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawProvider.prototype, "arrows", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.arrowsSubject$.value;
        },
        set: /**
         * @private
         * @param {?} arrows
         * @return {?}
         */
        function (arrows) {
            this.arrowsSubject$.next(arrows);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} circle
     * @return {?}
     */
    DrawProvider.prototype.addCircle = /**
     * @param {?} circle
     * @return {?}
     */
    function (circle) {
        this.circles = tslib_1.__spread(this.circles, [circle]);
    };
    /**
     * @param {?} removeCircle
     * @return {?}
     */
    DrawProvider.prototype.reomveCircle = /**
     * @param {?} removeCircle
     * @return {?}
     */
    function (removeCircle) {
        this.circles = this.circles.filter((/**
         * @param {?} circle
         * @return {?}
         */
        function (circle) { return !circle.isEqual(removeCircle); }));
    };
    /**
     * @param {?} arrow
     * @return {?}
     */
    DrawProvider.prototype.addArrow = /**
     * @param {?} arrow
     * @return {?}
     */
    function (arrow) {
        this.arrows = tslib_1.__spread(this.arrows, [arrow]);
    };
    /**
     * @param {?} removeArrow
     * @return {?}
     */
    DrawProvider.prototype.removeArrow = /**
     * @param {?} removeArrow
     * @return {?}
     */
    function (removeArrow) {
        this.arrows = this.arrows.filter((/**
         * @param {?} arrow
         * @return {?}
         */
        function (arrow) { return !arrow.isEqual(removeArrow); }));
    };
    /**
     * @param {?} checkCircle
     * @return {?}
     */
    DrawProvider.prototype.containsCircle = /**
     * @param {?} checkCircle
     * @return {?}
     */
    function (checkCircle) {
        return this.circles.some((/**
         * @param {?} circle
         * @return {?}
         */
        function (circle) { return circle.isEqual(checkCircle); }));
    };
    /**
     * @param {?} checkArrow
     * @return {?}
     */
    DrawProvider.prototype.containsArrow = /**
     * @param {?} checkArrow
     * @return {?}
     */
    function (checkArrow) {
        return this.arrows.some((/**
         * @param {?} arrow
         * @return {?}
         */
        function (arrow) { return arrow.isEqual(checkArrow); }));
    };
    /**
     * @return {?}
     */
    DrawProvider.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.arrows = [];
        this.circles = [];
    };
    return DrawProvider;
}());
export { DrawProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DrawProvider.prototype.arrowsSubject$;
    /**
     * @type {?}
     * @private
     */
    DrawProvider.prototype.circlesSubject$;
    /** @type {?} */
    DrawProvider.prototype.arrows$;
    /** @type {?} */
    DrawProvider.prototype.circles$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9kcmF3aW5nLXRvb2xzL2RyYXctcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl2QztJQUFBO1FBQ1ksbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBVSxFQUFFLENBQUMsQ0FBQztRQUNsRCxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRXJELFlBQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdDLGFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBOEMxRCxDQUFDO0lBNUNHLHNCQUFZLGlDQUFPOzs7OztRQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFDdEMsQ0FBQzs7Ozs7O1FBRUQsVUFBb0IsT0FBaUI7WUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBWSxnQ0FBTTs7Ozs7UUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3JDLENBQUM7Ozs7OztRQUVELFVBQW1CLE1BQWU7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BSkE7Ozs7O0lBTUQsZ0NBQVM7Ozs7SUFBVCxVQUFVLE1BQWM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sb0JBQU8sSUFBSSxDQUFDLE9BQU8sR0FBRSxNQUFNLEVBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELG1DQUFZOzs7O0lBQVosVUFBYSxZQUFvQjtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUE3QixDQUE2QixFQUFDLENBQUM7SUFDbEYsQ0FBQzs7Ozs7SUFFRCwrQkFBUTs7OztJQUFSLFVBQVMsS0FBWTtRQUNqQixJQUFJLENBQUMsTUFBTSxvQkFBTyxJQUFJLENBQUMsTUFBTSxHQUFFLEtBQUssRUFBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsa0NBQVc7Ozs7SUFBWCxVQUFZLFdBQWtCO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQTNCLENBQTJCLEVBQUMsQ0FBQztJQUM3RSxDQUFDOzs7OztJQUVELHFDQUFjOzs7O0lBQWQsVUFBZSxXQUFtQjtRQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBM0IsQ0FBMkIsRUFBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7O0lBRUQsb0NBQWE7Ozs7SUFBYixVQUFjLFVBQWlCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUF6QixDQUF5QixFQUFDLENBQUM7SUFDekUsQ0FBQzs7OztJQUVELDRCQUFLOzs7SUFBTDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFuREQsSUFtREM7Ozs7Ozs7SUFsREcsc0NBQTBEOzs7OztJQUMxRCx1Q0FBNEQ7O0lBRTVELCtCQUFvRDs7SUFDcEQsZ0NBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSAnLi9hcnJvdyc7XHJcbmltcG9ydCB7IENpcmNsZSB9IGZyb20gJy4vY2lyY2xlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmF3UHJvdmlkZXIge1xyXG4gICAgcHJpdmF0ZSBhcnJvd3NTdWJqZWN0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXJyb3dbXT4oW10pO1xyXG4gICAgcHJpdmF0ZSBjaXJjbGVzU3ViamVjdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENpcmNsZVtdPihbXSk7XHJcblxyXG4gICAgcHVibGljIGFycm93cyQgPSB0aGlzLmFycm93c1N1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgcHVibGljIGNpcmNsZXMkID0gdGhpcy5jaXJjbGVzU3ViamVjdCQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgY2lyY2xlcygpOiBDaXJjbGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlc1N1YmplY3QkLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0IGNpcmNsZXMoY2lyY2xlczogQ2lyY2xlW10pIHtcclxuICAgICAgICB0aGlzLmNpcmNsZXNTdWJqZWN0JC5uZXh0KGNpcmNsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGFycm93cygpOiBBcnJvd1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJvd3NTdWJqZWN0JC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldCBhcnJvd3MoYXJyb3dzOiBBcnJvd1tdKSB7XHJcbiAgICAgICAgdGhpcy5hcnJvd3NTdWJqZWN0JC5uZXh0KGFycm93cyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2lyY2xlKGNpcmNsZTogQ2lyY2xlKSB7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVzID0gWy4uLnRoaXMuY2lyY2xlcywgY2lyY2xlXTtcclxuICAgIH1cclxuXHJcbiAgICByZW9tdmVDaXJjbGUocmVtb3ZlQ2lyY2xlOiBDaXJjbGUpIHtcclxuICAgICAgICB0aGlzLmNpcmNsZXMgPSB0aGlzLmNpcmNsZXMuZmlsdGVyKChjaXJjbGUpID0+ICFjaXJjbGUuaXNFcXVhbChyZW1vdmVDaXJjbGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBcnJvdyhhcnJvdzogQXJyb3cpIHtcclxuICAgICAgICB0aGlzLmFycm93cyA9IFsuLi50aGlzLmFycm93cywgYXJyb3ddO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUFycm93KHJlbW92ZUFycm93OiBBcnJvdykge1xyXG4gICAgICAgIHRoaXMuYXJyb3dzID0gdGhpcy5hcnJvd3MuZmlsdGVyKChhcnJvdykgPT4gIWFycm93LmlzRXF1YWwocmVtb3ZlQXJyb3cpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluc0NpcmNsZShjaGVja0NpcmNsZTogQ2lyY2xlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlcy5zb21lKChjaXJjbGUpID0+IGNpcmNsZS5pc0VxdWFsKGNoZWNrQ2lyY2xlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbnNBcnJvdyhjaGVja0Fycm93OiBBcnJvdykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycm93cy5zb21lKChhcnJvdzogQXJyb3cpID0+IGFycm93LmlzRXF1YWwoY2hlY2tBcnJvdykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuYXJyb3dzID0gW107XHJcbiAgICAgICAgdGhpcy5jaXJjbGVzID0gW107XHJcbiAgICB9XHJcbn1cclxuIl19