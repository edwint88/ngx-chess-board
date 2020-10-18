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
var Board = /** @class */ (function () {
    function Board() {
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
        for (var i = 0; i < 8; ++i) {
            this.board[i] = [];
            for (var j = 0; j < 8; ++j) {
                this.board[i][j] = 0;
            }
        }
    }
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    Board.prototype.isXYInPossibleMoves = /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    function (row, col) {
        return this.possibleMoves.some((/**
         * @param {?} move
         * @return {?}
         */
        function (move) { return move.row === row && move.col === col; }));
    };
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    Board.prototype.isXYInPossibleCaptures = /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    function (row, col) {
        return this.possibleCaptures.some((/**
         * @param {?} capture
         * @return {?}
         */
        function (capture) { return capture.row === row && capture.col === col; }));
    };
    /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    Board.prototype.isXYInSourceMove = /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    function (i, j) {
        return this.lastMoveSrc && this.lastMoveSrc.row === i && this.lastMoveSrc.col === j;
    };
    /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    Board.prototype.isXYInDestMove = /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    function (i, j) {
        return this.lastMoveDest && this.lastMoveDest.row === i && this.lastMoveDest.col === j;
    };
    /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    Board.prototype.isXYInActiveMove = /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    function (i, j) {
        return this.activePiece && this.activePiece.point.row === i && this.activePiece.point.col === j;
    };
    /**
     * @param {?} point
     * @return {?}
     */
    Board.prototype.isPointInPossibleMoves = /**
     * @param {?} point
     * @return {?}
     */
    function (point) {
        return this.possibleMoves.some((/**
         * @param {?} move
         * @return {?}
         */
        function (move) { return move.row === point.row && move.col === point.col; }));
    };
    /**
     * @param {?} point
     * @return {?}
     */
    Board.prototype.isPointInPossibleCaptures = /**
     * @param {?} point
     * @return {?}
     */
    function (point) {
        return this.possibleCaptures.some((/**
         * @param {?} capture
         * @return {?}
         */
        function (capture) { return capture.row === point.row && capture.col === point.col; }));
    };
    /**
     * @return {?}
     */
    Board.prototype.reset = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    Board.prototype.reverse = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.reverted = !this.reverted;
        this.activePiece = null;
        this.possibleMoves = [];
        this.possibleCaptures = [];
        this.pieces.forEach((/**
         * @param {?} piece
         * @return {?}
         */
        function (piece) { return _this.reversePoint(piece.point); }));
        this.reversePoint(this.lastMoveSrc);
        if (this.enPassantPoint && this.enPassantPiece) {
            this.reversePoint(this.enPassantPoint);
        }
    };
    /**
     * @return {?}
     */
    Board.prototype.clone = /**
     * @return {?}
     */
    function () {
        return cloneDeep(this);
    };
    /**
     * @param {?} row
     * @param {?} col
     * @param {?} enemyColor
     * @return {?}
     */
    Board.prototype.isFieldTakenByEnemy = /**
     * @param {?} row
     * @param {?} col
     * @param {?} enemyColor
     * @return {?}
     */
    function (row, col, enemyColor) {
        if (row > 7 || row < 0 || col > 7 || col < 0) {
            return false;
        }
        return this.pieces.some((/**
         * @param {?} piece
         * @return {?}
         */
        function (piece) { return piece.point.col === col && piece.point.row === row && piece.color === enemyColor; }));
    };
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    Board.prototype.isFieldEmpty = /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    function (row, col) {
        if (row > 7 || row < 0 || col > 7 || col < 0) {
            return false;
        }
        return !this.pieces.some((/**
         * @param {?} piece
         * @return {?}
         */
        function (piece) { return piece.point.col === col && piece.point.row === row; }));
    };
    /**
     * @param {?} row
     * @param {?} col
     * @param {?} color
     * @return {?}
     */
    Board.prototype.isFieldUnderAttack = /**
     * @param {?} row
     * @param {?} col
     * @param {?} color
     * @return {?}
     */
    function (row, col, color) {
        return this.pieces
            .filter((/**
         * @param {?} piece
         * @return {?}
         */
        function (piece) { return piece.color === color; }))
            .some((/**
         * @param {?} piece
         * @return {?}
         */
        function (piece) { return piece.getCoveredFields().some((/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return field.col === col && field.row === row; })); }));
    };
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    Board.prototype.getPieceByField = /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    function (row, col) {
        if (this.isFieldEmpty(row, col)) {
            //   throw new Error('Piece not found');
            return undefined;
        }
        return this.pieces.find((/**
         * @param {?} piece
         * @return {?}
         */
        function (piece) { return piece.point.col === col && piece.point.row === row; }));
    };
    /**
     * @param {?} color
     * @param {?} pieces
     * @return {?}
     */
    Board.prototype.isKingInCheck = /**
     * @param {?} color
     * @param {?} pieces
     * @return {?}
     */
    function (color, pieces) {
        /** @type {?} */
        var king = pieces.find((/**
         * @param {?} piece
         * @return {?}
         */
        function (piece) { return piece.color === color && piece instanceof King; }));
        if (king) {
            return pieces.some((/**
             * @param {?} piece
             * @return {?}
             */
            function (piece) {
                return piece
                    .getPossibleCaptures()
                    .some((/**
                 * @param {?} point
                 * @return {?}
                 */
                function (point) { return point.col === king.point.col && point.row === king.point.row; })) &&
                    piece.color !== color;
            }));
        }
        return false;
    };
    /**
     * @param {?} color
     * @return {?}
     */
    Board.prototype.getKingByColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        return (/** @type {?} */ (this.pieces.find((/**
         * @param {?} piece
         * @return {?}
         */
        function (piece) { return piece instanceof King && piece.color === color; }))));
    };
    /**
     * @param {?} color
     * @return {?}
     */
    Board.prototype.getCastleFENString = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        /** @type {?} */
        var king = this.getKingByColor(color);
        if (king.isMovedAlready) {
            return '';
        }
        /** @type {?} */
        var fen = '';
        /** @type {?} */
        var leftRook = this.getPieceByField(king.point.row, 0);
        /** @type {?} */
        var rightRook = this.getPieceByField(king.point.row, 7);
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
    };
    /**
     * @return {?}
     */
    Board.prototype.getEnPassantFENString = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    Board.prototype.calculateFEN = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fen = '';
        var _loop_1 = function (i) {
            /** @type {?} */
            var emptyFields = 0;
            var _loop_2 = function (j) {
                /** @type {?} */
                var foundPiece = this_1.pieces.find((/**
                 * @param {?} piece
                 * @return {?}
                 */
                function (piece) { return piece.point.col === j && piece.point.row === i; }));
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
            };
            for (var j = 0; j < 8; ++j) {
                _loop_2(j);
            }
            if (emptyFields > 0) {
                fen += emptyFields;
            }
            fen += '/';
        };
        var this_1 = this;
        for (var i = 0; i < 8; ++i) {
            _loop_1(i);
        }
        fen = fen.substr(0, fen.length - 1);
        if (this.reverted) {
            fen = fen.split('').reverse().join('');
        }
        fen += ' ' + (this.currentWhitePlayer ? 'w' : 'b');
        /** @type {?} */
        var whiteEnPassant = this.getCastleFENString(Color.WHITE);
        /** @type {?} */
        var blackEnPassant = this.getCastleFENString(Color.BLACK);
        /** @type {?} */
        var concatedEnPassant = whiteEnPassant + blackEnPassant;
        if (!concatedEnPassant) {
            concatedEnPassant = '-';
        }
        fen += ' ' + concatedEnPassant;
        fen += ' ' + this.getEnPassantFENString();
        fen += ' ' + 0;
        fen += ' ' + this.fullMoveCount;
        this.fen = fen;
    };
    /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    Board.prototype.isXYInPointSelection = /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    function (i, j) {
        return false;
    };
    /**
     * @private
     * @param {?} point
     * @return {?}
     */
    Board.prototype.reversePoint = /**
     * @private
     * @param {?} point
     * @return {?}
     */
    function (point) {
        if (point) {
            point.row = Math.abs(point.row - 7);
            point.col = Math.abs(point.col - 7);
        }
    };
    return Board;
}());
export { Board };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hlc3MtYm9hcmQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2JvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNuQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckM7SUFvQkk7UUFuQkEsVUFBSyxHQUFlLEVBQUUsQ0FBQztRQUN2QixXQUFNLEdBQVksRUFBRSxDQUFDO1FBRXJCLG1CQUFjLEdBQVUsSUFBSSxDQUFDO1FBQzdCLG1CQUFjLEdBQVUsSUFBSSxDQUFDO1FBQzdCLGdCQUFXLEdBQVUsSUFBSSxDQUFDO1FBQzFCLGlCQUFZLEdBQVUsSUFBSSxDQUFDO1FBSTNCLHFCQUFnQixHQUFVLEVBQUUsQ0FBQztRQUM3QixrQkFBYSxHQUFZLEVBQUUsQ0FBQztRQUc1Qix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUlkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkIs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QzFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVELG9DQUFvQjs7Ozs7SUFBcEIsVUFBcUIsQ0FBUyxFQUFFLENBQVM7UUFDckMsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7Ozs7O0lBRU8sNEJBQVk7Ozs7O0lBQXBCLFVBQXFCLEtBQVk7UUFDN0IsSUFBSSxLQUFLLEVBQUU7WUFDUCxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQW5RRCxJQW1RQzs7OztJQWxRRyxzQkFBdUI7O0lBQ3ZCLHVCQUFxQjs7SUFFckIsK0JBQTZCOztJQUM3QiwrQkFBNkI7O0lBQzdCLDRCQUEwQjs7SUFDMUIsNkJBQTJCOztJQUMzQiw0QkFBbUI7O0lBRW5CLGlDQUEwQjs7SUFDMUIsaUNBQTZCOztJQUM3Qiw4QkFBNEI7O0lBQzVCLGlDQUEwQjs7SUFFMUIsbUNBQTBCOztJQUMxQix5QkFBaUI7O0lBQ2pCLDhCQUFrQjs7SUFDbEIsb0JBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBCaXNob3AgfSBmcm9tICcuL3BpZWNlcy9iaXNob3AnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4vcGllY2VzL2NvbG9yJztcclxuaW1wb3J0IHsgS2luZyB9IGZyb20gJy4vcGllY2VzL2tpbmcnO1xyXG5pbXBvcnQgeyBLbmlnaHQgfSBmcm9tICcuL3BpZWNlcy9rbmlnaHQnO1xyXG5pbXBvcnQgeyBQYXduIH0gZnJvbSAnLi9waWVjZXMvcGF3bic7XHJcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSAnLi9waWVjZXMvcGllY2UnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcGllY2VzL3BvaW50JztcclxuaW1wb3J0IHsgUXVlZW4gfSBmcm9tICcuL3BpZWNlcy9xdWVlbic7XHJcbmltcG9ydCB7IFJvb2sgfSBmcm9tICcuL3BpZWNlcy9yb29rJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCb2FyZCB7XHJcbiAgICBib2FyZDogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgcGllY2VzOiBQaWVjZVtdID0gW107XHJcblxyXG4gICAgZW5QYXNzYW50UG9pbnQ6IFBvaW50ID0gbnVsbDtcclxuICAgIGVuUGFzc2FudFBpZWNlOiBQaWVjZSA9IG51bGw7XHJcbiAgICBsYXN0TW92ZVNyYzogUG9pbnQgPSBudWxsO1xyXG4gICAgbGFzdE1vdmVEZXN0OiBQb2ludCA9IG51bGw7XHJcbiAgICBhY3RpdmVQaWVjZTogUGllY2U7XHJcblxyXG4gICAgYmxhY2tLaW5nQ2hlY2tlZDogYm9vbGVhbjtcclxuICAgIHBvc3NpYmxlQ2FwdHVyZXM6IGFueVtdID0gW107XHJcbiAgICBwb3NzaWJsZU1vdmVzOiBQb2ludFtdID0gW107XHJcbiAgICB3aGl0ZUtpbmdDaGVja2VkOiBib29sZWFuO1xyXG5cclxuICAgIGN1cnJlbnRXaGl0ZVBsYXllciA9IHRydWU7XHJcbiAgICByZXZlcnRlZCA9IGZhbHNlO1xyXG4gICAgZnVsbE1vdmVDb3VudCA9IDE7XHJcbiAgICBmZW46IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc1hZSW5Qb3NzaWJsZU1vdmVzKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3NpYmxlTW92ZXMuc29tZSgobW92ZSkgPT4gbW92ZS5yb3cgPT09IHJvdyAmJiBtb3ZlLmNvbCA9PT0gY29sKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1hZSW5Qb3NzaWJsZUNhcHR1cmVzKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3NpYmxlQ2FwdHVyZXMuc29tZSgoY2FwdHVyZSkgPT4gY2FwdHVyZS5yb3cgPT09IHJvdyAmJiBjYXB0dXJlLmNvbCA9PT0gY29sKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1hZSW5Tb3VyY2VNb3ZlKGk6IG51bWJlciwgajogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdE1vdmVTcmMgJiYgdGhpcy5sYXN0TW92ZVNyYy5yb3cgPT09IGkgJiYgdGhpcy5sYXN0TW92ZVNyYy5jb2wgPT09IGo7XHJcbiAgICB9XHJcblxyXG4gICAgaXNYWUluRGVzdE1vdmUoaTogbnVtYmVyLCBqOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0TW92ZURlc3QgJiYgdGhpcy5sYXN0TW92ZURlc3Qucm93ID09PSBpICYmIHRoaXMubGFzdE1vdmVEZXN0LmNvbCA9PT0gajtcclxuICAgIH1cclxuXHJcbiAgICBpc1hZSW5BY3RpdmVNb3ZlKGk6IG51bWJlciwgajogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlUGllY2UgJiYgdGhpcy5hY3RpdmVQaWVjZS5wb2ludC5yb3cgPT09IGkgJiYgdGhpcy5hY3RpdmVQaWVjZS5wb2ludC5jb2wgPT09IGo7XHJcbiAgICB9XHJcblxyXG4gICAgaXNQb2ludEluUG9zc2libGVNb3Zlcyhwb2ludDogUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NzaWJsZU1vdmVzLnNvbWUoKG1vdmUpID0+IG1vdmUucm93ID09PSBwb2ludC5yb3cgJiYgbW92ZS5jb2wgPT09IHBvaW50LmNvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNQb2ludEluUG9zc2libGVDYXB0dXJlcyhwb2ludDogUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NzaWJsZUNhcHR1cmVzLnNvbWUoKGNhcHR1cmUpID0+IGNhcHR1cmUucm93ID09PSBwb2ludC5yb3cgJiYgY2FwdHVyZS5jb2wgPT09IHBvaW50LmNvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0TW92ZURlc3QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGFzdE1vdmVTcmMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMud2hpdGVLaW5nQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmxhY2tLaW5nQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucG9zc2libGVDYXB0dXJlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucG9zc2libGVNb3ZlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUGllY2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmV2ZXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRXaGl0ZVBsYXllciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lblBhc3NhbnRQb2ludCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lblBhc3NhbnRQaWVjZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mdWxsTW92ZUNvdW50ID0gMTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZUZFTigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldmVyc2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZXZlcnRlZCA9ICF0aGlzLnJldmVydGVkO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUGllY2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucG9zc2libGVNb3ZlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucG9zc2libGVDYXB0dXJlcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnBpZWNlcy5mb3JFYWNoKChwaWVjZTogUGllY2UpID0+IHRoaXMucmV2ZXJzZVBvaW50KHBpZWNlLnBvaW50KSk7XHJcblxyXG4gICAgICAgIHRoaXMucmV2ZXJzZVBvaW50KHRoaXMubGFzdE1vdmVTcmMpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lblBhc3NhbnRQb2ludCAmJiB0aGlzLmVuUGFzc2FudFBpZWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmV2ZXJzZVBvaW50KHRoaXMuZW5QYXNzYW50UG9pbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpOiBCb2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIGNsb25lRGVlcCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0ZpZWxkVGFrZW5CeUVuZW15KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgZW5lbXlDb2xvcjogQ29sb3IpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAocm93ID4gNyB8fCByb3cgPCAwIHx8IGNvbCA+IDcgfHwgY29sIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnBpZWNlcy5zb21lKFxyXG4gICAgICAgICAgICAocGllY2UpID0+IHBpZWNlLnBvaW50LmNvbCA9PT0gY29sICYmIHBpZWNlLnBvaW50LnJvdyA9PT0gcm93ICYmIHBpZWNlLmNvbG9yID09PSBlbmVteUNvbG9yXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0ZpZWxkRW1wdHkocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHJvdyA+IDcgfHwgcm93IDwgMCB8fCBjb2wgPiA3IHx8IGNvbCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gIXRoaXMucGllY2VzLnNvbWUoKHBpZWNlKSA9PiBwaWVjZS5wb2ludC5jb2wgPT09IGNvbCAmJiBwaWVjZS5wb2ludC5yb3cgPT09IHJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGaWVsZFVuZGVyQXR0YWNrKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgY29sb3I6IENvbG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGllY2VzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHBpZWNlKSA9PiBwaWVjZS5jb2xvciA9PT0gY29sb3IpXHJcbiAgICAgICAgICAgIC5zb21lKChwaWVjZSkgPT4gcGllY2UuZ2V0Q292ZXJlZEZpZWxkcygpLnNvbWUoKGZpZWxkKSA9PiBmaWVsZC5jb2wgPT09IGNvbCAmJiBmaWVsZC5yb3cgPT09IHJvdykpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBpZWNlQnlGaWVsZChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBQaWVjZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGaWVsZEVtcHR5KHJvdywgY29sKSkge1xyXG4gICAgICAgICAgICAvLyAgIHRocm93IG5ldyBFcnJvcignUGllY2Ugbm90IGZvdW5kJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5waWVjZXMuZmluZCgocGllY2UpID0+IHBpZWNlLnBvaW50LmNvbCA9PT0gY29sICYmIHBpZWNlLnBvaW50LnJvdyA9PT0gcm93KTtcclxuICAgIH1cclxuXHJcbiAgICBpc0tpbmdJbkNoZWNrKGNvbG9yOiBDb2xvciwgcGllY2VzOiBQaWVjZVtdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qga2luZyA9IHBpZWNlcy5maW5kKChwaWVjZSkgPT4gcGllY2UuY29sb3IgPT09IGNvbG9yICYmIHBpZWNlIGluc3RhbmNlb2YgS2luZyk7XHJcblxyXG4gICAgICAgIGlmIChraW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwaWVjZXMuc29tZShcclxuICAgICAgICAgICAgICAgIChwaWVjZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBwaWVjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0UG9zc2libGVDYXB0dXJlcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zb21lKChwb2ludCkgPT4gcG9pbnQuY29sID09PSBraW5nLnBvaW50LmNvbCAmJiBwb2ludC5yb3cgPT09IGtpbmcucG9pbnQucm93KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBpZWNlLmNvbG9yICE9PSBjb2xvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0S2luZ0J5Q29sb3IoY29sb3I6IENvbG9yKTogS2luZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGllY2VzLmZpbmQoKHBpZWNlKSA9PiBwaWVjZSBpbnN0YW5jZW9mIEtpbmcgJiYgcGllY2UuY29sb3IgPT09IGNvbG9yKSBhcyBLaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhc3RsZUZFTlN0cmluZyhjb2xvcjogQ29sb3IpIHtcclxuICAgICAgICBjb25zdCBraW5nID0gdGhpcy5nZXRLaW5nQnlDb2xvcihjb2xvcik7XHJcblxyXG4gICAgICAgIGlmIChraW5nLmlzTW92ZWRBbHJlYWR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmZW4gPSAnJztcclxuICAgICAgICBjb25zdCBsZWZ0Um9vayA9IHRoaXMuZ2V0UGllY2VCeUZpZWxkKGtpbmcucG9pbnQucm93LCAwKTtcclxuICAgICAgICBjb25zdCByaWdodFJvb2sgPSB0aGlzLmdldFBpZWNlQnlGaWVsZChraW5nLnBvaW50LnJvdywgNyk7XHJcblxyXG4gICAgICAgIGlmIChyaWdodFJvb2sgaW5zdGFuY2VvZiBSb29rICYmIHJpZ2h0Um9vay5jb2xvciA9PT0gY29sb3IpIHtcclxuICAgICAgICAgICAgaWYgKCFyaWdodFJvb2suaXNNb3ZlZEFscmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIGZlbiArPSB0aGlzLnJldmVydGVkID8gJ3EnIDogJ2snO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGVmdFJvb2sgaW5zdGFuY2VvZiBSb29rICYmIGxlZnRSb29rLmNvbG9yID09PSBjb2xvcikge1xyXG4gICAgICAgICAgICBpZiAoIWxlZnRSb29rLmlzTW92ZWRBbHJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBmZW4gKz0gdGhpcy5yZXZlcnRlZCA/ICdrJyA6ICdxJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmVuID0gZmVuLnNwbGl0KCcnKS5zb3J0KCkuam9pbignJyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yID09PSBDb2xvci5CTEFDSyA/IGZlbiA6IGZlbi50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVuUGFzc2FudEZFTlN0cmluZygpIHtcclxuICAgICAgICBpZiAodGhpcy5lblBhc3NhbnRQb2ludCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZXZlcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMTA0IC0gdGhpcy5lblBhc3NhbnRQb2ludC5jb2wpICsgKHRoaXMuZW5QYXNzYW50UG9pbnQucm93ICsgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIHRoaXMuZW5QYXNzYW50UG9pbnQuY29sKSArIChNYXRoLmFicyh0aGlzLmVuUGFzc2FudFBvaW50LnJvdyAtIDcpICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJy0nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVGRU4oKSB7XHJcbiAgICAgICAgbGV0IGZlbiA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBlbXB0eUZpZWxkcyA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3VuZFBpZWNlID0gdGhpcy5waWVjZXMuZmluZCgocGllY2UpID0+IHBpZWNlLnBvaW50LmNvbCA9PT0gaiAmJiBwaWVjZS5wb2ludC5yb3cgPT09IGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kUGllY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW1wdHlGaWVsZHMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlbiArPSBlbXB0eUZpZWxkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHlGaWVsZHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kUGllY2UgaW5zdGFuY2VvZiBSb29rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlbiArPSBmb3VuZFBpZWNlLmNvbG9yID09PSBDb2xvci5CTEFDSyA/ICdyJyA6ICdSJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmRQaWVjZSBpbnN0YW5jZW9mIEtuaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVuICs9IGZvdW5kUGllY2UuY29sb3IgPT09IENvbG9yLkJMQUNLID8gJ24nIDogJ04nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kUGllY2UgaW5zdGFuY2VvZiBCaXNob3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZW4gKz0gZm91bmRQaWVjZS5jb2xvciA9PT0gQ29sb3IuQkxBQ0sgPyAnYicgOiAnQic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZFBpZWNlIGluc3RhbmNlb2YgUXVlZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVuICs9IGZvdW5kUGllY2UuY29sb3IgPT09IENvbG9yLkJMQUNLID8gJ3EnIDogJ1EnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZFBpZWNlIGluc3RhbmNlb2YgS2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVuICs9IGZvdW5kUGllY2UuY29sb3IgPT09IENvbG9yLkJMQUNLID8gJ2snIDogJ0snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kUGllY2UgaW5zdGFuY2VvZiBQYXduKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVuICs9IGZvdW5kUGllY2UuY29sb3IgPT09IENvbG9yLkJMQUNLID8gJ3AnIDogJ1AnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICArK2VtcHR5RmllbGRzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZW1wdHlGaWVsZHMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmZW4gKz0gZW1wdHlGaWVsZHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZlbiArPSAnLyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmZW4gPSBmZW4uc3Vic3RyKDAsIGZlbi5sZW5ndGggLSAxKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmV2ZXJ0ZWQpIHtcclxuICAgICAgICAgICAgZmVuID0gZmVuLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmZW4gKz0gJyAnICsgKHRoaXMuY3VycmVudFdoaXRlUGxheWVyID8gJ3cnIDogJ2InKTtcclxuICAgICAgICBjb25zdCB3aGl0ZUVuUGFzc2FudCA9IHRoaXMuZ2V0Q2FzdGxlRkVOU3RyaW5nKENvbG9yLldISVRFKTtcclxuICAgICAgICBjb25zdCBibGFja0VuUGFzc2FudCA9IHRoaXMuZ2V0Q2FzdGxlRkVOU3RyaW5nKENvbG9yLkJMQUNLKTtcclxuICAgICAgICBsZXQgY29uY2F0ZWRFblBhc3NhbnQgPSB3aGl0ZUVuUGFzc2FudCArIGJsYWNrRW5QYXNzYW50O1xyXG4gICAgICAgIGlmICghY29uY2F0ZWRFblBhc3NhbnQpIHtcclxuICAgICAgICAgICAgY29uY2F0ZWRFblBhc3NhbnQgPSAnLSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmZW4gKz0gJyAnICsgY29uY2F0ZWRFblBhc3NhbnQ7XHJcbiAgICAgICAgZmVuICs9ICcgJyArIHRoaXMuZ2V0RW5QYXNzYW50RkVOU3RyaW5nKCk7XHJcbiAgICAgICAgZmVuICs9ICcgJyArIDA7XHJcbiAgICAgICAgZmVuICs9ICcgJyArIHRoaXMuZnVsbE1vdmVDb3VudDtcclxuICAgICAgICB0aGlzLmZlbiA9IGZlbjtcclxuICAgIH1cclxuXHJcbiAgICBpc1hZSW5Qb2ludFNlbGVjdGlvbihpOiBudW1iZXIsIGo6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJldmVyc2VQb2ludChwb2ludDogUG9pbnQpIHtcclxuICAgICAgICBpZiAocG9pbnQpIHtcclxuICAgICAgICAgICAgcG9pbnQucm93ID0gTWF0aC5hYnMocG9pbnQucm93IC0gNyk7XHJcbiAgICAgICAgICAgIHBvaW50LmNvbCA9IE1hdGguYWJzKHBvaW50LmNvbCAtIDcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=