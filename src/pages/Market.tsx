import React from 'react';
import { useLoadMarketQuery } from 'src/app/services/market';
import splinterlands from 'splinterlands-js';

export function Market() {
  const { data: marketData, isLoading } = useLoadMarketQuery();
  return (
    <div>
      <h2>Market</h2>
      {isLoading && <div>Loading</div>}
      {!isLoading && marketData && (
        <div>
          <div>Market data loaded</div>
          {marketData.map((marketItem) => {
            const cardDetail = splinterlands.get_card_details(marketItem.card_detail_id);
            return (
              <div
                style={{
                  padding: '10px',
                }}
                key={`${marketItem.card_detail_id}-${marketItem.edition}-${marketItem.level}-${marketItem.gold}`}
              >
                <div>Card Detail ID: {marketItem.card_detail_id}</div>
                <div>Card Name: {cardDetail.name}</div>
                <div>Low price: {marketItem.low_price}</div>
                <div>Edition: {marketItem.edition}</div>
                <div>Level: {marketItem.level}</div>
                {marketItem.gold && <div>Gold</div>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
