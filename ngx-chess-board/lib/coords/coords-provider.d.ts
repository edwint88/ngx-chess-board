export declare class CoordsProvider {
    private defaultXCoords;
    private reversedXCoords;
    private defaultYCoords;
    private reversedYCoords;
    private currentXCoords;
    private currentYCoords;
    readonly xCoords: string[];
    readonly yCoords: number[];
    reverse(): void;
    reset(): void;
    private init;
}
