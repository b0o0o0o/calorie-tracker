import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import type { Recipe, RecipeFormData } from '../types/Recipe';

const RECIPES_COLLECTION = 'recipes';

export const recipeService = {
  async createRecipe(recipeData: RecipeFormData): Promise<string> {
    const docRef = await addDoc(collection(db, RECIPES_COLLECTION), {
      ...recipeData,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return docRef.id;
  },

  async getRecipe(id: string): Promise<Recipe | null> {
    const docRef = doc(db, RECIPES_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Recipe;
    }
    return null;
  },

  async getAllRecipes(): Promise<Recipe[]> {
    const querySnapshot = await getDocs(collection(db, RECIPES_COLLECTION));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Recipe[];
  },

  async updateRecipe(id: string, recipeData: Partial<RecipeFormData>): Promise<void> {
    const docRef = doc(db, RECIPES_COLLECTION, id);
    await updateDoc(docRef, {
      ...recipeData,
      updatedAt: new Date(),
    });
  },

  async deleteRecipe(id: string): Promise<void> {
    const docRef = doc(db, RECIPES_COLLECTION, id);
    await deleteDoc(docRef);
  }
}; 