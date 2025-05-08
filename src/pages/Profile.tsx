import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

type GoalType = 'loss' | 'maintain' | 'gain';

export default function Profile() {
    const user = useAuth();
    const navigate = useNavigate();

    const [weight, setWeight]     = useState<number>(0);
    const [height, setHeight]     = useState<number>(0);
    const [age, setAge]           = useState<number>(0);
    const [sex, setSex]           = useState<'male' | 'female'>('male');
    const [activity, setActivity] = useState<number>(1.2);
    const [goal, setGoal]         = useState<GoalType>('maintain');
    const [error, setError]       = useState<string | null>(null);

    const calcTDEE = () => {
        const bmr = 10 * weight + 6.25 * height - 5 * age + (sex === 'male' ? 5 : -161);
        return Math.round(bmr * activity);
    };

    const calcCaloricGoal = (tdee: number) => {
        switch (goal) {
            case 'loss':     return tdee - 500;
            case 'gain':     return tdee + 350;  // ajustement changé ici
            default:         return tdee;
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!user) return;

        try {
            const tdee = calcTDEE();
            const caloricGoal = calcCaloricGoal(tdee);

            await setDoc(doc(db, 'users', user.uid), {
                weight,
                height,
                age,
                sex,
                activity,
                tdee,
                goal,
                caloricGoal,
                updatedAt: new Date(),
            });

            navigate('/', { replace: true });
        } catch (e: unknown) {
            console.error(e);
            setError('Une erreur est survenue, veuillez réessayer.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Complétez votre profil</h2>
                {error && <p className="mb-4 text-red-600">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Poids */}
                    <div>
                        <label htmlFor="weight" className="block mb-1 font-medium">Poids (kg)</label>
                        <input
                            id="weight"
                            type="text"
                            value={weight || ''}
                            onChange={e => {
                                const v = parseFloat(e.target.value.replace(',', '.'));
                                setWeight(isNaN(v) ? 0 : v);
                            }}
                            placeholder="Ex. 70"
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>

                    {/* Taille */}
                    <div>
                        <label htmlFor="height" className="block mb-1 font-medium">Taille (cm)</label>
                        <input
                            id="height"
                            type="text"
                            value={height || ''}
                            onChange={e => {
                                const v = parseFloat(e.target.value.replace(',', '.'));
                                setHeight(isNaN(v) ? 0 : v);
                            }}
                            placeholder="Ex. 175"
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>

                    {/* Âge */}
                    <div>
                        <label htmlFor="age" className="block mb-1 font-medium">Âge (ans)</label>
                        <input
                            id="age"
                            type="text"
                            value={age || ''}
                            onChange={e => {
                                const v = parseInt(e.target.value, 10);
                                setAge(isNaN(v) ? 0 : v);
                            }}
                            placeholder="Ex. 30"
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>

                    {/* Sexe */}
                    <div>
                        <label htmlFor="sex" className="block mb-1 font-medium">Sexe</label>
                        <select
                            id="sex"
                            value={sex}
                            onChange={e => setSex(e.target.value as 'male' | 'female')}
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        >
                            <option value="male">Homme</option>
                            <option value="female">Femme</option>
                        </select>
                    </div>

                    {/* Activité */}
                    <div>
                        <label htmlFor="activity" className="block mb-1 font-medium">Niveau d’activité</label>
                        <select
                            id="activity"
                            value={activity}
                            onChange={e => setActivity(parseFloat(e.target.value))}
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        >
                            <option value={1.2}>Sédentaire</option>
                            <option value={1.375}>Légèrement actif</option>
                            <option value={1.55}>Modérément actif</option>
                            <option value={1.725}>Très actif</option>
                            <option value={1.9}>Extrêmement actif</option>
                        </select>
                    </div>

                    {/* Objectif */}
                    <div>
                        <label htmlFor="goal" className="block mb-1 font-medium">Objectif</label>
                        <select
                            id="goal"
                            value={goal}
                            onChange={e => setGoal(e.target.value as GoalType)}
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        >
                            <option value="loss">Perte de poids</option>
                            <option value="maintain">Maintien</option>
                            <option value="gain">Prise de masse</option>
                        </select>
                    </div>

                    {/* Bouton */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
                    >
                        Enregistrer
                    </button>
                </form>
            </div>
        </div>
    );
}