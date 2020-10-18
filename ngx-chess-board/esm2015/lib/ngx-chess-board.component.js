/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-chess-board.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NgxChessBoardComponent {
    /**
     * @param {?} ngxChessBoardService
     */
    constructor(ngxChessBoardService) {
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
    /**
     * @param {?} size
     * @return {?}
     */
    set size(size) {
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
    }
    /**
     * @param {?} pieceIcons
     * @return {?}
     */
    set pieceIcons(pieceIcons) {
        this.pieceIconManager.pieceIconInput = pieceIcons;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onRightClick(event) {
        event.preventDefault();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ((changes.lightDisabled &&
            this.lightDisabled &&
            this.board.currentWhitePlayer) ||
            (changes.darkDisabled &&
                this.darkDisabled &&
                !this.board.currentWhitePlayer)) {
            this.board.possibleCaptures = [];
            this.board.possibleMoves = [];
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngxChessBoardService.componentMethodCalled$.subscribe((/**
         * @return {?}
         */
        () => {
            this.board.reset();
        }));
        this.calculatePieceSize();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseUp(event) {
        if (event.button !== 0 && !this.drawDisabled) {
            this.addDrawPoint(event.x, event.y, event.ctrlKey, event.altKey, event.shiftKey);
            return;
        }
        this.drawProvider.clear();
        if (this.dragDisabled) {
            return;
        }
        /** @type {?} */
        const pointClicked = this.getClickPoint(event);
        if (this.board.activePiece &&
            pointClicked.isEqual(this.board.activePiece.point) &&
            this.disabling) {
            this.disableSelection();
            this.disabling = false;
            return;
        }
        /** @type {?} */
        const pieceClicked = this.getPieceByPoint(pointClicked.row, pointClicked.col);
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
    }
    /**
     * @param {?=} promotionIndex
     * @return {?}
     */
    afterMoveActions(promotionIndex) {
        this.checkIfPawnFirstMove(this.board.activePiece);
        this.checkIfRookMoved(this.board.activePiece);
        this.checkIfKingMoved(this.board.activePiece);
        this.board.blackKingChecked = this.board.isKingInCheck(Color.BLACK, this.board.pieces);
        this.board.whiteKingChecked = this.board.isKingInCheck(Color.WHITE, this.board.pieces);
        /** @type {?} */
        const check = this.board.blackKingChecked || this.board.whiteKingChecked;
        /** @type {?} */
        const checkmate = this.checkForPossibleMoves(Color.BLACK) ||
            this.checkForPossibleMoves(Color.WHITE);
        /** @type {?} */
        const stalemate = this.checkForPat(Color.BLACK) || this.checkForPat(Color.WHITE);
        this.disabling = false;
        this.board.calculateFEN();
        /** @type {?} */
        const lastMove = this.moveHistoryProvider.getLastMove();
        if (lastMove && promotionIndex) {
            lastMove.move += promotionIndex;
        }
        this.moveChange.emit(Object.assign({}, lastMove, { check,
            checkmate,
            stalemate, fen: this.board.fen }));
    }
    /**
     * @return {?}
     */
    disableSelection() {
        this.selected = false;
        this.board.possibleCaptures = [];
        this.board.activePiece = null;
        this.board.possibleMoves = [];
    }
    /**
     * @param {?} pieceClicked
     * @param {?} pointClicked
     * @return {?}
     */
    prepareActivePiece(pieceClicked, pointClicked) {
        this.board.activePiece = pieceClicked;
        this.selected = true;
        this.board.possibleCaptures = new AvailableMoveDecorator(pieceClicked, pointClicked, this.board.currentWhitePlayer ? Color.WHITE : Color.BLACK, this.board).getPossibleCaptures();
        this.board.possibleMoves = new AvailableMoveDecorator(pieceClicked, pointClicked, this.board.currentWhitePlayer ? Color.WHITE : Color.BLACK, this.board).getPossibleMoves();
    }
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    getPieceByPoint(row, col) {
        row = Math.floor(row);
        col = Math.floor(col);
        return this.board.pieces.find((/**
         * @param {?} piece
         * @return {?}
         */
        (piece) => piece.point.col === col && piece.point.row === row));
    }
    /**
     * @param {?} piece
     * @return {?}
     */
    isKingChecked(piece) {
        if (piece instanceof King) {
            return piece.color === Color.WHITE
                ? this.board.whiteKingChecked
                : this.board.blackKingChecked;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getClickPoint(event) {
        return new Point(Math.floor((event.y -
            this.boardRef.nativeElement.getBoundingClientRect().top) /
            (this.boardRef.nativeElement.getBoundingClientRect()
                .height /
                8)), Math.floor((event.x -
            this.boardRef.nativeElement.getBoundingClientRect().left) /
            (this.boardRef.nativeElement.getBoundingClientRect().width /
                8)));
    }
    /**
     * @param {?} toMovePiece
     * @param {?} newPoint
     * @param {?=} promotionIndex
     * @return {?}
     */
    movePiece(toMovePiece, newPoint, promotionIndex) {
        /** @type {?} */
        const destPiece = this.board.pieces.find((/**
         * @param {?} piece
         * @return {?}
         */
        (piece) => piece.point.col === newPoint.col &&
            piece.point.row === newPoint.row));
        if (destPiece && toMovePiece.color !== destPiece.color) {
            this.board.pieces = this.board.pieces.filter((/**
             * @param {?} piece
             * @return {?}
             */
            (piece) => piece !== destPiece));
        }
        else {
            if (destPiece && toMovePiece.color === destPiece.color) {
                return;
            }
        }
        /** @type {?} */
        const move = new HistoryMove(MoveUtils.format(toMovePiece.point, newPoint, this.board.reverted), toMovePiece.constant.name, toMovePiece.color === Color.WHITE ? 'white' : 'black', !!destPiece);
        this.moveHistoryProvider.addMove(move);
        if (toMovePiece instanceof King) {
            /** @type {?} */
            const squaresMoved = Math.abs(newPoint.col - toMovePiece.point.col);
            if (squaresMoved > 1) {
                if (newPoint.col < 3) {
                    /** @type {?} */
                    const leftRook = this.board.getPieceByField(toMovePiece.point.row, 0);
                    leftRook.point.col = this.board.reverted ? 2 : 3;
                }
                else {
                    /** @type {?} */
                    const rightRook = this.board.getPieceByField(toMovePiece.point.row, 7);
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
    }
    /**
     * @param {?} piece
     * @return {?}
     */
    checkIfPawnFirstMove(piece) {
        if (piece instanceof Pawn) {
            piece.isMovedAlready = true;
        }
    }
    /**
     * @param {?} toPromotePiece
     * @param {?=} promotionIndex
     * @return {?}
     */
    checkForPawnPromote(toPromotePiece, promotionIndex) {
        if (!(toPromotePiece instanceof Pawn)) {
            return;
        }
        if (toPromotePiece.point.row === 0 || toPromotePiece.point.row === 7) {
            this.board.pieces = this.board.pieces.filter((/**
             * @param {?} piece
             * @return {?}
             */
            (piece) => piece !== toPromotePiece));
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
    }
    /**
     * @param {?} piece
     * @return {?}
     */
    openPromoteDialog(piece) {
        this.modal.open(piece.color, (/**
         * @param {?} index
         * @return {?}
         */
        (index) => {
            this.resolvePromotionChoice(piece, index);
            this.afterMoveActions(index);
        }));
    }
    /**
     * @param {?} piece
     * @param {?} index
     * @return {?}
     */
    resolvePromotionChoice(piece, index) {
        /** @type {?} */
        const isWhite = piece.color === Color.WHITE;
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
    }
    /**
     * @return {?}
     */
    reset() {
        this.boardStateProvider.clear();
        this.moveHistoryProvider.clear();
        this.boardLoader.addPieces();
        this.board.reset();
        this.coords.reset();
        this.drawProvider.clear();
    }
    /**
     * @return {?}
     */
    reverse() {
        this.selected = false;
        this.board.reverse();
        this.coords.reverse();
    }
    /**
     * @param {?} board
     * @return {?}
     */
    updateBoard(board) {
        this.board = board;
        this.boardLoader.setBoard(this.board);
        this.board.possibleCaptures = [];
        this.board.possibleMoves = [];
    }
    /**
     * @return {?}
     */
    undo() {
        if (!this.boardStateProvider.isEmpty()) {
            /** @type {?} */
            const lastBoard = this.boardStateProvider.pop().board;
            if (this.board.reverted) {
                lastBoard.reverse();
            }
            this.board = lastBoard;
            this.boardLoader.setBoard(this.board);
            this.board.possibleCaptures = [];
            this.board.possibleMoves = [];
            this.moveHistoryProvider.pop();
        }
    }
    /**
     * @return {?}
     */
    getMoveHistory() {
        return this.moveHistoryProvider.getAll();
    }
    /**
     * @param {?} fen
     * @return {?}
     */
    setFEN(fen) {
        try {
            this.boardLoader.loadFEN(fen);
            this.board.possibleCaptures = [];
            this.board.possibleMoves = [];
        }
        catch (exception) {
            this.boardLoader.addPieces();
        }
    }
    /**
     * @return {?}
     */
    getFEN() {
        return this.board.fen;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEnded(event) {
        event.source.reset();
        event.source.element.nativeElement.style.zIndex = '0';
        event.source.element.nativeElement.style.pointerEvents = 'auto';
        event.source.element.nativeElement.style.touchAction = 'auto';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragStart(event) {
        /** @type {?} */
        const style = event.source.element.nativeElement.style;
        style.position = 'relative';
        style.zIndex = '1000';
        style.touchAction = 'none';
        style.pointerEvents = 'none';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        if (event.button !== 0) {
            this.drawPoint = this.getDrawingPoint(event.x, event.y, event.ctrlKey, event.altKey, event.shiftKey);
            return;
        }
        /** @type {?} */
        const pointClicked = this.getClickPoint(event);
        this.drawProvider.clear();
        if (this.board.activePiece &&
            pointClicked.isEqual(this.board.activePiece.point)) {
            this.disabling = true;
            return;
        }
        /** @type {?} */
        const pieceClicked = this.getPieceByPoint(pointClicked.row, pointClicked.col);
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
    }
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} crtl
     * @param {?} alt
     * @param {?} shift
     * @return {?}
     */
    getDrawingPoint(x, y, crtl, alt, shift) {
        /** @type {?} */
        const squareSize = this.heightAndWidth / 8;
        /** @type {?} */
        const xx = Math.floor((x - this.boardRef.nativeElement.getBoundingClientRect().left) /
            squareSize);
        /** @type {?} */
        const yy = Math.floor((y - this.boardRef.nativeElement.getBoundingClientRect().top) /
            squareSize);
        /** @type {?} */
        let color = 'green';
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
    }
    /**
     * @private
     * @param {?} piece
     * @return {?}
     */
    checkIfRookMoved(piece) {
        if (piece instanceof Rook) {
            piece.isMovedAlready = true;
        }
    }
    /**
     * @private
     * @param {?} piece
     * @return {?}
     */
    checkIfKingMoved(piece) {
        if (piece instanceof King) {
            piece.isMovedAlready = true;
        }
    }
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    checkForPossibleMoves(color) {
        if (!this.board.pieces
            .filter((/**
         * @param {?} piece
         * @return {?}
         */
        (piece) => piece.color === color))
            .some((/**
         * @param {?} piece
         * @return {?}
         */
        (piece) => piece
            .getPossibleMoves()
            .some((/**
         * @param {?} move
         * @return {?}
         */
        (move) => !MoveUtils.willMoveCauseCheck(color, piece.point.row, piece.point.col, move.row, move.col, this.board))) ||
            piece
                .getPossibleCaptures()
                .some((/**
             * @param {?} capture
             * @return {?}
             */
            (capture) => !MoveUtils.willMoveCauseCheck(color, piece.point.row, piece.point.col, capture.row, capture.col, this.board)))))) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    checkForPat(color) {
        if (color === Color.WHITE && !this.board.whiteKingChecked) {
            return this.checkForPossibleMoves(color);
        }
        else {
            if (color === Color.BLACK && !this.board.blackKingChecked) {
                return this.checkForPossibleMoves(color);
            }
        }
    }
    /**
     * @private
     * @param {?} piece
     * @param {?} newPoint
     * @return {?}
     */
    checkIfPawnEnpassanted(piece, newPoint) {
        if (Math.abs(piece.point.row - newPoint.row) > 1) {
            this.board.enPassantPiece = piece;
            this.board.enPassantPoint = new Point((piece.point.row + newPoint.row) / 2, piece.point.col);
        }
        else {
            this.board.enPassantPoint = null;
            this.board.enPassantPiece = null;
        }
    }
    /**
     * @private
     * @param {?} newPoint
     * @return {?}
     */
    checkIfPawnTakesEnPassant(newPoint) {
        if (newPoint.isEqual(this.board.enPassantPoint)) {
            this.board.pieces = this.board.pieces.filter((/**
             * @param {?} piece
             * @return {?}
             */
            (piece) => piece !== this.board.enPassantPiece));
            this.board.enPassantPoint = null;
            this.board.enPassantPiece = null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    saveClone() {
        /** @type {?} */
        const clone = this.board.clone();
        if (this.board.reverted) {
            clone.reverse();
        }
        this.boardStateProvider.addMove(new BoardState(clone));
    }
    /**
     * @private
     * @return {?}
     */
    saveMoveClone() {
        /** @type {?} */
        const clone = this.board.clone();
        if (this.board.reverted) {
            clone.reverse();
        }
        this.moveStateProvider.addMove(new BoardState(clone));
    }
    /**
     * @private
     * @return {?}
     */
    calculatePieceSize() {
        this.pieceSize = this.heightAndWidth / 10;
    }
    /**
     * @private
     * @return {?}
     */
    increaseFullMoveCount() {
        if (!this.board.currentWhitePlayer) {
            ++this.board.fullMoveCount;
        }
    }
    /**
     * @private
     * @param {?} pointClicked
     * @return {?}
     */
    handleClickEvent(pointClicked) {
        if (this.board.isPointInPossibleMoves(pointClicked) ||
            this.board.isPointInPossibleCaptures(pointClicked)) {
            this.saveClone();
            this.board.lastMoveSrc = new Point(this.board.activePiece.point.row, this.board.activePiece.point.col);
            this.board.lastMoveDest = pointClicked;
            this.movePiece(this.board.activePiece, pointClicked);
        }
        this.disableSelection();
        /** @type {?} */
        const pieceClicked = this.getPieceByPoint(pointClicked.row, pointClicked.col);
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
    /**
     * @private
     * @param {?} x
     * @param {?} y
     * @param {?} crtl
     * @param {?} alt
     * @param {?} shift
     * @return {?}
     */
    addDrawPoint(x, y, crtl, alt, shift) {
        /** @type {?} */
        const upPoint = this.getDrawingPoint(x, y, crtl, alt, shift);
        if (this.drawPoint.isEqual(upPoint)) {
            /** @type {?} */
            const circle = new Circle();
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
            const arrow = new Arrow();
            arrow.start = this.drawPoint;
            arrow.end = upPoint;
            if (!this.drawProvider.containsArrow(arrow)) {
                this.drawProvider.addArrow(arrow);
            }
            else {
                this.drawProvider.removeArrow(arrow);
            }
        }
    }
    /**
     * @param {?} coords
     * @return {?}
     */
    move(coords) {
        if (coords) {
            /** @type {?} */
            const sourceIndexes = MoveUtils.translateCoordsToIndex(coords.substring(0, 2), this.board.reverted);
            /** @type {?} */
            const destIndexes = MoveUtils.translateCoordsToIndex(coords.substring(2, 4), this.board.reverted);
            /** @type {?} */
            const srcPiece = this.getPieceByPoint(sourceIndexes.yAxis, sourceIndexes.xAxis);
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
    }
    /**
     * @param {?} piece
     * @return {?}
     */
    getCustomPieceIcons(piece) {
        return JSON.parse(`{ "background-image": "url('${this.pieceIconManager.getPieceIcon(piece)}')"}`);
    }
    /**
     * @private
     * @param {?} pieceClicked
     * @return {?}
     */
    isPieceDisabled(pieceClicked) {
        if (pieceClicked && pieceClicked.point) {
            /** @type {?} */
            const foundCapture = this.board.possibleCaptures.find((/**
             * @param {?} capture
             * @return {?}
             */
            (capture) => capture.col === pieceClicked.point.col &&
                capture.row === pieceClicked.point.row));
            if (foundCapture) {
                return false;
            }
        }
        return (pieceClicked &&
            ((this.lightDisabled && pieceClicked.color === Color.WHITE) ||
                (this.darkDisabled && pieceClicked.color === Color.BLACK)));
    }
}
NgxChessBoardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-chess-board',
                template: "<div\r\n    id=\"board\"\r\n    [style.height.px]=\"heightAndWidth\"\r\n    [style.width.px]=\"heightAndWidth\"\r\n    (pointerdown)=\"!modal.opened && onMouseDown($event)\"\r\n    (pointerup)=\"!modal.opened && onMouseUp($event)\"\r\n    #boardRef\r\n>\r\n    <div id=\"drag\">\r\n        <div\r\n            class=\"board-row\"\r\n            *ngFor=\"let row of board.board; let i = index\"\r\n        >\r\n            <div\r\n                class=\"board-col\"\r\n                [class.current-selection]=\"board.isXYInActiveMove(i,j)\"\r\n                [class.dest-move]=\"board.isXYInDestMove(i,j)\"\r\n                [class.king-check]=\" isKingChecked(getPieceByPoint(i,j))\"\r\n                [class.point-circle]=\"board.isXYInPointSelection(i, j)\"\r\n                [class.possible-capture]=\"board.isXYInPossibleCaptures(i, j)\"\r\n                [class.possible-point]=\"board.isXYInPossibleMoves(i, j)\"\r\n                [class.source-move]=\"board.isXYInSourceMove(i, j)\"\r\n                [style.background-color]=\"((i + j) % 2 === 0 ) ? lightTileColor : darkTileColor\"\r\n                *ngFor=\"let col of row; let j = index\"\r\n            >\r\n                <span\r\n                    class=\"yCoord\"\r\n                    [style.color]=\"(i % 2 === 0) ? lightTileColor : darkTileColor\"\r\n                    [style.font-size.px]=\"pieceSize / 4\"\r\n                    *ngIf=\"showCoords && j === 7\"\r\n                >\r\n                    {{coords.yCoords[i]}}\r\n                </span>\r\n                <span\r\n                    class=\"xCoord\"\r\n                    [style.color]=\"(j % 2 === 0) ? lightTileColor : darkTileColor\"\r\n                    [style.font-size.px]=\"pieceSize / 4\"\r\n                    *ngIf=\"showCoords && i === 7\"\r\n                >\r\n                    {{coords.xCoords[j]}}\r\n                </span>\r\n                <div\r\n                    *ngIf=\"getPieceByPoint(i, j) as piece\"\r\n                    style=\"height:100%; width:100%\"\r\n                >\r\n                    <div\r\n                        [cdkDragDisabled]=\"dragDisabled\"\r\n                        [innerHTML]=\"pieceIconManager.isDefaultIcons() ? getPieceByPoint(i,j).constant.icon : ''\"\r\n                        [ngClass]=\"'piece'\"\r\n                        [style.font-size]=\"pieceSize + 'px'\"\r\n                        [ngStyle]=\"pieceIconManager.isDefaultIcons() ? '' : getCustomPieceIcons(getPieceByPoint(i,j))\"\r\n                        (cdkDragEnded)=\"dragEnded($event)\"\r\n                        (cdkDragStarted)=\"dragStart($event)\"\r\n                        cdkDrag\r\n                    >\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <svg\r\n        [attr.height]=\"heightAndWidth\"\r\n        [attr.width]=\"heightAndWidth\"\r\n        style=\"position:absolute; top:0; pointer-events: none\"\r\n    >\r\n        <defs *ngFor=\"let color of ['red', 'green', 'blue', 'orange']\">\r\n            <marker\r\n                [id]=\"color + 'Arrow'\"\r\n                markerHeight=\"13\"\r\n                markerWidth=\"13\"\r\n                orient=\"auto\"\r\n                refX=\"9\"\r\n                refY=\"6\"\r\n            >\r\n                <path\r\n                    [style.fill]=\"color\"\r\n                    d=\"M2,2 L2,11 L10,6 L2,2\"\r\n                ></path>\r\n            </marker>\r\n        </defs>\r\n        <line\r\n            class=\"arrow\"\r\n            [attr.marker-end]=\"'url(#' + arrow.end.color + 'Arrow)'\"\r\n            [attr.stroke]=\"arrow.end.color\"\r\n            [attr.x1]=\"arrow.start.x\"\r\n            [attr.x2]=\"arrow.end.x\"\r\n            [attr.y1]=\"arrow.start.y\"\r\n            [attr.y2]=\"arrow.end.y\"\r\n            *ngFor=\"let arrow of drawProvider.arrows$ | async\"\r\n        ></line>\r\n        <circle\r\n            [attr.cx]=\"circle.drawPoint.x\"\r\n            [attr.cy]=\"circle.drawPoint.y\"\r\n            [attr.r]=\"heightAndWidth / 18\"\r\n            [attr.stroke]=\"circle.drawPoint.color\"\r\n            *ngFor=\"let circle of drawProvider.circles$ | async\"\r\n            fill-opacity=\"0.0\"\r\n            stroke-width=\"2\"\r\n        ></circle>\r\n    </svg>\r\n    <app-piece-promotion-modal #modal></app-piece-promotion-modal>\r\n</div>\r\n",
                styles: ["@charset \"UTF-8\";#board{font-family:\"Courier New\",serif;position:relative}.board-row{display:block;width:100%;height:12.5%;position:relative}.board-col{position:relative;display:inline-block;width:12.5%;vertical-align:top;cursor:default;height:100%}.piece{height:100%;cursor:-webkit-grab;cursor:grab;width:100%;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;background-size:cover;justify-content:center;text-align:center;color:#000!important}.piece::after{content:\"\u200B\"}#drag{height:100%;width:100%}.possible-point{background:radial-gradient(rgba(20,85,30,.5) 19%,rgba(0,0,0,0) 20%)}.possible-capture:hover,.possible-point:hover{opacity:.4}.possible-capture{background:radial-gradient(transparent 0,transparent 80%,rgba(20,85,0,.3) 80%);box-sizing:border-box}.king-check{background:radial-gradient(ellipse at center,red 0,#e70000 25%,rgba(169,0,0,0) 89%,rgba(158,0,0,0) 100%)}.source-move{background-color:rgba(146,111,26,.79)!important}.dest-move{background-color:#b28e1a!important}.current-selection{background-color:rgba(255,255,255,.5)!important}.yCoord{position:absolute;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;cursor:pointer;right:.2em;font-family:\"Lucida Console\",Courier,monospace;box-sizing:border-box}.xCoord{position:absolute;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;cursor:pointer;left:.2em;bottom:0;font-family:\"Lucida Console\",Courier,monospace;box-sizing:border-box}.hovering{background-color:red!important}.arrow{stroke-width:2}svg{-webkit-filter:drop-shadow(1px 1px 0 #111) drop-shadow(-1px 1px 0 #111) drop-shadow(1px -1px 0 #111) drop-shadow(-1px -1px 0 #111);filter:drop-shadow(1px 1px 0 #111) drop-shadow(-1px 1px 0 #111) drop-shadow(1px -1px 0 #111) drop-shadow(-1px -1px 0 #111)}"]
            }] }
];
/** @nocollapse */
NgxChessBoardComponent.ctorParameters = () => [
    { type: NgxChessBoardService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoZXNzLWJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2hlc3MtYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVOLFNBQVMsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRWpGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0s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QUMzRCxnREFBcUU7O0lBQ3JFLDRDQUEyQjs7SUFDM0IsOENBQThCOztJQUM5Qiw4Q0FBOEI7O0lBQzlCLCtDQUErQjs7SUFDL0IsOENBQThCOztJQUM5Qiw0Q0FBc0Q7O0lBQ3RELDJDQUErQzs7SUFDL0MsMkNBQStDOztJQUMvQywyQ0FBa0I7O0lBQ2xCLDBDQUFpQjs7SUFDakIsMENBQ3FCOztJQUNyQix1Q0FBMkU7O0lBQzNFLHVDQUFhOztJQUNiLG9EQUF1Qzs7SUFDdkMsbURBQXFDOztJQUNyQyxxREFBeUM7O0lBQ3pDLDZDQUF5Qjs7SUFDekIsd0NBQThDOztJQUM5QywyQ0FBa0I7O0lBQ2xCLDhDQUEyQjs7SUFDM0IsMkNBQXFCOztJQUNyQixrREFBd0M7O0lBWXhDLGdEQUFnRDs7Ozs7SUFWcEMsc0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrRHJhZ0VuZCwgQ2RrRHJhZ1N0YXJ0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSG9zdExpc3RlbmVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCb2FyZExvYWRlciB9IGZyb20gJy4vYm9hcmQtc3RhdGUtcHJvdmlkZXIvYm9hcmQtbG9hZGVyJztcclxuaW1wb3J0IHsgQm9hcmRTdGF0ZSB9IGZyb20gJy4vYm9hcmQtc3RhdGUtcHJvdmlkZXIvYm9hcmQtc3RhdGUnO1xyXG5pbXBvcnQgeyBCb2FyZFN0YXRlUHJvdmlkZXIgfSBmcm9tICcuL2JvYXJkLXN0YXRlLXByb3ZpZGVyL2JvYXJkLXN0YXRlLXByb3ZpZGVyJztcclxuaW1wb3J0IHsgTW92ZVN0YXRlUHJvdmlkZXIgfSBmcm9tICcuL2JvYXJkLXN0YXRlLXByb3ZpZGVyL21vdmUtc3RhdGUtcHJvdmlkZXInO1xyXG5pbXBvcnQgeyBDb29yZHNQcm92aWRlciB9IGZyb20gJy4vY29vcmRzL2Nvb3Jkcy1wcm92aWRlcic7XHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSAnLi9kcmF3aW5nLXRvb2xzL2Fycm93JztcclxuaW1wb3J0IHsgQ2lyY2xlIH0gZnJvbSAnLi9kcmF3aW5nLXRvb2xzL2NpcmNsZSc7XHJcbmltcG9ydCB7IERyYXdQb2ludCB9IGZyb20gJy4vZHJhd2luZy10b29scy9kcmF3LXBvaW50JztcclxuaW1wb3J0IHsgRHJhd1Byb3ZpZGVyIH0gZnJvbSAnLi9kcmF3aW5nLXRvb2xzL2RyYXctcHJvdmlkZXInO1xyXG5pbXBvcnQgeyBIaXN0b3J5TW92ZSB9IGZyb20gJy4vaGlzdG9yeS1tb3ZlLXByb3ZpZGVyL2hpc3RvcnktbW92ZSc7XHJcbmltcG9ydCB7IEhpc3RvcnlNb3ZlUHJvdmlkZXIgfSBmcm9tICcuL2hpc3RvcnktbW92ZS1wcm92aWRlci9oaXN0b3J5LW1vdmUtcHJvdmlkZXInO1xyXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vbW9kZWxzL2JvYXJkJztcclxuaW1wb3J0IHsgQmlzaG9wIH0gZnJvbSAnLi9tb2RlbHMvcGllY2VzL2Jpc2hvcCc7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9tb2RlbHMvcGllY2VzL2NvbG9yJztcclxuaW1wb3J0IHsgS2luZyB9IGZyb20gJy4vbW9kZWxzL3BpZWNlcy9raW5nJztcclxuaW1wb3J0IHsgS25pZ2h0IH0gZnJvbSAnLi9tb2RlbHMvcGllY2VzL2tuaWdodCc7XHJcbmltcG9ydCB7IFBhd24gfSBmcm9tICcuL21vZGVscy9waWVjZXMvcGF3bic7XHJcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSAnLi9tb2RlbHMvcGllY2VzL3BpZWNlJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL21vZGVscy9waWVjZXMvcG9pbnQnO1xyXG5pbXBvcnQgeyBRdWVlbiB9IGZyb20gJy4vbW9kZWxzL3BpZWNlcy9xdWVlbic7XHJcbmltcG9ydCB7IFJvb2sgfSBmcm9tICcuL21vZGVscy9waWVjZXMvcm9vayc7XHJcbmltcG9ydCB7IE5neENoZXNzQm9hcmRWaWV3IH0gZnJvbSAnLi9uZ3gtY2hlc3MtYm9hcmQtdmlldyc7XHJcbmltcG9ydCB7IEF2YWlsYWJsZU1vdmVEZWNvcmF0b3IgfSBmcm9tICcuL3BpZWNlLWRlY29yYXRvci9hdmFpbGFibGUtbW92ZS1kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBQaWVjZVByb21vdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9waWVjZS1wcm9tb3Rpb24tbW9kYWwvcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neENoZXNzQm9hcmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL25neC1jaGVzcy1ib2FyZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBQaWVjZUljb25JbnB1dCB9IGZyb20gJy4vdXRpbHMvaW5wdXRzL3BpZWNlLWljb24taW5wdXQnO1xyXG5pbXBvcnQgeyBQaWVjZUljb25JbnB1dE1hbmFnZXIgfSBmcm9tICcuL3V0aWxzL2lucHV0cy9waWVjZS1pY29uLWlucHV0LW1hbmFnZXInO1xyXG5pbXBvcnQgeyBNb3ZlVXRpbHMgfSBmcm9tICcuL3V0aWxzL21vdmUtdXRpbHMnO1xyXG5pbXBvcnQgeyBVbmljb2RlQ29uc3RhbnRzIH0gZnJvbSAnLi91dGlscy91bmljb2RlLWNvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVDaGFuZ2UgZXh0ZW5kcyBIaXN0b3J5TW92ZSB7XHJcbiAgICBjaGVjazogYm9vbGVhbjtcclxuICAgIHN0YWxlbWF0ZTogYm9vbGVhbjtcclxuICAgIGNoZWNrbWF0ZTogYm9vbGVhbjtcclxuICAgIGZlbjogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWNoZXNzLWJvYXJkJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtY2hlc3MtYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbmd4LWNoZXNzLWJvYXJkLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hDaGVzc0JvYXJkQ29tcG9uZW50XHJcbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBOZ3hDaGVzc0JvYXJkVmlldyB7XHJcbiAgICBASW5wdXQoKSBkYXJrVGlsZUNvbG9yID0gQ29uc3RhbnRzLkRFRkFVTFRfREFSS19USUxFX0NPTE9SO1xyXG4gICAgQElucHV0KCkgbGlnaHRUaWxlQ29sb3I6IHN0cmluZyA9IENvbnN0YW50cy5ERUZBVUxUX0xJR0hUX1RJTEVfQ09MT1I7XHJcbiAgICBASW5wdXQoKSBzaG93Q29vcmRzID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGRyYWdEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZHJhd0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBsaWdodERpc2FibGVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBkYXJrRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIEBPdXRwdXQoKSBtb3ZlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZlQ2hhbmdlPigpO1xyXG4gICAgQE91dHB1dCgpIGNoZWNrbWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICAgIEBPdXRwdXQoKSBzdGFsZW1hdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgICBwaWVjZVNpemU6IG51bWJlcjtcclxuICAgIHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICBAVmlld0NoaWxkKCdib2FyZFJlZicsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gICAgYm9hcmRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdtb2RhbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBtb2RhbDogUGllY2VQcm9tb3Rpb25Nb2RhbENvbXBvbmVudDtcclxuICAgIGJvYXJkOiBCb2FyZDtcclxuICAgIGJvYXJkU3RhdGVQcm92aWRlcjogQm9hcmRTdGF0ZVByb3ZpZGVyO1xyXG4gICAgbW92ZVN0YXRlUHJvdmlkZXI6IE1vdmVTdGF0ZVByb3ZpZGVyO1xyXG4gICAgbW92ZUhpc3RvcnlQcm92aWRlcjogSGlzdG9yeU1vdmVQcm92aWRlcjtcclxuICAgIGJvYXJkTG9hZGVyOiBCb2FyZExvYWRlcjtcclxuICAgIGNvb3JkczogQ29vcmRzUHJvdmlkZXIgPSBuZXcgQ29vcmRzUHJvdmlkZXIoKTtcclxuICAgIGRpc2FibGluZyA9IGZhbHNlO1xyXG4gICAgZHJhd1Byb3ZpZGVyOiBEcmF3UHJvdmlkZXI7XHJcbiAgICBkcmF3UG9pbnQ6IERyYXdQb2ludDtcclxuICAgIHBpZWNlSWNvbk1hbmFnZXI6IFBpZWNlSWNvbklucHV0TWFuYWdlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neENoZXNzQm9hcmRTZXJ2aWNlOiBOZ3hDaGVzc0JvYXJkU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQoKTtcclxuICAgICAgICB0aGlzLmJvYXJkTG9hZGVyID0gbmV3IEJvYXJkTG9hZGVyKHRoaXMuYm9hcmQpO1xyXG4gICAgICAgIHRoaXMuYm9hcmRMb2FkZXIuYWRkUGllY2VzKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZFN0YXRlUHJvdmlkZXIgPSBuZXcgQm9hcmRTdGF0ZVByb3ZpZGVyKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlSGlzdG9yeVByb3ZpZGVyID0gbmV3IEhpc3RvcnlNb3ZlUHJvdmlkZXIoKTtcclxuICAgICAgICB0aGlzLmRyYXdQcm92aWRlciA9IG5ldyBEcmF3UHJvdmlkZXIoKTtcclxuICAgICAgICB0aGlzLnBpZWNlSWNvbk1hbmFnZXIgPSBuZXcgUGllY2VJY29uSW5wdXRNYW5hZ2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGVpZ2h0QW5kV2lkdGg6IG51bWJlciA9IENvbnN0YW50cy5ERUZBVUxUX1NJWkU7XHJcblxyXG4gICAgQElucHV0KCdzaXplJylcclxuICAgIHB1YmxpYyBzZXQgc2l6ZShzaXplOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHNpemUgJiZcclxuICAgICAgICAgICAgc2l6ZSA+PSBDb25zdGFudHMuTUlOX0JPQVJEX1NJWkUgJiZcclxuICAgICAgICAgICAgc2l6ZSA8PSBDb25zdGFudHMuTUFYX0JPQVJEX1NJWkVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHRBbmRXaWR0aCA9IHNpemU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHRBbmRXaWR0aCA9IENvbnN0YW50cy5ERUZBVUxUX1NJWkU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJhd1Byb3ZpZGVyLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQaWVjZVNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ3BpZWNlSWNvbnMnKVxyXG4gICAgcHVibGljIHNldCBwaWVjZUljb25zKHBpZWNlSWNvbnM6IFBpZWNlSWNvbklucHV0KSB7XHJcbiAgICAgICAgdGhpcy5waWVjZUljb25NYW5hZ2VyLnBpZWNlSWNvbklucHV0ID0gcGllY2VJY29ucztcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXHJcbiAgICBvblJpZ2h0Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIChjaGFuZ2VzLmxpZ2h0RGlzYWJsZWQgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMubGlnaHREaXNhYmxlZCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIpIHx8XHJcbiAgICAgICAgICAgIChjaGFuZ2VzLmRhcmtEaXNhYmxlZCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXJrRGlzYWJsZWQgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLmJvYXJkLmN1cnJlbnRXaGl0ZVBsYXllcilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5wb3NzaWJsZUNhcHR1cmVzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucG9zc2libGVNb3ZlcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMubmd4Q2hlc3NCb2FyZFNlcnZpY2UuY29tcG9uZW50TWV0aG9kQ2FsbGVkJC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLnJlc2V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQaWVjZVNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAwICYmICF0aGlzLmRyYXdEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZERyYXdQb2ludChcclxuICAgICAgICAgICAgICAgIGV2ZW50LngsXHJcbiAgICAgICAgICAgICAgICBldmVudC55LFxyXG4gICAgICAgICAgICAgICAgZXZlbnQuY3RybEtleSxcclxuICAgICAgICAgICAgICAgIGV2ZW50LmFsdEtleSxcclxuICAgICAgICAgICAgICAgIGV2ZW50LnNoaWZ0S2V5XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd1Byb3ZpZGVyLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRyYWdEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvaW50Q2xpY2tlZCA9IHRoaXMuZ2V0Q2xpY2tQb2ludChldmVudCk7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5hY3RpdmVQaWVjZSAmJlxyXG4gICAgICAgICAgICBwb2ludENsaWNrZWQuaXNFcXVhbCh0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlLnBvaW50KSAmJlxyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwaWVjZUNsaWNrZWQgPSB0aGlzLmdldFBpZWNlQnlQb2ludChcclxuICAgICAgICAgICAgcG9pbnRDbGlja2VkLnJvdyxcclxuICAgICAgICAgICAgcG9pbnRDbGlja2VkLmNvbFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzUGllY2VEaXNhYmxlZChwaWVjZUNsaWNrZWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xpY2tFdmVudChwb2ludENsaWNrZWQpO1xyXG4gICAgICAgICAgICAvLyAgIHRoaXMucG9zc2libGVNb3ZlcyA9IGFjdGl2ZVBpZWNlLmdldFBvc3NpYmxlTW92ZXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAocGllY2VDbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuYm9hcmQuY3VycmVudFdoaXRlUGxheWVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlQ2xpY2tlZC5jb2xvciA9PT0gQ29sb3IuQkxBQ0spIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKCF0aGlzLmJvYXJkLmN1cnJlbnRXaGl0ZVBsYXllciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWVjZUNsaWNrZWQuY29sb3IgPT09IENvbG9yLldISVRFKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUFjdGl2ZVBpZWNlKHBpZWNlQ2xpY2tlZCwgcG9pbnRDbGlja2VkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZnRlck1vdmVBY3Rpb25zKHByb21vdGlvbkluZGV4PzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0lmUGF3bkZpcnN0TW92ZSh0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlKTtcclxuICAgICAgICB0aGlzLmNoZWNrSWZSb29rTW92ZWQodGhpcy5ib2FyZC5hY3RpdmVQaWVjZSk7XHJcbiAgICAgICAgdGhpcy5jaGVja0lmS2luZ01vdmVkKHRoaXMuYm9hcmQuYWN0aXZlUGllY2UpO1xyXG5cclxuICAgICAgICB0aGlzLmJvYXJkLmJsYWNrS2luZ0NoZWNrZWQgPSB0aGlzLmJvYXJkLmlzS2luZ0luQ2hlY2soXHJcbiAgICAgICAgICAgIENvbG9yLkJMQUNLLFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLnBpZWNlc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC53aGl0ZUtpbmdDaGVja2VkID0gdGhpcy5ib2FyZC5pc0tpbmdJbkNoZWNrKFxyXG4gICAgICAgICAgICBDb2xvci5XSElURSxcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5waWVjZXNcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID1cclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5ibGFja0tpbmdDaGVja2VkIHx8IHRoaXMuYm9hcmQud2hpdGVLaW5nQ2hlY2tlZDtcclxuICAgICAgICBjb25zdCBjaGVja21hdGUgPVxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRm9yUG9zc2libGVNb3ZlcyhDb2xvci5CTEFDSykgfHxcclxuICAgICAgICAgICAgdGhpcy5jaGVja0ZvclBvc3NpYmxlTW92ZXMoQ29sb3IuV0hJVEUpO1xyXG4gICAgICAgIGNvbnN0IHN0YWxlbWF0ZSA9XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JQYXQoQ29sb3IuQkxBQ0spIHx8IHRoaXMuY2hlY2tGb3JQYXQoQ29sb3IuV0hJVEUpO1xyXG5cclxuICAgICAgICB0aGlzLmRpc2FibGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYm9hcmQuY2FsY3VsYXRlRkVOKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhc3RNb3ZlID0gdGhpcy5tb3ZlSGlzdG9yeVByb3ZpZGVyLmdldExhc3RNb3ZlKCk7XHJcbiAgICAgICAgaWYgKGxhc3RNb3ZlICYmIHByb21vdGlvbkluZGV4KSB7XHJcbiAgICAgICAgICAgIGxhc3RNb3ZlLm1vdmUgKz0gcHJvbW90aW9uSW5kZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1vdmVDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIC4uLmxhc3RNb3ZlLFxyXG4gICAgICAgICAgICBjaGVjayxcclxuICAgICAgICAgICAgY2hlY2ttYXRlLFxyXG4gICAgICAgICAgICBzdGFsZW1hdGUsXHJcbiAgICAgICAgICAgIGZlbjogdGhpcy5ib2FyZC5mZW4sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZVNlbGVjdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5wb3NzaWJsZUNhcHR1cmVzID0gW107XHJcbiAgICAgICAgdGhpcy5ib2FyZC5hY3RpdmVQaWVjZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5wb3NzaWJsZU1vdmVzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJlcGFyZUFjdGl2ZVBpZWNlKHBpZWNlQ2xpY2tlZDogUGllY2UsIHBvaW50Q2xpY2tlZDogUG9pbnQpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlID0gcGllY2VDbGlja2VkO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucG9zc2libGVDYXB0dXJlcyA9IG5ldyBBdmFpbGFibGVNb3ZlRGVjb3JhdG9yKFxyXG4gICAgICAgICAgICBwaWVjZUNsaWNrZWQsXHJcbiAgICAgICAgICAgIHBvaW50Q2xpY2tlZCxcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIgPyBDb2xvci5XSElURSA6IENvbG9yLkJMQUNLLFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkXHJcbiAgICAgICAgKS5nZXRQb3NzaWJsZUNhcHR1cmVzKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5wb3NzaWJsZU1vdmVzID0gbmV3IEF2YWlsYWJsZU1vdmVEZWNvcmF0b3IoXHJcbiAgICAgICAgICAgIHBpZWNlQ2xpY2tlZCxcclxuICAgICAgICAgICAgcG9pbnRDbGlja2VkLFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmN1cnJlbnRXaGl0ZVBsYXllciA/IENvbG9yLldISVRFIDogQ29sb3IuQkxBQ0ssXHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRcclxuICAgICAgICApLmdldFBvc3NpYmxlTW92ZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQaWVjZUJ5UG9pbnQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogUGllY2Uge1xyXG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3Iocm93KTtcclxuICAgICAgICBjb2wgPSBNYXRoLmZsb29yKGNvbCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQucGllY2VzLmZpbmQoXHJcbiAgICAgICAgICAgIChwaWVjZSkgPT4gcGllY2UucG9pbnQuY29sID09PSBjb2wgJiYgcGllY2UucG9pbnQucm93ID09PSByb3dcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlzS2luZ0NoZWNrZWQocGllY2U6IFBpZWNlKSB7XHJcbiAgICAgICAgaWYgKHBpZWNlIGluc3RhbmNlb2YgS2luZykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGllY2UuY29sb3IgPT09IENvbG9yLldISVRFXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuYm9hcmQud2hpdGVLaW5nQ2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLmJvYXJkLmJsYWNrS2luZ0NoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldENsaWNrUG9pbnQoZXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAgICAgKGV2ZW50LnkgLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApIC9cclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5ib2FyZFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWlnaHQgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA4KVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAgICAgKGV2ZW50LnggLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSAvXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuYm9hcmRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDgpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVQaWVjZSh0b01vdmVQaWVjZTogUGllY2UsIG5ld1BvaW50OiBQb2ludCwgcHJvbW90aW9uSW5kZXg/OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkZXN0UGllY2UgPSB0aGlzLmJvYXJkLnBpZWNlcy5maW5kKFxyXG4gICAgICAgICAgICAocGllY2UpID0+XHJcbiAgICAgICAgICAgICAgICBwaWVjZS5wb2ludC5jb2wgPT09IG5ld1BvaW50LmNvbCAmJlxyXG4gICAgICAgICAgICAgICAgcGllY2UucG9pbnQucm93ID09PSBuZXdQb2ludC5yb3dcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoZGVzdFBpZWNlICYmIHRvTW92ZVBpZWNlLmNvbG9yICE9PSBkZXN0UGllY2UuY29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5waWVjZXMgPSB0aGlzLmJvYXJkLnBpZWNlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAocGllY2UpID0+IHBpZWNlICE9PSBkZXN0UGllY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZGVzdFBpZWNlICYmIHRvTW92ZVBpZWNlLmNvbG9yID09PSBkZXN0UGllY2UuY29sb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbW92ZSA9IG5ldyBIaXN0b3J5TW92ZShcclxuICAgICAgICAgICAgTW92ZVV0aWxzLmZvcm1hdCh0b01vdmVQaWVjZS5wb2ludCwgbmV3UG9pbnQsIHRoaXMuYm9hcmQucmV2ZXJ0ZWQpLFxyXG4gICAgICAgICAgICB0b01vdmVQaWVjZS5jb25zdGFudC5uYW1lLFxyXG4gICAgICAgICAgICB0b01vdmVQaWVjZS5jb2xvciA9PT0gQ29sb3IuV0hJVEUgPyAnd2hpdGUnIDogJ2JsYWNrJyxcclxuICAgICAgICAgICAgISFkZXN0UGllY2VcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubW92ZUhpc3RvcnlQcm92aWRlci5hZGRNb3ZlKG1vdmUpO1xyXG5cclxuICAgICAgICBpZiAodG9Nb3ZlUGllY2UgaW5zdGFuY2VvZiBLaW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZXNNb3ZlZCA9IE1hdGguYWJzKG5ld1BvaW50LmNvbCAtIHRvTW92ZVBpZWNlLnBvaW50LmNvbCk7XHJcbiAgICAgICAgICAgIGlmIChzcXVhcmVzTW92ZWQgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3UG9pbnQuY29sIDwgMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlZnRSb29rID0gdGhpcy5ib2FyZC5nZXRQaWVjZUJ5RmllbGQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvTW92ZVBpZWNlLnBvaW50LnJvdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFJvb2sucG9pbnQuY29sID0gdGhpcy5ib2FyZC5yZXZlcnRlZCA/IDIgOiAzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByaWdodFJvb2sgPSB0aGlzLmJvYXJkLmdldFBpZWNlQnlGaWVsZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Nb3ZlUGllY2UucG9pbnQucm93LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA3XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodFJvb2sucG9pbnQuY29sID0gdGhpcy5ib2FyZC5yZXZlcnRlZCA/IDQgOiA1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG9Nb3ZlUGllY2UgaW5zdGFuY2VvZiBQYXduKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJZlBhd25UYWtlc0VuUGFzc2FudChuZXdQb2ludCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJZlBhd25FbnBhc3NhbnRlZCh0b01vdmVQaWVjZSwgbmV3UG9pbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdG9Nb3ZlUGllY2UucG9pbnQgPSBuZXdQb2ludDtcclxuICAgICAgICB0aGlzLmluY3JlYXNlRnVsbE1vdmVDb3VudCgpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQuY3VycmVudFdoaXRlUGxheWVyID0gIXRoaXMuYm9hcmQuY3VycmVudFdoaXRlUGxheWVyO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tGb3JQYXduUHJvbW90ZSh0b01vdmVQaWVjZSwgcHJvbW90aW9uSW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJNb3ZlQWN0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lmUGF3bkZpcnN0TW92ZShwaWVjZTogUGllY2UpIHtcclxuICAgICAgICBpZiAocGllY2UgaW5zdGFuY2VvZiBQYXduKSB7XHJcbiAgICAgICAgICAgIHBpZWNlLmlzTW92ZWRBbHJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tGb3JQYXduUHJvbW90ZSh0b1Byb21vdGVQaWVjZTogUGllY2UsIHByb21vdGlvbkluZGV4PzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCEodG9Qcm9tb3RlUGllY2UgaW5zdGFuY2VvZiBQYXduKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG9Qcm9tb3RlUGllY2UucG9pbnQucm93ID09PSAwIHx8IHRvUHJvbW90ZVBpZWNlLnBvaW50LnJvdyA9PT0gNykge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcyA9IHRoaXMuYm9hcmQucGllY2VzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChwaWVjZSkgPT4gcGllY2UgIT09IHRvUHJvbW90ZVBpZWNlXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBXaGVuIHdlIG1ha2UgbW92ZSBtYW51YWxseSwgd2UgcGFzcyBwcm9tb3Rpb24gaW5kZXggYWxyZWFkeSwgc28gd2UgZG9uJ3QgbmVlZFxyXG4gICAgICAgICAgICAvLyB0byBhY3F1aXJlIGl0IGZyb20gcHJvbW90ZSBkaWFsb2dcclxuICAgICAgICAgICAgaWYgKCFwcm9tb3Rpb25JbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuUHJvbW90ZURpYWxvZyh0b1Byb21vdGVQaWVjZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVQcm9tb3Rpb25DaG9pY2UodG9Qcm9tb3RlUGllY2UsIHByb21vdGlvbkluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJNb3ZlQWN0aW9ucyhwcm9tb3Rpb25JbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuUHJvbW90ZURpYWxvZyhwaWVjZTogUGllY2UpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLm9wZW4ocGllY2UuY29sb3IsIChpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVQcm9tb3Rpb25DaG9pY2UocGllY2UsIGluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5hZnRlck1vdmVBY3Rpb25zKGluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlUHJvbW90aW9uQ2hvaWNlKHBpZWNlOiBQaWVjZSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGlzV2hpdGUgPSBwaWVjZS5jb2xvciA9PT0gQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBRdWVlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2UucG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1doaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFVuaWNvZGVDb25zdGFudHMuV0hJVEVfUVVFRU5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogVW5pY29kZUNvbnN0YW50cy5CTEFDS19RVUVFTixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5waWVjZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUm9vayhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2UucG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1doaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFVuaWNvZGVDb25zdGFudHMuV0hJVEVfUk9PS1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBVbmljb2RlQ29uc3RhbnRzLkJMQUNLX1JPT0ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEJpc2hvcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2UucG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1doaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFVuaWNvZGVDb25zdGFudHMuV0hJVEVfQklTSE9QXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFVuaWNvZGVDb25zdGFudHMuQkxBQ0tfQklTSE9QLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBLbmlnaHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLnBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWVjZS5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNXaGl0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBVbmljb2RlQ29uc3RhbnRzLldISVRFX0tOSUdIVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBVbmljb2RlQ29uc3RhbnRzLkJMQUNLX0tOSUdIVCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ib2FyZFN0YXRlUHJvdmlkZXIuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm1vdmVIaXN0b3J5UHJvdmlkZXIuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmJvYXJkTG9hZGVyLmFkZFBpZWNlcygpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmNvb3Jkcy5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Byb3ZpZGVyLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXJzZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5yZXZlcnNlKCk7XHJcbiAgICAgICAgdGhpcy5jb29yZHMucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUJvYXJkKGJvYXJkOiBCb2FyZCkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgICAgICB0aGlzLmJvYXJkTG9hZGVyLnNldEJvYXJkKHRoaXMuYm9hcmQpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucG9zc2libGVDYXB0dXJlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucG9zc2libGVNb3ZlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgdW5kbygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuYm9hcmRTdGF0ZVByb3ZpZGVyLmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0Qm9hcmQgPSB0aGlzLmJvYXJkU3RhdGVQcm92aWRlci5wb3AoKS5ib2FyZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmQucmV2ZXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGxhc3RCb2FyZC5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ib2FyZCA9IGxhc3RCb2FyZDtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZExvYWRlci5zZXRCb2FyZCh0aGlzLmJvYXJkKTtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5wb3NzaWJsZUNhcHR1cmVzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucG9zc2libGVNb3ZlcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVIaXN0b3J5UHJvdmlkZXIucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1vdmVIaXN0b3J5KCk6IEhpc3RvcnlNb3ZlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVIaXN0b3J5UHJvdmlkZXIuZ2V0QWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RkVOKGZlbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZExvYWRlci5sb2FkRkVOKGZlbik7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucG9zc2libGVDYXB0dXJlcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLnBvc3NpYmxlTW92ZXMgPSBbXTtcclxuICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZExvYWRlci5hZGRQaWVjZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RkVOKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZmVuO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYWdFbmRlZChldmVudDogQ2RrRHJhZ0VuZCk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnNvdXJjZS5yZXNldCgpO1xyXG4gICAgICAgIGV2ZW50LnNvdXJjZS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzAnO1xyXG4gICAgICAgIGV2ZW50LnNvdXJjZS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcclxuICAgICAgICBldmVudC5zb3VyY2UuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvdWNoQWN0aW9uID0gJ2F1dG8nO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYWdTdGFydChldmVudDogQ2RrRHJhZ1N0YXJ0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBldmVudC5zb3VyY2UuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlO1xyXG4gICAgICAgIHN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgICAgICBzdHlsZS56SW5kZXggPSAnMTAwMCc7XHJcbiAgICAgICAgc3R5bGUudG91Y2hBY3Rpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UG9pbnQgPSB0aGlzLmdldERyYXdpbmdQb2ludChcclxuICAgICAgICAgICAgICAgIGV2ZW50LngsXHJcbiAgICAgICAgICAgICAgICBldmVudC55LFxyXG4gICAgICAgICAgICAgICAgZXZlbnQuY3RybEtleSxcclxuICAgICAgICAgICAgICAgIGV2ZW50LmFsdEtleSxcclxuICAgICAgICAgICAgICAgIGV2ZW50LnNoaWZ0S2V5XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9pbnRDbGlja2VkID0gdGhpcy5nZXRDbGlja1BvaW50KGV2ZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3UHJvdmlkZXIuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlICYmXHJcbiAgICAgICAgICAgIHBvaW50Q2xpY2tlZC5pc0VxdWFsKHRoaXMuYm9hcmQuYWN0aXZlUGllY2UucG9pbnQpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGllY2VDbGlja2VkID0gdGhpcy5nZXRQaWVjZUJ5UG9pbnQoXHJcbiAgICAgICAgICAgIHBvaW50Q2xpY2tlZC5yb3csXHJcbiAgICAgICAgICAgIHBvaW50Q2xpY2tlZC5jb2xcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1BpZWNlRGlzYWJsZWQocGllY2VDbGlja2VkKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNsaWNrRXZlbnQocG9pbnRDbGlja2VkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAocGllY2VDbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuYm9hcmQuY3VycmVudFdoaXRlUGxheWVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlQ2xpY2tlZC5jb2xvciA9PT0gQ29sb3IuQkxBQ0spIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKCF0aGlzLmJvYXJkLmN1cnJlbnRXaGl0ZVBsYXllciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWVjZUNsaWNrZWQuY29sb3IgPT09IENvbG9yLldISVRFKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUFjdGl2ZVBpZWNlKHBpZWNlQ2xpY2tlZCwgcG9pbnRDbGlja2VkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXREcmF3aW5nUG9pbnQoXHJcbiAgICAgICAgeDogbnVtYmVyLFxyXG4gICAgICAgIHk6IG51bWJlcixcclxuICAgICAgICBjcnRsOiBib29sZWFuLFxyXG4gICAgICAgIGFsdDogYm9vbGVhbixcclxuICAgICAgICBzaGlmdDogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3Qgc3F1YXJlU2l6ZSA9IHRoaXMuaGVpZ2h0QW5kV2lkdGggLyA4O1xyXG4gICAgICAgIGNvbnN0IHh4ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgKHggLSB0aGlzLmJvYXJkUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgL1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlU2l6ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgeXkgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAoeSAtIHRoaXMuYm9hcmRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApIC9cclxuICAgICAgICAgICAgICAgIHNxdWFyZVNpemVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgY29sb3IgPSAnZ3JlZW4nO1xyXG5cclxuICAgICAgICBpZiAoY3J0bCB8fCBzaGlmdCkge1xyXG4gICAgICAgICAgICBjb2xvciA9ICdyZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWx0KSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJ2JsdWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHNoaWZ0IHx8IGNydGwpICYmIGFsdCkge1xyXG4gICAgICAgICAgICBjb2xvciA9ICdvcmFuZ2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IERyYXdQb2ludChcclxuICAgICAgICAgICAgTWF0aC5mbG9vcih4eCAqIHNxdWFyZVNpemUgKyBzcXVhcmVTaXplIC8gMiksXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IoeXkgKiBzcXVhcmVTaXplICsgc3F1YXJlU2l6ZSAvIDIpLFxyXG4gICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0lmUm9va01vdmVkKHBpZWNlOiBQaWVjZSkge1xyXG4gICAgICAgIGlmIChwaWVjZSBpbnN0YW5jZW9mIFJvb2spIHtcclxuICAgICAgICAgICAgcGllY2UuaXNNb3ZlZEFscmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrSWZLaW5nTW92ZWQocGllY2U6IFBpZWNlKSB7XHJcbiAgICAgICAgaWYgKHBpZWNlIGluc3RhbmNlb2YgS2luZykge1xyXG4gICAgICAgICAgICBwaWVjZS5pc01vdmVkQWxyZWFkeSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tGb3JQb3NzaWJsZU1vdmVzKGNvbG9yOiBDb2xvcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXRoaXMuYm9hcmQucGllY2VzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChwaWVjZSkgPT4gcGllY2UuY29sb3IgPT09IGNvbG9yKVxyXG4gICAgICAgICAgICAgICAgLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgKHBpZWNlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWVjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldFBvc3NpYmxlTW92ZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1vdmUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFNb3ZlVXRpbHMud2lsbE1vdmVDYXVzZUNoZWNrKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWVjZS5wb2ludC5yb3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWVjZS5wb2ludC5jb2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlLnJvdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmUuY29sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0UG9zc2libGVDYXB0dXJlcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29tZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FwdHVyZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIU1vdmVVdGlscy53aWxsTW92ZUNhdXNlQ2hlY2soXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLnBvaW50LnJvdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLnBvaW50LmNvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmUucm93LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZS5jb2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRm9yUGF0KGNvbG9yOiBDb2xvcikge1xyXG4gICAgICAgIGlmIChjb2xvciA9PT0gQ29sb3IuV0hJVEUgJiYgIXRoaXMuYm9hcmQud2hpdGVLaW5nQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja0ZvclBvc3NpYmxlTW92ZXMoY29sb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciA9PT0gQ29sb3IuQkxBQ0sgJiYgIXRoaXMuYm9hcmQuYmxhY2tLaW5nQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tGb3JQb3NzaWJsZU1vdmVzKGNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrSWZQYXduRW5wYXNzYW50ZWQocGllY2U6IFBhd24sIG5ld1BvaW50OiBQb2ludCkge1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhwaWVjZS5wb2ludC5yb3cgLSBuZXdQb2ludC5yb3cpID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmVuUGFzc2FudFBpZWNlID0gcGllY2U7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuZW5QYXNzYW50UG9pbnQgPSBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAgICAgICAocGllY2UucG9pbnQucm93ICsgbmV3UG9pbnQucm93KSAvIDIsXHJcbiAgICAgICAgICAgICAgICBwaWVjZS5wb2ludC5jb2xcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmVuUGFzc2FudFBvaW50ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5lblBhc3NhbnRQaWVjZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tJZlBhd25UYWtlc0VuUGFzc2FudChuZXdQb2ludDogUG9pbnQpIHtcclxuICAgICAgICBpZiAobmV3UG9pbnQuaXNFcXVhbCh0aGlzLmJvYXJkLmVuUGFzc2FudFBvaW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcyA9IHRoaXMuYm9hcmQucGllY2VzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChwaWVjZSkgPT4gcGllY2UgIT09IHRoaXMuYm9hcmQuZW5QYXNzYW50UGllY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5lblBhc3NhbnRQb2ludCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuZW5QYXNzYW50UGllY2UgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmVDbG9uZSgpIHtcclxuICAgICAgICBjb25zdCBjbG9uZSA9IHRoaXMuYm9hcmQuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYm9hcmQucmV2ZXJ0ZWQpIHtcclxuICAgICAgICAgICAgY2xvbmUucmV2ZXJzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJvYXJkU3RhdGVQcm92aWRlci5hZGRNb3ZlKG5ldyBCb2FyZFN0YXRlKGNsb25lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlTW92ZUNsb25lKCkge1xyXG4gICAgICAgIGNvbnN0IGNsb25lID0gdGhpcy5ib2FyZC5jbG9uZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ib2FyZC5yZXZlcnRlZCkge1xyXG4gICAgICAgICAgICBjbG9uZS5yZXZlcnNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW92ZVN0YXRlUHJvdmlkZXIuYWRkTW92ZShuZXcgQm9hcmRTdGF0ZShjbG9uZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY3VsYXRlUGllY2VTaXplKCkge1xyXG4gICAgICAgIHRoaXMucGllY2VTaXplID0gdGhpcy5oZWlnaHRBbmRXaWR0aCAvIDEwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5jcmVhc2VGdWxsTW92ZUNvdW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIpIHtcclxuICAgICAgICAgICAgKyt0aGlzLmJvYXJkLmZ1bGxNb3ZlQ291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQ2xpY2tFdmVudChwb2ludENsaWNrZWQ6IFBvaW50KSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmlzUG9pbnRJblBvc3NpYmxlTW92ZXMocG9pbnRDbGlja2VkKSB8fFxyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmlzUG9pbnRJblBvc3NpYmxlQ2FwdHVyZXMocG9pbnRDbGlja2VkKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVDbG9uZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmxhc3RNb3ZlU3JjID0gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5hY3RpdmVQaWVjZS5wb2ludC5yb3csXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlLnBvaW50LmNvbFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmxhc3RNb3ZlRGVzdCA9IHBvaW50Q2xpY2tlZDtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlUGllY2UodGhpcy5ib2FyZC5hY3RpdmVQaWVjZSwgcG9pbnRDbGlja2VkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzYWJsZVNlbGVjdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHBpZWNlQ2xpY2tlZCA9IHRoaXMuZ2V0UGllY2VCeVBvaW50KFxyXG4gICAgICAgICAgICBwb2ludENsaWNrZWQucm93LFxyXG4gICAgICAgICAgICBwb2ludENsaWNrZWQuY29sXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAocGllY2VDbGlja2VkKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICh0aGlzLmJvYXJkLmN1cnJlbnRXaGl0ZVBsYXllciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBpZWNlQ2xpY2tlZC5jb2xvciA9PT0gQ29sb3IuQkxBQ0spIHx8XHJcbiAgICAgICAgICAgICAgICAoIXRoaXMuYm9hcmQuY3VycmVudFdoaXRlUGxheWVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGllY2VDbGlja2VkLmNvbG9yID09PSBDb2xvci5XSElURSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUFjdGl2ZVBpZWNlKHBpZWNlQ2xpY2tlZCwgcG9pbnRDbGlja2VkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGREcmF3UG9pbnQoXHJcbiAgICAgICAgeDogbnVtYmVyLFxyXG4gICAgICAgIHk6IG51bWJlcixcclxuICAgICAgICBjcnRsOiBib29sZWFuLFxyXG4gICAgICAgIGFsdDogYm9vbGVhbixcclxuICAgICAgICBzaGlmdDogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgdXBQb2ludCA9IHRoaXMuZ2V0RHJhd2luZ1BvaW50KHgsIHksIGNydGwsIGFsdCwgc2hpZnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmRyYXdQb2ludC5pc0VxdWFsKHVwUG9pbnQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBDaXJjbGUoKTtcclxuICAgICAgICAgICAgY2lyY2xlLmRyYXdQb2ludCA9IHVwUG9pbnQ7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmF3UHJvdmlkZXIuY29udGFpbnNDaXJjbGUoY2lyY2xlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3UHJvdmlkZXIuYWRkQ2lyY2xlKGNpcmNsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQcm92aWRlci5yZW9tdmVDaXJjbGUoY2lyY2xlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gbmV3IEFycm93KCk7XHJcbiAgICAgICAgICAgIGFycm93LnN0YXJ0ID0gdGhpcy5kcmF3UG9pbnQ7XHJcbiAgICAgICAgICAgIGFycm93LmVuZCA9IHVwUG9pbnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhd1Byb3ZpZGVyLmNvbnRhaW5zQXJyb3coYXJyb3cpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQcm92aWRlci5hZGRBcnJvdyhhcnJvdyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQcm92aWRlci5yZW1vdmVBcnJvdyhhcnJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShjb29yZHM6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChjb29yZHMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlSW5kZXhlcyA9IE1vdmVVdGlscy50cmFuc2xhdGVDb29yZHNUb0luZGV4KFxyXG4gICAgICAgICAgICAgICAgY29vcmRzLnN1YnN0cmluZygwLCAyKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQucmV2ZXJ0ZWRcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc3RJbmRleGVzID0gTW92ZVV0aWxzLnRyYW5zbGF0ZUNvb3Jkc1RvSW5kZXgoXHJcbiAgICAgICAgICAgICAgICBjb29yZHMuc3Vic3RyaW5nKDIsIDQpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5yZXZlcnRlZFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3JjUGllY2UgPSB0aGlzLmdldFBpZWNlQnlQb2ludChcclxuICAgICAgICAgICAgICAgIHNvdXJjZUluZGV4ZXMueUF4aXMsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2VJbmRleGVzLnhBeGlzXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3JjUGllY2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjUGllY2UuY29sb3IgPT09IENvbG9yLkJMQUNLKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICghdGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjUGllY2UuY29sb3IgPT09IENvbG9yLldISVRFKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUFjdGl2ZVBpZWNlKHNyY1BpZWNlLCBzcmNQaWVjZS5wb2ludCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQuaXNQb2ludEluUG9zc2libGVNb3ZlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBvaW50KGRlc3RJbmRleGVzLnlBeGlzLCBkZXN0SW5kZXhlcy54QXhpcylcclxuICAgICAgICAgICAgICAgICAgICApIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5pc1BvaW50SW5Qb3NzaWJsZUNhcHR1cmVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUG9pbnQoZGVzdEluZGV4ZXMueUF4aXMsIGRlc3RJbmRleGVzLnhBeGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGllY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1BpZWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUG9pbnQoZGVzdEluZGV4ZXMueUF4aXMsIGRlc3RJbmRleGVzLnhBeGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzLmxlbmd0aCA9PT0gNSA/ICtjb29yZHMuc3Vic3RyaW5nKDQsIDUpIDogMFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQubGFzdE1vdmVTcmMgPSBuZXcgUG9pbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUluZGV4ZXMueUF4aXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUluZGV4ZXMueEF4aXNcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQubGFzdE1vdmVEZXN0ID0gbmV3IFBvaW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0SW5kZXhlcy55QXhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdEluZGV4ZXMueEF4aXNcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VzdG9tUGllY2VJY29ucyhwaWVjZTogUGllY2UpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShcclxuICAgICAgICAgICAgYHsgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwidXJsKCcke3RoaXMucGllY2VJY29uTWFuYWdlci5nZXRQaWVjZUljb24oXHJcbiAgICAgICAgICAgICAgICBwaWVjZVxyXG4gICAgICAgICAgICApfScpXCJ9YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1BpZWNlRGlzYWJsZWQocGllY2VDbGlja2VkOiBQaWVjZSkge1xyXG4gICAgICAgIGlmIChwaWVjZUNsaWNrZWQgJiYgcGllY2VDbGlja2VkLnBvaW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvdW5kQ2FwdHVyZSA9IHRoaXMuYm9hcmQucG9zc2libGVDYXB0dXJlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGNhcHR1cmUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZS5jb2wgPT09IHBpZWNlQ2xpY2tlZC5wb2ludC5jb2wgJiZcclxuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlLnJvdyA9PT0gcGllY2VDbGlja2VkLnBvaW50LnJvd1xyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvdW5kQ2FwdHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHBpZWNlQ2xpY2tlZCAmJlxyXG4gICAgICAgICAgICAoKHRoaXMubGlnaHREaXNhYmxlZCAmJiBwaWVjZUNsaWNrZWQuY29sb3IgPT09IENvbG9yLldISVRFKSB8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuZGFya0Rpc2FibGVkICYmIHBpZWNlQ2xpY2tlZC5jb2xvciA9PT0gQ29sb3IuQkxBQ0spKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19