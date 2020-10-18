import { Piece } from '../../models/pieces/piece';
import { PieceIconInput } from './piece-icon-input';
export declare class PieceIconInputManager {
    private _defaultIcons;
    private _pieceIconInput;
    pieceIconInput: PieceIconInput;
    defaultIcons: boolean;
    isDefaultIcons(): boolean;
    getPieceIcon(piece: Piece): string;
    loadDefaultData(): void;
}
