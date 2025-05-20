import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function Results() {
  const user = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchData = async () => {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        setData(userDoc.data());
      }
      setLoading(false);
    };
    fetchData();
  }, [user]);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Chargement...</div>;
  if (!data) return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Aucune donnée trouvée.</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center">
        <div className="space-y-4 w-full">
          <div className="flex justify-between text-lg">
            <span className="text-gray-300">Bodyfat actuel %</span>
            <span className="font-bold text-red-400">{data.currentBodyfat}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="text-gray-300">Bodyfat objectif %</span>
            <span className="font-bold text-blue-400">{data.goalBodyfat}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="text-gray-300">Calories max/jour</span>
            <span className="font-bold text-green-400">{data.caloricGoal}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="text-gray-300">Protéines/jour (g)</span>
            <span className="font-bold text-purple-400">{data.proteinGoal}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="text-gray-300">Glucides/jour (g)</span>
            <span className="font-bold text-yellow-400">{data.carbGoal}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="text-gray-300">Lipides/jour (g)</span>
            <span className="font-bold text-pink-400">{data.fatGoal}</span>
          </div>
        </div>
        <div className="mt-8 w-full flex flex-col items-center">
          <button
            className="w-40 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors text-lg shadow flex items-center justify-center"
            onClick={() => navigate('/')}
          >
            I'm In.
          </button>
        </div>
        <div className="mt-4 text-xs text-red-400 text-center">
          <span>Note : Le % de masse grasse est une approximation basée sur vos données et peut ne pas être 100% précis.</span>
        </div>
      </div>
    </div>
  );
} 