/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/point.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class Point {
    /**
     * @param {?} row
     * @param {?} col
     */
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
    /**
     * @param {?} that
     * @return {?}
     */
    isEqual(that) {
        return that && this.row === that.row && this.col === that.col;
    }
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    hasCoordsEqual(row, col) {
        return row && col && this.row === row && this.col === col;
    }
}
if (false) {
    /** @type {?} */
    Point.prototype.row;
    /** @type {?} */
    Point.prototype.col;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hlc3MtYm9hcmQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL3BpZWNlcy9wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU0sT0FBTyxLQUFLOzs7OztJQUlkLFlBQVksR0FBVyxFQUFFLEdBQVc7UUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxJQUFXO1FBQ2YsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsR0FBVyxFQUFFLEdBQVc7UUFDbkMsT0FBTyxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDO0lBQzlELENBQUM7Q0FDSjs7O0lBZkcsb0JBQVk7O0lBQ1osb0JBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUG9pbnQge1xyXG4gICAgcm93OiBudW1iZXI7XHJcbiAgICBjb2w6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJvdyA9IHJvdztcclxuICAgICAgICB0aGlzLmNvbCA9IGNvbDtcclxuICAgIH1cclxuXHJcbiAgICBpc0VxdWFsKHRoYXQ6IFBvaW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoYXQgJiYgdGhpcy5yb3cgPT09IHRoYXQucm93ICYmIHRoaXMuY29sID09PSB0aGF0LmNvbDtcclxuICAgIH1cclxuXHJcbiAgICBoYXNDb29yZHNFcXVhbChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gcm93ICYmIGNvbCAmJiB0aGlzLnJvdyA9PT0gcm93ICYmIHRoaXMuY29sID09PSBjb2w7XHJcbiAgICB9XHJcbn1cclxuIl19