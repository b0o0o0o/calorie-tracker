import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import type { Recipe, RecipeFormData } from '../types/Recipe';

const RECIPES_COLLECTION = 'recipes';

export const recipeService = {
  async createRecipe(recipeData: RecipeFormData): Promise<string> {
    const now = new Date();
    const docRef = await addDoc(collection(db, RECIPES_COLLECTION), {
      ...recipeData,
      createdAt: now,
      updatedAt: now,
    });
    return docRef.id;
  },

  async getRecipe(id: string): Promise<Recipe | null> {
    const docRef = doc(db, RECIPES_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
      } as Recipe;
    }
    return null;
  },

  async getAllRecipes(): Promise<Recipe[]> {
    const querySnapshot = await getDocs(collection(db, RECIPES_COLLECTION));
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
      } as Recipe;
    });
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