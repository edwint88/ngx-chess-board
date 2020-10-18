/**
 * @fileoverview added by tsickle
 * Generated from: lib/coords/coords-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class CoordsProvider {
    constructor() {
        this.defaultXCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this.reversedXCoords = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
        this.defaultYCoords = [8, 7, 6, 5, 4, 3, 2, 1];
        this.reversedYCoords = [1, 2, 3, 4, 5, 6, 7, 8];
        this.currentXCoords = this.defaultXCoords;
        this.currentYCoords = this.defaultYCoords;
    }
    /**
     * @return {?}
     */
    get xCoords() {
        return this.currentXCoords;
    }
    /**
     * @return {?}
     */
    get yCoords() {
        return this.currentYCoords;
    }
    /**
     * @return {?}
     */
    reverse() {
        this.currentXCoords = this.reversedXCoords;
        this.currentYCoords = this.reversedYCoords;
    }
    /**
     * @return {?}
     */
    reset() {
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this.currentXCoords = this.defaultXCoords;
        this.currentYCoords = this.defaultYCoords;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CoordsProvider.prototype.defaultXCoords;
    /**
     * @type {?}
     * @private
     */
    CoordsProvider.prototype.reversedXCoords;
    /**
     * @type {?}
     * @private
     */
    CoordsProvider.prototype.defaultYCoords;
    /**
     * @type {?}
     * @private
     */
    CoordsProvider.prototype.reversedYCoords;
    /**
     * @type {?}
     * @private
     */
    CoordsProvider.prototype.currentXCoords;
    /**
     * @type {?}
     * @private
     */
    CoordsProvider.prototype.currentYCoords;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRzLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoZXNzLWJvYXJkLyIsInNvdXJjZXMiOlsibGliL2Nvb3Jkcy9jb29yZHMtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLE9BQU8sY0FBYztJQUEzQjtRQUNZLG1CQUFjLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEUsb0JBQWUsR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVyRSxtQkFBYyxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BELG9CQUFlLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFckQsbUJBQWMsR0FBYSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9DLG1CQUFjLEdBQWEsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQXVCM0QsQ0FBQzs7OztJQXJCRyxJQUFJLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFTyxJQUFJO1FBQ1IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM5QyxDQUFDO0NBQ0o7Ozs7OztJQTlCRyx3Q0FBNEU7Ozs7O0lBQzVFLHlDQUE2RTs7Ozs7SUFFN0Usd0NBQTREOzs7OztJQUM1RCx5Q0FBNkQ7Ozs7O0lBRTdELHdDQUF1RDs7Ozs7SUFDdkQsd0NBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvb3Jkc1Byb3ZpZGVyIHtcclxuICAgIHByaXZhdGUgZGVmYXVsdFhDb29yZHM6IHN0cmluZ1tdID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnXTtcclxuICAgIHByaXZhdGUgcmV2ZXJzZWRYQ29vcmRzOiBzdHJpbmdbXSA9IFsnaCcsICdnJywgJ2YnLCAnZScsICdkJywgJ2MnLCAnYicsICdhJ107XHJcblxyXG4gICAgcHJpdmF0ZSBkZWZhdWx0WUNvb3JkczogbnVtYmVyW10gPSBbOCwgNywgNiwgNSwgNCwgMywgMiwgMV07XHJcbiAgICBwcml2YXRlIHJldmVyc2VkWUNvb3JkczogbnVtYmVyW10gPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF07XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50WENvb3Jkczogc3RyaW5nW10gPSB0aGlzLmRlZmF1bHRYQ29vcmRzO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50WUNvb3JkczogbnVtYmVyW10gPSB0aGlzLmRlZmF1bHRZQ29vcmRzO1xyXG5cclxuICAgIGdldCB4Q29vcmRzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WENvb3JkcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgeUNvb3JkcygpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFlDb29yZHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRYQ29vcmRzID0gdGhpcy5yZXZlcnNlZFhDb29yZHM7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50WUNvb3JkcyA9IHRoaXMucmV2ZXJzZWRZQ29vcmRzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRYQ29vcmRzID0gdGhpcy5kZWZhdWx0WENvb3JkcztcclxuICAgICAgICB0aGlzLmN1cnJlbnRZQ29vcmRzID0gdGhpcy5kZWZhdWx0WUNvb3JkcztcclxuICAgIH1cclxufVxyXG4iXX0=