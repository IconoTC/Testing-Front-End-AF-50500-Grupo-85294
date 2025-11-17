export const fetchData = (fn: (data: string) => void): void => {
// Simulate an asynchronous data fetch with a callback  
    setTimeout(() => {
        const data = "Fetched Data";
        fn(data);
    }, 1000)
};


fetchData((data) => {
    console.log(data);
});
