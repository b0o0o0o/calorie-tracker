import React from 'react';
import Input from '../common/Input';

interface RecipeBasicInfoProps {
  name: string;
  preparationTime: number;
  servings: number;
  onNameChange: (value: string) => void;
  onPreparationTimeChange: (value: number) => void;
  onServingsChange: (value: number) => void;
}

export const RecipeBasicInfo: React.FC<RecipeBasicInfoProps> = ({
  name,
  preparationTime,
  servings,
  onNameChange,
  onPreparationTimeChange,
  onServingsChange,
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={onNameChange}
          label="Nom de la recette"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            id="preparationTime"
            type="number"
            value={preparationTime}
            onChange={value => onPreparationTimeChange(Number(value))}
            min={0}
            label="Temps préparation (min)"
          />
        </div>
        <div>
          <Input
            id="servings"
            type="number"
            value={servings}
            onChange={value => onServingsChange(Number(value))}
            min={1}
            label="Nombre de personnes"
          />
        </div>
      </div>
    </div>
  );
}; 