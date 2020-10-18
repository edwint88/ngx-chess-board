/**
 * @fileoverview added by tsickle
 * Generated from: lib/drawing-tools/draw-point.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class DrawPoint {
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} color
     */
    constructor(x, y, color) {
        this.x = x + 0.5;
        this.y = y + 0.5;
        this.color = color;
    }
    /**
     * @param {?} that
     * @return {?}
     */
    isEqual(that) {
        return that && that.x === this.x && this.y === that.y;
    }
}
if (false) {
    /** @type {?} */
    DrawPoint.prototype.x;
    /** @type {?} */
    DrawPoint.prototype.y;
    /** @type {?} */
    DrawPoint.prototype.color;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy1wb2ludC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9kcmF3aW5nLXRvb2xzL2RyYXctcG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLE9BQU8sU0FBUzs7Ozs7O0lBS2xCLFlBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFhO1FBQzNDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBZTtRQUNuQixPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FDSjs7O0lBYkcsc0JBQVU7O0lBQ1Ysc0JBQVU7O0lBQ1YsMEJBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRHJhd1BvaW50IHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnggPSB4ICsgMC41O1xyXG4gICAgICAgIHRoaXMueSA9IHkgKyAwLjU7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRXF1YWwodGhhdDogRHJhd1BvaW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoYXQgJiYgdGhhdC54ID09PSB0aGlzLnggJiYgdGhpcy55ID09PSB0aGF0Lnk7XHJcbiAgICB9XHJcbn1cclxuIl19