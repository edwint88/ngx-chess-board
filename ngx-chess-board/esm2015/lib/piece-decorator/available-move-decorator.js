/**
 * @fileoverview added by tsickle
 * Generated from: lib/piece-decorator/available-move-decorator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MoveUtils } from '../utils/move-utils';
import { PieceAbstractDecorator } from './piece-abstract-decorator';
export class AvailableMoveDecorator extends PieceAbstractDecorator {
    /**
     * @param {?} piece
     * @param {?} pointClicked
     * @param {?} color
     * @param {?} board
     */
    constructor(piece, pointClicked, color, board) {
        super(piece);
        this.pointClicked = pointClicked;
        this.color = color;
        this.board = board;
    }
    /**
     * @return {?}
     */
    getPossibleCaptures() {
        return this.piece
            .getPossibleCaptures()
            .filter((/**
         * @param {?} point
         * @return {?}
         */
        (point) => !MoveUtils.willMoveCauseCheck(this.color, this.pointClicked.row, this.pointClicked.col, point.row, point.col, this.board)));
    }
    /**
     * @return {?}
     */
    getPossibleMoves() {
        return this.piece
            .getPossibleMoves()
            .filter((/**
         * @param {?} point
         * @return {?}
         */
        (point) => !MoveUtils.willMoveCauseCheck(this.color, this.pointClicked.row, this.pointClicked.col, point.row, point.col, this.board)));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhaWxhYmxlLW1vdmUtZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoZXNzLWJvYXJkLyIsInNvdXJjZXMiOlsibGliL3BpZWNlLWRlY29yYXRvci9hdmFpbGFibGUtbW92ZS1kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFaEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFcEUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLHNCQUFzQjs7Ozs7OztJQUs5RCxZQUFZLEtBQW9CLEVBQUUsWUFBbUIsRUFBRSxLQUFZLEVBQUUsS0FBWTtRQUM3RSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSzthQUNaLG1CQUFtQixFQUFFO2FBQ3JCLE1BQU07Ozs7UUFDSCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ04sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQ3pCLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUNyQixLQUFLLENBQUMsR0FBRyxFQUNULEtBQUssQ0FBQyxHQUFHLEVBQ1QsSUFBSSxDQUFDLEtBQUssQ0FDYixFQUNSLENBQUM7SUFDVixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSzthQUNaLGdCQUFnQixFQUFFO2FBQ2xCLE1BQU07Ozs7UUFDSCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ04sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQ3pCLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUNyQixLQUFLLENBQUMsR0FBRyxFQUNULEtBQUssQ0FBQyxHQUFHLEVBQ1QsSUFBSSxDQUFDLEtBQUssQ0FDYixFQUNSLENBQUM7SUFDVixDQUFDO0NBQ0o7Ozs7OztJQTFDRyw4Q0FBNEI7Ozs7O0lBQzVCLHVDQUFxQjs7Ozs7SUFDckIsdUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuLi9tb2RlbHMvYm9hcmQnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4uL21vZGVscy9waWVjZXMvY29sb3InO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL21vZGVscy9waWVjZXMvcG9pbnQnO1xyXG5pbXBvcnQgeyBNb3ZlVXRpbHMgfSBmcm9tICcuLi91dGlscy9tb3ZlLXV0aWxzJztcclxuaW1wb3J0IHsgQWJzdHJhY3RQaWVjZSB9IGZyb20gJy4vYWJzdHJhY3QtcGllY2UnO1xyXG5pbXBvcnQgeyBQaWVjZUFic3RyYWN0RGVjb3JhdG9yIH0gZnJvbSAnLi9waWVjZS1hYnN0cmFjdC1kZWNvcmF0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF2YWlsYWJsZU1vdmVEZWNvcmF0b3IgZXh0ZW5kcyBQaWVjZUFic3RyYWN0RGVjb3JhdG9yIHtcclxuICAgIHByaXZhdGUgcG9pbnRDbGlja2VkOiBQb2ludDtcclxuICAgIHByaXZhdGUgY29sb3I6IENvbG9yO1xyXG4gICAgcHJpdmF0ZSBib2FyZDogQm9hcmQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGllY2U6IEFic3RyYWN0UGllY2UsIHBvaW50Q2xpY2tlZDogUG9pbnQsIGNvbG9yOiBDb2xvciwgYm9hcmQ6IEJvYXJkKSB7XHJcbiAgICAgICAgc3VwZXIocGllY2UpO1xyXG4gICAgICAgIHRoaXMucG9pbnRDbGlja2VkID0gcG9pbnRDbGlja2VkO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zc2libGVDYXB0dXJlcygpOiBQb2ludFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWVjZVxyXG4gICAgICAgICAgICAuZ2V0UG9zc2libGVDYXB0dXJlcygpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAocG9pbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgIU1vdmVVdGlscy53aWxsTW92ZUNhdXNlQ2hlY2soXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9pbnRDbGlja2VkLnJvdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludENsaWNrZWQuY29sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludC5yb3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50LmNvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3NzaWJsZU1vdmVzKCk6IFBvaW50W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpZWNlXHJcbiAgICAgICAgICAgIC5nZXRQb3NzaWJsZU1vdmVzKClcclxuICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChwb2ludCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAhTW92ZVV0aWxzLndpbGxNb3ZlQ2F1c2VDaGVjayhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludENsaWNrZWQucm93LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvaW50Q2xpY2tlZC5jb2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50LnJvdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQuY29sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==