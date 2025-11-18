export const fetchData = (fn: (data: string) => void): void => {
    // Simulate an asynchronous data fetch with a callback
    setTimeout(() => {
        const data = 'Fetched Data';
        fn(data);
    }, 1000);
};

export const fetchDataPromise = (isError = false): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError) {
        reject(new Error("error fetching data"));
      } else {
        resolve("sample data");
      }
    }, 1000);
  });
};

