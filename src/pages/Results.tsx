import { useEffect, useState } from 'react';
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

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-white text-black">Chargement...</div>;
  if (!data) return <div className="min-h-screen flex items-center justify-center bg-white text-black">Aucune donnée trouvée.</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-xs flex flex-col items-center">
        <div className="space-y-7 w-full">
          <div className="flex flex-col items-start w-full">
            <span className="text-black text-base font-normal">Bodyfat actuel %</span>
            <span className="text-2xl font-semibold text-red-400 mt-1">{data.currentBodyfat}</span>
          </div>
          <div className="flex flex-col items-start w-full">
            <span className="text-black text-base font-normal">Calories max/jour</span>
            <span className="text-2xl font-semibold text-green-500 mt-1">{data.caloricGoal}</span>
          </div>
          <div className="flex flex-col items-start w-full">
            <span className="text-black text-base font-normal">Protéines/jour (g)</span>
            <span className="text-2xl font-semibold text-purple-400 mt-1">{data.proteinGoal}</span>
          </div>
          <div className="flex flex-col items-start w-full">
            <span className="text-black text-base font-normal">Glucides/jour (g)</span>
            <span className="text-2xl font-semibold text-blue-400 mt-1">{data.carbGoal}</span>
          </div>
          <div className="flex flex-col items-start w-full">
            <span className="text-black text-base font-normal">Lipides/jour (g)</span>
            <span className="text-2xl font-semibold text-pink-400 mt-1">{data.fatGoal}</span>
          </div>
        </div>
        <div className="flex items-center mt-8 text-red-400 text-sm font-normal">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.007v-.008H12v.008zm9.003-7.5a9 9 0 11-18.001 0 9 9 0 0118.001 0z" />
          </svg>
          <span>Note : Le % de masse grasse est une approximation basée sur vos données et peut ne pas être 100% précis.</span>
        </div>
        <button
          className="mt-8 w-56 py-3 bg-gray-900 text-white font-medium rounded-lg shadow hover:bg-gray-800 transition-colors text-base"
          onClick={() => navigate('/')}
        >
          I'm In.
        </button>
      </div>
    </div>
  );
} 