/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/board.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { cloneDeep } from 'lodash';
import { Bishop } from './pieces/bishop';
import { Color } from './pieces/color';
import { King } from './pieces/king';
import { Knight } from './pieces/knight';
import { Pawn } from './pieces/pawn';
import { Queen } from './pieces/queen';
import { Rook } from './pieces/rook';
export class Board {
    constructor() {
        this.board = [];
        this.pieces = [];
        this.enPassantPoint = null;
        this.enPassantPiece = null;
        this.lastMoveSrc = null;
        this.lastMoveDest = null;
        this.possibleCaptures = [];
        this.possibleMoves = [];
        this.currentWhitePlayer = true;
        this.reverted = false;
        this.fullMoveCount = 1;
        for (let i = 0; i < 8; ++i) {
            this.board[i] = [];
            for (let j = 0; j < 8; ++j) {
                this.board[i][j] = 0;
            }
        }
    }
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    isXYInPossibleMoves(row, col) {
        return this.possibleMoves.some((/**
         * @param {?} move
         * @return {?}
         */
        (move) => move.row === row && move.col === col));
    }
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    isXYInPossibleCaptures(row, col) {
        return this.possibleCaptures.some((/**
         * @param {?} capture
         * @return {?}
         */
        (capture) => capture.row === row && capture.col === col));
    }
    /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    isXYInSourceMove(i, j) {
        return this.lastMoveSrc && this.lastMoveSrc.row === i && this.lastMoveSrc.col === j;
    }
    /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    isXYInDestMove(i, j) {
        return this.lastMoveDest && this.lastMoveDest.row === i && this.lastMoveDest.col === j;
    }
    /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    isXYInActiveMove(i, j) {
        return this.activePiece && this.activePiece.point.row === i && this.activePiece.point.col === j;
    }
    /**
     * @param {?} point
     * @return {?}
     */
    isPointInPossibleMoves(point) {
        return this.possibleMoves.some((/**
         * @param {?} move
         * @return {?}
         */
        (move) => move.row === point.row && move.col === point.col));
    }
    /**
     * @param {?} point
     * @return {?}
     */
    isPointInPossibleCaptures(point) {
        return this.possibleCaptures.some((/**
         * @param {?} capture
         * @return {?}
         */
        (capture) => capture.row === point.row && capture.col === point.col));
    }
    /**
     * @return {?}
     */
    reset() {
        this.lastMoveDest = null;
        this.lastMoveSrc = null;
        this.whiteKingChecked = false;
        this.blackKingChecked = false;
        this.possibleCaptures = [];
        this.possibleMoves = [];
        this.activePiece = null;
        this.reverted = false;
        this.currentWhitePlayer = true;
        this.enPassantPoint = null;
        this.enPassantPiece = null;
        this.fullMoveCount = 1;
        this.calculateFEN();
    }
    /**
     * @return {?}
     */
    reverse() {
        this.reverted = !this.reverted;
        this.activePiece = null;
        this.possibleMoves = [];
        this.possibleCaptures = [];
        this.pieces.forEach((/**
         * @param {?} piece
         * @return {?}
         */
        (piece) => this.reversePoint(piece.point)));
        this.reversePoint(this.lastMoveSrc);
        if (this.enPassantPoint && this.enPassantPiece) {
            this.reversePoint(this.enPassantPoint);
        }
    }
    /**
     * @return {?}
     */
    clone() {
        return cloneDeep(this);
    }
    /**
     * @param {?} row
     * @param {?} col
     * @param {?} enemyColor
     * @return {?}
     */
    isFieldTakenByEnemy(row, col, enemyColor) {
        if (row > 7 || row < 0 || col > 7 || col < 0) {
            return false;
        }
        return this.pieces.some((/**
         * @param {?} piece
         * @return {?}
         */
        (piece) => piece.point.col === col && piece.point.row === row && piece.color === enemyColor));
    }
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    isFieldEmpty(row, col) {
        if (row > 7 || row < 0 || col > 7 || col < 0) {
            return false;
        }
        return !this.pieces.some((/**
         * @param {?} piece
         * @return {?}
         */
        (piece) => piece.point.col === col && piece.point.row === row));
    }
    /**
     * @param {?} row
     * @param {?} col
     * @param {?} color
     * @return {?}
     */
    isFieldUnderAttack(row, col, color) {
        return this.pieces
            .filter((/**
         * @param {?} piece
         * @return {?}
         */
        (piece) => piece.color === color))
            .some((/**
         * @param {?} piece
         * @return {?}
         */
        (piece) => piece.getCoveredFields().some((/**
         * @param {?} field
         * @return {?}
         */
        (field) => field.col === col && field.row === row))));
    }
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    getPieceByField(row, col) {
        if (this.isFieldEmpty(row, col)) {
            //   throw new Error('Piece not found');
            return undefined;
        }
        return this.pieces.find((/**
         * @param {?} piece
         * @return {?}
         */
        (piece) => piece.point.col === col && piece.point.row === row));
    }
    /**
     * @param {?} color
     * @param {?} pieces
     * @return {?}
     */
    isKingInCheck(color, pieces) {
        /** @type {?} */
        const king = pieces.find((/**
         * @param {?} piece
         * @return {?}
         */
        (piece) => piece.color === color && piece instanceof King));
        if (king) {
            return pieces.some((/**
             * @param {?} piece
             * @return {?}
             */
            (piece) => piece
                .getPossibleCaptures()
                .some((/**
             * @param {?} point
             * @return {?}
             */
            (point) => point.col === king.point.col && point.row === king.point.row)) &&
                piece.color !== color));
        }
        return false;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    getKingByColor(color) {
        return (/** @type {?} */ (this.pieces.find((/**
         * @param {?} piece
         * @return {?}
         */
        (piece) => piece instanceof King && piece.color === color))));
    }
    /**
     * @param {?} color
     * @return {?}
     */
    getCastleFENString(color) {
        /** @type {?} */
        const king = this.getKingByColor(color);
        if (king.isMovedAlready) {
            return '';
        }
        /** @type {?} */
        let fen = '';
        /** @type {?} */
        const leftRook = this.getPieceByField(king.point.row, 0);
        /** @type {?} */
        const rightRook = this.getPieceByField(king.point.row, 7);
        if (rightRook instanceof Rook && rightRook.color === color) {
            if (!rightRook.isMovedAlready) {
                fen += this.reverted ? 'q' : 'k';
            }
        }
        if (leftRook instanceof Rook && leftRook.color === color) {
            if (!leftRook.isMovedAlready) {
                fen += this.reverted ? 'k' : 'q';
            }
        }
        fen = fen.split('').sort().join('');
        return color === Color.BLACK ? fen : fen.toUpperCase();
    }
    /**
     * @return {?}
     */
    getEnPassantFENString() {
        if (this.enPassantPoint) {
            if (this.reverted) {
                return String.fromCharCode(104 - this.enPassantPoint.col) + (this.enPassantPoint.row + 1);
            }
            else {
                return String.fromCharCode(97 + this.enPassantPoint.col) + (Math.abs(this.enPassantPoint.row - 7) + 1);
            }
        }
        else {
            return '-';
        }
    }
    /**
     * @return {?}
     */
    calculateFEN() {
        /** @type {?} */
        let fen = '';
        for (let i = 0; i < 8; ++i) {
            /** @type {?} */
            let emptyFields = 0;
            for (let j = 0; j < 8; ++j) {
                /** @type {?} */
                const foundPiece = this.pieces.find((/**
                 * @param {?} piece
                 * @return {?}
                 */
                (piece) => piece.point.col === j && piece.point.row === i));
                if (foundPiece) {
                    if (emptyFields > 0) {
                        fen += emptyFields;
                        emptyFields = 0;
                    }
                    if (foundPiece instanceof Rook) {
                        fen += foundPiece.color === Color.BLACK ? 'r' : 'R';
                    }
                    else {
                        if (foundPiece instanceof Knight) {
                            fen += foundPiece.color === Color.BLACK ? 'n' : 'N';
                        }
                        else {
                            if (foundPiece instanceof Bishop) {
                                fen += foundPiece.color === Color.BLACK ? 'b' : 'B';
                            }
                            else {
                                if (foundPiece instanceof Queen) {
                                    fen += foundPiece.color === Color.BLACK ? 'q' : 'Q';
                                }
                                else {
                                    if (foundPiece instanceof King) {
                                        fen += foundPiece.color === Color.BLACK ? 'k' : 'K';
                                    }
                                    else {
                                        if (foundPiece instanceof Pawn) {
                                            fen += foundPiece.color === Color.BLACK ? 'p' : 'P';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                    ++emptyFields;
                }
            }
            if (emptyFields > 0) {
                fen += emptyFields;
            }
            fen += '/';
        }
        fen = fen.substr(0, fen.length - 1);
        if (this.reverted) {
            fen = fen.split('').reverse().join('');
        }
        fen += ' ' + (this.currentWhitePlayer ? 'w' : 'b');
        /** @type {?} */
        const whiteEnPassant = this.getCastleFENString(Color.WHITE);
        /** @type {?} */
        const blackEnPassant = this.getCastleFENString(Color.BLACK);
        /** @type {?} */
        let concatedEnPassant = whiteEnPassant + blackEnPassant;
        if (!concatedEnPassant) {
            concatedEnPassant = '-';
        }
        fen += ' ' + concatedEnPassant;
        fen += ' ' + this.getEnPassantFENString();
        fen += ' ' + 0;
        fen += ' ' + this.fullMoveCount;
        this.fen = fen;
    }
    /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    isXYInPointSelection(i, j) {
        return false;
    }
    /**
     * @private
     * @param {?} point
     * @return {?}
     */
    reversePoint(point) {
        if (point) {
            point.row = Math.abs(point.row - 7);
            point.col = Math.abs(point.col - 7);
        }
    }
}
if (false) {
    /** @type {?} */
    Board.prototype.board;
    /** @type {?} */
    Board.prototype.pieces;
    /** @type {?} */
    Board.prototype.enPassantPoint;
    /** @type {?} */
    Board.prototype.enPassantPiece;
    /** @type {?} */
    Board.prototype.lastMoveSrc;
    /** @type {?} */
    Board.prototype.lastMoveDest;
    /** @type {?} */
    Board.prototype.activePiece;
    /** @type {?} */
    Board.prototype.blackKingChecked;
    /** @type {?} */
    Board.prototype.possibleCaptures;
    /** @type {?} */
    Board.prototype.possibleMoves;
    /** @type {?} */
    Board.prototype.whiteKingChecked;
    /** @type {?} */
    Board.prototype.currentWhitePlayer;
    /** @type {?} */
    Board.prototype.reverted;
    /** @type {?} */
    Board.prototype.fullMoveCount;
    /** @type {?} */
    Board.prototype.fen;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hlc3MtYm9hcmQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2JvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNuQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckMsTUFBTSxPQUFPLEtBQUs7SUFvQmQ7UUFuQkEsVUFBSyxHQUFlLEVBQUUsQ0FBQztRQUN2QixXQUFNLEdBQVksRUFBRSxDQUFDO1FBRXJCLG1CQUFjLEdBQVUsSUFBSSxDQUFDO1FBQzdCLG1CQUFjLEdBQVUsSUFBSSxDQUFDO1FBQzdCLGdCQUFXLEdBQVUsSUFBSSxDQUFDO1FBQzFCLGlCQUFZLEdBQVUsSUFBSSxDQUFDO1FBSTNCLHFCQUFnQixHQUFVLEVBQUUsQ0FBQztRQUM3QixrQkFBYSxHQUFZLEVBQUUsQ0FBQztRQUc1Qix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUlkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxF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Q0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztDQUNKOzs7SUFsUUcsc0JBQXVCOztJQUN2Qix1QkFBcUI7O0lBRXJCLCtCQUE2Qjs7SUFDN0IsK0JBQTZCOztJQUM3Qiw0QkFBMEI7O0lBQzFCLDZCQUEyQjs7SUFDM0IsNEJBQW1COztJQUVuQixpQ0FBMEI7O0lBQzFCLGlDQUE2Qjs7SUFDN0IsOEJBQTRCOztJQUM1QixpQ0FBMEI7O0lBRTFCLG1DQUEwQjs7SUFDMUIseUJBQWlCOztJQUNqQiw4QkFBa0I7O0lBQ2xCLG9CQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQmlzaG9wIH0gZnJvbSAnLi9waWVjZXMvYmlzaG9wJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuL3BpZWNlcy9jb2xvcic7XHJcbmltcG9ydCB7IEtpbmcgfSBmcm9tICcuL3BpZWNlcy9raW5nJztcclxuaW1wb3J0IHsgS25pZ2h0IH0gZnJvbSAnLi9waWVjZXMva25pZ2h0JztcclxuaW1wb3J0IHsgUGF3biB9IGZyb20gJy4vcGllY2VzL3Bhd24nO1xyXG5pbXBvcnQgeyBQaWVjZSB9IGZyb20gJy4vcGllY2VzL3BpZWNlJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BpZWNlcy9wb2ludCc7XHJcbmltcG9ydCB7IFF1ZWVuIH0gZnJvbSAnLi9waWVjZXMvcXVlZW4nO1xyXG5pbXBvcnQgeyBSb29rIH0gZnJvbSAnLi9waWVjZXMvcm9vayc7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9hcmQge1xyXG4gICAgYm9hcmQ6IG51bWJlcltdW10gPSBbXTtcclxuICAgIHBpZWNlczogUGllY2VbXSA9IFtdO1xyXG5cclxuICAgIGVuUGFzc2FudFBvaW50OiBQb2ludCA9IG51bGw7XHJcbiAgICBlblBhc3NhbnRQaWVjZTogUGllY2UgPSBudWxsO1xyXG4gICAgbGFzdE1vdmVTcmM6IFBvaW50ID0gbnVsbDtcclxuICAgIGxhc3RNb3ZlRGVzdDogUG9pbnQgPSBudWxsO1xyXG4gICAgYWN0aXZlUGllY2U6IFBpZWNlO1xyXG5cclxuICAgIGJsYWNrS2luZ0NoZWNrZWQ6IGJvb2xlYW47XHJcbiAgICBwb3NzaWJsZUNhcHR1cmVzOiBhbnlbXSA9IFtdO1xyXG4gICAgcG9zc2libGVNb3ZlczogUG9pbnRbXSA9IFtdO1xyXG4gICAgd2hpdGVLaW5nQ2hlY2tlZDogYm9vbGVhbjtcclxuXHJcbiAgICBjdXJyZW50V2hpdGVQbGF5ZXIgPSB0cnVlO1xyXG4gICAgcmV2ZXJ0ZWQgPSBmYWxzZTtcclxuICAgIGZ1bGxNb3ZlQ291bnQgPSAxO1xyXG4gICAgZmVuOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFtpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7ICsraikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNYWUluUG9zc2libGVNb3Zlcyhyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NzaWJsZU1vdmVzLnNvbWUoKG1vdmUpID0+IG1vdmUucm93ID09PSByb3cgJiYgbW92ZS5jb2wgPT09IGNvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNYWUluUG9zc2libGVDYXB0dXJlcyhyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NzaWJsZUNhcHR1cmVzLnNvbWUoKGNhcHR1cmUpID0+IGNhcHR1cmUucm93ID09PSByb3cgJiYgY2FwdHVyZS5jb2wgPT09IGNvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNYWUluU291cmNlTW92ZShpOiBudW1iZXIsIGo6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RNb3ZlU3JjICYmIHRoaXMubGFzdE1vdmVTcmMucm93ID09PSBpICYmIHRoaXMubGFzdE1vdmVTcmMuY29sID09PSBqO1xyXG4gICAgfVxyXG5cclxuICAgIGlzWFlJbkRlc3RNb3ZlKGk6IG51bWJlciwgajogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdE1vdmVEZXN0ICYmIHRoaXMubGFzdE1vdmVEZXN0LnJvdyA9PT0gaSAmJiB0aGlzLmxhc3RNb3ZlRGVzdC5jb2wgPT09IGo7XHJcbiAgICB9XHJcblxyXG4gICAgaXNYWUluQWN0aXZlTW92ZShpOiBudW1iZXIsIGo6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVBpZWNlICYmIHRoaXMuYWN0aXZlUGllY2UucG9pbnQucm93ID09PSBpICYmIHRoaXMuYWN0aXZlUGllY2UucG9pbnQuY29sID09PSBqO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUG9pbnRJblBvc3NpYmxlTW92ZXMocG9pbnQ6IFBvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zc2libGVNb3Zlcy5zb21lKChtb3ZlKSA9PiBtb3ZlLnJvdyA9PT0gcG9pbnQucm93ICYmIG1vdmUuY29sID09PSBwb2ludC5jb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUG9pbnRJblBvc3NpYmxlQ2FwdHVyZXMocG9pbnQ6IFBvaW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zc2libGVDYXB0dXJlcy5zb21lKChjYXB0dXJlKSA9PiBjYXB0dXJlLnJvdyA9PT0gcG9pbnQucm93ICYmIGNhcHR1cmUuY29sID09PSBwb2ludC5jb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMubGFzdE1vdmVEZXN0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3RNb3ZlU3JjID0gbnVsbDtcclxuICAgICAgICB0aGlzLndoaXRlS2luZ0NoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJsYWNrS2luZ0NoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBvc3NpYmxlQ2FwdHVyZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnBvc3NpYmxlTW92ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVBpZWNlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJldmVydGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2hpdGVQbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZW5QYXNzYW50UG9pbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZW5QYXNzYW50UGllY2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnVsbE1vdmVDb3VudCA9IDE7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVGRU4oKTtcclxuICAgIH1cclxuXHJcbiAgICByZXZlcnNlKCkge1xyXG4gICAgICAgIHRoaXMucmV2ZXJ0ZWQgPSAhdGhpcy5yZXZlcnRlZDtcclxuICAgICAgICB0aGlzLmFjdGl2ZVBpZWNlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBvc3NpYmxlTW92ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnBvc3NpYmxlQ2FwdHVyZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5waWVjZXMuZm9yRWFjaCgocGllY2U6IFBpZWNlKSA9PiB0aGlzLnJldmVyc2VQb2ludChwaWVjZS5wb2ludCkpO1xyXG5cclxuICAgICAgICB0aGlzLnJldmVyc2VQb2ludCh0aGlzLmxhc3RNb3ZlU3JjKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW5QYXNzYW50UG9pbnQgJiYgdGhpcy5lblBhc3NhbnRQaWVjZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJldmVyc2VQb2ludCh0aGlzLmVuUGFzc2FudFBvaW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUoKTogQm9hcmQge1xyXG4gICAgICAgIHJldHVybiBjbG9uZURlZXAodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGaWVsZFRha2VuQnlFbmVteShyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGVuZW15Q29sb3I6IENvbG9yKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHJvdyA+IDcgfHwgcm93IDwgMCB8fCBjb2wgPiA3IHx8IGNvbCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5waWVjZXMuc29tZShcclxuICAgICAgICAgICAgKHBpZWNlKSA9PiBwaWVjZS5wb2ludC5jb2wgPT09IGNvbCAmJiBwaWVjZS5wb2ludC5yb3cgPT09IHJvdyAmJiBwaWVjZS5jb2xvciA9PT0gZW5lbXlDb2xvclxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGaWVsZEVtcHR5KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChyb3cgPiA3IHx8IHJvdyA8IDAgfHwgY29sID4gNyB8fCBjb2wgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLnBpZWNlcy5zb21lKChwaWVjZSkgPT4gcGllY2UucG9pbnQuY29sID09PSBjb2wgJiYgcGllY2UucG9pbnQucm93ID09PSByb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRmllbGRVbmRlckF0dGFjayhyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGNvbG9yOiBDb2xvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpZWNlc1xyXG4gICAgICAgICAgICAuZmlsdGVyKChwaWVjZSkgPT4gcGllY2UuY29sb3IgPT09IGNvbG9yKVxyXG4gICAgICAgICAgICAuc29tZSgocGllY2UpID0+IHBpZWNlLmdldENvdmVyZWRGaWVsZHMoKS5zb21lKChmaWVsZCkgPT4gZmllbGQuY29sID09PSBjb2wgJiYgZmllbGQucm93ID09PSByb3cpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQaWVjZUJ5RmllbGQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogUGllY2Uge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRmllbGRFbXB0eShyb3csIGNvbCkpIHtcclxuICAgICAgICAgICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ1BpZWNlIG5vdCBmb3VuZCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGllY2VzLmZpbmQoKHBpZWNlKSA9PiBwaWVjZS5wb2ludC5jb2wgPT09IGNvbCAmJiBwaWVjZS5wb2ludC5yb3cgPT09IHJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNLaW5nSW5DaGVjayhjb2xvcjogQ29sb3IsIHBpZWNlczogUGllY2VbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGtpbmcgPSBwaWVjZXMuZmluZCgocGllY2UpID0+IHBpZWNlLmNvbG9yID09PSBjb2xvciAmJiBwaWVjZSBpbnN0YW5jZW9mIEtpbmcpO1xyXG5cclxuICAgICAgICBpZiAoa2luZykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGllY2VzLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAocGllY2UpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgcGllY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldFBvc3NpYmxlQ2FwdHVyZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc29tZSgocG9pbnQpID0+IHBvaW50LmNvbCA9PT0ga2luZy5wb2ludC5jb2wgJiYgcG9pbnQucm93ID09PSBraW5nLnBvaW50LnJvdykgJiZcclxuICAgICAgICAgICAgICAgICAgICBwaWVjZS5jb2xvciAhPT0gY29sb3JcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEtpbmdCeUNvbG9yKGNvbG9yOiBDb2xvcik6IEtpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpZWNlcy5maW5kKChwaWVjZSkgPT4gcGllY2UgaW5zdGFuY2VvZiBLaW5nICYmIHBpZWNlLmNvbG9yID09PSBjb2xvcikgYXMgS2luZztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXN0bGVGRU5TdHJpbmcoY29sb3I6IENvbG9yKSB7XHJcbiAgICAgICAgY29uc3Qga2luZyA9IHRoaXMuZ2V0S2luZ0J5Q29sb3IoY29sb3IpO1xyXG5cclxuICAgICAgICBpZiAoa2luZy5pc01vdmVkQWxyZWFkeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZmVuID0gJyc7XHJcbiAgICAgICAgY29uc3QgbGVmdFJvb2sgPSB0aGlzLmdldFBpZWNlQnlGaWVsZChraW5nLnBvaW50LnJvdywgMCk7XHJcbiAgICAgICAgY29uc3QgcmlnaHRSb29rID0gdGhpcy5nZXRQaWVjZUJ5RmllbGQoa2luZy5wb2ludC5yb3csIDcpO1xyXG5cclxuICAgICAgICBpZiAocmlnaHRSb29rIGluc3RhbmNlb2YgUm9vayAmJiByaWdodFJvb2suY29sb3IgPT09IGNvbG9yKSB7XHJcbiAgICAgICAgICAgIGlmICghcmlnaHRSb29rLmlzTW92ZWRBbHJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBmZW4gKz0gdGhpcy5yZXZlcnRlZCA/ICdxJyA6ICdrJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxlZnRSb29rIGluc3RhbmNlb2YgUm9vayAmJiBsZWZ0Um9vay5jb2xvciA9PT0gY29sb3IpIHtcclxuICAgICAgICAgICAgaWYgKCFsZWZ0Um9vay5pc01vdmVkQWxyZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgZmVuICs9IHRoaXMucmV2ZXJ0ZWQgPyAnaycgOiAncSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZlbiA9IGZlbi5zcGxpdCgnJykuc29ydCgpLmpvaW4oJycpO1xyXG4gICAgICAgIHJldHVybiBjb2xvciA9PT0gQ29sb3IuQkxBQ0sgPyBmZW4gOiBmZW4udG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFblBhc3NhbnRGRU5TdHJpbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5QYXNzYW50UG9pbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmV2ZXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDEwNCAtIHRoaXMuZW5QYXNzYW50UG9pbnQuY29sKSArICh0aGlzLmVuUGFzc2FudFBvaW50LnJvdyArIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyB0aGlzLmVuUGFzc2FudFBvaW50LmNvbCkgKyAoTWF0aC5hYnModGhpcy5lblBhc3NhbnRQb2ludC5yb3cgLSA3KSArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICctJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlRkVOKCkge1xyXG4gICAgICAgIGxldCBmZW4gPSAnJztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgZW1wdHlGaWVsZHMgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7ICsraikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm91bmRQaWVjZSA9IHRoaXMucGllY2VzLmZpbmQoKHBpZWNlKSA9PiBwaWVjZS5wb2ludC5jb2wgPT09IGogJiYgcGllY2UucG9pbnQucm93ID09PSBpKTtcclxuICAgICAgICAgICAgICAgIGlmIChmb3VuZFBpZWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVtcHR5RmllbGRzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZW4gKz0gZW1wdHlGaWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5RmllbGRzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZFBpZWNlIGluc3RhbmNlb2YgUm9vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZW4gKz0gZm91bmRQaWVjZS5jb2xvciA9PT0gQ29sb3IuQkxBQ0sgPyAncicgOiAnUic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kUGllY2UgaW5zdGFuY2VvZiBLbmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlbiArPSBmb3VuZFBpZWNlLmNvbG9yID09PSBDb2xvci5CTEFDSyA/ICduJyA6ICdOJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZFBpZWNlIGluc3RhbmNlb2YgQmlzaG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVuICs9IGZvdW5kUGllY2UuY29sb3IgPT09IENvbG9yLkJMQUNLID8gJ2InIDogJ0InO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmRQaWVjZSBpbnN0YW5jZW9mIFF1ZWVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlbiArPSBmb3VuZFBpZWNlLmNvbG9yID09PSBDb2xvci5CTEFDSyA/ICdxJyA6ICdRJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmRQaWVjZSBpbnN0YW5jZW9mIEtpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlbiArPSBmb3VuZFBpZWNlLmNvbG9yID09PSBDb2xvci5CTEFDSyA/ICdrJyA6ICdLJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZFBpZWNlIGluc3RhbmNlb2YgUGF3bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlbiArPSBmb3VuZFBpZWNlLmNvbG9yID09PSBDb2xvci5CTEFDSyA/ICdwJyA6ICdQJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKytlbXB0eUZpZWxkcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGVtcHR5RmllbGRzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZmVuICs9IGVtcHR5RmllbGRzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmZW4gKz0gJy8nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmVuID0gZmVuLnN1YnN0cigwLCBmZW4ubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJldmVydGVkKSB7XHJcbiAgICAgICAgICAgIGZlbiA9IGZlbi5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmVuICs9ICcgJyArICh0aGlzLmN1cnJlbnRXaGl0ZVBsYXllciA/ICd3JyA6ICdiJyk7XHJcbiAgICAgICAgY29uc3Qgd2hpdGVFblBhc3NhbnQgPSB0aGlzLmdldENhc3RsZUZFTlN0cmluZyhDb2xvci5XSElURSk7XHJcbiAgICAgICAgY29uc3QgYmxhY2tFblBhc3NhbnQgPSB0aGlzLmdldENhc3RsZUZFTlN0cmluZyhDb2xvci5CTEFDSyk7XHJcbiAgICAgICAgbGV0IGNvbmNhdGVkRW5QYXNzYW50ID0gd2hpdGVFblBhc3NhbnQgKyBibGFja0VuUGFzc2FudDtcclxuICAgICAgICBpZiAoIWNvbmNhdGVkRW5QYXNzYW50KSB7XHJcbiAgICAgICAgICAgIGNvbmNhdGVkRW5QYXNzYW50ID0gJy0nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmVuICs9ICcgJyArIGNvbmNhdGVkRW5QYXNzYW50O1xyXG4gICAgICAgIGZlbiArPSAnICcgKyB0aGlzLmdldEVuUGFzc2FudEZFTlN0cmluZygpO1xyXG4gICAgICAgIGZlbiArPSAnICcgKyAwO1xyXG4gICAgICAgIGZlbiArPSAnICcgKyB0aGlzLmZ1bGxNb3ZlQ291bnQ7XHJcbiAgICAgICAgdGhpcy5mZW4gPSBmZW47XHJcbiAgICB9XHJcblxyXG4gICAgaXNYWUluUG9pbnRTZWxlY3Rpb24oaTogbnVtYmVyLCBqOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXZlcnNlUG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICAgICAgaWYgKHBvaW50KSB7XHJcbiAgICAgICAgICAgIHBvaW50LnJvdyA9IE1hdGguYWJzKHBvaW50LnJvdyAtIDcpO1xyXG4gICAgICAgICAgICBwb2ludC5jb2wgPSBNYXRoLmFicyhwb2ludC5jb2wgLSA3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19