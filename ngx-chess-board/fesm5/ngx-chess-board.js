import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, ViewChild, Injectable, ɵɵdefineInjectable, EventEmitter, Input, Output, HostListener, NgModule } from '@angular/core';
import { __extends, __spread, __assign } from 'tslib';
import { BehaviorSubject, Subject } from 'rxjs';
import { cloneDeep } from 'lodash';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/color.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var Color = {
    WHITE: 0,
    BLACK: 1,
};
Color[Color.WHITE] = 'WHITE';
Color[Color.BLACK] = 'BLACK';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/piece.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
Piece = /** @class */ (function () {
    function Piece(point, color, constant, relValue, board) {
        this.checkPoints = [];
        this.color = color;
        this.constant = constant;
        this.point = point;
        this.relValue = relValue;
        this.board = board;
    }
    return Piece;
}());
if (false) {
    /** @type {?} */
    Piece.prototype.point;
    /** @type {?} */
    Piece.prototype.color;
    /** @type {?} */
    Piece.prototype.constant;
    /** @type {?} */
    Piece.prototype.checkPoints;
    /** @type {?} */
    Piece.prototype.relValue;
    /** @type {?} */
    Piece.prototype.board;
    /**
     * @abstract
     * @return {?}
     */
    Piece.prototype.getPossibleMoves = function () { };
    /**
     * @abstract
     * @return {?}
     */
    Piece.prototype.getPossibleCaptures = function () { };
    /**
     * @abstract
     * @return {?}
     */
    Piece.prototype.getCoveredFields = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/point.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Point = /** @class */ (function () {
    function Point(row, col) {
        this.row = row;
        this.col = col;
    }
    /**
     * @param {?} that
     * @return {?}
     */
    Point.prototype.isEqual = /**
     * @param {?} that
     * @return {?}
     */
    function (that) {
        return that && this.row === that.row && this.col === that.col;
    };
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    Point.prototype.hasCoordsEqual = /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    function (row, col) {
        return row && col && this.row === row && this.col === col;
    };
    return Point;
}());
if (false) {
    /** @type {?} */
    Point.prototype.row;
    /** @type {?} */
    Point.prototype.col;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/rook.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook(point, color, constant, board) {
        var _this = _super.call(this, point, color, constant, 5, board) || this;
        _this.isMovedAlready = false;
        return _this;
    }
    /**
     * @return {?}
     */
    Rook.prototype.getPossibleMoves = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        for (var i = row + 1; i < 8; ++i) {
            // dol
            if (this.board.isFieldEmpty(i, col)) {
                possiblePoints.push(new Point(i, col));
            }
            else {
                break;
            }
        }
        for (var i = row - 1; i >= 0; --i) {
            // gora
            if (this.board.isFieldEmpty(i, col)) {
                possiblePoints.push(new Point(i, col));
            }
            else {
                break;
            }
        }
        for (var j = col - 1; j >= 0; --j) {
            // lewo
            if (this.board.isFieldEmpty(row, j)) {
                possiblePoints.push(new Point(row, j));
            }
            else {
                break;
            }
        }
        for (var j = col + 1; j < 8; ++j) {
            // prawo
            if (this.board.isFieldEmpty(row, j)) {
                possiblePoints.push(new Point(row, j));
            }
            else {
                break;
            }
        }
        return possiblePoints;
    };
    /**
     * @return {?}
     */
    Rook.prototype.getPossibleCaptures = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        for (var i = row + 1; i < 8; ++i) {
            // dol
            if (this.board.isFieldTakenByEnemy(i, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, col));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, col)) {
                    break;
                }
            }
        }
        for (var i = row - 1; i >= 0; --i) {
            // gora
            if (this.board.isFieldTakenByEnemy(i, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, col));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, col)) {
                    break;
                }
            }
        }
        for (var j = col - 1; j >= 0; --j) {
            // lewo
            if (this.board.isFieldTakenByEnemy(row, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(row, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(row, j)) {
                    break;
                }
            }
        }
        for (var j = col + 1; j < 8; ++j) {
            // prawo
            if (this.board.isFieldTakenByEnemy(row, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(row, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(row, j)) {
                    break;
                }
            }
        }
        return possiblePoints;
    };
    /**
     * @return {?}
     */
    Rook.prototype.getCoveredFields = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        for (var i = row + 1; i < 8; ++i) {
            // dol
            if (this.board.isFieldEmpty(i, col)) {
                possiblePoints.push(new Point(i, col));
            }
            else {
                if (!(this.board.getPieceByField instanceof King)) {
                    possiblePoints.push(new Point(i, col));
                    break;
                }
            }
        }
        for (var i = row - 1; i >= 0; --i) {
            // gora
            if (this.board.isFieldEmpty(i, col)) {
                possiblePoints.push(new Point(i, col));
            }
            else {
                if (!(this.board.getPieceByField instanceof King)) {
                    possiblePoints.push(new Point(i, col));
                    break;
                }
            }
        }
        for (var j = col - 1; j >= 0; --j) {
            // lewo
            if (this.board.isFieldEmpty(row, j)) {
                possiblePoints.push(new Point(row, j));
            }
            else {
                if (!(this.board.getPieceByField instanceof King)) {
                    possiblePoints.push(new Point(row, j));
                    break;
                }
            }
        }
        for (var j = col + 1; j < 8; ++j) {
            // prawo
            if (this.board.isFieldEmpty(row, j)) {
                possiblePoints.push(new Point(row, j));
            }
            else {
                if (!(this.board.getPieceByField instanceof King)) {
                    possiblePoints.push(new Point(row, j));
                    break;
                }
            }
        }
        return possiblePoints;
    };
    return Rook;
}(Piece));
if (false) {
    /** @type {?} */
    Rook.prototype.isMovedAlready;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/king.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King(point, color, constant, board) {
        var _this = _super.call(this, point, color, constant, 0, board) || this;
        _this.castledAlready = false;
        _this.shortCastled = false;
        _this.longCastled = false;
        _this.isCastling = false;
        return _this;
    }
    /**
     * @return {?}
     */
    King.prototype.getPossibleMoves = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        // lewo
        if (this.board.isFieldEmpty(row, col - 1) &&
            !this.board.isFieldUnderAttack(row, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row, col - 1));
        }
        // prawo
        if (this.board.isFieldEmpty(row, col + 1) &&
            !this.board.isFieldUnderAttack(row, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row, col + 1));
        }
        // dol
        if (this.board.isFieldEmpty(row + 1, col) &&
            !this.board.isFieldUnderAttack(row + 1, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 1, col));
        }
        // gora
        if (this.board.isFieldEmpty(row - 1, col) &&
            !this.board.isFieldUnderAttack(row - 1, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 1, col));
        }
        // lewo gora
        if (this.board.isFieldEmpty(row - 1, col - 1) &&
            !this.board.isFieldUnderAttack(row - 1, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 1, col - 1));
        }
        // prawo gora
        if (this.board.isFieldEmpty(row - 1, col + 1) &&
            !this.board.isFieldUnderAttack(row - 1, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 1, col + 1));
        }
        // lewo dol
        if (this.board.isFieldEmpty(row + 1, col - 1) &&
            !this.board.isFieldUnderAttack(row + 1, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 1, col - 1));
        }
        // prawo dol
        if (this.board.isFieldEmpty(row + 1, col + 1) &&
            !this.board.isFieldUnderAttack(row + 1, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 1, col + 1));
        }
        if (!this.isMovedAlready) {
            /** @type {?} */
            var longCastlePossible = true;
            for (var i = col - 1; i > 0; --i) {
                if (!this.board.isFieldEmpty(row, i) ||
                    this.board.isFieldUnderAttack(row, i, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                    longCastlePossible = false;
                    break;
                }
            }
            if (longCastlePossible && this.board.getPieceByField(row, 0)) {
                /** @type {?} */
                var leftRook = this.board.getPieceByField(row, 0);
                if (leftRook instanceof Rook) {
                    if (!leftRook.isMovedAlready) {
                        possiblePoints.push(new Point(row, col - 2));
                    }
                }
            }
            /** @type {?} */
            var shortCastlePossible = true;
            for (var i = col + 1; i < 7; ++i) {
                if (!this.board.isFieldEmpty(row, i) ||
                    this.board.isFieldUnderAttack(row, i, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                    shortCastlePossible = false;
                    break;
                }
            }
            if (shortCastlePossible && this.board.getPieceByField(row, 7)) {
                /** @type {?} */
                var rightRook = this.board.getPieceByField(row, 7);
                if (rightRook instanceof Rook) {
                    if (!rightRook.isMovedAlready) {
                        possiblePoints.push(new Point(row, col + 2));
                    }
                }
            }
        }
        return possiblePoints;
    };
    /**
     * @return {?}
     */
    King.prototype.getPossibleCaptures = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        // lewo
        if (this.board.isFieldTakenByEnemy(row, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE) &&
            !this.board.isFieldUnderAttack(row, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row, col - 1));
        }
        // prawo
        if (this.board.isFieldTakenByEnemy(row, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE) &&
            !this.board.isFieldUnderAttack(row, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row, col + 1));
        }
        // dol
        if (this.board.isFieldTakenByEnemy(row + 1, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE) &&
            !this.board.isFieldUnderAttack(row + 1, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 1, col));
        }
        // gora
        if (this.board.isFieldTakenByEnemy(row - 1, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE) &&
            !this.board.isFieldUnderAttack(row - 1, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 1, col));
        }
        // lewo gora
        if (this.board.isFieldTakenByEnemy(row - 1, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE) &&
            !this.board.isFieldUnderAttack(row - 1, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 1, col - 1));
        }
        // prawo gora
        if (this.board.isFieldTakenByEnemy(row - 1, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE) &&
            !this.board.isFieldUnderAttack(row - 1, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 1, col + 1));
        }
        // lewo dol
        if (this.board.isFieldTakenByEnemy(row + 1, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE) &&
            !this.board.isFieldUnderAttack(row + 1, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 1, col - 1));
        }
        // prawo dol
        if (this.board.isFieldTakenByEnemy(row + 1, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE) &&
            !this.board.isFieldUnderAttack(row + 1, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 1, col + 1));
        }
        return possiblePoints;
    };
    /**
     * @return {?}
     */
    King.prototype.getCoveredFields = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        // lewo
        if (this.board.isFieldTakenByEnemy(row, col - 1, this.color)) {
            possiblePoints.push(new Point(row, col - 1));
        }
        // prawo
        if (this.board.isFieldTakenByEnemy(row, col + 1, this.color)) {
            possiblePoints.push(new Point(row, col + 1));
        }
        // dol
        if (this.board.isFieldTakenByEnemy(row + 1, col, this.color)) {
            possiblePoints.push(new Point(row + 1, col));
        }
        // gora
        if (this.board.isFieldTakenByEnemy(row - 1, col, this.color)) {
            possiblePoints.push(new Point(row - 1, col));
        }
        // lewo gora
        if (this.board.isFieldTakenByEnemy(row - 1, col - 1, this.color)) {
            possiblePoints.push(new Point(row - 1, col - 1));
        }
        // prawo gora
        if (this.board.isFieldTakenByEnemy(row - 1, col + 1, this.color)) {
            possiblePoints.push(new Point(row - 1, col + 1));
        }
        // lewo dol
        if (this.board.isFieldTakenByEnemy(row + 1, col - 1, this.color)) {
            possiblePoints.push(new Point(row + 1, col - 1));
        }
        // prawo dol
        if (this.board.isFieldTakenByEnemy(row + 1, col + 1, this.color)) {
            possiblePoints.push(new Point(row + 1, col + 1));
        }
        return possiblePoints;
    };
    return King;
}(Piece));
if (false) {
    /** @type {?} */
    King.prototype.castledAlready;
    /** @type {?} */
    King.prototype.shortCastled;
    /** @type {?} */
    King.prototype.longCastled;
    /** @type {?} */
    King.prototype.isMovedAlready;
    /** @type {?} */
    King.prototype.isCastling;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/bishop.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop(point, color, constant, board) {
        return _super.call(this, point, color, constant, 3, board) || this;
    }
    /**
     * @return {?}
     */
    Bishop.prototype.getPossibleMoves = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
            // lewa gorna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        for (var i = row - 1, j = col + 1; i >= 0 && j < 8; --i, ++j) {
            // prawa gorna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        for (var i = row + 1, j = col - 1; i < 8 && j >= 0; ++i, --j) {
            // lewa dolna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        for (var i = row + 1, j = col + 1; i < 8 && j < 8; ++i, ++j) {
            // prawa dolna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        return possiblePoints;
    };
    /**
     * @return {?}
     */
    Bishop.prototype.getPossibleCaptures = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
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
        for (var i = row - 1, j = col + 1; i >= 0 && j < 8; --i, ++j) {
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
        for (var i = row + 1, j = col - 1; i < 8 && j >= 0; ++i, --j) {
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
        for (var i = row + 1, j = col + 1; i < 8 && j < 8; ++i, ++j) {
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
    };
    /**
     * @return {?}
     */
    Bishop.prototype.getCoveredFields = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
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
        for (var i = row - 1, j = col + 1; i >= 0 && j < 8; --i, ++j) {
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
        for (var i = row + 1, j = col - 1; i < 8 && j >= 0; ++i, --j) {
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
        for (var i = row + 1, j = col + 1; i < 8 && j < 8; ++i, ++j) {
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
    };
    return Bishop;
}(Piece));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/knight.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight(point, color, constant, board) {
        var _this = _super.call(this, point, color, constant, 3, board) || this;
        _this.isMovedAlready = false;
        return _this;
    }
    /**
     * @return {?}
     */
    Knight.prototype.getPossibleMoves = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        // gora -> lewo
        if (this.board.isFieldEmpty(row - 2, col - 1)) {
            possiblePoints.push(new Point(row - 2, col - 1));
        }
        // gora -> prawo
        if (this.board.isFieldEmpty(row - 2, col + 1)) {
            possiblePoints.push(new Point(row - 2, col + 1));
        }
        // lewo -> gora
        if (this.board.isFieldEmpty(row - 1, col - 2)) {
            possiblePoints.push(new Point(row - 1, col - 2));
        }
        // prawo -> gora
        if (this.board.isFieldEmpty(row - 1, col + 2)) {
            possiblePoints.push(new Point(row - 1, col + 2));
        }
        // lewo -> dol
        if (this.board.isFieldEmpty(row + 1, col - 2)) {
            possiblePoints.push(new Point(row + 1, col - 2));
        }
        // prawo -> dol
        if (this.board.isFieldEmpty(row + 1, col + 2)) {
            possiblePoints.push(new Point(row + 1, col + 2));
        }
        // dol -> lewo
        if (this.board.isFieldEmpty(row + 2, col - 1)) {
            possiblePoints.push(new Point(row + 2, col - 1));
        }
        // dol -> prawo
        if (this.board.isFieldEmpty(row + 2, col + 1)) {
            possiblePoints.push(new Point(row + 2, col + 1));
        }
        return possiblePoints;
    };
    /**
     * @return {?}
     */
    Knight.prototype.getPossibleCaptures = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        // gora -> lewo
        if (this.board.isFieldTakenByEnemy(row - 2, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 2, col - 1));
        }
        // gora -> prawo
        if (this.board.isFieldTakenByEnemy(row - 2, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 2, col + 1));
        }
        // lewo -> gora
        if (this.board.isFieldTakenByEnemy(row - 1, col - 2, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 1, col - 2));
        }
        // prawo -> gora
        if (this.board.isFieldTakenByEnemy(row - 1, col + 2, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 1, col + 2));
        }
        // lewo -> dol
        if (this.board.isFieldTakenByEnemy(row + 1, col - 2, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 1, col - 2));
        }
        // prawo -> dol
        if (this.board.isFieldTakenByEnemy(row + 1, col + 2, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 1, col + 2));
        }
        // dol -> lewo
        if (this.board.isFieldTakenByEnemy(row + 2, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 2, col - 1));
        }
        // dol -> prawo
        if (this.board.isFieldTakenByEnemy(row + 2, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 2, col + 1));
        }
        return possiblePoints;
    };
    /**
     * @return {?}
     */
    Knight.prototype.getCoveredFields = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        // gora -> lewo
        possiblePoints.push(new Point(row - 2, col - 1));
        // gora -> prawo
        possiblePoints.push(new Point(row - 2, col + 1));
        // lewo -> gora
        possiblePoints.push(new Point(row - 1, col - 2));
        // prawo -> gora
        possiblePoints.push(new Point(row - 1, col + 2));
        // lewo -> dol
        possiblePoints.push(new Point(row + 1, col - 2));
        // prawo -> dol
        possiblePoints.push(new Point(row + 1, col + 2));
        // dol -> lewo
        possiblePoints.push(new Point(row + 2, col - 1));
        // dol -> prawo
        possiblePoints.push(new Point(row + 2, col + 1));
        return possiblePoints;
    };
    return Knight;
}(Piece));
if (false) {
    /** @type {?} */
    Knight.prototype.isMovedAlready;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/pawn.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn(point, color, constant, board) {
        var _this = _super.call(this, point, color, constant, 1, board) || this;
        _this.isMovedAlready = false;
        return _this;
    }
    /**
     * @return {?}
     */
    Pawn.prototype.getPossibleMoves = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        if ((!this.board.reverted && this.color === Color.WHITE) ||
            (this.board.reverted && this.color === Color.BLACK)) {
            if (this.board.isFieldEmpty(row - 1, col)) {
                possiblePoints.push(new Point(row - 1, col));
                if (!this.isMovedAlready &&
                    this.board.isFieldEmpty(row - 2, col)) {
                    possiblePoints.push(new Point(row - 2, col));
                }
            }
        }
        else {
            if (
            /*!board.isFieldTakenByEnemy(row + 1, col, Color.WHITE) &&*/ this.board.isFieldEmpty(row + 1, col)) {
                possiblePoints.push(new Point(row + 1, col));
                if (!this.isMovedAlready &&
                    this.board.isFieldEmpty(row + 2, col)) {
                    possiblePoints.push(new Point(row + 2, col));
                }
            }
        }
        return possiblePoints;
    };
    /**
     * @return {?}
     */
    Pawn.prototype.getPossibleCaptures = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        if ((!this.board.reverted && this.color === Color.WHITE) ||
            (this.board.reverted && this.color === Color.BLACK)) {
            if (this.board.isFieldTakenByEnemy(row - 1, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(row - 1, col - 1));
            }
            if (this.board.isFieldTakenByEnemy(row - 1, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(row - 1, col + 1));
            }
        }
        else {
            if (this.board.isFieldTakenByEnemy(row + 1, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(row + 1, col - 1));
            }
            if (this.board.isFieldTakenByEnemy(row + 1, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(row + 1, col + 1));
            }
        }
        if (this.board.enPassantPoint &&
            this.board.enPassantPiece.color ===
                (this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            if (row === this.board.enPassantPiece.point.row &&
                Math.abs(this.board.enPassantPiece.point.col - col) === 1) {
                possiblePoints.push(this.board.enPassantPoint);
            }
        }
        return possiblePoints;
    };
    /**
     * @return {?}
     */
    Pawn.prototype.getCoveredFields = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        if ((!this.board.reverted && this.color === Color.WHITE) ||
            (this.board.reverted && this.color === Color.BLACK)) {
            possiblePoints.push(new Point(row - 1, col - 1));
            possiblePoints.push(new Point(row - 1, col + 1));
        }
        else {
            possiblePoints.push(new Point(row + 1, col - 1));
            possiblePoints.push(new Point(row + 1, col + 1));
        }
        return possiblePoints;
    };
    return Pawn;
}(Piece));
if (false) {
    /** @type {?} */
    Pawn.prototype.isMovedAlready;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/queen.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen(point, color, constant, board) {
        return _super.call(this, point, color, constant, 9, board) || this;
    }
    /**
     * @return {?}
     */
    Queen.prototype.getPossibleMoves = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
            // lewa gorna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        for (var i = row - 1, j = col + 1; i >= 0 && j < 8; --i, ++j) {
            // prawa gorna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        for (var i = row + 1, j = col - 1; i < 8 && j >= 0; ++i, --j) {
            // lewa dolna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        for (var i = row + 1, j = col + 1; i < 8 && j < 8; ++i, ++j) {
            // prawa dolna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        for (var i = row + 1; i < 8; ++i) {
            // dol
            if (this.board.isFieldEmpty(i, col)) {
                possiblePoints.push(new Point(i, col));
            }
            else {
                break;
            }
        }
        for (var i = row - 1; i >= 0; --i) {
            // gora
            if (this.board.isFieldEmpty(i, col)) {
                possiblePoints.push(new Point(i, col));
            }
            else {
                break;
            }
        }
        for (var j = col - 1; j >= 0; --j) {
            // lewo
            if (this.board.isFieldEmpty(row, j)) {
                possiblePoints.push(new Point(row, j));
            }
            else {
                break;
            }
        }
        for (var j = col + 1; j < 8; ++j) {
            // prawo
            if (this.board.isFieldEmpty(row, j)) {
                possiblePoints.push(new Point(row, j));
            }
            else {
                break;
            }
        }
        return possiblePoints;
    };
    /**
     * @return {?}
     */
    Queen.prototype.getPossibleCaptures = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
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
        for (var i = row - 1, j = col + 1; i >= 0 && j < 8; --i, ++j) {
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
        for (var i = row + 1, j = col - 1; i < 8 && j >= 0; ++i, --j) {
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
        for (var i = row + 1, j = col + 1; i < 8 && j < 8; ++i, ++j) {
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
        for (var i = row + 1; i < 8; ++i) {
            // dol
            if (this.board.isFieldTakenByEnemy(i, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, col));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, col)) {
                    break;
                }
            }
        }
        for (var i = row - 1; i >= 0; --i) {
            // gora
            if (this.board.isFieldTakenByEnemy(i, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, col));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, col)) {
                    break;
                }
            }
        }
        for (var j = col - 1; j >= 0; --j) {
            // lewo
            if (this.board.isFieldTakenByEnemy(row, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(row, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(row, j)) {
                    break;
                }
            }
        }
        for (var j = col + 1; j < 8; ++j) {
            // prawo
            if (this.board.isFieldTakenByEnemy(row, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(row, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(row, j)) {
                    break;
                }
            }
        }
        return possiblePoints;
    };
    /**
     * @return {?}
     */
    Queen.prototype.getCoveredFields = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var possiblePoints = [];
        /** @type {?} */
        var row = this.point.row;
        /** @type {?} */
        var col = this.point.col;
        for (var i = row + 1; i < 8; ++i) {
            // dol
            if (this.board.isFieldEmpty(i, col)) {
                possiblePoints.push(new Point(i, col));
            }
            else {
                if (!(this.board.getPieceByField(i, col) instanceof King)) {
                    possiblePoints.push(new Point(i, col));
                    break;
                }
            }
        }
        for (var i = row - 1; i >= 0; --i) {
            // gora
            if (this.board.isFieldEmpty(i, col)) {
                possiblePoints.push(new Point(i, col));
            }
            else {
                if (!(this.board.getPieceByField(i, col) instanceof King)) {
                    possiblePoints.push(new Point(i, col));
                    break;
                }
            }
        }
        for (var j = col - 1; j >= 0; --j) {
            // lewo
            if (this.board.isFieldEmpty(row, j)) {
                possiblePoints.push(new Point(row, j));
            }
            else {
                if (!(this.board.getPieceByField(row, j) instanceof King)) {
                    possiblePoints.push(new Point(row, j));
                    break;
                }
            }
        }
        for (var j = col + 1; j < 8; ++j) {
            // prawo
            if (this.board.isFieldEmpty(row, j)) {
                possiblePoints.push(new Point(row, j));
            }
            else {
                if (!(this.board.getPieceByField(row, j) instanceof King)) {
                    possiblePoints.push(new Point(row, j));
                    break;
                }
            }
        }
        for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
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
        for (var i = row - 1, j = col + 1; i >= 0 && j < 8; --i, ++j) {
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
        for (var i = row + 1, j = col - 1; i < 8 && j >= 0; ++i, --j) {
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
        for (var i = row + 1, j = col + 1; i < 8 && j < 8; ++i, ++j) {
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
    };
    return Queen;
}(Piece));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/unicode-constants.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PieceConstant() { }
if (false) {
    /** @type {?} */
    PieceConstant.prototype.name;
    /** @type {?} */
    PieceConstant.prototype.icon;
}
/** @type {?} */
var UnicodeConstants = {
    WHITE_KING: { name: 'King', icon: '&#x2654;' },
    WHITE_QUEEN: { name: 'Queen', icon: '&#x2655;' },
    WHITE_KNIGHT: { name: 'Knight', icon: '&#x2658' },
    WHITE_ROOK: { name: 'Rook', icon: '&#x2656' },
    WHITE_PAWN: { name: 'Pawn', icon: '&#x2659' },
    WHITE_BISHOP: { name: 'Bishop', icon: '&#x2657' },
    BLACK_KING: { name: 'King', icon: '&#x265A' },
    BLACK_QUEEN: { name: 'Queen', icon: '&#x265B' },
    BLACK_KNIGHT: { name: 'Knight', icon: '&#x265E' },
    BLACK_ROOK: { name: 'Rook', icon: '&#x265C' },
    BLACK_PAWN: { name: 'Pawn', icon: '&#x265F' },
    BLACK_BISHOP: { name: 'Bishop', icon: '&#x265D' },
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/board-state-provider/board-loader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BoardLoader = /** @class */ (function () {
    function BoardLoader(board) {
        this.board = board;
    }
    /**
     * @return {?}
     */
    BoardLoader.prototype.addPieces = /**
     * @return {?}
     */
    function () {
        this.board.pieces = [];
        // piony czarne
        for (var i = 0; i < 8; ++i) {
            this.board.pieces.push(new Pawn(new Point(1, i), Color.BLACK, UnicodeConstants.BLACK_PAWN, this.board));
        }
        this.board.pieces.push(new Rook(new Point(0, 0), Color.BLACK, UnicodeConstants.BLACK_ROOK, this.board));
        this.board.pieces.push(new Knight(new Point(0, 1), Color.BLACK, UnicodeConstants.BLACK_KNIGHT, this.board));
        this.board.pieces.push(new Bishop(new Point(0, 2), Color.BLACK, UnicodeConstants.BLACK_BISHOP, this.board));
        this.board.pieces.push(new Queen(new Point(0, 3), Color.BLACK, UnicodeConstants.BLACK_QUEEN, this.board));
        this.board.pieces.push(new King(new Point(0, 4), Color.BLACK, UnicodeConstants.BLACK_KING, this.board));
        this.board.pieces.push(new Bishop(new Point(0, 5), Color.BLACK, UnicodeConstants.BLACK_BISHOP, this.board));
        this.board.pieces.push(new Knight(new Point(0, 6), Color.BLACK, UnicodeConstants.BLACK_KNIGHT, this.board));
        this.board.pieces.push(new Rook(new Point(0, 7), Color.BLACK, UnicodeConstants.BLACK_ROOK, this.board));
        // piony biale
        for (var i = 0; i < 8; ++i) {
            this.board.pieces.push(new Pawn(new Point(6, i), Color.WHITE, UnicodeConstants.WHITE_PAWN, this.board));
        }
        this.board.pieces.push(new Rook(new Point(7, 0), Color.WHITE, UnicodeConstants.WHITE_ROOK, this.board));
        this.board.pieces.push(new Knight(new Point(7, 1), Color.WHITE, UnicodeConstants.WHITE_KNIGHT, this.board));
        this.board.pieces.push(new Bishop(new Point(7, 2), Color.WHITE, UnicodeConstants.WHITE_BISHOP, this.board));
        this.board.pieces.push(new Queen(new Point(7, 3), Color.WHITE, UnicodeConstants.WHITE_QUEEN, this.board));
        this.board.pieces.push(new King(new Point(7, 4), Color.WHITE, UnicodeConstants.WHITE_KING, this.board));
        this.board.pieces.push(new Bishop(new Point(7, 5), Color.WHITE, UnicodeConstants.WHITE_BISHOP, this.board));
        this.board.pieces.push(new Knight(new Point(7, 6), Color.WHITE, UnicodeConstants.WHITE_KNIGHT, this.board));
        this.board.pieces.push(new Rook(new Point(7, 7), Color.WHITE, UnicodeConstants.WHITE_ROOK, this.board));
        this.board.calculateFEN();
    };
    /**
     * @param {?} fen
     * @return {?}
     */
    BoardLoader.prototype.loadFEN = /**
     * @param {?} fen
     * @return {?}
     */
    function (fen) {
        if (fen) {
            this.board.reverted = false;
            this.board.pieces = [];
            /** @type {?} */
            var split = fen.split('/');
            for (var i = 0; i < 8; ++i) {
                /** @type {?} */
                var pointer = 0;
                for (var j = 0; j < 8; ++j) {
                    /** @type {?} */
                    var chunk = split[i].charAt(j);
                    if (chunk.match(/[0-9]/)) {
                        pointer += Number(chunk);
                    }
                    else {
                        switch (chunk) {
                            case 'r':
                                this.board.pieces.push(new Rook(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_ROOK, this.board));
                                break;
                            case 'n':
                                this.board.pieces.push(new Knight(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_KNIGHT, this.board));
                                break;
                            case 'b':
                                this.board.pieces.push(new Bishop(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_BISHOP, this.board));
                                break;
                            case 'q':
                                this.board.pieces.push(new Queen(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_QUEEN, this.board));
                                break;
                            case 'k':
                                this.board.pieces.push(new King(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_KING, this.board));
                                break;
                            case 'p': {
                                /** @type {?} */
                                var pawn = new Pawn(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_PAWN, this.board);
                                if ((pawn.color === Color.BLACK && pawn.point.row !== 1) ||
                                    (pawn.color === Color.WHITE && pawn.point.row !== 6)) {
                                    pawn.isMovedAlready = true;
                                }
                                this.board.pieces.push(pawn);
                                break;
                            }
                            case 'R':
                                this.board.pieces.push(new Rook(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_ROOK, this.board));
                                break;
                            case 'N':
                                this.board.pieces.push(new Knight(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_KNIGHT, this.board));
                                break;
                            case 'B':
                                this.board.pieces.push(new Bishop(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_BISHOP, this.board));
                                break;
                            case 'Q':
                                this.board.pieces.push(new Queen(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_QUEEN, this.board));
                                break;
                            case 'K':
                                this.board.pieces.push(new King(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_KING, this.board));
                                break;
                            case 'P': {
                                /** @type {?} */
                                var pawn = new Pawn(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_PAWN, this.board);
                                if ((pawn.color === Color.BLACK && pawn.point.row !== 1) ||
                                    (pawn.color === Color.WHITE && pawn.point.row !== 6)) {
                                    pawn.isMovedAlready = true;
                                }
                                this.board.pieces.push(pawn);
                                break;
                            }
                        }
                        ++pointer;
                    }
                }
            }
            this.setCurrentPlayer(fen);
            this.setCastles(fen);
            this.setEnPassant(fen);
            this.setFullMoveCount(fen);
        }
        else {
            throw Error('Incorrect FEN provided');
        }
    };
    /**
     * @param {?} board
     * @return {?}
     */
    BoardLoader.prototype.setBoard = /**
     * @param {?} board
     * @return {?}
     */
    function (board) {
        this.board = board;
    };
    /**
     * @private
     * @param {?} fen
     * @return {?}
     */
    BoardLoader.prototype.setCurrentPlayer = /**
     * @private
     * @param {?} fen
     * @return {?}
     */
    function (fen) {
        if (fen) {
            /** @type {?} */
            var split = fen.split(' ');
            this.board.currentWhitePlayer = split[1] === 'w';
        }
    };
    /**
     * @private
     * @param {?} fen
     * @return {?}
     */
    BoardLoader.prototype.setCastles = /**
     * @private
     * @param {?} fen
     * @return {?}
     */
    function (fen) {
        if (fen) {
            /** @type {?} */
            var split = fen.split(' ');
            /** @type {?} */
            var castleChunk = split[2];
            if (!castleChunk.includes('K')) {
                this.setRookAlreadyMoved(Color.WHITE, 7);
            }
            if (!castleChunk.includes('Q')) {
                this.setRookAlreadyMoved(Color.WHITE, 0);
            }
            if (!castleChunk.includes('k')) {
                this.setRookAlreadyMoved(Color.BLACK, 7);
            }
            if (!castleChunk.includes('q')) {
                this.setRookAlreadyMoved(Color.BLACK, 0);
            }
        }
    };
    /**
     * @private
     * @param {?} fen
     * @return {?}
     */
    BoardLoader.prototype.setFullMoveCount = /**
     * @private
     * @param {?} fen
     * @return {?}
     */
    function (fen) { };
    /**
     * @private
     * @param {?} fen
     * @return {?}
     */
    BoardLoader.prototype.setEnPassant = /**
     * @private
     * @param {?} fen
     * @return {?}
     */
    function (fen) {
        if (fen) {
            /** @type {?} */
            var split = fen.split(' ');
            /** @type {?} */
            var enPassantPoint = split[3];
            if (enPassantPoint === '-') {
                return;
            }
            // if()
        }
    };
    /**
     * @private
     * @param {?} color
     * @param {?} col
     * @return {?}
     */
    BoardLoader.prototype.setRookAlreadyMoved = /**
     * @private
     * @param {?} color
     * @param {?} col
     * @return {?}
     */
    function (color, col) {
        /** @type {?} */
        var rook = (/** @type {?} */ (this.board.pieces.find((/**
         * @param {?} piece
         * @return {?}
         */
        function (piece) { return piece.color === color && piece instanceof Rook && piece.point.col === col; }))));
        rook.isMovedAlready = true;
    };
    return BoardLoader;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    BoardLoader.prototype.board;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/board-state-provider/board-state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BoardState = /** @class */ (function () {
    function BoardState(board) {
        this.board = board;
    }
    return BoardState;
}());
if (false) {
    /** @type {?} */
    BoardState.prototype.board;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/board-state-provider/board-state-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BoardStateProvider = /** @class */ (function () {
    function BoardStateProvider() {
        this.statesSubject$ = new BehaviorSubject([]);
    }
    Object.defineProperty(BoardStateProvider.prototype, "states", {
        get: /**
         * @return {?}
         */
        function () {
            return this.statesSubject$.value;
        },
        set: /**
         * @param {?} states
         * @return {?}
         */
        function (states) {
            this.statesSubject$.next(states);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    BoardStateProvider.prototype.addMove = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.states = __spread(this.states, [state]);
    };
    /**
     * @return {?}
     */
    BoardStateProvider.prototype.getStates = /**
     * @return {?}
     */
    function () {
        return this.states;
    };
    /**
     * @return {?}
     */
    BoardStateProvider.prototype.pop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var lastState = this.getLastState();
        this.states = this.states.filter((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state !== lastState; }));
        return lastState;
    };
    /**
     * @return {?}
     */
    BoardStateProvider.prototype.isEmpty = /**
     * @return {?}
     */
    function () {
        return this.states.length === 0;
    };
    /**
     * @return {?}
     */
    BoardStateProvider.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.states = [];
    };
    /**
     * @return {?}
     */
    BoardStateProvider.prototype.getLastState = /**
     * @return {?}
     */
    function () {
        return this.states[this.getLastStateIndex()];
    };
    /**
     * @return {?}
     */
    BoardStateProvider.prototype.getLastStateIndex = /**
     * @return {?}
     */
    function () {
        return this.states.length - 1;
    };
    return BoardStateProvider;
}());
if (false) {
    /** @type {?} */
    BoardStateProvider.prototype.statesSubject$;
}

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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/drawing-tools/arrow.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Arrow = /** @class */ (function () {
    function Arrow() {
    }
    /**
     * @param {?} arrow
     * @return {?}
     */
    Arrow.prototype.isEqual = /**
     * @param {?} arrow
     * @return {?}
     */
    function (arrow) {
        return arrow && this.start.isEqual(arrow.start) && this.end.isEqual(arrow.end);
    };
    return Arrow;
}());
if (false) {
    /** @type {?} */
    Arrow.prototype.start;
    /** @type {?} */
    Arrow.prototype.end;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/drawing-tools/circle.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Circle = /** @class */ (function () {
    function Circle() {
    }
    /**
     * @param {?} circle
     * @return {?}
     */
    Circle.prototype.isEqual = /**
     * @param {?} circle
     * @return {?}
     */
    function (circle) {
        return circle && this.drawPoint.isEqual(circle.drawPoint);
    };
    return Circle;
}());
if (false) {
    /** @type {?} */
    Circle.prototype.drawPoint;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/drawing-tools/draw-point.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DrawPoint = /** @class */ (function () {
    function DrawPoint(x, y, color) {
        this.x = x + 0.5;
        this.y = y + 0.5;
        this.color = color;
    }
    /**
     * @param {?} that
     * @return {?}
     */
    DrawPoint.prototype.isEqual = /**
     * @param {?} that
     * @return {?}
     */
    function (that) {
        return that && that.x === this.x && this.y === that.y;
    };
    return DrawPoint;
}());
if (false) {
    /** @type {?} */
    DrawPoint.prototype.x;
    /** @type {?} */
    DrawPoint.prototype.y;
    /** @type {?} */
    DrawPoint.prototype.color;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/drawing-tools/draw-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DrawProvider = /** @class */ (function () {
    function DrawProvider() {
        this.arrowsSubject$ = new BehaviorSubject([]);
        this.circlesSubject$ = new BehaviorSubject([]);
        this.arrows$ = this.arrowsSubject$.asObservable();
        this.circles$ = this.circlesSubject$.asObservable();
    }
    Object.defineProperty(DrawProvider.prototype, "circles", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.circlesSubject$.value;
        },
        set: /**
         * @private
         * @param {?} circles
         * @return {?}
         */
        function (circles) {
            this.circlesSubject$.next(circles);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawProvider.prototype, "arrows", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.arrowsSubject$.value;
        },
        set: /**
         * @private
         * @param {?} arrows
         * @return {?}
         */
        function (arrows) {
            this.arrowsSubject$.next(arrows);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} circle
     * @return {?}
     */
    DrawProvider.prototype.addCircle = /**
     * @param {?} circle
     * @return {?}
     */
    function (circle) {
        this.circles = __spread(this.circles, [circle]);
    };
    /**
     * @param {?} removeCircle
     * @return {?}
     */
    DrawProvider.prototype.reomveCircle = /**
     * @param {?} removeCircle
     * @return {?}
     */
    function (removeCircle) {
        this.circles = this.circles.filter((/**
         * @param {?} circle
         * @return {?}
         */
        function (circle) { return !circle.isEqual(removeCircle); }));
    };
    /**
     * @param {?} arrow
     * @return {?}
     */
    DrawProvider.prototype.addArrow = /**
     * @param {?} arrow
     * @return {?}
     */
    function (arrow) {
        this.arrows = __spread(this.arrows, [arrow]);
    };
    /**
     * @param {?} removeArrow
     * @return {?}
     */
    DrawProvider.prototype.removeArrow = /**
     * @param {?} removeArrow
     * @return {?}
     */
    function (removeArrow) {
        this.arrows = this.arrows.filter((/**
         * @param {?} arrow
         * @return {?}
         */
        function (arrow) { return !arrow.isEqual(removeArrow); }));
    };
    /**
     * @param {?} checkCircle
     * @return {?}
     */
    DrawProvider.prototype.containsCircle = /**
     * @param {?} checkCircle
     * @return {?}
     */
    function (checkCircle) {
        return this.circles.some((/**
         * @param {?} circle
         * @return {?}
         */
        function (circle) { return circle.isEqual(checkCircle); }));
    };
    /**
     * @param {?} checkArrow
     * @return {?}
     */
    DrawProvider.prototype.containsArrow = /**
     * @param {?} checkArrow
     * @return {?}
     */
    function (checkArrow) {
        return this.arrows.some((/**
         * @param {?} arrow
         * @return {?}
         */
        function (arrow) { return arrow.isEqual(checkArrow); }));
    };
    /**
     * @return {?}
     */
    DrawProvider.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.arrows = [];
        this.circles = [];
    };
    return DrawProvider;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DrawProvider.prototype.arrowsSubject$;
    /**
     * @type {?}
     * @private
     */
    DrawProvider.prototype.circlesSubject$;
    /** @type {?} */
    DrawProvider.prototype.arrows$;
    /** @type {?} */
    DrawProvider.prototype.circles$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/history-move-provider/history-move.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HistoryMove = /** @class */ (function () {
    function HistoryMove(move, piece, color, captured) {
        this.move = move;
        this.piece = piece;
        this.color = color;
        this.x = captured;
    }
    return HistoryMove;
}());
if (false) {
    /** @type {?} */
    HistoryMove.prototype.move;
    /** @type {?} */
    HistoryMove.prototype.piece;
    /** @type {?} */
    HistoryMove.prototype.color;
    /** @type {?} */
    HistoryMove.prototype.x;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/history-move-provider/history-move-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HistoryMoveProvider = /** @class */ (function () {
    function HistoryMoveProvider() {
        this.historyMovesSubject$ = new BehaviorSubject([]);
    }
    Object.defineProperty(HistoryMoveProvider.prototype, "historyMoves", {
        get: /**
         * @return {?}
         */
        function () {
            return this.historyMovesSubject$.value;
        },
        set: /**
         * @param {?} states
         * @return {?}
         */
        function (states) {
            this.historyMovesSubject$.next(states);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} historyMove
     * @return {?}
     */
    HistoryMoveProvider.prototype.addMove = /**
     * @param {?} historyMove
     * @return {?}
     */
    function (historyMove) {
        this.historyMoves = __spread(this.historyMoves, [historyMove]);
    };
    /**
     * @return {?}
     */
    HistoryMoveProvider.prototype.pop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var lastHistoryMove = this.getLastMove();
        this.historyMoves = this.historyMoves.filter((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state !== lastHistoryMove; }));
        return lastHistoryMove;
    };
    /**
     * @return {?}
     */
    HistoryMoveProvider.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return this.historyMoves;
    };
    /**
     * @return {?}
     */
    HistoryMoveProvider.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.historyMoves = [];
    };
    /**
     * @return {?}
     */
    HistoryMoveProvider.prototype.getLastMove = /**
     * @return {?}
     */
    function () {
        return this.historyMoves[this.getLastMoveIndex()];
    };
    /**
     * @return {?}
     */
    HistoryMoveProvider.prototype.getLastMoveIndex = /**
     * @return {?}
     */
    function () {
        return this.historyMoves.length - 1;
    };
    return HistoryMoveProvider;
}());
if (false) {
    /** @type {?} */
    HistoryMoveProvider.prototype.historyMovesSubject$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/board.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/move-translation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MoveTranslation = /** @class */ (function () {
    function MoveTranslation(xAxis, yAxis, reverted) {
        this._xAxis = xAxis;
        this._yAxis = yAxis;
        this._reverted = reverted;
    }
    Object.defineProperty(MoveTranslation.prototype, "xAxis", {
        get: /**
         * @return {?}
         */
        function () {
            return this._xAxis;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._xAxis = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoveTranslation.prototype, "yAxis", {
        get: /**
         * @return {?}
         */
        function () {
            return this._yAxis;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._yAxis = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoveTranslation.prototype, "reverted", {
        get: /**
         * @return {?}
         */
        function () {
            return this._reverted;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._reverted = value;
        },
        enumerable: true,
        configurable: true
    });
    return MoveTranslation;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    MoveTranslation.prototype._xAxis;
    /**
     * @type {?}
     * @private
     */
    MoveTranslation.prototype._yAxis;
    /**
     * @type {?}
     * @private
     */
    MoveTranslation.prototype._reverted;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/move-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/piece-decorator/piece-abstract-decorator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
PieceAbstractDecorator = /** @class */ (function () {
    function PieceAbstractDecorator(piece) {
        this.piece = piece;
    }
    return PieceAbstractDecorator;
}());
if (false) {
    /** @type {?} */
    PieceAbstractDecorator.prototype.piece;
    /**
     * @abstract
     * @return {?}
     */
    PieceAbstractDecorator.prototype.getPossibleCaptures = function () { };
    /**
     * @abstract
     * @return {?}
     */
    PieceAbstractDecorator.prototype.getPossibleMoves = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/piece-decorator/available-move-decorator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AvailableMoveDecorator = /** @class */ (function (_super) {
    __extends(AvailableMoveDecorator, _super);
    function AvailableMoveDecorator(piece, pointClicked, color, board) {
        var _this = _super.call(this, piece) || this;
        _this.pointClicked = pointClicked;
        _this.color = color;
        _this.board = board;
        return _this;
    }
    /**
     * @return {?}
     */
    AvailableMoveDecorator.prototype.getPossibleCaptures = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.piece
            .getPossibleCaptures()
            .filter((/**
         * @param {?} point
         * @return {?}
         */
        function (point) {
            return !MoveUtils.willMoveCauseCheck(_this.color, _this.pointClicked.row, _this.pointClicked.col, point.row, point.col, _this.board);
        }));
    };
    /**
     * @return {?}
     */
    AvailableMoveDecorator.prototype.getPossibleMoves = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.piece
            .getPossibleMoves()
            .filter((/**
         * @param {?} point
         * @return {?}
         */
        function (point) {
            return !MoveUtils.willMoveCauseCheck(_this.color, _this.pointClicked.row, _this.pointClicked.col, point.row, point.col, _this.board);
        }));
    };
    return AvailableMoveDecorator;
}(PieceAbstractDecorator));
if (false) {
    /**
     * @type {?}
     * @private
     */
    AvailableMoveDecorator.prototype.pointClicked;
    /**
     * @type {?}
     * @private
     */
    AvailableMoveDecorator.prototype.color;
    /**
     * @type {?}
     * @private
     */
    AvailableMoveDecorator.prototype.board;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/piece-promotion-modal/piece-promotion-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PiecePromotionModalComponent = /** @class */ (function () {
    function PiecePromotionModalComponent() {
        this.selectedIndex = 0;
        this.Color = Color;
        this.opened = false;
    }
    /**
     * @param {?} color
     * @param {?} closeCallback
     * @return {?}
     */
    PiecePromotionModalComponent.prototype.open = /**
     * @param {?} color
     * @param {?} closeCallback
     * @return {?}
     */
    function (color, closeCallback) {
        this.opened = true;
        this.color = color;
        this.onCloseCallback = closeCallback;
        this.modal.nativeElement.style.display = 'block';
    };
    /**
     * @param {?} index
     * @return {?}
     */
    PiecePromotionModalComponent.prototype.changeSelection = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.modal.nativeElement.style.display = 'none';
        this.opened = false;
        this.onCloseCallback(index);
    };
    PiecePromotionModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-piece-promotion-modal',
                    template: "<div\r\n    class=\"container\"\r\n    #modal\r\n>\r\n    <div class=\"wrapper\">\r\n        <div\r\n            class=\"piece\"\r\n            [class.black-bishop]=\"piece === 'bishop' && color === Color.BLACK\"\r\n            [class.black-knight]=\"piece === 'knight' && color === Color.BLACK\"\r\n            [class.black-queen]=\"piece === 'queen' && color === Color.BLACK\"\r\n            [class.black-rook]=\"piece === 'rook' && color === Color.BLACK\"\r\n            [class.selected]=\"selectedIndex === index + 1\"\r\n            [class.white-bishop]=\"piece === 'bishop' && color === Color.WHITE\"\r\n            [class.white-knight]=\"piece === 'knight' && color === Color.WHITE\"\r\n            [class.white-queen]=\"piece === 'queen' && color === Color.WHITE\"\r\n            [class.white-rook]=\"piece === 'rook' && color === Color.WHITE\"\r\n            (click)=\"changeSelection(index + 1)\"\r\n            *ngFor=\"let piece of ['queen', 'rook', 'bishop', 'knight']; let index = index\"\r\n        >\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                    styles: [".container{display:none;position:absolute;z-index:1;top:0;color:#000;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.4)}.wrapper{display:flex;background-color:#fff}.content{height:100%}.piece{width:25%;background-repeat:no-repeat;cursor:pointer;background-size:100%;margin:10px;height:100px;border:2px solid grey;border-radius:4px;box-sizing:border-box}.piece:hover{background-color:rgba(0,0,0,.2)}#close-button{border-radius:4px;background-color:#4caf50;border:none;color:#fff;padding-left:5px;padding-right:5px;text-align:center;text-decoration:none;display:inline-block}.selected{border:2px solid #00b919}"]
                }] }
    ];
    PiecePromotionModalComponent.propDecorators = {
        modal: [{ type: ViewChild, args: ['modal', { static: false },] }]
    };
    return PiecePromotionModalComponent;
}());
if (false) {
    /** @type {?} */
    PiecePromotionModalComponent.prototype.modal;
    /** @type {?} */
    PiecePromotionModalComponent.prototype.selectedIndex;
    /** @type {?} */
    PiecePromotionModalComponent.prototype.color;
    /** @type {?} */
    PiecePromotionModalComponent.prototype.Color;
    /** @type {?} */
    PiecePromotionModalComponent.prototype.opened;
    /**
     * @type {?}
     * @private
     */
    PiecePromotionModalComponent.prototype.onCloseCallback;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/service/ngx-chess-board.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxChessBoardService = /** @class */ (function () {
    function NgxChessBoardService() {
        this.componentMethodCallSource = new Subject();
        this.componentMethodCalled$ = this.componentMethodCallSource.asObservable();
    }
    /**
     * @return {?}
     */
    NgxChessBoardService.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.componentMethodCallSource.next();
    };
    NgxChessBoardService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ NgxChessBoardService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxChessBoardService_Factory() { return new NgxChessBoardService(); }, token: NgxChessBoardService, providedIn: "root" });
    return NgxChessBoardService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxChessBoardService.prototype.componentMethodCallSource;
    /** @type {?} */
    NgxChessBoardService.prototype.componentMethodCalled$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/constants.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.DEFAULT_DARK_TILE_COLOR = 'rgb(97, 84, 61)';
    Constants.DEFAULT_LIGHT_TILE_COLOR = '#BAA378';
    Constants.DEFAULT_SIZE = 500;
    Constants.MIN_BOARD_SIZE = 100;
    Constants.MAX_BOARD_SIZE = 4000;
    return Constants;
}());
if (false) {
    /** @type {?} */
    Constants.DEFAULT_DARK_TILE_COLOR;
    /** @type {?} */
    Constants.DEFAULT_LIGHT_TILE_COLOR;
    /** @type {?} */
    Constants.DEFAULT_SIZE;
    /** @type {?} */
    Constants.MIN_BOARD_SIZE;
    /** @type {?} */
    Constants.MAX_BOARD_SIZE;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/inputs/piece-icon-input-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PieceIconInputManager = /** @class */ (function () {
    function PieceIconInputManager() {
        this._defaultIcons = false;
    }
    Object.defineProperty(PieceIconInputManager.prototype, "pieceIconInput", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pieceIconInput;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pieceIconInput = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieceIconInputManager.prototype, "defaultIcons", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultIcons;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._defaultIcons = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PieceIconInputManager.prototype.isDefaultIcons = /**
     * @return {?}
     */
    function () {
        return this.pieceIconInput === undefined || this.pieceIconInput === null;
    };
    /**
     * @param {?} piece
     * @return {?}
     */
    PieceIconInputManager.prototype.getPieceIcon = /**
     * @param {?} piece
     * @return {?}
     */
    function (piece) {
        /** @type {?} */
        var isWhite = (piece.color === Color.WHITE);
        switch (piece.constructor) {
            case King:
                return isWhite ? this.pieceIconInput.whiteKingUrl : this.pieceIconInput.blackKingUrl;
            case Queen:
                return isWhite ? this.pieceIconInput.whiteQueenUrl : this.pieceIconInput.blackQueenUrl;
            case Rook:
                return isWhite ? this.pieceIconInput.whiteRookUrl : this.pieceIconInput.blackRookUrl;
            case Bishop:
                return isWhite ? this.pieceIconInput.whiteBishopUrl : this.pieceIconInput.blackBishopUrl;
            case Knight:
                return isWhite ? this.pieceIconInput.whiteKnightUrl : this.pieceIconInput.blackKnightUrl;
            case Pawn:
                return isWhite ? this.pieceIconInput.whitePawnUrl : this.pieceIconInput.blackPawnUrl;
        }
    };
    /**
     * @return {?}
     */
    PieceIconInputManager.prototype.loadDefaultData = /**
     * @return {?}
     */
    function () {
        this.pieceIconInput = {
            blackBishopUrl: '',
            blackKingUrl: '',
            blackKnightUrl: '',
            blackQueenUrl: '',
            blackRookUrl: '',
            whiteBishopUrl: '',
            whiteKingUrl: '',
            whiteKnightUrl: '',
            whitePawnUrl: '',
            whiteQueenUrl: '',
            whiteRookUrl: '',
            blackPawnUrl: 'a'
        };
    };
    return PieceIconInputManager;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    PieceIconInputManager.prototype._defaultIcons;
    /**
     * @type {?}
     * @private
     */
    PieceIconInputManager.prototype._pieceIconInput;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-chess-board.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MoveChange() { }
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
        this.moveChange.emit(__assign({}, lastMove, { check: check,
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-chess-board.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxChessBoardModule = /** @class */ (function () {
    function NgxChessBoardModule() {
    }
    /**
     * @return {?}
     */
    NgxChessBoardModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxChessBoardModule,
            providers: [NgxChessBoardService],
        };
    };
    NgxChessBoardModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxChessBoardComponent, PiecePromotionModalComponent],
                    imports: [CommonModule, DragDropModule],
                    exports: [NgxChessBoardComponent],
                },] }
    ];
    return NgxChessBoardModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/inputs/piece-icon-input.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PieceIconInput() { }
if (false) {
    /** @type {?} */
    PieceIconInput.prototype.whiteKingUrl;
    /** @type {?} */
    PieceIconInput.prototype.whiteQueenUrl;
    /** @type {?} */
    PieceIconInput.prototype.whiteKnightUrl;
    /** @type {?} */
    PieceIconInput.prototype.whiteRookUrl;
    /** @type {?} */
    PieceIconInput.prototype.whitePawnUrl;
    /** @type {?} */
    PieceIconInput.prototype.whiteBishopUrl;
    /** @type {?} */
    PieceIconInput.prototype.blackKingUrl;
    /** @type {?} */
    PieceIconInput.prototype.blackQueenUrl;
    /** @type {?} */
    PieceIconInput.prototype.blackKnightUrl;
    /** @type {?} */
    PieceIconInput.prototype.blackRookUrl;
    /** @type {?} */
    PieceIconInput.prototype.blackPawnUrl;
    /** @type {?} */
    PieceIconInput.prototype.blackBishopUrl;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-chess-board-view.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NgxChessBoardView() { }
if (false) {
    /**
     * @return {?}
     */
    NgxChessBoardView.prototype.reset = function () { };
    /**
     * @return {?}
     */
    NgxChessBoardView.prototype.reverse = function () { };
    /**
     * @return {?}
     */
    NgxChessBoardView.prototype.undo = function () { };
    /**
     * @return {?}
     */
    NgxChessBoardView.prototype.getMoveHistory = function () { };
    /**
     * @param {?} fen
     * @return {?}
     */
    NgxChessBoardView.prototype.setFEN = function (fen) { };
    /**
     * @param {?} coords
     * @return {?}
     */
    NgxChessBoardView.prototype.move = function (coords) { };
    /**
     * @return {?}
     */
    NgxChessBoardView.prototype.getFEN = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-chess-board.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HistoryMove, NgxChessBoardComponent, NgxChessBoardModule, NgxChessBoardService, PiecePromotionModalComponent };
//# sourceMappingURL=ngx-chess-board.js.map
