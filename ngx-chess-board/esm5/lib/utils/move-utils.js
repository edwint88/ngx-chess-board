/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/move-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MoveTranslation } from '../models/move-translation';
var MoveUtils = /** @class */ (function () {
    function MoveUtils() {
    }
    /**
     * @param {?} currentColor
     * @param {?} row
     * @param {?} col
     * @param {?} destRow
     * @param {?} destCol
     * @param {?} board
     * @return {?}
     */
    MoveUtils.willMoveCauseCheck = /**
     * @param {?} currentColor
     * @param {?} row
     * @param {?} col
     * @param {?} destRow
     * @param {?} destCol
     * @param {?} board
     * @return {?}
     */
    function (currentColor, row, col, destRow, destCol, board) {
        /** @type {?} */
        var srcPiece = board.getPieceByField(row, col);
        /** @type {?} */
        var destPiece = board.getPieceByField(destRow, destCol);
        if (srcPiece) {
            srcPiece.point.row = destRow;
            srcPiece.point.col = destCol;
        }
        if (destPiece) {
            board.pieces = board.pieces.filter((/**
             * @param {?} piece
             * @return {?}
             */
            function (piece) { return piece !== destPiece; }));
        }
        /** @type {?} */
        var isBound = board.isKingInCheck(currentColor, board.pieces);
        if (srcPiece) {
            srcPiece.point.col = col;
            srcPiece.point.row = row;
        }
        if (destPiece) {
            board.pieces.push(destPiece);
        }
        return isBound;
    };
    /**
     * @param {?} sourcePoint
     * @param {?} destPoint
     * @param {?} reverted
     * @return {?}
     */
    MoveUtils.format = /**
     * @param {?} sourcePoint
     * @param {?} destPoint
     * @param {?} reverted
     * @return {?}
     */
    function (sourcePoint, destPoint, reverted) {
        if (reverted) {
            /** @type {?} */
            var sourceX = 104 - sourcePoint.col;
            /** @type {?} */
            var destX = 104 - destPoint.col;
            return (String.fromCharCode(sourceX) +
                (sourcePoint.row + 1) +
                String.fromCharCode(destX) +
                (destPoint.row + 1));
        }
        else {
            /** @type {?} */
            var incrementX = 97;
            return (String.fromCharCode(sourcePoint.col + incrementX) +
                (Math.abs(sourcePoint.row - 7) + 1) +
                String.fromCharCode(destPoint.col + incrementX) +
                (Math.abs(destPoint.row - 7) + 1));
        }
    };
    /**
     * @param {?} coords
     * @param {?} reverted
     * @return {?}
     */
    MoveUtils.translateCoordsToIndex = /**
     * @param {?} coords
     * @param {?} reverted
     * @return {?}
     */
    function (coords, reverted) {
        /** @type {?} */
        var xAxis;
        /** @type {?} */
        var yAxis;
        if (reverted) {
            xAxis = 104 - coords.charCodeAt(0);
            yAxis = +coords.charAt(1) - 1;
        }
        else {
            xAxis = coords.charCodeAt(0) - 97;
            yAxis = Math.abs(+coords.charAt(1) - 8);
        }
        return new MoveTranslation(xAxis, yAxis, reverted);
    };
    return MoveUtils;
}());
export { MoveUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9tb3ZlLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTdEO0lBQUE7SUF3RUEsQ0FBQzs7Ozs7Ozs7OztJQXZFaUIsNEJBQWtCOzs7Ozs7Ozs7SUFBaEMsVUFDSSxZQUFtQixFQUNuQixHQUFXLEVBQ1gsR0FBVyxFQUNYLE9BQWUsRUFDZixPQUFlLEVBQ2YsS0FBWTs7WUFFTixRQUFRLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDOztZQUMxQyxTQUFTLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO1FBRXpELElBQUksUUFBUSxFQUFFO1lBQ1YsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1lBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztTQUNoQztRQUVELElBQUksU0FBUyxFQUFFO1lBQ1gsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7WUFBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssS0FBSyxTQUFTLEVBQW5CLENBQW1CLEVBQUMsQ0FBQztTQUN0RTs7WUFDSyxPQUFPLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUUvRCxJQUFJLFFBQVEsRUFBRTtZQUNWLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUN6QixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDNUI7UUFFRCxJQUFJLFNBQVMsRUFBRTtZQUNYLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQzs7Ozs7OztJQUVhLGdCQUFNOzs7Ozs7SUFBcEIsVUFDSSxXQUFrQixFQUNsQixTQUFnQixFQUNoQixRQUFpQjtRQUVqQixJQUFJLFFBQVEsRUFBRTs7Z0JBQ0osT0FBTyxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUMsR0FBRzs7Z0JBQy9CLEtBQUssR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUc7WUFDakMsT0FBTyxDQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO2dCQUM1QixDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQixNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFDMUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUN0QixDQUFDO1NBQ0w7YUFBTTs7Z0JBQ0csVUFBVSxHQUFHLEVBQUU7WUFDckIsT0FBTyxDQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUM7Z0JBQ2pELENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQztnQkFDL0MsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ3BDLENBQUM7U0FDTDtJQUNMLENBQUM7Ozs7OztJQUVhLGdDQUFzQjs7Ozs7SUFBcEMsVUFBcUMsTUFBYyxFQUFFLFFBQWlCOztZQUM5RCxLQUFhOztZQUNiLEtBQWE7UUFDakIsSUFBSSxRQUFRLEVBQUU7WUFDVixLQUFLLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNILEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFFRCxPQUFPLElBQUksZUFBZSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQXhFRCxJQXdFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi4vbW9kZWxzL2JvYXJkJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi9tb2RlbHMvcGllY2VzL2NvbG9yJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9tb2RlbHMvcGllY2VzL3BvaW50JztcclxuaW1wb3J0IHsgTW92ZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL21vdmUtdHJhbnNsYXRpb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVVdGlscyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHdpbGxNb3ZlQ2F1c2VDaGVjayhcclxuICAgICAgICBjdXJyZW50Q29sb3I6IENvbG9yLFxyXG4gICAgICAgIHJvdzogbnVtYmVyLFxyXG4gICAgICAgIGNvbDogbnVtYmVyLFxyXG4gICAgICAgIGRlc3RSb3c6IG51bWJlcixcclxuICAgICAgICBkZXN0Q29sOiBudW1iZXIsXHJcbiAgICAgICAgYm9hcmQ6IEJvYXJkXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBzcmNQaWVjZSA9IGJvYXJkLmdldFBpZWNlQnlGaWVsZChyb3csIGNvbCk7XHJcbiAgICAgICAgY29uc3QgZGVzdFBpZWNlID0gYm9hcmQuZ2V0UGllY2VCeUZpZWxkKGRlc3RSb3csIGRlc3RDb2wpO1xyXG5cclxuICAgICAgICBpZiAoc3JjUGllY2UpIHtcclxuICAgICAgICAgICAgc3JjUGllY2UucG9pbnQucm93ID0gZGVzdFJvdztcclxuICAgICAgICAgICAgc3JjUGllY2UucG9pbnQuY29sID0gZGVzdENvbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkZXN0UGllY2UpIHtcclxuICAgICAgICAgICAgYm9hcmQucGllY2VzID0gYm9hcmQucGllY2VzLmZpbHRlcigocGllY2UpID0+IHBpZWNlICE9PSBkZXN0UGllY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpc0JvdW5kID0gYm9hcmQuaXNLaW5nSW5DaGVjayhjdXJyZW50Q29sb3IsIGJvYXJkLnBpZWNlcyk7XHJcblxyXG4gICAgICAgIGlmIChzcmNQaWVjZSkge1xyXG4gICAgICAgICAgICBzcmNQaWVjZS5wb2ludC5jb2wgPSBjb2w7XHJcbiAgICAgICAgICAgIHNyY1BpZWNlLnBvaW50LnJvdyA9IHJvdztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkZXN0UGllY2UpIHtcclxuICAgICAgICAgICAgYm9hcmQucGllY2VzLnB1c2goZGVzdFBpZWNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpc0JvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZm9ybWF0KFxyXG4gICAgICAgIHNvdXJjZVBvaW50OiBQb2ludCxcclxuICAgICAgICBkZXN0UG9pbnQ6IFBvaW50LFxyXG4gICAgICAgIHJldmVydGVkOiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBpZiAocmV2ZXJ0ZWQpIHtcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlWCA9IDEwNCAtIHNvdXJjZVBvaW50LmNvbDtcclxuICAgICAgICAgICAgY29uc3QgZGVzdFggPSAxMDQgLSBkZXN0UG9pbnQuY29sO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShzb3VyY2VYKSArXHJcbiAgICAgICAgICAgICAgICAoc291cmNlUG9pbnQucm93ICsgMSkgK1xyXG4gICAgICAgICAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShkZXN0WCkgK1xyXG4gICAgICAgICAgICAgICAgKGRlc3RQb2ludC5yb3cgKyAxKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluY3JlbWVudFggPSA5NztcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIFN0cmluZy5mcm9tQ2hhckNvZGUoc291cmNlUG9pbnQuY29sICsgaW5jcmVtZW50WCkgK1xyXG4gICAgICAgICAgICAgICAgKE1hdGguYWJzKHNvdXJjZVBvaW50LnJvdyAtIDcpICsgMSkgK1xyXG4gICAgICAgICAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShkZXN0UG9pbnQuY29sICsgaW5jcmVtZW50WCkgK1xyXG4gICAgICAgICAgICAgICAgKE1hdGguYWJzKGRlc3RQb2ludC5yb3cgLSA3KSArIDEpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHJhbnNsYXRlQ29vcmRzVG9JbmRleChjb29yZHM6IHN0cmluZywgcmV2ZXJ0ZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgeEF4aXM6IG51bWJlcjtcclxuICAgICAgICBsZXQgeUF4aXM6IG51bWJlcjtcclxuICAgICAgICBpZiAocmV2ZXJ0ZWQpIHtcclxuICAgICAgICAgICAgeEF4aXMgPSAxMDQgLSBjb29yZHMuY2hhckNvZGVBdCgwKTtcclxuICAgICAgICAgICAgeUF4aXMgPSArY29vcmRzLmNoYXJBdCgxKSAtIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgeEF4aXMgPSBjb29yZHMuY2hhckNvZGVBdCgwKSAtIDk3O1xyXG4gICAgICAgICAgICB5QXhpcyA9IE1hdGguYWJzKCtjb29yZHMuY2hhckF0KDEpIC0gOCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IE1vdmVUcmFuc2xhdGlvbih4QXhpcywgeUF4aXMsIHJldmVydGVkKTtcclxuICAgIH1cclxufVxyXG4iXX0=