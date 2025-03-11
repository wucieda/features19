export interface FinancialInstrument {
    name: string;
    type: 'Bono Fijo' | 'Swap' | 'Futuro' | 'Forward' | string;
    nominal: number;
    fixedRate?: number;
    variableRate?: string; // ej. "Euribor 6M"
    startDate: Date;
    endDate: Date;
    couponFrequency: 'Anual' | 'Semestral' | 'Trimestral' | string;
    differentialPoints?: number;
    counterparty?: string;
  }
  