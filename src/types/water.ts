export interface WaterEntry {
    date: string;      // Format: YYYY-MM-DD
    amount: number;    // Quantité en ml
    userId: string;    // ID de l'utilisateur
    createdAt: Date;   // Date de création de l'entrée
    updatedAt: Date;   // Date de dernière modification
} 