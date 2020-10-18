/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/bishop.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Color } from './color';
import { King } from './king';
import { Piece } from './piece';
import { Point } from './point';
export class Bishop extends Piece {
    /**
     * @param {?} point
     * @param {?} color
     * @param {?} constant
     * @param {?} board
     */
    constructor(point, color, constant, board) {
        super(point, color, constant, 3, board);
    }
    /**
     * @return {?}
     */
    getPossibleMoves() {
        /** @type {?} */
        const possiblePoints = [];
        /** @type {?} */
        const row = this.point.row;
        /** @type {?} */
        const col = this.point.col;
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
            // lewa gorna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < 8; --i, ++j) {
            // prawa gorna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        for (let i = row + 1, j = col - 1; i < 8 && j >= 0; ++i, --j) {
            // lewa dolna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        for (let i = row + 1, j = col + 1; i < 8 && j < 8; ++i, ++j) {
            // prawa dolna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        return possiblePoints;
    }
    /**
     * @return {?}
     */
    getPossibleCaptures() {
        /** @type {?} */
        const possiblePoints = [];
        /** @type {?} */
        const row = this.point.row;
        /** @type {?} */
        const col = this.point.col;
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
            // lewa gorna przekatna
            if (this.board.isFieldTakenByEnemy(i, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, j)) {
                    break;
                }
            }
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < 8; --i, ++j) {
            // prawa gorna przekatna
            if (this.board.isFieldTakenByEnemy(i, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, j)) {
                    break;
                }
            }
        }
        for (let i = row + 1, j = col - 1; i < 8 && j >= 0; ++i, --j) {
            // lewa dolna przekatna
            if (this.board.isFieldTakenByEnemy(i, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, j)) {
                    break;
                }
            }
        }
        for (let i = row + 1, j = col + 1; i < 8 && j < 8; ++i, ++j) {
            // prawa dolna przekatna
            if (this.board.isFieldTakenByEnemy(i, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, j)) {
                    break;
                }
            }
        }
        return possiblePoints;
    }
    /**
     * @return {?}
     */
    getCoveredFields() {
        /** @type {?} */
        const possiblePoints = [];
        /** @type {?} */
        const row = this.point.row;
        /** @type {?} */
        const col = this.point.col;
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
            // lewa gorna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                if (!(this.board.getPieceByField(i, j) instanceof King)) {
                    possiblePoints.push(new Point(i, j));
                    break;
                }
            }
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < 8; --i, ++j) {
            // prawa gorna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                if (!(this.board.getPieceByField(i, j) instanceof King)) {
                    possiblePoints.push(new Point(i, j));
                    break;
                }
            }
        }
        for (let i = row + 1, j = col - 1; i < 8 && j >= 0; ++i, --j) {
            // lewa dolna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                if (!(this.board.getPieceByField(i, j) instanceof King)) {
                    possiblePoints.push(new Point(i, j));
                    break;
                }
            }
        }
        for (let i = row + 1, j = col + 1; i < 8 && j < 8; ++i, ++j) {
            // prawa dolna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                if (!(this.board.getPieceByField(i, j) instanceof King)) {
                    possiblePoints.push(new Point(i, j));
                    break;
                }
            }
        }
        return possiblePoints;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlzaG9wLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoZXNzLWJvYXJkLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9waWVjZXMvYmlzaG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNoQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDaEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVoQyxNQUFNLE9BQU8sTUFBTyxTQUFRLEtBQUs7Ozs7Ozs7SUFDN0IsWUFDSSxLQUFZLEVBQ1osS0FBWSxFQUNaLFFBQXVCLEVBQ3ZCLEtBQVk7UUFFWixLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxnQkFBZ0I7O2NBQ04sY0FBYyxHQUFHLEVBQUU7O2NBRW5CLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7O2NBQ3BCLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7UUFFMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMzRCx1QkFBdUI7WUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9CLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEM7aUJBQU07Z0JB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QUFjLENBQUM7SUFDMUIsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGllY2VDb25zdGFudCB9IGZyb20gJy4uLy4uL3V0aWxzL3VuaWNvZGUtY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuLi9ib2FyZCc7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9jb2xvcic7XHJcbmltcG9ydCB7IEtpbmcgfSBmcm9tICcuL2tpbmcnO1xyXG5pbXBvcnQgeyBQaWVjZSB9IGZyb20gJy4vcGllY2UnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcG9pbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJpc2hvcCBleHRlbmRzIFBpZWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHBvaW50OiBQb2ludCxcclxuICAgICAgICBjb2xvcjogQ29sb3IsXHJcbiAgICAgICAgY29uc3RhbnQ6IFBpZWNlQ29uc3RhbnQsXHJcbiAgICAgICAgYm9hcmQ6IEJvYXJkXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihwb2ludCwgY29sb3IsIGNvbnN0YW50LCAzLCBib2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zc2libGVNb3ZlcygpOiBQb2ludFtdIHtcclxuICAgICAgICBjb25zdCBwb3NzaWJsZVBvaW50cyA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCByb3cgPSB0aGlzLnBvaW50LnJvdztcclxuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLnBvaW50LmNvbDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHJvdyAtIDEsIGogPSBjb2wgLSAxOyBpID49IDAgJiYgaiA+PSAwOyAtLWksIC0taikge1xyXG4gICAgICAgICAgICAvLyBsZXdhIGdvcm5hIHByemVrYXRuYVxyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZC5pc0ZpZWxkRW1wdHkoaSwgaikpIHtcclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlUG9pbnRzLnB1c2gobmV3IFBvaW50KGksIGopKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gcm93IC0gMSwgaiA9IGNvbCArIDE7IGkgPj0gMCAmJiBqIDwgODsgLS1pLCArK2opIHtcclxuICAgICAgICAgICAgLy8gcHJhd2EgZ29ybmEgcHJ6ZWthdG5hXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkLmlzRmllbGRFbXB0eShpLCBqKSkge1xyXG4gICAgICAgICAgICAgICAgcG9zc2libGVQb2ludHMucHVzaChuZXcgUG9pbnQoaSwgaikpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSByb3cgKyAxLCBqID0gY29sIC0gMTsgaSA8IDggJiYgaiA+PSAwOyArK2ksIC0taikge1xyXG4gICAgICAgICAgICAvLyBsZXdhIGRvbG5hIHByemVrYXRuYVxyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZC5pc0ZpZWxkRW1wdHkoaSwgaikpIHtcclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlUG9pbnRzLnB1c2gobmV3IFBvaW50KGksIGopKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gcm93ICsgMSwgaiA9IGNvbCArIDE7IGkgPCA4ICYmIGogPCA4OyArK2ksICsraikge1xyXG4gICAgICAgICAgICAvLyBwcmF3YSBkb2xuYSBwcnpla2F0bmFcclxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmQuaXNGaWVsZEVtcHR5KGksIGopKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NzaWJsZVBvaW50cy5wdXNoKG5ldyBQb2ludChpLCBqKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlUG9pbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvc3NpYmxlQ2FwdHVyZXMoKSB7XHJcbiAgICAgICAgY29uc3QgcG9zc2libGVQb2ludHMgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5wb2ludC5yb3c7XHJcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy5wb2ludC5jb2w7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSByb3cgLSAxLCBqID0gY29sIC0gMTsgaSA+PSAwICYmIGogPj0gMDsgLS1pLCAtLWopIHtcclxuICAgICAgICAgICAgLy8gbGV3YSBnb3JuYSBwcnpla2F0bmFcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5pc0ZpZWxkVGFrZW5CeUVuZW15KFxyXG4gICAgICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICAgICAgaixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID09PSBDb2xvci5XSElURSA/IENvbG9yLkJMQUNLIDogQ29sb3IuV0hJVEVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NzaWJsZVBvaW50cy5wdXNoKG5ldyBQb2ludChpLCBqKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5ib2FyZC5pc0ZpZWxkRW1wdHkoaSwgaikpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHJvdyAtIDEsIGogPSBjb2wgKyAxOyBpID49IDAgJiYgaiA8IDg7IC0taSwgKytqKSB7XHJcbiAgICAgICAgICAgIC8vIHByYXdhIGdvcm5hIHByemVrYXRuYVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLmlzRmllbGRUYWtlbkJ5RW5lbXkoXHJcbiAgICAgICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgICAgICBqLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPT09IENvbG9yLldISVRFID8gQ29sb3IuQkxBQ0sgOiBDb2xvci5XSElURVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlUG9pbnRzLnB1c2gobmV3IFBvaW50KGksIGopKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJvYXJkLmlzRmllbGRFbXB0eShpLCBqKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gcm93ICsgMSwgaiA9IGNvbCAtIDE7IGkgPCA4ICYmIGogPj0gMDsgKytpLCAtLWopIHtcclxuICAgICAgICAgICAgLy8gbGV3YSBkb2xuYSBwcnpla2F0bmFcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5pc0ZpZWxkVGFrZW5CeUVuZW15KFxyXG4gICAgICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICAgICAgaixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID09PSBDb2xvci5XSElURSA/IENvbG9yLkJMQUNLIDogQ29sb3IuV0hJVEVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NzaWJsZVBvaW50cy5wdXNoKG5ldyBQb2ludChpLCBqKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5ib2FyZC5pc0ZpZWxkRW1wdHkoaSwgaikpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHJvdyArIDEsIGogPSBjb2wgKyAxOyBpIDwgOCAmJiBqIDwgODsgKytpLCArK2opIHtcclxuICAgICAgICAgICAgLy8gcHJhd2EgZG9sbmEgcHJ6ZWthdG5hXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQuaXNGaWVsZFRha2VuQnlFbmVteShcclxuICAgICAgICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgICAgICAgIGosXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9PT0gQ29sb3IuV0hJVEUgPyBDb2xvci5CTEFDSyA6IENvbG9yLldISVRFXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcG9zc2libGVQb2ludHMucHVzaChuZXcgUG9pbnQoaSwgaikpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYm9hcmQuaXNGaWVsZEVtcHR5KGksIGopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwb3NzaWJsZVBvaW50cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb3ZlcmVkRmllbGRzKCk6IFBvaW50W10ge1xyXG4gICAgICAgIGNvbnN0IHBvc3NpYmxlUG9pbnRzID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMucG9pbnQucm93O1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMucG9pbnQuY29sO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gcm93IC0gMSwgaiA9IGNvbCAtIDE7IGkgPj0gMCAmJiBqID49IDA7IC0taSwgLS1qKSB7XHJcbiAgICAgICAgICAgIC8vIGxld2EgZ29ybmEgcHJ6ZWthdG5hXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkLmlzRmllbGRFbXB0eShpLCBqKSkge1xyXG4gICAgICAgICAgICAgICAgcG9zc2libGVQb2ludHMucHVzaChuZXcgUG9pbnQoaSwgaikpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEodGhpcy5ib2FyZC5nZXRQaWVjZUJ5RmllbGQoaSwgaikgaW5zdGFuY2VvZiBLaW5nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlUG9pbnRzLnB1c2gobmV3IFBvaW50KGksIGopKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHJvdyAtIDEsIGogPSBjb2wgKyAxOyBpID49IDAgJiYgaiA8IDg7IC0taSwgKytqKSB7XHJcbiAgICAgICAgICAgIC8vIHByYXdhIGdvcm5hIHByemVrYXRuYVxyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZC5pc0ZpZWxkRW1wdHkoaSwgaikpIHtcclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlUG9pbnRzLnB1c2gobmV3IFBvaW50KGksIGopKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghKHRoaXMuYm9hcmQuZ2V0UGllY2VCeUZpZWxkKGksIGopIGluc3RhbmNlb2YgS2luZykpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZVBvaW50cy5wdXNoKG5ldyBQb2ludChpLCBqKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSByb3cgKyAxLCBqID0gY29sIC0gMTsgaSA8IDggJiYgaiA+PSAwOyArK2ksIC0taikge1xyXG4gICAgICAgICAgICAvLyBsZXdhIGRvbG5hIHByemVrYXRuYVxyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZC5pc0ZpZWxkRW1wdHkoaSwgaikpIHtcclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlUG9pbnRzLnB1c2gobmV3IFBvaW50KGksIGopKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghKHRoaXMuYm9hcmQuZ2V0UGllY2VCeUZpZWxkKGksIGopIGluc3RhbmNlb2YgS2luZykpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZVBvaW50cy5wdXNoKG5ldyBQb2ludChpLCBqKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSByb3cgKyAxLCBqID0gY29sICsgMTsgaSA8IDggJiYgaiA8IDg7ICsraSwgKytqKSB7XHJcbiAgICAgICAgICAgIC8vIHByYXdhIGRvbG5hIHByemVrYXRuYVxyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZC5pc0ZpZWxkRW1wdHkoaSwgaikpIHtcclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlUG9pbnRzLnB1c2gobmV3IFBvaW50KGksIGopKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghKHRoaXMuYm9hcmQuZ2V0UGllY2VCeUZpZWxkKGksIGopIGluc3RhbmNlb2YgS2luZykpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZVBvaW50cy5wdXNoKG5ldyBQb2ludChpLCBqKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwb3NzaWJsZVBvaW50cztcclxuICAgIH1cclxufVxyXG4iXX0=