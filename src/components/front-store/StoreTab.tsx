'use client'
import Store from "@/components/store/Store";
import { useStores } from "@/hooks/data/useStores";
import ContentLayout from "../ContentLayout";

export default function StoreTab() {
  
  const { all } = useStores();

  return (
    <ContentLayout>

        { all.map(store => <Store key={store.id} {...store} />) } 
        
    </ContentLayout>
  );
}
