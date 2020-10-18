import { BehaviorSubject } from 'rxjs';
import { HistoryMove } from './history-move';
export declare class HistoryMoveProvider {
    historyMovesSubject$: BehaviorSubject<HistoryMove[]>;
    historyMoves: HistoryMove[];
    addMove(historyMove: HistoryMove): void;
    pop(): HistoryMove;
    getAll(): HistoryMove[];
    clear(): void;
    getLastMove(): HistoryMove;
    getLastMoveIndex(): number;
}
