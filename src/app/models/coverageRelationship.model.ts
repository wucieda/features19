import { FinancialInstrument } from "./financialInstrument.model";
export interface CoverageRelationship {
    id: string;
    evaluationDate: Date;
    state: 'Abierta' | 'Cerrada';
    type: 'FVH' | 'CFH' | 'FX CFH' | 'FX INT CFH' | 'FX INT FVH';
    approach: 'Microcobertura' | 'Macrocobertura';
    objective: string;
    riskCovered: 'Tipo de interés' | 'Tipo de cambio' | 'Ambos';

    hedgedItem: FinancialInstrument;
    hedgingInstrument: FinancialInstrument;

    analysisMethod: 'DollarOffset' | 'Regresion' | 'Varianza';
    frequency: 'Diaria' | 'Semanal' | 'Quincenal' | 'Mensual';
    comparisonMethod: 'Punto a punto' | 'Acumulado';
    comparisonInstrument: 'Subyacente' | 'IDRH';
    thresholdMin: number;
    thresholdMax: number;

    observationsCount?: number;
    complianceCount?: number;
}
