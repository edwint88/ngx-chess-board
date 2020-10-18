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
export class PieceIconInputManager {
    constructor() {
        this._defaultIcons = false;
    }
    /**
     * @return {?}
     */
    get pieceIconInput() {
        return this._pieceIconInput;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pieceIconInput(value) {
        this._pieceIconInput = value;
    }
    /**
     * @return {?}
     */
    get defaultIcons() {
        return this._defaultIcons;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set defaultIcons(value) {
        this._defaultIcons = value;
    }
    /**
     * @return {?}
     */
    isDefaultIcons() {
        return this.pieceIconInput === undefined || this.pieceIconInput === null;
    }
    /**
     * @param {?} piece
     * @return {?}
     */
    getPieceIcon(piece) {
        /** @type {?} */
        let isWhite = (piece.color === Color.WHITE);
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
    }
    /**
     * @return {?}
     */
    loadDefaultData() {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllY2UtaWNvbi1pbnB1dC1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoZXNzLWJvYXJkLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2lucHV0cy9waWVjZS1pY29uLWlucHV0LW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWhELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHaEQsTUFBTSxPQUFPLHFCQUFxQjtJQUFsQztRQUVZLGtCQUFhLEdBQVksS0FBSyxDQUFDO0lBMkQzQyxDQUFDOzs7O0lBeERHLElBQUksY0FBYztRQUNkLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELElBQUksY0FBYyxDQUFDLEtBQXFCO1FBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFHRCxJQUFJLFlBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFlBQVksQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQztJQUM3RSxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFZOztZQUNqQixPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDM0MsUUFBUSxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQ3ZCLEtBQUssSUFBSTtnQkFDTCxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO1lBQ3pGLEtBQUssS0FBSztnQkFDTixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO1lBQzNGLEtBQUssSUFBSTtnQkFDTCxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO1lBQ3pGLEtBQUssTUFBTTtnQkFDUCxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO1lBQzdGLEtBQUssTUFBTTtnQkFDUCxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO1lBQzdGLEtBQUssSUFBSTtnQkFDTCxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO1NBQzVGO0lBQ0wsQ0FBQzs7OztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsY0FBYyxHQUFHO1lBQ2xCLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFlBQVksRUFBRSxHQUFHO1NBQ3BCLENBQUE7SUFDTCxDQUFDO0NBRUo7Ozs7OztJQTNERyw4Q0FBdUM7Ozs7O0lBQ3ZDLGdEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJpc2hvcCB9IGZyb20gJy4uLy4uL21vZGVscy9waWVjZXMvYmlzaG9wJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi8uLi9tb2RlbHMvcGllY2VzL2NvbG9yJztcclxuaW1wb3J0IHsgS2luZyB9IGZyb20gJy4uLy4uL21vZGVscy9waWVjZXMva2luZyc7XHJcbmltcG9ydCB7IEtuaWdodCB9IGZyb20gJy4uLy4uL21vZGVscy9waWVjZXMva25pZ2h0JztcclxuaW1wb3J0IHsgUGF3biB9IGZyb20gJy4uLy4uL21vZGVscy9waWVjZXMvcGF3bic7XHJcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BpZWNlcy9waWVjZSc7XHJcbmltcG9ydCB7IFF1ZWVuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BpZWNlcy9xdWVlbic7XHJcbmltcG9ydCB7IFJvb2sgfSBmcm9tICcuLi8uLi9tb2RlbHMvcGllY2VzL3Jvb2snO1xyXG5pbXBvcnQgeyBQaWVjZUljb25JbnB1dCB9IGZyb20gJy4vcGllY2UtaWNvbi1pbnB1dCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2VJY29uSW5wdXRNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIF9kZWZhdWx0SWNvbnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3BpZWNlSWNvbklucHV0OiBQaWVjZUljb25JbnB1dDtcclxuXHJcbiAgICBnZXQgcGllY2VJY29uSW5wdXQoKTogUGllY2VJY29uSW5wdXQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9waWVjZUljb25JbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcGllY2VJY29uSW5wdXQodmFsdWU6IFBpZWNlSWNvbklucHV0KSB7XHJcbiAgICAgICAgdGhpcy5fcGllY2VJY29uSW5wdXQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0IGRlZmF1bHRJY29ucygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdEljb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBkZWZhdWx0SWNvbnModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9kZWZhdWx0SWNvbnMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpc0RlZmF1bHRJY29ucygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWVjZUljb25JbnB1dCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMucGllY2VJY29uSW5wdXQgPT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGllY2VJY29uKHBpZWNlOiBQaWVjZSk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGlzV2hpdGUgPSAocGllY2UuY29sb3IgPT09IENvbG9yLldISVRFKTtcclxuICAgICAgICBzd2l0Y2ggKHBpZWNlLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgS2luZzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBpc1doaXRlID8gdGhpcy5waWVjZUljb25JbnB1dC53aGl0ZUtpbmdVcmwgOiB0aGlzLnBpZWNlSWNvbklucHV0LmJsYWNrS2luZ1VybDtcclxuICAgICAgICAgICAgY2FzZSBRdWVlbjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBpc1doaXRlID8gdGhpcy5waWVjZUljb25JbnB1dC53aGl0ZVF1ZWVuVXJsIDogdGhpcy5waWVjZUljb25JbnB1dC5ibGFja1F1ZWVuVXJsO1xyXG4gICAgICAgICAgICBjYXNlIFJvb2s6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNXaGl0ZSA/IHRoaXMucGllY2VJY29uSW5wdXQud2hpdGVSb29rVXJsIDogdGhpcy5waWVjZUljb25JbnB1dC5ibGFja1Jvb2tVcmw7XHJcbiAgICAgICAgICAgIGNhc2UgQmlzaG9wOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzV2hpdGUgPyB0aGlzLnBpZWNlSWNvbklucHV0LndoaXRlQmlzaG9wVXJsIDogdGhpcy5waWVjZUljb25JbnB1dC5ibGFja0Jpc2hvcFVybDtcclxuICAgICAgICAgICAgY2FzZSBLbmlnaHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNXaGl0ZSA/IHRoaXMucGllY2VJY29uSW5wdXQud2hpdGVLbmlnaHRVcmwgOiB0aGlzLnBpZWNlSWNvbklucHV0LmJsYWNrS25pZ2h0VXJsO1xyXG4gICAgICAgICAgICBjYXNlIFBhd246XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNXaGl0ZSA/IHRoaXMucGllY2VJY29uSW5wdXQud2hpdGVQYXduVXJsIDogdGhpcy5waWVjZUljb25JbnB1dC5ibGFja1Bhd25Vcmw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWREZWZhdWx0RGF0YSgpe1xyXG4gICAgICAgIHRoaXMucGllY2VJY29uSW5wdXQgPSB7XHJcbiAgICAgICAgICAgIGJsYWNrQmlzaG9wVXJsOiAnJyxcclxuICAgICAgICAgICAgYmxhY2tLaW5nVXJsOiAnJyxcclxuICAgICAgICAgICAgYmxhY2tLbmlnaHRVcmw6ICcnLFxyXG4gICAgICAgICAgICBibGFja1F1ZWVuVXJsOiAnJyxcclxuICAgICAgICAgICAgYmxhY2tSb29rVXJsOiAnJyxcclxuICAgICAgICAgICAgd2hpdGVCaXNob3BVcmw6ICcnLFxyXG4gICAgICAgICAgICB3aGl0ZUtpbmdVcmw6ICcnLFxyXG4gICAgICAgICAgICB3aGl0ZUtuaWdodFVybDogJycsXHJcbiAgICAgICAgICAgIHdoaXRlUGF3blVybDogJycsXHJcbiAgICAgICAgICAgIHdoaXRlUXVlZW5Vcmw6ICcnLFxyXG4gICAgICAgICAgICB3aGl0ZVJvb2tVcmw6ICcnLFxyXG4gICAgICAgICAgICBibGFja1Bhd25Vcmw6ICdhJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19