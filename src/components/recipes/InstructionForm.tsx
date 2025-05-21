import React from 'react';

interface InstructionFormProps {
  instructions: string[];
  onChange: (instructions: string[]) => void;
}

export const InstructionForm: React.FC<InstructionFormProps> = ({ instructions, onChange }) => {
  const handleAdd = () => {
    onChange([...instructions, '']);
  };

  const handleRemove = (index: number) => {
    onChange(instructions.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, value: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    onChange(newInstructions);
  };

  return (
    <div className="space-y-4">
      {instructions.map((instruction, index) => (
        <div key={index} className="flex gap-2 items-start">
          <div className="flex-shrink-0 w-6 h-6 bg-[#4D9078] text-white rounded-full flex items-center justify-center text-sm font-medium">
            {index + 1}
          </div>
          <div className="flex-1">
            <textarea
              value={instruction}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Étape ${index + 1}`}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4D9078] focus:border-[#4D9078] outline-none transition-colors"
            />
          </div>
          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="p-2 text-[#B4436C] hover:bg-[#ffebeb] rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAdd}
        className="w-full px-4 py-2 bg-white border border-[#4D9078] text-[#4D9078] rounded-lg hover:bg-[#e7f2e5] transition-colors shadow-sm hover:shadow-md"
      >
        + Ajouter une étape
      </button>
    </div>
  );
}; 