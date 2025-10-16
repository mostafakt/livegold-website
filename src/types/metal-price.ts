export interface IMetalPrice {
  data: {
    XAG: {
      USD: {
        price: {
          "925": number;
          "958": number;
          "999": number;
          once: number;
        };
        trend: string;
      };
    };
    XAU: {
      USD: {
        price: {
          "14": number;
          "18": number;
          "21": number;
          "22": number;
          "24": number;
          once: number;
        };
        trend: string;
      };
    };
    XPD: {
      USD: {
        price: {
          "950": number;
          "999": number;
          once: number;
        };
        trend: string;
      };
    };
    XPT: {
      USD: {
        price: {
          "900": number;
          "950": number;
          "999": number;
          once: number;
        };
        trend: string;
      };
    };
    ALU: {
      USD: {
        price: {
          "999": number;
          once: number;
        };
        trend: string;
      };
    };
    NI: {
      USD: {
        price: {
          "999": number;
          once: number;
        };
        trend: string;
      };
    };
    XCU: {
      USD: {
        price: {
          "999": number;
          once: number;
        };
        trend: string;
      };
    };
    ZNC: {
      USD: {
        price: {
          once: number;
        };
        trend: string;
      };
    };
  };
}
export interface IMetal {
  data: {
    symbol: string;
    name: string;
  }[];
}
export interface ICurrency {
  data: {
    symbol: string;
    name: string;
  }[];
}
export interface IMetalPriceHistory {
  data: {
    XAU: {
      USD:IHistoryContent;
    };
  };
}
export interface IHistoryContent
{
        history: {
          price: {
            "14": number;
            "18": number;
            "21": number;
            "22": number;
            "24": number;
            once: number;
          };
          timestamp: string;
        }[];
        currentPrice: number;
        change: number;
        changePercent: number;
        highestPrice: number;
        lowestPrice: number;
      };