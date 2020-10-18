/**
 * @fileoverview added by tsickle
 * Generated from: lib/coords/coords-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CoordsProvider = /** @class */ (function () {
    function CoordsProvider() {
        this.defaultXCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this.reversedXCoords = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
        this.defaultYCoords = [8, 7, 6, 5, 4, 3, 2, 1];
        this.reversedYCoords = [1, 2, 3, 4, 5, 6, 7, 8];
        this.currentXCoords = this.defaultXCoords;
        this.currentYCoords = this.defaultYCoords;
    }
    Object.defineProperty(CoordsProvider.prototype, "xCoords", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentXCoords;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoordsProvider.prototype, "yCoords", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentYCoords;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CoordsProvider.prototype.reverse = /**
     * @return {?}
     */
    function () {
        this.currentXCoords = this.reversedXCoords;
        this.currentYCoords = this.reversedYCoords;
    };
    /**
     * @return {?}
     */
    CoordsProvider.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.init();
    };
    /**
     * @private
     * @return {?}
     */
    CoordsProvider.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        this.currentXCoords = this.defaultXCoords;
        this.currentYCoords = this.defaultYCoords;
    };
    return CoordsProvider;
}());
export { CoordsProvider };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRzLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoZXNzLWJvYXJkLyIsInNvdXJjZXMiOlsibGliL2Nvb3Jkcy9jb29yZHMtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtJQUFBO1FBQ1ksbUJBQWMsR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwRSxvQkFBZSxHQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXJFLG1CQUFjLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsb0JBQWUsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyRCxtQkFBYyxHQUFhLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0MsbUJBQWMsR0FBYSxJQUFJLENBQUMsY0FBYyxDQUFDO0lBdUIzRCxDQUFDO0lBckJHLHNCQUFJLG1DQUFPOzs7O1FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBTzs7OztRQUFYO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7OztPQUFBOzs7O0lBRUQsZ0NBQU87OztJQUFQO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsOEJBQUs7OztJQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRU8sNkJBQUk7Ozs7SUFBWjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDOUMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQzs7Ozs7OztJQTlCRyx3Q0FBNEU7Ozs7O0lBQzVFLHlDQUE2RTs7Ozs7SUFFN0Usd0NBQTREOzs7OztJQUM1RCx5Q0FBNkQ7Ozs7O0lBRTdELHdDQUF1RDs7Ozs7SUFDdkQsd0NBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvb3Jkc1Byb3ZpZGVyIHtcclxuICAgIHByaXZhdGUgZGVmYXVsdFhDb29yZHM6IHN0cmluZ1tdID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnXTtcclxuICAgIHByaXZhdGUgcmV2ZXJzZWRYQ29vcmRzOiBzdHJpbmdbXSA9IFsnaCcsICdnJywgJ2YnLCAnZScsICdkJywgJ2MnLCAnYicsICdhJ107XHJcblxyXG4gICAgcHJpdmF0ZSBkZWZhdWx0WUNvb3JkczogbnVtYmVyW10gPSBbOCwgNywgNiwgNSwgNCwgMywgMiwgMV07XHJcbiAgICBwcml2YXRlIHJldmVyc2VkWUNvb3JkczogbnVtYmVyW10gPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF07XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50WENvb3Jkczogc3RyaW5nW10gPSB0aGlzLmRlZmF1bHRYQ29vcmRzO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50WUNvb3JkczogbnVtYmVyW10gPSB0aGlzLmRlZmF1bHRZQ29vcmRzO1xyXG5cclxuICAgIGdldCB4Q29vcmRzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WENvb3JkcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgeUNvb3JkcygpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFlDb29yZHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRYQ29vcmRzID0gdGhpcy5yZXZlcnNlZFhDb29yZHM7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50WUNvb3JkcyA9IHRoaXMucmV2ZXJzZWRZQ29vcmRzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRYQ29vcmRzID0gdGhpcy5kZWZhdWx0WENvb3JkcztcclxuICAgICAgICB0aGlzLmN1cnJlbnRZQ29vcmRzID0gdGhpcy5kZWZhdWx0WUNvb3JkcztcclxuICAgIH1cclxufVxyXG4iXX0=