/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/inputs/piece-icon-input-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Bishop } from '../../models/pieces/bishop';
import { Color } from '../../models/pieces/color';
import { King } from '../../models/pieces/king';
import { Knight } from '../../models/pieces/knight';
import { Pawn } from '../../models/pieces/pawn';
import { Queen } from '../../models/pieces/queen';
import { Rook } from '../../models/pieces/rook';
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
export { PieceIconInputManager };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllY2UtaWNvbi1pbnB1dC1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoZXNzLWJvYXJkLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2lucHV0cy9waWVjZS1pY29uLWlucHV0LW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWhELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHaEQ7SUFBQTtRQUVZLGtCQUFhLEdBQVksS0FBSyxDQUFDO0lBMkQzQyxDQUFDO0lBeERHLHNCQUFJLGlEQUFjOzs7O1FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hDLENBQUM7Ozs7O1FBRUQsVUFBbUIsS0FBcUI7WUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQzs7O09BSkE7SUFPRCxzQkFBSSwrQ0FBWTs7OztRQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDOzs7OztRQUVELFVBQWlCLEtBQWM7WUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQzs7O09BSkE7Ozs7SUFNRCw4Q0FBYzs7O0lBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDO0lBQzdFLENBQUM7Ozs7O0lBRUQsNENBQVk7Ozs7SUFBWixVQUFhLEtBQVk7O1lBQ2pCLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMzQyxRQUFRLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDdkIsS0FBSyxJQUFJO2dCQUNMLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7WUFDekYsS0FBSyxLQUFLO2dCQUNOLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7WUFDM0YsS0FBSyxJQUFJO2dCQUNMLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7WUFDekYsS0FBSyxNQUFNO2dCQUNQLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7WUFDN0YsS0FBSyxNQUFNO2dCQUNQLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7WUFDN0YsS0FBSyxJQUFJO2dCQUNMLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7U0FDNUY7SUFDTCxDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNsQixjQUFjLEVBQUUsRUFBRTtZQUNsQixZQUFZLEVBQUUsRUFBRTtZQUNoQixjQUFjLEVBQUUsRUFBRTtZQUNsQixhQUFhLEVBQUUsRUFBRTtZQUNqQixZQUFZLEVBQUUsRUFBRTtZQUNoQixjQUFjLEVBQUUsRUFBRTtZQUNsQixZQUFZLEVBQUUsRUFBRTtZQUNoQixjQUFjLEVBQUUsRUFBRTtZQUNsQixZQUFZLEVBQUUsRUFBRTtZQUNoQixhQUFhLEVBQUUsRUFBRTtZQUNqQixZQUFZLEVBQUUsRUFBRTtZQUNoQixZQUFZLEVBQUUsR0FBRztTQUNwQixDQUFBO0lBQ0wsQ0FBQztJQUVMLDRCQUFDO0FBQUQsQ0FBQyxBQTdERCxJQTZEQzs7Ozs7OztJQTNERyw4Q0FBdUM7Ozs7O0lBQ3ZDLGdEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJpc2hvcCB9IGZyb20gJy4uLy4uL21vZGVscy9waWVjZXMvYmlzaG9wJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi8uLi9tb2RlbHMvcGllY2VzL2NvbG9yJztcclxuaW1wb3J0IHsgS2luZyB9IGZyb20gJy4uLy4uL21vZGVscy9waWVjZXMva2luZyc7XHJcbmltcG9ydCB7IEtuaWdodCB9IGZyb20gJy4uLy4uL21vZGVscy9waWVjZXMva25pZ2h0JztcclxuaW1wb3J0IHsgUGF3biB9IGZyb20gJy4uLy4uL21vZGVscy9waWVjZXMvcGF3bic7XHJcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BpZWNlcy9waWVjZSc7XHJcbmltcG9ydCB7IFF1ZWVuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BpZWNlcy9xdWVlbic7XHJcbmltcG9ydCB7IFJvb2sgfSBmcm9tICcuLi8uLi9tb2RlbHMvcGllY2VzL3Jvb2snO1xyXG5pbXBvcnQgeyBQaWVjZUljb25JbnB1dCB9IGZyb20gJy4vcGllY2UtaWNvbi1pbnB1dCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2VJY29uSW5wdXRNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIF9kZWZhdWx0SWNvbnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3BpZWNlSWNvbklucHV0OiBQaWVjZUljb25JbnB1dDtcclxuXHJcbiAgICBnZXQgcGllY2VJY29uSW5wdXQoKTogUGllY2VJY29uSW5wdXQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9waWVjZUljb25JbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcGllY2VJY29uSW5wdXQodmFsdWU6IFBpZWNlSWNvbklucHV0KSB7XHJcbiAgICAgICAgdGhpcy5fcGllY2VJY29uSW5wdXQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0IGRlZmF1bHRJY29ucygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdEljb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBkZWZhdWx0SWNvbnModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9kZWZhdWx0SWNvbnMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpc0RlZmF1bHRJY29ucygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWVjZUljb25JbnB1dCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMucGllY2VJY29uSW5wdXQgPT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGllY2VJY29uKHBpZWNlOiBQaWVjZSk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGlzV2hpdGUgPSAocGllY2UuY29sb3IgPT09IENvbG9yLldISVRFKTtcclxuICAgICAgICBzd2l0Y2ggKHBpZWNlLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgS2luZzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBpc1doaXRlID8gdGhpcy5waWVjZUljb25JbnB1dC53aGl0ZUtpbmdVcmwgOiB0aGlzLnBpZWNlSWNvbklucHV0LmJsYWNrS2luZ1VybDtcclxuICAgICAgICAgICAgY2FzZSBRdWVlbjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBpc1doaXRlID8gdGhpcy5waWVjZUljb25JbnB1dC53aGl0ZVF1ZWVuVXJsIDogdGhpcy5waWVjZUljb25JbnB1dC5ibGFja1F1ZWVuVXJsO1xyXG4gICAgICAgICAgICBjYXNlIFJvb2s6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNXaGl0ZSA/IHRoaXMucGllY2VJY29uSW5wdXQud2hpdGVSb29rVXJsIDogdGhpcy5waWVjZUljb25JbnB1dC5ibGFja1Jvb2tVcmw7XHJcbiAgICAgICAgICAgIGNhc2UgQmlzaG9wOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzV2hpdGUgPyB0aGlzLnBpZWNlSWNvbklucHV0LndoaXRlQmlzaG9wVXJsIDogdGhpcy5waWVjZUljb25JbnB1dC5ibGFja0Jpc2hvcFVybDtcclxuICAgICAgICAgICAgY2FzZSBLbmlnaHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNXaGl0ZSA/IHRoaXMucGllY2VJY29uSW5wdXQud2hpdGVLbmlnaHRVcmwgOiB0aGlzLnBpZWNlSWNvbklucHV0LmJsYWNrS25pZ2h0VXJsO1xyXG4gICAgICAgICAgICBjYXNlIFBhd246XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNXaGl0ZSA/IHRoaXMucGllY2VJY29uSW5wdXQud2hpdGVQYXduVXJsIDogdGhpcy5waWVjZUljb25JbnB1dC5ibGFja1Bhd25Vcmw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWREZWZhdWx0RGF0YSgpe1xyXG4gICAgICAgIHRoaXMucGllY2VJY29uSW5wdXQgPSB7XHJcbiAgICAgICAgICAgIGJsYWNrQmlzaG9wVXJsOiAnJyxcclxuICAgICAgICAgICAgYmxhY2tLaW5nVXJsOiAnJyxcclxuICAgICAgICAgICAgYmxhY2tLbmlnaHRVcmw6ICcnLFxyXG4gICAgICAgICAgICBibGFja1F1ZWVuVXJsOiAnJyxcclxuICAgICAgICAgICAgYmxhY2tSb29rVXJsOiAnJyxcclxuICAgICAgICAgICAgd2hpdGVCaXNob3BVcmw6ICcnLFxyXG4gICAgICAgICAgICB3aGl0ZUtpbmdVcmw6ICcnLFxyXG4gICAgICAgICAgICB3aGl0ZUtuaWdodFVybDogJycsXHJcbiAgICAgICAgICAgIHdoaXRlUGF3blVybDogJycsXHJcbiAgICAgICAgICAgIHdoaXRlUXVlZW5Vcmw6ICcnLFxyXG4gICAgICAgICAgICB3aGl0ZVJvb2tVcmw6ICcnLFxyXG4gICAgICAgICAgICBibGFja1Bhd25Vcmw6ICdhJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19