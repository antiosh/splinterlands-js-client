import React from 'react';
import useSharedLoginMutation from 'src/utils/useSharedLoginMutation';
import { useGetCollectionQuery } from 'src/app/services/collection';

export function Private() {
  const [, player] = useSharedLoginMutation();
  const quest = player?.data?.quest;
  const { data: collection, isLoading } = useGetCollectionQuery();
  return (
    <div>
      <h2>Private</h2>
      <div>
        Your quest: {quest.name} ({`${quest.completed_items} / ${quest.total_items}`})
      </div>
      <h2>Your collection</h2>
      {isLoading && <div>Loading</div>}
      {!isLoading && collection && (
        <div>
          {collection.map((collectionItem) => (
            <div
              style={{
                padding: '10px',
              }}
              key={collectionItem.uid}
            >
              <div>Card ID: {collectionItem.uid}</div>
              <div>Card: {collectionItem.details.name}</div>
              <div>Level: {collectionItem.level}</div>
              {collectionItem.gold && <div>Gold</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
