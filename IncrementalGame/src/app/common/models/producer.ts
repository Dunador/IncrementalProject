export interface Producer {
    name: string;
    baseValue: number;
    baseCost: number;
    costGrowth: number;
    currentQuantity: number;
    nextCost: number;
}
