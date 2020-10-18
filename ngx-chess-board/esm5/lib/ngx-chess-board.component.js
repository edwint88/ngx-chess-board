/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-chess-board.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild, } from '@angular/core';
import { BoardLoader } from './board-state-provider/board-loader';
import { BoardState } from './board-state-provider/board-state';
import { BoardStateProvider } from './board-state-provider/board-state-provider';
import { CoordsProvider } from './coords/coords-provider';
import { Arrow } from './drawing-tools/arrow';
import { Circle } from './drawing-tools/circle';
import { DrawPoint } from './drawing-tools/draw-point';
import { DrawProvider } from './drawing-tools/draw-provider';
import { HistoryMove } from './history-move-provider/history-move';
import { HistoryMoveProvider } from './history-move-provider/history-move-provider';
import { Board } from './models/board';
import { Bishop } from './models/pieces/bishop';
import { Color } from './models/pieces/color';
import { King } from './models/pieces/king';
import { Knight } from './models/pieces/knight';
import { Pawn } from './models/pieces/pawn';
import { Point } from './models/pieces/point';
import { Queen } from './models/pieces/queen';
import { Rook } from './models/pieces/rook';
import { AvailableMoveDecorator } from './piece-decorator/available-move-decorator';
import { PiecePromotionModalComponent } from './piece-promotion-modal/piece-promotion-modal.component';
import { NgxChessBoardService } from './service/ngx-chess-board.service';
import { Constants } from './utils/constants';
import { PieceIconInputManager } from './utils/inputs/piece-icon-input-manager';
import { MoveUtils } from './utils/move-utils';
import { UnicodeConstants } from './utils/unicode-constants';
/**
 * @record
 */
export function MoveChange() { }
if (false) {
    /** @type {?} */
    MoveChange.prototype.check;
    /** @type {?} */
    MoveChange.prototype.stalemate;
    /** @type {?} */
    MoveChange.prototype.checkmate;
    /** @type {?} */
    MoveChange.prototype.fen;
}
var NgxChessBoardComponent = /** @class */ (function () {
    function NgxChessBoardComponent(ngxChessBoardService) {
        this.ngxChessBoardService = ngxChessBoardService;
        this.darkTileColor = Constants.DEFAULT_DARK_TILE_COLOR;
        this.lightTileColor = Constants.DEFAULT_LIGHT_TILE_COLOR;
        this.showCoords = true;
        this.dragDisabled = false;
        this.drawDisabled = false;
        this.lightDisabled = false;
        this.darkDisabled = false;
        this.moveChange = new EventEmitter();
        this.checkmate = new EventEmitter();
        this.stalemate = new EventEmitter();
        this.selected = false;
        this.coords = new CoordsProvider();
        this.disabling = false;
        this.heightAndWidth = Constants.DEFAULT_SIZE;
        this.board = new Board();
        this.boardLoader = new BoardLoader(this.board);
        this.boardLoader.addPieces();
        this.boardStateProvider = new BoardStateProvider();
        this.moveHistoryProvider = new HistoryMoveProvider();
        this.drawProvider = new DrawProvider();
        this.pieceIconManager = new PieceIconInputManager();
    }
    Object.defineProperty(NgxChessBoardComponent.prototype, "size", {
        set: /**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            if (size &&
                size >= Constants.MIN_BOARD_SIZE &&
                size <= Constants.MAX_BOARD_SIZE) {
                this.heightAndWidth = size;
            }
            else {
                this.heightAndWidth = Constants.DEFAULT_SIZE;
            }
            this.drawProvider.clear();
            this.calculatePieceSize();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxChessBoardComponent.prototype, "pieceIcons", {
        set: /**
         * @param {?} pieceIcons
         * @return {?}
         */
        function (pieceIcons) {
            this.pieceIconManager.pieceIconInput = pieceIcons;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    NgxChessBoardComponent.prototype.onRightClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxChessBoardComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ((changes.lightDisabled &&
            this.lightDisabled &&
            this.board.currentWhitePlayer) ||
            (changes.darkDisabled &&
                this.darkDisabled &&
                !this.board.currentWhitePlayer)) {
            this.board.possibleCaptures = [];
            this.board.possibleMoves = [];
        }
    };
    /**
     * @return {?}
     */
    NgxChessBoardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngxChessBoardService.componentMethodCalled$.subscribe((/**
         * @return {?}
         */
        function () {
            _this.board.reset();
        }));
        this.calculatePieceSize();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxChessBoardComponent.prototype.onMouseUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.button !== 0 && !this.drawDisabled) {
            this.addDrawPoint(event.x, event.y, event.ctrlKey, event.altKey, event.shiftKey);
            return;
        }
        this.drawProvider.clear();
        if (this.dragDisabled) {
            return;
        }
        /** @type {?} */
        var pointClicked = this.getClickPoint(event);
        if (this.board.activePiece &&
            pointClicked.isEqual(this.board.activePiece.point) &&
            this.disabling) {
            this.disableSelection();
            this.disabling = false;
            return;
        }
        /** @type {?} */
        var pieceClicked = this.getPieceByPoint(pointClicked.row, pointClicked.col);
        if (this.isPieceDisabled(pieceClicked)) {
            return;
        }
        if (this.selected) {
            this.handleClickEvent(pointClicked);
            //   this.possibleMoves = activePiece.getPossibleMoves();
        }
        else {
            if (pieceClicked) {
                if ((this.board.currentWhitePlayer &&
                    pieceClicked.color === Color.BLACK) ||
                    (!this.board.currentWhitePlayer &&
                        pieceClicked.color === Color.WHITE)) {
                    return;
                }
                this.prepareActivePiece(pieceClicked, pointClicked);
            }
        }
    };
    /**
     * @param {?=} promotionIndex
     * @return {?}
     */
    NgxChessBoardComponent.prototype.afterMoveActions = /**
     * @param {?=} promotionIndex
     * @return {?}
     */
    function (promotionIndex) {
        this.checkIfPawnFirstMove(this.board.activePiece);
        this.checkIfRookMoved(this.board.activePiece);
        this.checkIfKingMoved(this.board.activePiece);
        this.board.blackKingChecked = this.board.isKingInCheck(Color.BLACK, this.board.pieces);
        this.board.whiteKingChecked = this.board.isKingInCheck(Color.WHITE, this.board.pieces);
        /** @type {?} */
        var check = this.board.blackKingChecked || this.board.whiteKingChecked;
        /** @type {?} */
        var checkmate = this.checkForPossibleMoves(Color.BLACK) ||
            this.checkForPossibleMoves(Color.WHITE);
        /** @type {?} */
        var stalemate = this.checkForPat(Color.BLACK) || this.checkForPat(Color.WHITE);
        this.disabling = false;
        this.board.calculateFEN();
        /** @type {?} */
        var lastMove = this.moveHistoryProvider.getLastMove();
        if (lastMove && promotionIndex) {
            lastMove.move += promotionIndex;
        }
        this.moveChange.emit(tslib_1.__assign({}, lastMove, { check: check,
            checkmate: checkmate,
            stalemate: stalemate, fen: this.board.fen }));
    };
    /**
     * @return {?}
     */
    NgxChessBoardComponent.prototype.disableSelection = /**
     * @return {?}
     */
    function () {
        this.selected = false;
        this.board.possibleCaptures = [];
        this.board.activePiece = null;
        this.board.possibleMoves = [];
    };
    /**
     * @param {?} pieceClicked
     * @param {?} pointClicked
     * @return {?}
     */
    NgxChessBoardComponent.prototype.prepareActivePiece = /**
     * @param {?} pieceClicked
     * @param {?} pointClicked
     * @return {?}
     */
    function (pieceClicked, pointClicked) {
        this.board.activePiece = pieceClicked;
        this.selected = true;
        this.board.possibleCaptures = new AvailableMoveDecorator(pieceClicked, pointClicked, this.board.currentWhitePlayer ? Color.WHITE : Color.BLACK, this.board).getPossibleCaptures();
        this.board.possibleMoves = new AvailableMoveDecorator(pieceClicked, pointClicked, this.board.currentWhitePlayer ? Color.WHITE : Color.BLACK, this.board).getPossibleMoves();
    };
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    NgxChessBoardComponent.prototype.getPieceByPoint = /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    function (row, col) {
        row = Math.floor(row);
        col = Math.floor(col);
        return this.board.pieces.find((/**
         * @param {?} piece
         * @return {?}
         */
        function (piece) { return piece.point.col === col && piece.point.row === row; }));
    };
    /**
     * @param {?} piece
     * @return {?}
     */
    NgxChessBoardComponent.prototype.isKingChecked = /**
     * @param {?} piece
     * @return {?}
     */
    function (piece) {
        if (piece instanceof King) {
            return piece.color === Color.WHITE
                ? this.board.whiteKingChecked
                : this.board.blackKingChecked;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxChessBoardComponent.prototype.getClickPoint = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return new Point(Math.floor((event.y -
            this.boardRef.nativeElement.getBoundingClientRect().top) /
            (this.boardRef.nativeElement.getBoundingClientRect()
                .height /
                8)), Math.floor((event.x -
            this.boardRef.nativeElement.getBoundingClientRect().left) /
            (this.boardRef.nativeElement.getBoundingClientRect().width /
                8)));
    };
    /**
     * @param {?} toMovePiece
     * @param {?} newPoint
     * @param {?=} promotionIndex
     * @return {?}
     */
    NgxChessBoardComponent.prototype.movePiece = /**
     * @param {?} toMovePiece
     * @param {?} newPoint
     * @param {?=} promotionIndex
     * @return {?}
     */
    function (toMovePiece, newPoint, promotionIndex) {
        /** @type {?} */
        var destPiece = this.board.pieces.find((/**
         * @param {?} piece
         * @return {?}
         */
        function (piece) {
            return piece.point.col === newPoint.col &&
                piece.point.row === newPoint.row;
        }));
        if (destPiece && toMovePiece.color !== destPiece.color) {
            this.board.pieces = this.board.pieces.filter((/**
             * @param {?} piece
             * @return {?}
             */
            function (piece) { return piece !== destPiece; }));
        }
        else {
            if (destPiece && toMovePiece.color === destPiece.color) {
                return;
            }
        }
        /** @type {?} */
        var move = new HistoryMove(MoveUtils.format(toMovePiece.point, newPoint, this.board.reverted), toMovePiece.constant.name, toMovePiece.color === Color.WHITE ? 'white' : 'black', !!destPiece);
        this.moveHistoryProvider.addMove(move);
        if (toMovePiece instanceof King) {
            /** @type {?} */
            var squaresMoved = Math.abs(newPoint.col - toMovePiece.point.col);
            if (squaresMoved > 1) {
                if (newPoint.col < 3) {
                    /** @type {?} */
                    var leftRook = this.board.getPieceByField(toMovePiece.point.row, 0);
                    leftRook.point.col = this.board.reverted ? 2 : 3;
                }
                else {
                    /** @type {?} */
                    var rightRook = this.board.getPieceByField(toMovePiece.point.row, 7);
                    rightRook.point.col = this.board.reverted ? 4 : 5;
                }
            }
        }
        if (toMovePiece instanceof Pawn) {
            this.checkIfPawnTakesEnPassant(newPoint);
            this.checkIfPawnEnpassanted(toMovePiece, newPoint);
        }
        toMovePiece.point = newPoint;
        this.increaseFullMoveCount();
        this.board.currentWhitePlayer = !this.board.currentWhitePlayer;
        if (!this.checkForPawnPromote(toMovePiece, promotionIndex)) {
            this.afterMoveActions();
        }
    };
    /**
     * @param {?} piece
     * @return {?}
     */
    NgxChessBoardComponent.prototype.checkIfPawnFirstMove = /**
     * @param {?} piece
     * @return {?}
     */
    function (piece) {
        if (piece instanceof Pawn) {
            piece.isMovedAlready = true;
        }
    };
    /**
     * @param {?} toPromotePiece
     * @param {?=} promotionIndex
     * @return {?}
     */
    NgxChessBoardComponent.prototype.checkForPawnPromote = /**
     * @param {?} toPromotePiece
     * @param {?=} promotionIndex
     * @return {?}
     */
    function (toPromotePiece, promotionIndex) {
        if (!(toPromotePiece instanceof Pawn)) {
            return;
        }
        if (toPromotePiece.point.row === 0 || toPromotePiece.point.row === 7) {
            this.board.pieces = this.board.pieces.filter((/**
             * @param {?} piece
             * @return {?}
             */
            function (piece) { return piece !== toPromotePiece; }));
            // When we make move manually, we pass promotion index already, so we don't need
            // to acquire it from promote dialog
            if (!promotionIndex) {
                this.openPromoteDialog(toPromotePiece);
            }
            else {
                this.resolvePromotionChoice(toPromotePiece, promotionIndex);
                this.afterMoveActions(promotionIndex);
            }
            return true;
        }
    };
    /**
     * @param {?} piece
     * @return {?}
     */
    NgxChessBoardComponent.prototype.openPromoteDialog = /**
     * @param {?} piece
     * @return {?}
     */
    function (piece) {
        var _this = this;
        this.modal.open(piece.color, (/**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            _this.resolvePromotionChoice(piece, index);
            _this.afterMoveActions(index);
        }));
    };
    /**
     * @param {?} piece
     * @param {?} index
     * @return {?}
     */
    NgxChessBoardComponent.prototype.resolvePromotionChoice = /**
     * @param {?} piece
     * @param {?} index
     * @return {?}
     */
    function (piece, index) {
        /** @type {?} */
        var isWhite = piece.color === Color.WHITE;
        switch (index) {
            case 1:
                this.board.pieces.push(new Queen(piece.point, piece.color, isWhite
                    ? UnicodeConstants.WHITE_QUEEN
                    : UnicodeConstants.BLACK_QUEEN, this.board));
                break;
            case 2:
                this.board.pieces.push(new Rook(piece.point, piece.color, isWhite
                    ? UnicodeConstants.WHITE_ROOK
                    : UnicodeConstants.BLACK_ROOK, this.board));
                break;
            case 3:
                this.board.pieces.push(new Bishop(piece.point, piece.color, isWhite
                    ? UnicodeConstants.WHITE_BISHOP
                    : UnicodeConstants.BLACK_BISHOP, this.board));
                break;
            case 4:
                this.board.pieces.push(new Knight(piece.point, piece.color, isWhite
                    ? UnicodeConstants.WHITE_KNIGHT
                    : UnicodeConstants.BLACK_KNIGHT, this.board));
                break;
        }
    };
    /**
     * @return {?}
     */
    NgxChessBoardComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.boardStateProvider.clear();
        this.moveHistoryProvider.clear();
        this.boardLoader.addPieces();
        this.board.reset();
        this.coords.reset();
        this.drawProvider.clear();
    };
    /**
     * @return {?}
     */
    NgxChessBoardComponent.prototype.reverse = /**
     * @return {?}
     */
    function () {
        this.selected = false;
        this.board.reverse();
        this.coords.reverse();
    };
    /**
     * @param {?} board
     * @return {?}
     */
    NgxChessBoardComponent.prototype.updateBoard = /**
     * @param {?} board
     * @return {?}
     */
    function (board) {
        this.board = board;
        this.boardLoader.setBoard(this.board);
        this.board.possibleCaptures = [];
        this.board.possibleMoves = [];
    };
    /**
     * @return {?}
     */
    NgxChessBoardComponent.prototype.undo = /**
     * @return {?}
     */
    function () {
        if (!this.boardStateProvider.isEmpty()) {
            /** @type {?} */
            var lastBoard = this.boardStateProvider.pop().board;
            if (this.board.reverted) {
                lastBoard.reverse();
            }
            this.board = lastBoard;
            this.boardLoader.setBoard(this.board);
            this.board.possibleCaptures = [];
            this.board.possibleMoves = [];
            this.moveHistoryProvider.pop();
        }
    };
    /**
     * @return {?}
     */
    NgxChessBoardComponent.prototype.getMoveHistory = /**
     * @return {?}
     */
    function () {
        return this.moveHistoryProvider.getAll();
    };
    /**
     * @param {?} fen
     * @return {?}
     */
    NgxChessBoardComponent.prototype.setFEN = /**
     * @param {?} fen
     * @return {?}
     */
    function (fen) {
        try {
            this.boardLoader.loadFEN(fen);
            this.board.possibleCaptures = [];
            this.board.possibleMoves = [];
        }
        catch (exception) {
            this.boardLoader.addPieces();
        }
    };
    /**
     * @return {?}
     */
    NgxChessBoardComponent.prototype.getFEN = /**
     * @return {?}
     */
    function () {
        return this.board.fen;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxChessBoardComponent.prototype.dragEnded = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.source.reset();
        event.source.element.nativeElement.style.zIndex = '0';
        event.source.element.nativeElement.style.pointerEvents = 'auto';
        event.source.element.nativeElement.style.touchAction = 'auto';
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxChessBoardComponent.prototype.dragStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var style = event.source.element.nativeElement.style;
        style.position = 'relative';
        style.zIndex = '1000';
        style.touchAction = 'none';
        style.pointerEvents = 'none';
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxChessBoardComponent.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.button !== 0) {
            this.drawPoint = this.getDrawingPoint(event.x, event.y, event.ctrlKey, event.altKey, event.shiftKey);
            return;
        }
        /** @type {?} */
        var pointClicked = this.getClickPoint(event);
        this.drawProvider.clear();
        if (this.board.activePiece &&
            pointClicked.isEqual(this.board.activePiece.point)) {
            this.disabling = true;
            return;
        }
        /** @type {?} */
        var pieceClicked = this.getPieceByPoint(pointClicked.row, pointClicked.col);
        if (this.isPieceDisabled(pieceClicked)) {
            return;
        }
        if (this.selected) {
            this.handleClickEvent(pointClicked);
        }
        else {
            if (pieceClicked) {
                if ((this.board.currentWhitePlayer &&
                    pieceClicked.color === Color.BLACK) ||
                    (!this.board.currentWhitePlayer &&
                        pieceClicked.color === Color.WHITE)) {
                    return;
                }
                this.prepareActivePiece(pieceClicked, pointClicked);
            }
        }
    };
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} crtl
     * @param {?} alt
     * @param {?} shift
     * @return {?}
     */
    NgxChessBoardComponent.prototype.getDrawingPoint = /**
     * @param {?} x
     * @param {?} y
     * @param {?} crtl
     * @param {?} alt
     * @param {?} shift
     * @return {?}
     */
    function (x, y, crtl, alt, shift) {
        /** @type {?} */
        var squareSize = this.heightAndWidth / 8;
        /** @type {?} */
        var xx = Math.floor((x - this.boardRef.nativeElement.getBoundingClientRect().left) /
            squareSize);
        /** @type {?} */
        var yy = Math.floor((y - this.boardRef.nativeElement.getBoundingClientRect().top) /
            squareSize);
        /** @type {?} */
        var color = 'green';
        if (crtl || shift) {
            color = 'red';
        }
        if (alt) {
            color = 'blue';
        }
        if ((shift || crtl) && alt) {
            color = 'orange';
        }
        return new DrawPoint(Math.floor(xx * squareSize + squareSize / 2), Math.floor(yy * squareSize + squareSize / 2), color);
    };
    /**
     * @private
     * @param {?} piece
     * @return {?}
     */
    NgxChessBoardComponent.prototype.checkIfRookMoved = /**
     * @private
     * @param {?} piece
     * @return {?}
     */
    function (piece) {
        if (piece instanceof Rook) {
            piece.isMovedAlready = true;
        }
    };
    /**
     * @private
     * @param {?} piece
     * @return {?}
     */
    NgxChessBoardComponent.prototype.checkIfKingMoved = /**
     * @private
     * @param {?} piece
     * @return {?}
     */
    function (piece) {
        if (piece instanceof King) {
            piece.isMovedAlready = true;
        }
    };
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    NgxChessBoardComponent.prototype.checkForPossibleMoves = /**
     * @private
     * @param {?} color
     * @return {?}
     */
    function (color) {
        var _this = this;
        if (!this.board.pieces
            .filter((/**
         * @param {?} piece
         * @return {?}
         */
        function (piece) { return piece.color === color; }))
            .some((/**
         * @param {?} piece
         * @return {?}
         */
        function (piece) {
            return piece
                .getPossibleMoves()
                .some((/**
             * @param {?} move
             * @return {?}
             */
            function (move) {
                return !MoveUtils.willMoveCauseCheck(color, piece.point.row, piece.point.col, move.row, move.col, _this.board);
            })) ||
                piece
                    .getPossibleCaptures()
                    .some((/**
                 * @param {?} capture
                 * @return {?}
                 */
                function (capture) {
                    return !MoveUtils.willMoveCauseCheck(color, piece.point.row, piece.point.col, capture.row, capture.col, _this.board);
                }));
        }))) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    NgxChessBoardComponent.prototype.checkForPat = /**
     * @private
     * @param {?} color
     * @return {?}
     */
    function (color) {
        if (color === Color.WHITE && !this.board.whiteKingChecked) {
            return this.checkForPossibleMoves(color);
        }
        else {
            if (color === Color.BLACK && !this.board.blackKingChecked) {
                return this.checkForPossibleMoves(color);
            }
        }
    };
    /**
     * @private
     * @param {?} piece
     * @param {?} newPoint
     * @return {?}
     */
    NgxChessBoardComponent.prototype.checkIfPawnEnpassanted = /**
     * @private
     * @param {?} piece
     * @param {?} newPoint
     * @return {?}
     */
    function (piece, newPoint) {
        if (Math.abs(piece.point.row - newPoint.row) > 1) {
            this.board.enPassantPiece = piece;
            this.board.enPassantPoint = new Point((piece.point.row + newPoint.row) / 2, piece.point.col);
        }
        else {
            this.board.enPassantPoint = null;
            this.board.enPassantPiece = null;
        }
    };
    /**
     * @private
     * @param {?} newPoint
     * @return {?}
     */
    NgxChessBoardComponent.prototype.checkIfPawnTakesEnPassant = /**
     * @private
     * @param {?} newPoint
     * @return {?}
     */
    function (newPoint) {
        var _this = this;
        if (newPoint.isEqual(this.board.enPassantPoint)) {
            this.board.pieces = this.board.pieces.filter((/**
             * @param {?} piece
             * @return {?}
             */
            function (piece) { return piece !== _this.board.enPassantPiece; }));
            this.board.enPassantPoint = null;
            this.board.enPassantPiece = null;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxChessBoardComponent.prototype.saveClone = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var clone = this.board.clone();
        if (this.board.reverted) {
            clone.reverse();
        }
        this.boardStateProvider.addMove(new BoardState(clone));
    };
    /**
     * @private
     * @return {?}
     */
    NgxChessBoardComponent.prototype.saveMoveClone = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var clone = this.board.clone();
        if (this.board.reverted) {
            clone.reverse();
        }
        this.moveStateProvider.addMove(new BoardState(clone));
    };
    /**
     * @private
     * @return {?}
     */
    NgxChessBoardComponent.prototype.calculatePieceSize = /**
     * @private
     * @return {?}
     */
    function () {
        this.pieceSize = this.heightAndWidth / 10;
    };
    /**
     * @private
     * @return {?}
     */
    NgxChessBoardComponent.prototype.increaseFullMoveCount = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.board.currentWhitePlayer) {
            ++this.board.fullMoveCount;
        }
    };
    /**
     * @private
     * @param {?} pointClicked
     * @return {?}
     */
    NgxChessBoardComponent.prototype.handleClickEvent = /**
     * @private
     * @param {?} pointClicked
     * @return {?}
     */
    function (pointClicked) {
        if (this.board.isPointInPossibleMoves(pointClicked) ||
            this.board.isPointInPossibleCaptures(pointClicked)) {
            this.saveClone();
            this.board.lastMoveSrc = new Point(this.board.activePiece.point.row, this.board.activePiece.point.col);
            this.board.lastMoveDest = pointClicked;
            this.movePiece(this.board.activePiece, pointClicked);
        }
        this.disableSelection();
        /** @type {?} */
        var pieceClicked = this.getPieceByPoint(pointClicked.row, pointClicked.col);
        if (pieceClicked) {
            if ((this.board.currentWhitePlayer &&
                pieceClicked.color === Color.BLACK) ||
                (!this.board.currentWhitePlayer &&
                    pieceClicked.color === Color.WHITE)) {
                return;
            }
            this.prepareActivePiece(pieceClicked, pointClicked);
        }
    };
    /**
     * @private
     * @param {?} x
     * @param {?} y
     * @param {?} crtl
     * @param {?} alt
     * @param {?} shift
     * @return {?}
     */
    NgxChessBoardComponent.prototype.addDrawPoint = /**
     * @private
     * @param {?} x
     * @param {?} y
     * @param {?} crtl
     * @param {?} alt
     * @param {?} shift
     * @return {?}
     */
    function (x, y, crtl, alt, shift) {
        /** @type {?} */
        var upPoint = this.getDrawingPoint(x, y, crtl, alt, shift);
        if (this.drawPoint.isEqual(upPoint)) {
            /** @type {?} */
            var circle = new Circle();
            circle.drawPoint = upPoint;
            if (!this.drawProvider.containsCircle(circle)) {
                this.drawProvider.addCircle(circle);
            }
            else {
                this.drawProvider.reomveCircle(circle);
            }
        }
        else {
            /** @type {?} */
            var arrow = new Arrow();
            arrow.start = this.drawPoint;
            arrow.end = upPoint;
            if (!this.drawProvider.containsArrow(arrow)) {
                this.drawProvider.addArrow(arrow);
            }
            else {
                this.drawProvider.removeArrow(arrow);
            }
        }
    };
    /**
     * @param {?} coords
     * @return {?}
     */
    NgxChessBoardComponent.prototype.move = /**
     * @param {?} coords
     * @return {?}
     */
    function (coords) {
        if (coords) {
            /** @type {?} */
            var sourceIndexes = MoveUtils.translateCoordsToIndex(coords.substring(0, 2), this.board.reverted);
            /** @type {?} */
            var destIndexes = MoveUtils.translateCoordsToIndex(coords.substring(2, 4), this.board.reverted);
            /** @type {?} */
            var srcPiece = this.getPieceByPoint(sourceIndexes.yAxis, sourceIndexes.xAxis);
            if (srcPiece) {
                if ((this.board.currentWhitePlayer &&
                    srcPiece.color === Color.BLACK) ||
                    (!this.board.currentWhitePlayer &&
                        srcPiece.color === Color.WHITE)) {
                    return;
                }
                this.prepareActivePiece(srcPiece, srcPiece.point);
                if (this.board.isPointInPossibleMoves(new Point(destIndexes.yAxis, destIndexes.xAxis)) ||
                    this.board.isPointInPossibleCaptures(new Point(destIndexes.yAxis, destIndexes.xAxis))) {
                    this.saveClone();
                    this.movePiece(srcPiece, new Point(destIndexes.yAxis, destIndexes.xAxis), coords.length === 5 ? +coords.substring(4, 5) : 0);
                    this.board.lastMoveSrc = new Point(sourceIndexes.yAxis, sourceIndexes.xAxis);
                    this.board.lastMoveDest = new Point(destIndexes.yAxis, destIndexes.xAxis);
                    this.disableSelection();
                }
                else {
                    this.disableSelection();
                }
            }
        }
    };
    /**
     * @param {?} piece
     * @return {?}
     */
    NgxChessBoardComponent.prototype.getCustomPieceIcons = /**
     * @param {?} piece
     * @return {?}
     */
    function (piece) {
        return JSON.parse("{ \"background-image\": \"url('" + this.pieceIconManager.getPieceIcon(piece) + "')\"}");
    };
    /**
     * @private
     * @param {?} pieceClicked
     * @return {?}
     */
    NgxChessBoardComponent.prototype.isPieceDisabled = /**
     * @private
     * @param {?} pieceClicked
     * @return {?}
     */
    function (pieceClicked) {
        if (pieceClicked && pieceClicked.point) {
            /** @type {?} */
            var foundCapture = this.board.possibleCaptures.find((/**
             * @param {?} capture
             * @return {?}
             */
            function (capture) {
                return capture.col === pieceClicked.point.col &&
                    capture.row === pieceClicked.point.row;
            }));
            if (foundCapture) {
                return false;
            }
        }
        return (pieceClicked &&
            ((this.lightDisabled && pieceClicked.color === Color.WHITE) ||
                (this.darkDisabled && pieceClicked.color === Color.BLACK)));
    };
    NgxChessBoardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-chess-board',
                    template: "<div\r\n    id=\"board\"\r\n    [style.height.px]=\"heightAndWidth\"\r\n    [style.width.px]=\"heightAndWidth\"\r\n    (pointerdown)=\"!modal.opened && onMouseDown($event)\"\r\n    (pointerup)=\"!modal.opened && onMouseUp($event)\"\r\n    #boardRef\r\n>\r\n    <div id=\"drag\">\r\n        <div\r\n            class=\"board-row\"\r\n            *ngFor=\"let row of board.board; let i = index\"\r\n        >\r\n            <div\r\n                class=\"board-col\"\r\n                [class.current-selection]=\"board.isXYInActiveMove(i,j)\"\r\n                [class.dest-move]=\"board.isXYInDestMove(i,j)\"\r\n                [class.king-check]=\" isKingChecked(getPieceByPoint(i,j))\"\r\n                [class.point-circle]=\"board.isXYInPointSelection(i, j)\"\r\n                [class.possible-capture]=\"board.isXYInPossibleCaptures(i, j)\"\r\n                [class.possible-point]=\"board.isXYInPossibleMoves(i, j)\"\r\n                [class.source-move]=\"board.isXYInSourceMove(i, j)\"\r\n                [style.background-color]=\"((i + j) % 2 === 0 ) ? lightTileColor : darkTileColor\"\r\n                *ngFor=\"let col of row; let j = index\"\r\n            >\r\n                <span\r\n                    class=\"yCoord\"\r\n                    [style.color]=\"(i % 2 === 0) ? lightTileColor : darkTileColor\"\r\n                    [style.font-size.px]=\"pieceSize / 4\"\r\n                    *ngIf=\"showCoords && j === 7\"\r\n                >\r\n                    {{coords.yCoords[i]}}\r\n                </span>\r\n                <span\r\n                    class=\"xCoord\"\r\n                    [style.color]=\"(j % 2 === 0) ? lightTileColor : darkTileColor\"\r\n                    [style.font-size.px]=\"pieceSize / 4\"\r\n                    *ngIf=\"showCoords && i === 7\"\r\n                >\r\n                    {{coords.xCoords[j]}}\r\n                </span>\r\n                <div\r\n                    *ngIf=\"getPieceByPoint(i, j) as piece\"\r\n                    style=\"height:100%; width:100%\"\r\n                >\r\n                    <div\r\n                        [cdkDragDisabled]=\"dragDisabled\"\r\n                        [innerHTML]=\"pieceIconManager.isDefaultIcons() ? getPieceByPoint(i,j).constant.icon : ''\"\r\n                        [ngClass]=\"'piece'\"\r\n                        [style.font-size]=\"pieceSize + 'px'\"\r\n                        [ngStyle]=\"pieceIconManager.isDefaultIcons() ? '' : getCustomPieceIcons(getPieceByPoint(i,j))\"\r\n                        (cdkDragEnded)=\"dragEnded($event)\"\r\n                        (cdkDragStarted)=\"dragStart($event)\"\r\n                        cdkDrag\r\n                    >\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <svg\r\n        [attr.height]=\"heightAndWidth\"\r\n        [attr.width]=\"heightAndWidth\"\r\n        style=\"position:absolute; top:0; pointer-events: none\"\r\n    >\r\n        <defs *ngFor=\"let color of ['red', 'green', 'blue', 'orange']\">\r\n            <marker\r\n                [id]=\"color + 'Arrow'\"\r\n                markerHeight=\"13\"\r\n                markerWidth=\"13\"\r\n                orient=\"auto\"\r\n                refX=\"9\"\r\n                refY=\"6\"\r\n            >\r\n                <path\r\n                    [style.fill]=\"color\"\r\n                    d=\"M2,2 L2,11 L10,6 L2,2\"\r\n                ></path>\r\n            </marker>\r\n        </defs>\r\n        <line\r\n            class=\"arrow\"\r\n            [attr.marker-end]=\"'url(#' + arrow.end.color + 'Arrow)'\"\r\n            [attr.stroke]=\"arrow.end.color\"\r\n            [attr.x1]=\"arrow.start.x\"\r\n            [attr.x2]=\"arrow.end.x\"\r\n            [attr.y1]=\"arrow.start.y\"\r\n            [attr.y2]=\"arrow.end.y\"\r\n            *ngFor=\"let arrow of drawProvider.arrows$ | async\"\r\n        ></line>\r\n        <circle\r\n            [attr.cx]=\"circle.drawPoint.x\"\r\n            [attr.cy]=\"circle.drawPoint.y\"\r\n            [attr.r]=\"heightAndWidth / 18\"\r\n            [attr.stroke]=\"circle.drawPoint.color\"\r\n            *ngFor=\"let circle of drawProvider.circles$ | async\"\r\n            fill-opacity=\"0.0\"\r\n            stroke-width=\"2\"\r\n        ></circle>\r\n    </svg>\r\n    <app-piece-promotion-modal #modal></app-piece-promotion-modal>\r\n</div>\r\n",
                    styles: ["@charset \"UTF-8\";#board{font-family:\"Courier New\",serif;position:relative}.board-row{display:block;width:100%;height:12.5%;position:relative}.board-col{position:relative;display:inline-block;width:12.5%;vertical-align:top;cursor:default;height:100%}.piece{height:100%;cursor:-webkit-grab;cursor:grab;width:100%;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;background-size:cover;justify-content:center;text-align:center;color:#000!important}.piece::after{content:\"\u200B\"}#drag{height:100%;width:100%}.possible-point{background:radial-gradient(rgba(20,85,30,.5) 19%,rgba(0,0,0,0) 20%)}.possible-capture:hover,.possible-point:hover{opacity:.4}.possible-capture{background:radial-gradient(transparent 0,transparent 80%,rgba(20,85,0,.3) 80%);box-sizing:border-box}.king-check{background:radial-gradient(ellipse at center,red 0,#e70000 25%,rgba(169,0,0,0) 89%,rgba(158,0,0,0) 100%)}.source-move{background-color:rgba(146,111,26,.79)!important}.dest-move{background-color:#b28e1a!important}.current-selection{background-color:rgba(255,255,255,.5)!important}.yCoord{position:absolute;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;cursor:pointer;right:.2em;font-family:\"Lucida Console\",Courier,monospace;box-sizing:border-box}.xCoord{position:absolute;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;cursor:pointer;left:.2em;bottom:0;font-family:\"Lucida Console\",Courier,monospace;box-sizing:border-box}.hovering{background-color:red!important}.arrow{stroke-width:2}svg{-webkit-filter:drop-shadow(1px 1px 0 #111) drop-shadow(-1px 1px 0 #111) drop-shadow(1px -1px 0 #111) drop-shadow(-1px -1px 0 #111);filter:drop-shadow(1px 1px 0 #111) drop-shadow(-1px 1px 0 #111) drop-shadow(1px -1px 0 #111) drop-shadow(-1px -1px 0 #111)}"]
                }] }
    ];
    /** @nocollapse */
    NgxChessBoardComponent.ctorParameters = function () { return [
        { type: NgxChessBoardService }
    ]; };
    NgxChessBoardComponent.propDecorators = {
        darkTileColor: [{ type: Input }],
        lightTileColor: [{ type: Input }],
        showCoords: [{ type: Input }],
        dragDisabled: [{ type: Input }],
        drawDisabled: [{ type: Input }],
        lightDisabled: [{ type: Input }],
        darkDisabled: [{ type: Input }],
        moveChange: [{ type: Output }],
        checkmate: [{ type: Output }],
        stalemate: [{ type: Output }],
        boardRef: [{ type: ViewChild, args: ['boardRef', { static: false },] }],
        modal: [{ type: ViewChild, args: ['modal', { static: false },] }],
        size: [{ type: Input, args: ['size',] }],
        pieceIcons: [{ type: Input, args: ['pieceIcons',] }],
        onRightClick: [{ type: HostListener, args: ['contextmenu', ['$event'],] }]
    };
    return NgxChessBoardComponent;
}());
export { NgxChessBoardComponent };
if (false) {
    /** @type {?} */
    NgxChessBoardComponent.prototype.darkTileColor;
    /** @type {?} */
    NgxChessBoardComponent.prototype.lightTileColor;
    /** @type {?} */
    NgxChessBoardComponent.prototype.showCoords;
    /** @type {?} */
    NgxChessBoardComponent.prototype.dragDisabled;
    /** @type {?} */
    NgxChessBoardComponent.prototype.drawDisabled;
    /** @type {?} */
    NgxChessBoardComponent.prototype.lightDisabled;
    /** @type {?} */
    NgxChessBoardComponent.prototype.darkDisabled;
    /** @type {?} */
    NgxChessBoardComponent.prototype.moveChange;
    /** @type {?} */
    NgxChessBoardComponent.prototype.checkmate;
    /** @type {?} */
    NgxChessBoardComponent.prototype.stalemate;
    /** @type {?} */
    NgxChessBoardComponent.prototype.pieceSize;
    /** @type {?} */
    NgxChessBoardComponent.prototype.selected;
    /** @type {?} */
    NgxChessBoardComponent.prototype.boardRef;
    /** @type {?} */
    NgxChessBoardComponent.prototype.modal;
    /** @type {?} */
    NgxChessBoardComponent.prototype.board;
    /** @type {?} */
    NgxChessBoardComponent.prototype.boardStateProvider;
    /** @type {?} */
    NgxChessBoardComponent.prototype.moveStateProvider;
    /** @type {?} */
    NgxChessBoardComponent.prototype.moveHistoryProvider;
    /** @type {?} */
    NgxChessBoardComponent.prototype.boardLoader;
    /** @type {?} */
    NgxChessBoardComponent.prototype.coords;
    /** @type {?} */
    NgxChessBoardComponent.prototype.disabling;
    /** @type {?} */
    NgxChessBoardComponent.prototype.drawProvider;
    /** @type {?} */
    NgxChessBoardComponent.prototype.drawPoint;
    /** @type {?} */
    NgxChessBoardComponent.prototype.pieceIconManager;
    /** @type {?} */
    NgxChessBoardComponent.prototype.heightAndWidth;
    /**
     * @type {?}
     * @private
     */
    NgxChessBoardComponent.prototype.ngxChessBoardService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoZXNzLWJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2hlc3MtYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUVqRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFN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d0M7O0lBWXhDLGdEQUFnRDs7Ozs7SUFWcEMsc0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrRHJhZ0VuZCwgQ2RrRHJhZ1N0YXJ0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSG9zdExpc3RlbmVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCb2FyZExvYWRlciB9IGZyb20gJy4vYm9hcmQtc3RhdGUtcHJvdmlkZXIvYm9hcmQtbG9hZGVyJztcclxuaW1wb3J0IHsgQm9hcmRTdGF0ZSB9IGZyb20gJy4vYm9hcmQtc3RhdGUtcHJvdmlkZXIvYm9hcmQtc3RhdGUnO1xyXG5pbXBvcnQgeyBCb2FyZFN0YXRlUHJvdmlkZXIgfSBmcm9tICcuL2JvYXJkLXN0YXRlLXByb3ZpZGVyL2JvYXJkLXN0YXRlLXByb3ZpZGVyJztcclxuaW1wb3J0IHsgTW92ZVN0YXRlUHJvdmlkZXIgfSBmcm9tICcuL2JvYXJkLXN0YXRlLXByb3ZpZGVyL21vdmUtc3RhdGUtcHJvdmlkZXInO1xyXG5pbXBvcnQgeyBDb29yZHNQcm92aWRlciB9IGZyb20gJy4vY29vcmRzL2Nvb3Jkcy1wcm92aWRlcic7XHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSAnLi9kcmF3aW5nLXRvb2xzL2Fycm93JztcclxuaW1wb3J0IHsgQ2lyY2xlIH0gZnJvbSAnLi9kcmF3aW5nLXRvb2xzL2NpcmNsZSc7XHJcbmltcG9ydCB7IERyYXdQb2ludCB9IGZyb20gJy4vZHJhd2luZy10b29scy9kcmF3LXBvaW50JztcclxuaW1wb3J0IHsgRHJhd1Byb3ZpZGVyIH0gZnJvbSAnLi9kcmF3aW5nLXRvb2xzL2RyYXctcHJvdmlkZXInO1xyXG5pbXBvcnQgeyBIaXN0b3J5TW92ZSB9IGZyb20gJy4vaGlzdG9yeS1tb3ZlLXByb3ZpZGVyL2hpc3RvcnktbW92ZSc7XHJcbmltcG9ydCB7IEhpc3RvcnlNb3ZlUHJvdmlkZXIgfSBmcm9tICcuL2hpc3RvcnktbW92ZS1wcm92aWRlci9oaXN0b3J5LW1vdmUtcHJvdmlkZXInO1xyXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vbW9kZWxzL2JvYXJkJztcclxuaW1wb3J0IHsgQmlzaG9wIH0gZnJvbSAnLi9tb2RlbHMvcGllY2VzL2Jpc2hvcCc7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9tb2RlbHMvcGllY2VzL2NvbG9yJztcclxuaW1wb3J0IHsgS2luZyB9IGZyb20gJy4vbW9kZWxzL3BpZWNlcy9raW5nJztcclxuaW1wb3J0IHsgS25pZ2h0IH0gZnJvbSAnLi9tb2RlbHMvcGllY2VzL2tuaWdodCc7XHJcbmltcG9ydCB7IFBhd24gfSBmcm9tICcuL21vZGVscy9waWVjZXMvcGF3bic7XHJcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSAnLi9tb2RlbHMvcGllY2VzL3BpZWNlJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL21vZGVscy9waWVjZXMvcG9pbnQnO1xyXG5pbXBvcnQgeyBRdWVlbiB9IGZyb20gJy4vbW9kZWxzL3BpZWNlcy9xdWVlbic7XHJcbmltcG9ydCB7IFJvb2sgfSBmcm9tICcuL21vZGVscy9waWVjZXMvcm9vayc7XHJcbmltcG9ydCB7IE5neENoZXNzQm9hcmRWaWV3IH0gZnJvbSAnLi9uZ3gtY2hlc3MtYm9hcmQtdmlldyc7XHJcbmltcG9ydCB7IEF2YWlsYWJsZU1vdmVEZWNvcmF0b3IgfSBmcm9tICcuL3BpZWNlLWRlY29yYXRvci9hdmFpbGFibGUtbW92ZS1kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBQaWVjZVByb21vdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9waWVjZS1wcm9tb3Rpb24tbW9kYWwvcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neENoZXNzQm9hcmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL25neC1jaGVzcy1ib2FyZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBQaWVjZUljb25JbnB1dCB9IGZyb20gJy4vdXRpbHMvaW5wdXRzL3BpZWNlLWljb24taW5wdXQnO1xyXG5pbXBvcnQgeyBQaWVjZUljb25JbnB1dE1hbmFnZXIgfSBmcm9tICcuL3V0aWxzL2lucHV0cy9waWVjZS1pY29uLWlucHV0LW1hbmFnZXInO1xyXG5pbXBvcnQgeyBNb3ZlVXRpbHMgfSBmcm9tICcuL3V0aWxzL21vdmUtdXRpbHMnO1xyXG5pbXBvcnQgeyBVbmljb2RlQ29uc3RhbnRzIH0gZnJvbSAnLi91dGlscy91bmljb2RlLWNvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVDaGFuZ2UgZXh0ZW5kcyBIaXN0b3J5TW92ZSB7XHJcbiAgICBjaGVjazogYm9vbGVhbjtcclxuICAgIHN0YWxlbWF0ZTogYm9vbGVhbjtcclxuICAgIGNoZWNrbWF0ZTogYm9vbGVhbjtcclxuICAgIGZlbjogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWNoZXNzLWJvYXJkJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtY2hlc3MtYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbmd4LWNoZXNzLWJvYXJkLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hDaGVzc0JvYXJkQ29tcG9uZW50XHJcbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBOZ3hDaGVzc0JvYXJkVmlldyB7XHJcbiAgICBASW5wdXQoKSBkYXJrVGlsZUNvbG9yID0gQ29uc3RhbnRzLkRFRkFVTFRfREFSS19USUxFX0NPTE9SO1xyXG4gICAgQElucHV0KCkgbGlnaHRUaWxlQ29sb3I6IHN0cmluZyA9IENvbnN0YW50cy5ERUZBVUxUX0xJR0hUX1RJTEVfQ09MT1I7XHJcbiAgICBASW5wdXQoKSBzaG93Q29vcmRzID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGRyYWdEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZHJhd0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBsaWdodERpc2FibGVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBkYXJrRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIEBPdXRwdXQoKSBtb3ZlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZlQ2hhbmdlPigpO1xyXG4gICAgQE91dHB1dCgpIGNoZWNrbWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICAgIEBPdXRwdXQoKSBzdGFsZW1hdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgICBwaWVjZVNpemU6IG51bWJlcjtcclxuICAgIHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICBAVmlld0NoaWxkKCdib2FyZFJlZicsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gICAgYm9hcmRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdtb2RhbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBtb2RhbDogUGllY2VQcm9tb3Rpb25Nb2RhbENvbXBvbmVudDtcclxuICAgIGJvYXJkOiBCb2FyZDtcclxuICAgIGJvYXJkU3RhdGVQcm92aWRlcjogQm9hcmRTdGF0ZVByb3ZpZGVyO1xyXG4gICAgbW92ZVN0YXRlUHJvdmlkZXI6IE1vdmVTdGF0ZVByb3ZpZGVyO1xyXG4gICAgbW92ZUhpc3RvcnlQcm92aWRlcjogSGlzdG9yeU1vdmVQcm92aWRlcjtcclxuICAgIGJvYXJkTG9hZGVyOiBCb2FyZExvYWRlcjtcclxuICAgIGNvb3JkczogQ29vcmRzUHJvdmlkZXIgPSBuZXcgQ29vcmRzUHJvdmlkZXIoKTtcclxuICAgIGRpc2FibGluZyA9IGZhbHNlO1xyXG4gICAgZHJhd1Byb3ZpZGVyOiBEcmF3UHJvdmlkZXI7XHJcbiAgICBkcmF3UG9pbnQ6IERyYXdQb2ludDtcclxuICAgIHBpZWNlSWNvbk1hbmFnZXI6IFBpZWNlSWNvbklucHV0TWFuYWdlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neENoZXNzQm9hcmRTZXJ2aWNlOiBOZ3hDaGVzc0JvYXJkU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQoKTtcclxuICAgICAgICB0aGlzLmJvYXJkTG9hZGVyID0gbmV3IEJvYXJkTG9hZGVyKHRoaXMuYm9hcmQpO1xyXG4gICAgICAgIHRoaXMuYm9hcmRMb2FkZXIuYWRkUGllY2VzKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZFN0YXRlUHJvdmlkZXIgPSBuZXcgQm9hcmRTdGF0ZVByb3ZpZGVyKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlSGlzdG9yeVByb3ZpZGVyID0gbmV3IEhpc3RvcnlNb3ZlUHJvdmlkZXIoKTtcclxuICAgICAgICB0aGlzLmRyYXdQcm92aWRlciA9IG5ldyBEcmF3UHJvdmlkZXIoKTtcclxuICAgICAgICB0aGlzLnBpZWNlSWNvbk1hbmFnZXIgPSBuZXcgUGllY2VJY29uSW5wdXRNYW5hZ2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGVpZ2h0QW5kV2lkdGg6IG51bWJlciA9IENvbnN0YW50cy5ERUZBVUxUX1NJWkU7XHJcblxyXG4gICAgQElucHV0KCdzaXplJylcclxuICAgIHB1YmxpYyBzZXQgc2l6ZShzaXplOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHNpemUgJiZcclxuICAgICAgICAgICAgc2l6ZSA+PSBDb25zdGFudHMuTUlOX0JPQVJEX1NJWkUgJiZcclxuICAgICAgICAgICAgc2l6ZSA8PSBDb25zdGFudHMuTUFYX0JPQVJEX1NJWkVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHRBbmRXaWR0aCA9IHNpemU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHRBbmRXaWR0aCA9IENvbnN0YW50cy5ERUZBVUxUX1NJWkU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJhd1Byb3ZpZGVyLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQaWVjZVNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ3BpZWNlSWNvbnMnKVxyXG4gICAgcHVibGljIHNldCBwaWVjZUljb25zKHBpZWNlSWNvbnM6IFBpZWNlSWNvbklucHV0KSB7XHJcbiAgICAgICAgdGhpcy5waWVjZUljb25NYW5hZ2VyLnBpZWNlSWNvbklucHV0ID0gcGllY2VJY29ucztcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXHJcbiAgICBvblJpZ2h0Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIChjaGFuZ2VzLmxpZ2h0RGlzYWJsZWQgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMubGlnaHREaXNhYmxlZCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIpIHx8XHJcbiAgICAgICAgICAgIChjaGFuZ2VzLmRhcmtEaXNhYmxlZCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXJrRGlzYWJsZWQgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLmJvYXJkLmN1cnJlbnRXaGl0ZVBsYXllcilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5wb3NzaWJsZUNhcHR1cmVzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucG9zc2libGVNb3ZlcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMubmd4Q2hlc3NCb2FyZFNlcnZpY2UuY29tcG9uZW50TWV0aG9kQ2FsbGVkJC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLnJlc2V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQaWVjZVNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAwICYmICF0aGlzLmRyYXdEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZERyYXdQb2ludChcclxuICAgICAgICAgICAgICAgIGV2ZW50LngsXHJcbiAgICAgICAgICAgICAgICBldmVudC55LFxyXG4gICAgICAgICAgICAgICAgZXZlbnQuY3RybEtleSxcclxuICAgICAgICAgICAgICAgIGV2ZW50LmFsdEtleSxcclxuICAgICAgICAgICAgICAgIGV2ZW50LnNoaWZ0S2V5XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd1Byb3ZpZGVyLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRyYWdEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvaW50Q2xpY2tlZCA9IHRoaXMuZ2V0Q2xpY2tQb2ludChldmVudCk7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5hY3RpdmVQaWVjZSAmJlxyXG4gICAgICAgICAgICBwb2ludENsaWNrZWQuaXNFcXVhbCh0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlLnBvaW50KSAmJlxyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwaWVjZUNsaWNrZWQgPSB0aGlzLmdldFBpZWNlQnlQb2ludChcclxuICAgICAgICAgICAgcG9pbnRDbGlja2VkLnJvdyxcclxuICAgICAgICAgICAgcG9pbnRDbGlja2VkLmNvbFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzUGllY2VEaXNhYmxlZChwaWVjZUNsaWNrZWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xpY2tFdmVudChwb2ludENsaWNrZWQpO1xyXG4gICAgICAgICAgICAvLyAgIHRoaXMucG9zc2libGVNb3ZlcyA9IGFjdGl2ZVBpZWNlLmdldFBvc3NpYmxlTW92ZXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAocGllY2VDbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuYm9hcmQuY3VycmVudFdoaXRlUGxheWVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlQ2xpY2tlZC5jb2xvciA9PT0gQ29sb3IuQkxBQ0spIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKCF0aGlzLmJvYXJkLmN1cnJlbnRXaGl0ZVBsYXllciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWVjZUNsaWNrZWQuY29sb3IgPT09IENvbG9yLldISVRFKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUFjdGl2ZVBpZWNlKHBpZWNlQ2xpY2tlZCwgcG9pbnRDbGlja2VkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZnRlck1vdmVBY3Rpb25zKHByb21vdGlvbkluZGV4PzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0lmUGF3bkZpcnN0TW92ZSh0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlKTtcclxuICAgICAgICB0aGlzLmNoZWNrSWZSb29rTW92ZWQodGhpcy5ib2FyZC5hY3RpdmVQaWVjZSk7XHJcbiAgICAgICAgdGhpcy5jaGVja0lmS2luZ01vdmVkKHRoaXMuYm9hcmQuYWN0aXZlUGllY2UpO1xyXG5cclxuICAgICAgICB0aGlzLmJvYXJkLmJsYWNrS2luZ0NoZWNrZWQgPSB0aGlzLmJvYXJkLmlzS2luZ0luQ2hlY2soXHJcbiAgICAgICAgICAgIENvbG9yLkJMQUNLLFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLnBpZWNlc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC53aGl0ZUtpbmdDaGVja2VkID0gdGhpcy5ib2FyZC5pc0tpbmdJbkNoZWNrKFxyXG4gICAgICAgICAgICBDb2xvci5XSElURSxcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5waWVjZXNcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID1cclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5ibGFja0tpbmdDaGVja2VkIHx8IHRoaXMuYm9hcmQud2hpdGVLaW5nQ2hlY2tlZDtcclxuICAgICAgICBjb25zdCBjaGVja21hdGUgPVxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRm9yUG9zc2libGVNb3ZlcyhDb2xvci5CTEFDSykgfHxcclxuICAgICAgICAgICAgdGhpcy5jaGVja0ZvclBvc3NpYmxlTW92ZXMoQ29sb3IuV0hJVEUpO1xyXG4gICAgICAgIGNvbnN0IHN0YWxlbWF0ZSA9XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JQYXQoQ29sb3IuQkxBQ0spIHx8IHRoaXMuY2hlY2tGb3JQYXQoQ29sb3IuV0hJVEUpO1xyXG5cclxuICAgICAgICB0aGlzLmRpc2FibGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYm9hcmQuY2FsY3VsYXRlRkVOKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhc3RNb3ZlID0gdGhpcy5tb3ZlSGlzdG9yeVByb3ZpZGVyLmdldExhc3RNb3ZlKCk7XHJcbiAgICAgICAgaWYgKGxhc3RNb3ZlICYmIHByb21vdGlvbkluZGV4KSB7XHJcbiAgICAgICAgICAgIGxhc3RNb3ZlLm1vdmUgKz0gcHJvbW90aW9uSW5kZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1vdmVDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIC4uLmxhc3RNb3ZlLFxyXG4gICAgICAgICAgICBjaGVjayxcclxuICAgICAgICAgICAgY2hlY2ttYXRlLFxyXG4gICAgICAgICAgICBzdGFsZW1hdGUsXHJcbiAgICAgICAgICAgIGZlbjogdGhpcy5ib2FyZC5mZW4sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZVNlbGVjdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5wb3NzaWJsZUNhcHR1cmVzID0gW107XHJcbiAgICAgICAgdGhpcy5ib2FyZC5hY3RpdmVQaWVjZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5wb3NzaWJsZU1vdmVzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJlcGFyZUFjdGl2ZVBpZWNlKHBpZWNlQ2xpY2tlZDogUGllY2UsIHBvaW50Q2xpY2tlZDogUG9pbnQpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlID0gcGllY2VDbGlja2VkO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucG9zc2libGVDYXB0dXJlcyA9IG5ldyBBdmFpbGFibGVNb3ZlRGVjb3JhdG9yKFxyXG4gICAgICAgICAgICBwaWVjZUNsaWNrZWQsXHJcbiAgICAgICAgICAgIHBvaW50Q2xpY2tlZCxcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIgPyBDb2xvci5XSElURSA6IENvbG9yLkJMQUNLLFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkXHJcbiAgICAgICAgKS5nZXRQb3NzaWJsZUNhcHR1cmVzKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5wb3NzaWJsZU1vdmVzID0gbmV3IEF2YWlsYWJsZU1vdmVEZWNvcmF0b3IoXHJcbiAgICAgICAgICAgIHBpZWNlQ2xpY2tlZCxcclxuICAgICAgICAgICAgcG9pbnRDbGlja2VkLFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmN1cnJlbnRXaGl0ZVBsYXllciA/IENvbG9yLldISVRFIDogQ29sb3IuQkxBQ0ssXHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRcclxuICAgICAgICApLmdldFBvc3NpYmxlTW92ZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQaWVjZUJ5UG9pbnQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogUGllY2Uge1xyXG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3Iocm93KTtcclxuICAgICAgICBjb2wgPSBNYXRoLmZsb29yKGNvbCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQucGllY2VzLmZpbmQoXHJcbiAgICAgICAgICAgIChwaWVjZSkgPT4gcGllY2UucG9pbnQuY29sID09PSBjb2wgJiYgcGllY2UucG9pbnQucm93ID09PSByb3dcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlzS2luZ0NoZWNrZWQocGllY2U6IFBpZWNlKSB7XHJcbiAgICAgICAgaWYgKHBpZWNlIGluc3RhbmNlb2YgS2luZykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGllY2UuY29sb3IgPT09IENvbG9yLldISVRFXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuYm9hcmQud2hpdGVLaW5nQ2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLmJvYXJkLmJsYWNrS2luZ0NoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldENsaWNrUG9pbnQoZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAgICAgKGV2ZW50LnkgLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApIC9cclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5ib2FyZFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWlnaHQgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA4KVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAgICAgKGV2ZW50LnggLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSAvXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuYm9hcmRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDgpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVQaWVjZSh0b01vdmVQaWVjZTogUGllY2UsIG5ld1BvaW50OiBQb2ludCwgcHJvbW90aW9uSW5kZXg/OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkZXN0UGllY2UgPSB0aGlzLmJvYXJkLnBpZWNlcy5maW5kKFxyXG4gICAgICAgICAgICAocGllY2UpID0+XHJcbiAgICAgICAgICAgICAgICBwaWVjZS5wb2ludC5jb2wgPT09IG5ld1BvaW50LmNvbCAmJlxyXG4gICAgICAgICAgICAgICAgcGllY2UucG9pbnQucm93ID09PSBuZXdQb2ludC5yb3dcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoZGVzdFBpZWNlICYmIHRvTW92ZVBpZWNlLmNvbG9yICE9PSBkZXN0UGllY2UuY29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5waWVjZXMgPSB0aGlzLmJvYXJkLnBpZWNlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAocGllY2UpID0+IHBpZWNlICE9PSBkZXN0UGllY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZGVzdFBpZWNlICYmIHRvTW92ZVBpZWNlLmNvbG9yID09PSBkZXN0UGllY2UuY29sb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbW92ZSA9IG5ldyBIaXN0b3J5TW92ZShcclxuICAgICAgICAgICAgTW92ZVV0aWxzLmZvcm1hdCh0b01vdmVQaWVjZS5wb2ludCwgbmV3UG9pbnQsIHRoaXMuYm9hcmQucmV2ZXJ0ZWQpLFxyXG4gICAgICAgICAgICB0b01vdmVQaWVjZS5jb25zdGFudC5uYW1lLFxyXG4gICAgICAgICAgICB0b01vdmVQaWVjZS5jb2xvciA9PT0gQ29sb3IuV0hJVEUgPyAnd2hpdGUnIDogJ2JsYWNrJyxcclxuICAgICAgICAgICAgISFkZXN0UGllY2VcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubW92ZUhpc3RvcnlQcm92aWRlci5hZGRNb3ZlKG1vdmUpO1xyXG5cclxuICAgICAgICBpZiAodG9Nb3ZlUGllY2UgaW5zdGFuY2VvZiBLaW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZXNNb3ZlZCA9IE1hdGguYWJzKG5ld1BvaW50LmNvbCAtIHRvTW92ZVBpZWNlLnBvaW50LmNvbCk7XHJcbiAgICAgICAgICAgIGlmIChzcXVhcmVzTW92ZWQgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3UG9pbnQuY29sIDwgMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRSb29rID0gdGhpcy5ib2FyZC5nZXRQaWVjZUJ5RmllbGQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvTW92ZVBpZWNlLnBvaW50LnJvdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFJvb2sucG9pbnQuY29sID0gdGhpcy5ib2FyZC5yZXZlcnRlZCA/IDIgOiAzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByaWdodFJvb2sgPSB0aGlzLmJvYXJkLmdldFBpZWNlQnlGaWVsZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Nb3ZlUGllY2UucG9pbnQucm93LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA3XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodFJvb2sucG9pbnQuY29sID0gdGhpcy5ib2FyZC5yZXZlcnRlZCA/IDQgOiA1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG9Nb3ZlUGllY2UgaW5zdGFuY2VvZiBQYXduKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJZlBhd25UYWtlc0VuUGFzc2FudChuZXdQb2ludCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJZlBhd25FbnBhc3NhbnRlZCh0b01vdmVQaWVjZSwgbmV3UG9pbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdG9Nb3ZlUGllY2UucG9pbnQgPSBuZXdQb2ludDtcclxuICAgICAgICB0aGlzLmluY3JlYXNlRnVsbE1vdmVDb3VudCgpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQuY3VycmVudFdoaXRlUGxheWVyID0gIXRoaXMuYm9hcmQuY3VycmVudFdoaXRlUGxheWVyO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tGb3JQYXduUHJvbW90ZSh0b01vdmVQaWVjZSwgcHJvbW90aW9uSW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJNb3ZlQWN0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lmUGF3bkZpcnN0TW92ZShwaWVjZTogUGllY2UpIHtcclxuICAgICAgICBpZiAocGllY2UgaW5zdGFuY2VvZiBQYXduKSB7XHJcbiAgICAgICAgICAgIHBpZWNlLmlzTW92ZWRBbHJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tGb3JQYXduUHJvbW90ZSh0b1Byb21vdGVQaWVjZTogUGllY2UsIHByb21vdGlvbkluZGV4PzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCEodG9Qcm9tb3RlUGllY2UgaW5zdGFuY2VvZiBQYXduKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG9Qcm9tb3RlUGllY2UucG9pbnQucm93ID09PSAwIHx8IHRvUHJvbW90ZVBpZWNlLnBvaW50LnJvdyA9PT0gNykge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcyA9IHRoaXMuYm9hcmQucGllY2VzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChwaWVjZSkgPT4gcGllY2UgIT09IHRvUHJvbW90ZVBpZWNlXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBXaGVuIHdlIG1ha2UgbW92ZSBtYW51YWxseSwgd2UgcGFzcyBwcm9tb3Rpb24gaW5kZXggYWxyZWFkeSwgc28gd2UgZG9uJ3QgbmVlZFxyXG4gICAgICAgICAgICAvLyB0byBhY3F1aXJlIGl0IGZyb20gcHJvbW90ZSBkaWFsb2dcclxuICAgICAgICAgICAgaWYgKCFwcm9tb3Rpb25JbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuUHJvbW90ZURpYWxvZyh0b1Byb21vdGVQaWVjZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVQcm9tb3Rpb25DaG9pY2UodG9Qcm9tb3RlUGllY2UsIHByb21vdGlvbkluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJNb3ZlQWN0aW9ucyhwcm9tb3Rpb25JbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuUHJvbW90ZURpYWxvZyhwaWVjZTogUGllY2UpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLm9wZW4ocGllY2UuY29sb3IsIChpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVQcm9tb3Rpb25DaG9pY2UocGllY2UsIGluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5hZnRlck1vdmVBY3Rpb25zKGluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlUHJvbW90aW9uQ2hvaWNlKHBpZWNlOiBQaWVjZSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGlzV2hpdGUgPSBwaWVjZS5jb2xvciA9PT0gQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBRdWVlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2UucG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1doaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFVuaWNvZGVDb25zdGFudHMuV0hJVEVfUVVFRU5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogVW5pY29kZUNvbnN0YW50cy5CTEFDS19RVUVFTixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5waWVjZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUm9vayhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2UucG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1doaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFVuaWNvZGVDb25zdGFudHMuV0hJVEVfUk9PS1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBVbmljb2RlQ29uc3RhbnRzLkJMQUNLX1JPT0ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEJpc2hvcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2UucG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1doaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFVuaWNvZGVDb25zdGFudHMuV0hJVEVfQklTSE9QXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFVuaWNvZGVDb25zdGFudHMuQkxBQ0tfQklTSE9QLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBLbmlnaHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLnBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWVjZS5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNXaGl0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBVbmljb2RlQ29uc3RhbnRzLldISVRFX0tOSUdIVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBVbmljb2RlQ29uc3RhbnRzLkJMQUNLX0tOSUdIVCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ib2FyZFN0YXRlUHJvdmlkZXIuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm1vdmVIaXN0b3J5UHJvdmlkZXIuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmJvYXJkTG9hZGVyLmFkZFBpZWNlcygpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmNvb3Jkcy5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Byb3ZpZGVyLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXJzZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5yZXZlcnNlKCk7XHJcbiAgICAgICAgdGhpcy5jb29yZHMucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUJvYXJkKGJvYXJkOiBCb2FyZCkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgICAgICB0aGlzLmJvYXJkTG9hZGVyLnNldEJvYXJkKHRoaXMuYm9hcmQpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucG9zc2libGVDYXB0dXJlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucG9zc2libGVNb3ZlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgdW5kbygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuYm9hcmRTdGF0ZVByb3ZpZGVyLmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0Qm9hcmQgPSB0aGlzLmJvYXJkU3RhdGVQcm92aWRlci5wb3AoKS5ib2FyZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmQucmV2ZXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGxhc3RCb2FyZC5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ib2FyZCA9IGxhc3RCb2FyZDtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZExvYWRlci5zZXRCb2FyZCh0aGlzLmJvYXJkKTtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5wb3NzaWJsZUNhcHR1cmVzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucG9zc2libGVNb3ZlcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVIaXN0b3J5UHJvdmlkZXIucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1vdmVIaXN0b3J5KCk6IEhpc3RvcnlNb3ZlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVIaXN0b3J5UHJvdmlkZXIuZ2V0QWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RkVOKGZlbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZExvYWRlci5sb2FkRkVOKGZlbik7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucG9zc2libGVDYXB0dXJlcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLnBvc3NpYmxlTW92ZXMgPSBbXTtcclxuICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZExvYWRlci5hZGRQaWVjZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RkVOKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZmVuO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYWdFbmRlZChldmVudDogQ2RrRHJhZ0VuZCk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnNvdXJjZS5yZXNldCgpO1xyXG4gICAgICAgIGV2ZW50LnNvdXJjZS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzAnO1xyXG4gICAgICAgIGV2ZW50LnNvdXJjZS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcclxuICAgICAgICBldmVudC5zb3VyY2UuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvdWNoQWN0aW9uID0gJ2F1dG8nO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYWdTdGFydChldmVudDogQ2RrRHJhZ1N0YXJ0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBldmVudC5zb3VyY2UuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlO1xyXG4gICAgICAgIHN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgICAgICBzdHlsZS56SW5kZXggPSAnMTAwMCc7XHJcbiAgICAgICAgc3R5bGUudG91Y2hBY3Rpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UG9pbnQgPSB0aGlzLmdldERyYXdpbmdQb2ludChcclxuICAgICAgICAgICAgICAgIGV2ZW50LngsXHJcbiAgICAgICAgICAgICAgICBldmVudC55LFxyXG4gICAgICAgICAgICAgICAgZXZlbnQuY3RybEtleSxcclxuICAgICAgICAgICAgICAgIGV2ZW50LmFsdEtleSxcclxuICAgICAgICAgICAgICAgIGV2ZW50LnNoaWZ0S2V5XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9pbnRDbGlja2VkID0gdGhpcy5nZXRDbGlja1BvaW50KGV2ZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3UHJvdmlkZXIuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlICYmXHJcbiAgICAgICAgICAgIHBvaW50Q2xpY2tlZC5pc0VxdWFsKHRoaXMuYm9hcmQuYWN0aXZlUGllY2UucG9pbnQpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGllY2VDbGlja2VkID0gdGhpcy5nZXRQaWVjZUJ5UG9pbnQoXHJcbiAgICAgICAgICAgIHBvaW50Q2xpY2tlZC5yb3csXHJcbiAgICAgICAgICAgIHBvaW50Q2xpY2tlZC5jb2xcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1BpZWNlRGlzYWJsZWQocGllY2VDbGlja2VkKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNsaWNrRXZlbnQocG9pbnRDbGlja2VkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAocGllY2VDbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuYm9hcmQuY3VycmVudFdoaXRlUGxheWVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlQ2xpY2tlZC5jb2xvciA9PT0gQ29sb3IuQkxBQ0spIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKCF0aGlzLmJvYXJkLmN1cnJlbnRXaGl0ZVBsYXllciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWVjZUNsaWNrZWQuY29sb3IgPT09IENvbG9yLldISVRFKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUFjdGl2ZVBpZWNlKHBpZWNlQ2xpY2tlZCwgcG9pbnRDbGlja2VkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXREcmF3aW5nUG9pbnQoXHJcbiAgICAgICAgeDogbnVtYmVyLFxyXG4gICAgICAgIHk6IG51bWJlcixcclxuICAgICAgICBjcnRsOiBib29sZWFuLFxyXG4gICAgICAgIGFsdDogYm9vbGVhbixcclxuICAgICAgICBzaGlmdDogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3Qgc3F1YXJlU2l6ZSA9IHRoaXMuaGVpZ2h0QW5kV2lkdGggLyA4O1xyXG4gICAgICAgIGNvbnN0IHh4ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgKHggLSB0aGlzLmJvYXJkUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgL1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlU2l6ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgeXkgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAoeSAtIHRoaXMuYm9hcmRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApIC9cclxuICAgICAgICAgICAgICAgIHNxdWFyZVNpemVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgY29sb3IgPSAnZ3JlZW4nO1xyXG5cclxuICAgICAgICBpZiAoY3J0bCB8fCBzaGlmdCkge1xyXG4gICAgICAgICAgICBjb2xvciA9ICdyZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWx0KSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJ2JsdWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHNoaWZ0IHx8IGNydGwpICYmIGFsdCkge1xyXG4gICAgICAgICAgICBjb2xvciA9ICdvcmFuZ2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IERyYXdQb2ludChcclxuICAgICAgICAgICAgTWF0aC5mbG9vcih4eCAqIHNxdWFyZVNpemUgKyBzcXVhcmVTaXplIC8gMiksXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IoeXkgKiBzcXVhcmVTaXplICsgc3F1YXJlU2l6ZSAvIDIpLFxyXG4gICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0lmUm9va01vdmVkKHBpZWNlOiBQaWVjZSkge1xyXG4gICAgICAgIGlmIChwaWVjZSBpbnN0YW5jZW9mIFJvb2spIHtcclxuICAgICAgICAgICAgcGllY2UuaXNNb3ZlZEFscmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrSWZLaW5nTW92ZWQocGllY2U6IFBpZWNlKSB7XHJcbiAgICAgICAgaWYgKHBpZWNlIGluc3RhbmNlb2YgS2luZykge1xyXG4gICAgICAgICAgICBwaWVjZS5pc01vdmVkQWxyZWFkeSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tGb3JQb3NzaWJsZU1vdmVzKGNvbG9yOiBDb2xvcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXRoaXMuYm9hcmQucGllY2VzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChwaWVjZSkgPT4gcGllY2UuY29sb3IgPT09IGNvbG9yKVxyXG4gICAgICAgICAgICAgICAgLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgKHBpZWNlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWVjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldFBvc3NpYmxlTW92ZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1vdmUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFNb3ZlVXRpbHMud2lsbE1vdmVDYXVzZUNoZWNrKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWVjZS5wb2ludC5yb3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWVjZS5wb2ludC5jb2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlLnJvdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmUuY29sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0UG9zc2libGVDYXB0dXJlcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29tZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FwdHVyZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIU1vdmVVdGlscy53aWxsTW92ZUNhdXNlQ2hlY2soXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLnBvaW50LnJvdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLnBvaW50LmNvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmUucm93LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZS5jb2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRm9yUGF0KGNvbG9yOiBDb2xvcikge1xyXG4gICAgICAgIGlmIChjb2xvciA9PT0gQ29sb3IuV0hJVEUgJiYgIXRoaXMuYm9hcmQud2hpdGVLaW5nQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja0ZvclBvc3NpYmxlTW92ZXMoY29sb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciA9PT0gQ29sb3IuQkxBQ0sgJiYgIXRoaXMuYm9hcmQuYmxhY2tLaW5nQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tGb3JQb3NzaWJsZU1vdmVzKGNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrSWZQYXduRW5wYXNzYW50ZWQocGllY2U6IFBhd24sIG5ld1BvaW50OiBQb2ludCkge1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhwaWVjZS5wb2ludC5yb3cgLSBuZXdQb2ludC5yb3cpID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmVuUGFzc2FudFBpZWNlID0gcGllY2U7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuZW5QYXNzYW50UG9pbnQgPSBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAgICAgICAocGllY2UucG9pbnQucm93ICsgbmV3UG9pbnQucm93KSAvIDIsXHJcbiAgICAgICAgICAgICAgICBwaWVjZS5wb2ludC5jb2xcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmVuUGFzc2FudFBvaW50ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5lblBhc3NhbnRQaWVjZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tJZlBhd25UYWtlc0VuUGFzc2FudChuZXdQb2ludDogUG9pbnQpIHtcclxuICAgICAgICBpZiAobmV3UG9pbnQuaXNFcXVhbCh0aGlzLmJvYXJkLmVuUGFzc2FudFBvaW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcyA9IHRoaXMuYm9hcmQucGllY2VzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChwaWVjZSkgPT4gcGllY2UgIT09IHRoaXMuYm9hcmQuZW5QYXNzYW50UGllY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5lblBhc3NhbnRQb2ludCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuZW5QYXNzYW50UGllY2UgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmVDbG9uZSgpIHtcclxuICAgICAgICBjb25zdCBjbG9uZSA9IHRoaXMuYm9hcmQuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYm9hcmQucmV2ZXJ0ZWQpIHtcclxuICAgICAgICAgICAgY2xvbmUucmV2ZXJzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJvYXJkU3RhdGVQcm92aWRlci5hZGRNb3ZlKG5ldyBCb2FyZFN0YXRlKGNsb25lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlTW92ZUNsb25lKCkge1xyXG4gICAgICAgIGNvbnN0IGNsb25lID0gdGhpcy5ib2FyZC5jbG9uZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ib2FyZC5yZXZlcnRlZCkge1xyXG4gICAgICAgICAgICBjbG9uZS5yZXZlcnNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW92ZVN0YXRlUHJvdmlkZXIuYWRkTW92ZShuZXcgQm9hcmRTdGF0ZShjbG9uZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY3VsYXRlUGllY2VTaXplKCkge1xyXG4gICAgICAgIHRoaXMucGllY2VTaXplID0gdGhpcy5oZWlnaHRBbmRXaWR0aCAvIDEwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5jcmVhc2VGdWxsTW92ZUNvdW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIpIHtcclxuICAgICAgICAgICAgKyt0aGlzLmJvYXJkLmZ1bGxNb3ZlQ291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQ2xpY2tFdmVudChwb2ludENsaWNrZWQ6IFBvaW50KSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmlzUG9pbnRJblBvc3NpYmxlTW92ZXMocG9pbnRDbGlja2VkKSB8fFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmlzUG9pbnRJblBvc3NpYmxlQ2FwdHVyZXMocG9pbnRDbGlja2VkKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVDbG9uZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmxhc3RNb3ZlU3JjID0gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5hY3RpdmVQaWVjZS5wb2ludC5yb3csXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlLnBvaW50LmNvbFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmxhc3RNb3ZlRGVzdCA9IHBvaW50Q2xpY2tlZDtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlUGllY2UodGhpcy5ib2FyZC5hY3RpdmVQaWVjZSwgcG9pbnRDbGlja2VkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzYWJsZVNlbGVjdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHBpZWNlQ2xpY2tlZCA9IHRoaXMuZ2V0UGllY2VCeVBvaW50KFxyXG4gICAgICAgICAgICBwb2ludENsaWNrZWQucm93LFxyXG4gICAgICAgICAgICBwb2ludENsaWNrZWQuY29sXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAocGllY2VDbGlja2VkKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICh0aGlzLmJvYXJkLmN1cnJlbnRXaGl0ZVBsYXllciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBpZWNlQ2xpY2tlZC5jb2xvciA9PT0gQ29sb3IuQkxBQ0spIHx8XHJcbiAgICAgICAgICAgICAgICAoIXRoaXMuYm9hcmQuY3VycmVudFdoaXRlUGxheWVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGllY2VDbGlja2VkLmNvbG9yID09PSBDb2xvci5XSElURSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUFjdGl2ZVBpZWNlKHBpZWNlQ2xpY2tlZCwgcG9pbnRDbGlja2VkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGREcmF3UG9pbnQoXHJcbiAgICAgICAgeDogbnVtYmVyLFxyXG4gICAgICAgIHk6IG51bWJlcixcclxuICAgICAgICBjcnRsOiBib29sZWFuLFxyXG4gICAgICAgIGFsdDogYm9vbGVhbixcclxuICAgICAgICBzaGlmdDogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgdXBQb2ludCA9IHRoaXMuZ2V0RHJhd2luZ1BvaW50KHgsIHksIGNydGwsIGFsdCwgc2hpZnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmRyYXdQb2ludC5pc0VxdWFsKHVwUG9pbnQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBDaXJjbGUoKTtcclxuICAgICAgICAgICAgY2lyY2xlLmRyYXdQb2ludCA9IHVwUG9pbnQ7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmF3UHJvdmlkZXIuY29udGFpbnNDaXJjbGUoY2lyY2xlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3UHJvdmlkZXIuYWRkQ2lyY2xlKGNpcmNsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQcm92aWRlci5yZW9tdmVDaXJjbGUoY2lyY2xlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gbmV3IEFycm93KCk7XHJcbiAgICAgICAgICAgIGFycm93LnN0YXJ0ID0gdGhpcy5kcmF3UG9pbnQ7XHJcbiAgICAgICAgICAgIGFycm93LmVuZCA9IHVwUG9pbnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhd1Byb3ZpZGVyLmNvbnRhaW5zQXJyb3coYXJyb3cpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQcm92aWRlci5hZGRBcnJvdyhhcnJvdyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQcm92aWRlci5yZW1vdmVBcnJvdyhhcnJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShjb29yZHM6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChjb29yZHMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlSW5kZXhlcyA9IE1vdmVVdGlscy50cmFuc2xhdGVDb29yZHNUb0luZGV4KFxyXG4gICAgICAgICAgICAgICAgY29vcmRzLnN1YnN0cmluZygwLCAyKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQucmV2ZXJ0ZWRcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc3RJbmRleGVzID0gTW92ZVV0aWxzLnRyYW5zbGF0ZUNvb3Jkc1RvSW5kZXgoXHJcbiAgICAgICAgICAgICAgICBjb29yZHMuc3Vic3RyaW5nKDIsIDQpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5yZXZlcnRlZFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3JjUGllY2UgPSB0aGlzLmdldFBpZWNlQnlQb2ludChcclxuICAgICAgICAgICAgICAgIHNvdXJjZUluZGV4ZXMueUF4aXMsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2VJbmRleGVzLnhBeGlzXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3JjUGllY2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjUGllY2UuY29sb3IgPT09IENvbG9yLkJMQUNLKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICghdGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjUGllY2UuY29sb3IgPT09IENvbG9yLldISVRFKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUFjdGl2ZVBpZWNlKHNyY1BpZWNlLCBzcmNQaWVjZS5wb2ludCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQuaXNQb2ludEluUG9zc2libGVNb3ZlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBvaW50KGRlc3RJbmRleGVzLnlBeGlzLCBkZXN0SW5kZXhlcy54QXhpcylcclxuICAgICAgICAgICAgICAgICAgICApIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5pc1BvaW50SW5Qb3NzaWJsZUNhcHR1cmVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUG9pbnQoZGVzdEluZGV4ZXMueUF4aXMsIGRlc3RJbmRleGVzLnhBeGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGllY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1BpZWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUG9pbnQoZGVzdEluZGV4ZXMueUF4aXMsIGRlc3RJbmRleGVzLnhBeGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzLmxlbmd0aCA9PT0gNSA/ICtjb29yZHMuc3Vic3RyaW5nKDQsIDUpIDogMFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQubGFzdE1vdmVTcmMgPSBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUluZGV4ZXMueUF4aXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUluZGV4ZXMueEF4aXNcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQubGFzdE1vdmVEZXN0ID0gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0SW5kZXhlcy55QXhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdEluZGV4ZXMueEF4aXNcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VzdG9tUGllY2VJY29ucyhwaWVjZTogUGllY2UpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShcclxuICAgICAgICAgICAgYHsgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwidXJsKCcke3RoaXMucGllY2VJY29uTWFuYWdlci5nZXRQaWVjZUljb24oXHJcbiAgICAgICAgICAgICAgICBwaWVjZVxyXG4gICAgICAgICAgICApfScpXCJ9YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1BpZWNlRGlzYWJsZWQocGllY2VDbGlja2VkOiBQaWVjZSkge1xyXG4gICAgICAgIGlmIChwaWVjZUNsaWNrZWQgJiYgcGllY2VDbGlja2VkLnBvaW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvdW5kQ2FwdHVyZSA9IHRoaXMuYm9hcmQucG9zc2libGVDYXB0dXJlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGNhcHR1cmUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZS5jb2wgPT09IHBpZWNlQ2xpY2tlZC5wb2ludC5jb2wgJiZcclxuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlLnJvdyA9PT0gcGllY2VDbGlja2VkLnBvaW50LnJvd1xyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvdW5kQ2FwdHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHBpZWNlQ2xpY2tlZCAmJlxyXG4gICAgICAgICAgICAoKHRoaXMubGlnaHREaXNhYmxlZCAmJiBwaWVjZUNsaWNrZWQuY29sb3IgPT09IENvbG9yLldISVRFKSB8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuZGFya0Rpc2FibGVkICYmIHBpZWNlQ2xpY2tlZC5jb2xvciA9PT0gQ29sb3IuQkxBQ0spKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19