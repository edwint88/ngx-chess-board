/**
 * @fileoverview added by tsickle
 * Generated from: lib/drawing-tools/draw-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
export class DrawProvider {
    constructor() {
        this.arrowsSubject$ = new BehaviorSubject([]);
        this.circlesSubject$ = new BehaviorSubject([]);
        this.arrows$ = this.arrowsSubject$.asObservable();
        this.circles$ = this.circlesSubject$.asObservable();
    }
    /**
     * @private
     * @return {?}
     */
    get circles() {
        return this.circlesSubject$.value;
    }
    /**
     * @private
     * @param {?} circles
     * @return {?}
     */
    set circles(circles) {
        this.circlesSubject$.next(circles);
    }
    /**
     * @private
     * @return {?}
     */
    get arrows() {
        return this.arrowsSubject$.value;
    }
    /**
     * @private
     * @param {?} arrows
     * @return {?}
     */
    set arrows(arrows) {
        this.arrowsSubject$.next(arrows);
    }
    /**
     * @param {?} circle
     * @return {?}
     */
    addCircle(circle) {
        this.circles = [...this.circles, circle];
    }
    /**
     * @param {?} removeCircle
     * @return {?}
     */
    reomveCircle(removeCircle) {
        this.circles = this.circles.filter((/**
         * @param {?} circle
         * @return {?}
         */
        (circle) => !circle.isEqual(removeCircle)));
    }
    /**
     * @param {?} arrow
     * @return {?}
     */
    addArrow(arrow) {
        this.arrows = [...this.arrows, arrow];
    }
    /**
     * @param {?} removeArrow
     * @return {?}
     */
    removeArrow(removeArrow) {
        this.arrows = this.arrows.filter((/**
         * @param {?} arrow
         * @return {?}
         */
        (arrow) => !arrow.isEqual(removeArrow)));
    }
    /**
     * @param {?} checkCircle
     * @return {?}
     */
    containsCircle(checkCircle) {
        return this.circles.some((/**
         * @param {?} circle
         * @return {?}
         */
        (circle) => circle.isEqual(checkCircle)));
    }
    /**
     * @param {?} checkArrow
     * @return {?}
     */
    containsArrow(checkArrow) {
        return this.arrows.some((/**
         * @param {?} arrow
         * @return {?}
         */
        (arrow) => arrow.isEqual(checkArrow)));
    }
    /**
     * @return {?}
     */
    clear() {
        this.arrows = [];
        this.circles = [];
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9kcmF3aW5nLXRvb2xzL2RyYXctcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSXZDLE1BQU0sT0FBTyxZQUFZO0lBQXpCO1FBQ1ksbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBVSxFQUFFLENBQUMsQ0FBQztRQUNsRCxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRXJELFlBQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdDLGFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBOEMxRCxDQUFDOzs7OztJQTVDRyxJQUFZLE9BQU87UUFDZixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUVELElBQVksT0FBTyxDQUFDLE9BQWlCO1FBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsSUFBWSxNQUFNO1FBQ2QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxJQUFZLE1BQU0sQ0FBQyxNQUFlO1FBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxZQUFvQjtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUMsQ0FBQztJQUNsRixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFZO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsV0FBa0I7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsV0FBbUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFVBQWlCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUMsQ0FBQztJQUN6RSxDQUFDOzs7O0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Q0FDSjs7Ozs7O0lBbERHLHNDQUEwRDs7Ozs7SUFDMUQsdUNBQTREOztJQUU1RCwrQkFBb0Q7O0lBQ3BELGdDQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gJy4vYXJyb3cnO1xyXG5pbXBvcnQgeyBDaXJjbGUgfSBmcm9tICcuL2NpcmNsZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhd1Byb3ZpZGVyIHtcclxuICAgIHByaXZhdGUgYXJyb3dzU3ViamVjdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycm93W10+KFtdKTtcclxuICAgIHByaXZhdGUgY2lyY2xlc1N1YmplY3QkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDaXJjbGVbXT4oW10pO1xyXG5cclxuICAgIHB1YmxpYyBhcnJvd3MkID0gdGhpcy5hcnJvd3NTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcclxuICAgIHB1YmxpYyBjaXJjbGVzJCA9IHRoaXMuY2lyY2xlc1N1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHByaXZhdGUgZ2V0IGNpcmNsZXMoKTogQ2lyY2xlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNpcmNsZXNTdWJqZWN0JC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldCBjaXJjbGVzKGNpcmNsZXM6IENpcmNsZVtdKSB7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVzU3ViamVjdCQubmV4dChjaXJjbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBhcnJvd3MoKTogQXJyb3dbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyb3dzU3ViamVjdCQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXQgYXJyb3dzKGFycm93czogQXJyb3dbXSkge1xyXG4gICAgICAgIHRoaXMuYXJyb3dzU3ViamVjdCQubmV4dChhcnJvd3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENpcmNsZShjaXJjbGU6IENpcmNsZSkge1xyXG4gICAgICAgIHRoaXMuY2lyY2xlcyA9IFsuLi50aGlzLmNpcmNsZXMsIGNpcmNsZV07XHJcbiAgICB9XHJcblxyXG4gICAgcmVvbXZlQ2lyY2xlKHJlbW92ZUNpcmNsZTogQ2lyY2xlKSB7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVzID0gdGhpcy5jaXJjbGVzLmZpbHRlcigoY2lyY2xlKSA9PiAhY2lyY2xlLmlzRXF1YWwocmVtb3ZlQ2lyY2xlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQXJyb3coYXJyb3c6IEFycm93KSB7XHJcbiAgICAgICAgdGhpcy5hcnJvd3MgPSBbLi4udGhpcy5hcnJvd3MsIGFycm93XTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBcnJvdyhyZW1vdmVBcnJvdzogQXJyb3cpIHtcclxuICAgICAgICB0aGlzLmFycm93cyA9IHRoaXMuYXJyb3dzLmZpbHRlcigoYXJyb3cpID0+ICFhcnJvdy5pc0VxdWFsKHJlbW92ZUFycm93KSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbnNDaXJjbGUoY2hlY2tDaXJjbGU6IENpcmNsZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNpcmNsZXMuc29tZSgoY2lyY2xlKSA9PiBjaXJjbGUuaXNFcXVhbChjaGVja0NpcmNsZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zQXJyb3coY2hlY2tBcnJvdzogQXJyb3cpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJvd3Muc29tZSgoYXJyb3c6IEFycm93KSA9PiBhcnJvdy5pc0VxdWFsKGNoZWNrQXJyb3cpKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmFycm93cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2lyY2xlcyA9IFtdO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==