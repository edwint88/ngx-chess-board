import { Arrow } from './arrow';
import { Circle } from './circle';
export declare class DrawProvider {
    private arrowsSubject$;
    private circlesSubject$;
    arrows$: import("rxjs").Observable<Arrow[]>;
    circles$: import("rxjs").Observable<Circle[]>;
    private circles;
    private arrows;
    addCircle(circle: Circle): void;
    reomveCircle(removeCircle: Circle): void;
    addArrow(arrow: Arrow): void;
    removeArrow(removeArrow: Arrow): void;
    containsCircle(checkCircle: Circle): boolean;
    containsArrow(checkArrow: Arrow): boolean;
    clear(): void;
}
