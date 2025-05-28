import type { BaseEntity } from './common';

export interface WaterEntry extends BaseEntity {
    date: string;      // Format: YYYY-MM-DD
    amount: number;    // Quantité en ml
    userId: string;    // ID de l'utilisateur
} 