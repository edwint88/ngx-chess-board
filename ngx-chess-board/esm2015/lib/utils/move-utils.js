/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/move-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MoveTranslation } from '../models/move-translation';
export class MoveUtils {
    /**
     * @param {?} currentColor
     * @param {?} row
     * @param {?} col
     * @param {?} destRow
     * @param {?} destCol
     * @param {?} board
     * @return {?}
     */
    static willMoveCauseCheck(currentColor, row, col, destRow, destCol, board) {
        /** @type {?} */
        const srcPiece = board.getPieceByField(row, col);
        /** @type {?} */
        const destPiece = board.getPieceByField(destRow, destCol);
        if (srcPiece) {
            srcPiece.point.row = destRow;
            srcPiece.point.col = destCol;
        }
        if (destPiece) {
            board.pieces = board.pieces.filter((/**
             * @param {?} piece
             * @return {?}
             */
            (piece) => piece !== destPiece));
        }
        /** @type {?} */
        const isBound = board.isKingInCheck(currentColor, board.pieces);
        if (srcPiece) {
            srcPiece.point.col = col;
            srcPiece.point.row = row;
        }
        if (destPiece) {
            board.pieces.push(destPiece);
        }
        return isBound;
    }
    /**
     * @param {?} sourcePoint
     * @param {?} destPoint
     * @param {?} reverted
     * @return {?}
     */
    static format(sourcePoint, destPoint, reverted) {
        if (reverted) {
            /** @type {?} */
            const sourceX = 104 - sourcePoint.col;
            /** @type {?} */
            const destX = 104 - destPoint.col;
            return (String.fromCharCode(sourceX) +
                (sourcePoint.row + 1) +
                String.fromCharCode(destX) +
                (destPoint.row + 1));
        }
        else {
            /** @type {?} */
            const incrementX = 97;
            return (String.fromCharCode(sourcePoint.col + incrementX) +
                (Math.abs(sourcePoint.row - 7) + 1) +
                String.fromCharCode(destPoint.col + incrementX) +
                (Math.abs(destPoint.row - 7) + 1));
        }
    }
    /**
     * @param {?} coords
     * @param {?} reverted
     * @return {?}
     */
    static translateCoordsToIndex(coords, reverted) {
        /** @type {?} */
        let xAxis;
        /** @type {?} */
        let yAxis;
        if (reverted) {
            xAxis = 104 - coords.charCodeAt(0);
            yAxis = +coords.charAt(1) - 1;
        }
        else {
            xAxis = coords.charCodeAt(0) - 97;
            yAxis = Math.abs(+coords.charAt(1) - 8);
        }
        return new MoveTranslation(xAxis, yAxis, reverted);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9tb3ZlLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTdELE1BQU0sT0FBTyxTQUFTOzs7Ozs7Ozs7O0lBQ1gsTUFBTSxDQUFDLGtCQUFrQixDQUM1QixZQUFtQixFQUNuQixHQUFXLEVBQ1gsR0FBVyxFQUNYLE9BQWUsRUFDZixPQUFlLEVBQ2YsS0FBWTs7Y0FFTixRQUFRLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDOztjQUMxQyxTQUFTLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO1FBRXpELElBQUksUUFBUSxFQUFFO1lBQ1YsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1lBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztTQUNoQztRQUVELElBQUksU0FBUyxFQUFFO1lBQ1gsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBQyxDQUFDO1NBQ3RFOztjQUNLLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDO1FBRS9ELElBQUksUUFBUSxFQUFFO1lBQ1YsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUM1QjtRQUVELElBQUksU0FBUyxFQUFFO1lBQ1gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDaEM7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOzs7Ozs7O0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FDaEIsV0FBa0IsRUFDbEIsU0FBZ0IsRUFDaEIsUUFBaUI7UUFFakIsSUFBSSxRQUFRLEVBQUU7O2tCQUNKLE9BQU8sR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUc7O2tCQUMvQixLQUFLLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHO1lBQ2pDLE9BQU8sQ0FDSCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztnQkFDNUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDckIsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FDdEIsQ0FBQztTQUNMO2FBQU07O2tCQUNHLFVBQVUsR0FBRyxFQUFFO1lBQ3JCLE9BQU8sQ0FDSCxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDO2dCQUNqRCxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUM7Z0JBQy9DLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNwQyxDQUFDO1NBQ0w7SUFDTCxDQUFDOzs7Ozs7SUFFTSxNQUFNLENBQUMsc0JBQXNCLENBQUMsTUFBYyxFQUFFLFFBQWlCOztZQUM5RCxLQUFhOztZQUNiLEtBQWE7UUFDakIsSUFBSSxRQUFRLEVBQUU7WUFDVixLQUFLLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNILEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFFRCxPQUFPLElBQUksZUFBZSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuLi9tb2RlbHMvYm9hcmQnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4uL21vZGVscy9waWVjZXMvY29sb3InO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL21vZGVscy9waWVjZXMvcG9pbnQnO1xyXG5pbXBvcnQgeyBNb3ZlVHJhbnNsYXRpb24gfSBmcm9tICcuLi9tb2RlbHMvbW92ZS10cmFuc2xhdGlvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgTW92ZVV0aWxzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgd2lsbE1vdmVDYXVzZUNoZWNrKFxyXG4gICAgICAgIGN1cnJlbnRDb2xvcjogQ29sb3IsXHJcbiAgICAgICAgcm93OiBudW1iZXIsXHJcbiAgICAgICAgY29sOiBudW1iZXIsXHJcbiAgICAgICAgZGVzdFJvdzogbnVtYmVyLFxyXG4gICAgICAgIGRlc3RDb2w6IG51bWJlcixcclxuICAgICAgICBib2FyZDogQm9hcmRcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IHNyY1BpZWNlID0gYm9hcmQuZ2V0UGllY2VCeUZpZWxkKHJvdywgY29sKTtcclxuICAgICAgICBjb25zdCBkZXN0UGllY2UgPSBib2FyZC5nZXRQaWVjZUJ5RmllbGQoZGVzdFJvdywgZGVzdENvbCk7XHJcblxyXG4gICAgICAgIGlmIChzcmNQaWVjZSkge1xyXG4gICAgICAgICAgICBzcmNQaWVjZS5wb2ludC5yb3cgPSBkZXN0Um93O1xyXG4gICAgICAgICAgICBzcmNQaWVjZS5wb2ludC5jb2wgPSBkZXN0Q29sO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRlc3RQaWVjZSkge1xyXG4gICAgICAgICAgICBib2FyZC5waWVjZXMgPSBib2FyZC5waWVjZXMuZmlsdGVyKChwaWVjZSkgPT4gcGllY2UgIT09IGRlc3RQaWVjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlzQm91bmQgPSBib2FyZC5pc0tpbmdJbkNoZWNrKGN1cnJlbnRDb2xvciwgYm9hcmQucGllY2VzKTtcclxuXHJcbiAgICAgICAgaWYgKHNyY1BpZWNlKSB7XHJcbiAgICAgICAgICAgIHNyY1BpZWNlLnBvaW50LmNvbCA9IGNvbDtcclxuICAgICAgICAgICAgc3JjUGllY2UucG9pbnQucm93ID0gcm93O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRlc3RQaWVjZSkge1xyXG4gICAgICAgICAgICBib2FyZC5waWVjZXMucHVzaChkZXN0UGllY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGlzQm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmb3JtYXQoXHJcbiAgICAgICAgc291cmNlUG9pbnQ6IFBvaW50LFxyXG4gICAgICAgIGRlc3RQb2ludDogUG9pbnQsXHJcbiAgICAgICAgcmV2ZXJ0ZWQ6IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGlmIChyZXZlcnRlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2VYID0gMTA0IC0gc291cmNlUG9pbnQuY29sO1xyXG4gICAgICAgICAgICBjb25zdCBkZXN0WCA9IDEwNCAtIGRlc3RQb2ludC5jb2w7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKHNvdXJjZVgpICtcclxuICAgICAgICAgICAgICAgIChzb3VyY2VQb2ludC5yb3cgKyAxKSArXHJcbiAgICAgICAgICAgICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKGRlc3RYKSArXHJcbiAgICAgICAgICAgICAgICAoZGVzdFBvaW50LnJvdyArIDEpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaW5jcmVtZW50WCA9IDk3O1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShzb3VyY2VQb2ludC5jb2wgKyBpbmNyZW1lbnRYKSArXHJcbiAgICAgICAgICAgICAgICAoTWF0aC5hYnMoc291cmNlUG9pbnQucm93IC0gNykgKyAxKSArXHJcbiAgICAgICAgICAgICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKGRlc3RQb2ludC5jb2wgKyBpbmNyZW1lbnRYKSArXHJcbiAgICAgICAgICAgICAgICAoTWF0aC5hYnMoZGVzdFBvaW50LnJvdyAtIDcpICsgMSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0cmFuc2xhdGVDb29yZHNUb0luZGV4KGNvb3Jkczogc3RyaW5nLCByZXZlcnRlZDogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCB4QXhpczogbnVtYmVyO1xyXG4gICAgICAgIGxldCB5QXhpczogbnVtYmVyO1xyXG4gICAgICAgIGlmIChyZXZlcnRlZCkge1xyXG4gICAgICAgICAgICB4QXhpcyA9IDEwNCAtIGNvb3Jkcy5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgICAgICB5QXhpcyA9ICtjb29yZHMuY2hhckF0KDEpIC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB4QXhpcyA9IGNvb3Jkcy5jaGFyQ29kZUF0KDApIC0gOTc7XHJcbiAgICAgICAgICAgIHlBeGlzID0gTWF0aC5hYnMoK2Nvb3Jkcy5jaGFyQXQoMSkgLSA4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgTW92ZVRyYW5zbGF0aW9uKHhBeGlzLCB5QXhpcywgcmV2ZXJ0ZWQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==