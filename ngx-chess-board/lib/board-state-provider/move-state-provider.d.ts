import { BehaviorSubject } from 'rxjs';
import { BoardState } from './board-state';
export declare class MoveStateProvider {
    statesSubject$: BehaviorSubject<BoardState[]>;
    states: BoardState[];
    addMove(state: BoardState): void;
    getStates(): BoardState[];
    pop(): BoardState;
    isEmpty(): boolean;
    clear(): void;
    getLastState(): BoardState;
    getLastStateIndex(): number;
}
